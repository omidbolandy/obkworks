export class TroubleshootingEngine {
  constructor(initialState) {
    this.state = { ...initialState };
    this.logs = [];
    this.actionsTaken = [];
  }

  logAction(actionName, details) {
    this.logs.push({
      timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
      action: actionName,
      details: details
    });
  }

  executeCommand(commandStr) {
    const cmd = commandStr.trim().toLowerCase();
    this.logAction(`CMD: ${commandStr}`, 'Executed in terminal');

    if (cmd === 'ipconfig') {
      return this.handleIpconfig(false);
    } else if (cmd === 'ipconfig /all') {
      return this.handleIpconfig(true);
    } else if (cmd === 'ipconfig /flushdns') {
      return this.applyAction('FLUSH_DNS');
    } else if (cmd === 'ipconfig /renew') {
      return this.applyAction('RENEW_DHCP');
    } else if (cmd.startsWith('ping ')) {
      const target = cmd.replace('ping ', '').trim();
      return this.handlePing(target);
    } else if (cmd.startsWith('nslookup ')) {
      const domain = cmd.replace('nslookup ', '').trim();
      return this.handleNslookup(domain);
    } else if (cmd.startsWith('tracert ') || cmd.startsWith('traceroute ')) {
      const target = cmd.replace(/tracert |traceroute /, '').trim();
      return this.handleTracert(target);
    } else if (cmd === 'help') {
      return [
        'Supported commands:',
        '  ipconfig [/all | /flushdns | /renew]',
        '  ping <ip_or_domain>',
        '  nslookup <domain>',
        '  tracert <ip_or_domain>',
        '  cls / clear'
      ];
    } else {
      return [`'${commandStr}' is not recognized as an internal or external command.`];
    }
  }

  handleIpconfig(verbose = false) {
    if (!this.state.adapterEnabled) {
      return [
        'Windows IP Configuration',
        '',
        'Ethernet adapter Ethernet0:',
        '   Media State . . . . . . . . . . . : Media disconnected'
      ];
    }

    const lines = [
      'Windows IP Configuration',
      '',
      'Ethernet adapter Ethernet0:',
      `   Connection-specific DNS Suffix  . : localdomain`,
      `   IPv4 Address. . . . . . . . . . . : ${this.state.ipAddress}`,
      `   Subnet Mask . . . . . . . . . . . : ${this.state.subnetMask}`,
      `   Default Gateway . . . . . . . . . : ${this.state.gateway}`
    ];

    if (verbose) {
      lines.push(
        `   DHCP Enabled. . . . . . . . . . . : ${this.state.dhcpEnabled ? 'Yes' : 'No'}`,
        `   DNS Servers . . . . . . . . . . . : ${this.state.dnsPrimary}`,
        `                                       ${this.state.dnsSecondary}`
      );
    }

    return lines;
  }

  handlePing(target) {
    if (!this.state.adapterEnabled) {
      return ['PING: transmit failed. General failure.'];
    }

    if (target === '127.0.0.1' || target === this.state.ipAddress) {
      return [
        `Pinging ${target} with 32 bytes of data:`,
        `Reply from ${target}: bytes=32 time<1ms TTL=128`,
        `Reply from ${target}: bytes=32 time<1ms TTL=128`,
        'Ping statistics: Packets: Sent = 2, Received = 2, Lost = 0 (0% loss)'
      ];
    }

    if (target === this.state.gateway || target === '192.168.1.1') {
      if (this.state.gatewayReachable && this.state.gateway === '192.168.1.1') {
        return [
          `Pinging ${target} with 32 bytes of data:`,
          `Reply from ${target}: bytes=32 time=1ms TTL=64`,
          `Reply from ${target}: bytes=32 time=1ms TTL=64`,
          'Ping statistics: Packets: Sent = 2, Received = 2, Lost = 0 (0% loss)'
        ];
      } else {
        return [
          `Pinging ${target} with 32 bytes of data:`,
          'Request timed out.',
          'Request timed out.',
          'Ping statistics: Packets: Sent = 2, Received = 0, Lost = 2 (100% loss)'
        ];
      }
    }

    if (target === '8.8.8.8' || target === '1.1.1.1') {
      if (this.state.internetReachable && this.state.gatewayReachable) {
        return [
          `Pinging ${target} with 32 bytes of data:`,
          `Reply from ${target}: bytes=32 time=14ms TTL=56`,
          `Reply from ${target}: bytes=32 time=15ms TTL=56`,
          'Ping statistics: Packets: Sent = 2, Received = 2, Lost = 0 (0% loss)'
        ];
      } else {
        return [
          `Pinging ${target} with 32 bytes of data:`,
          'Request timed out.',
          'Ping statistics: Packets: Sent = 2, Received = 0, Lost = 2 (100% loss)'
        ];
      }
    }

    if (this.state.dnsResolutionWorking && this.state.internetReachable && this.state.gatewayReachable) {
      return [
        `Pinging ${target} [142.250.190.46] with 32 bytes of data:`,
        'Reply from 142.250.190.46: bytes=32 time=18ms TTL=115',
        'Reply from 142.250.190.46: bytes=32 time=17ms TTL=115',
        'Ping statistics: Packets: Sent = 2, Received = 2, Lost = 0 (0% loss)'
      ];
    } else {
      return [`Ping request could not find host ${target}. Please check the name and try again.`];
    }
  }

  handleNslookup(domain) {
    if (!this.state.adapterEnabled) {
      return ['DNS request timed out.', 'timeout was 2 seconds.'];
    }

    if (this.state.dnsResolutionWorking && this.state.internetReachable && this.state.gatewayReachable) {
      return [
        `Server:  UnKnown`,
        `Address:  ${this.state.dnsPrimary}`,
        '',
        `Non-authoritative answer:`,
        `Name:    ${domain}`,
        `Address: 142.250.190.46`
      ];
    } else {
      return [
        `Server:  UnKnown`,
        `Address:  ${this.state.dnsPrimary}`,
        '',
        `*** ${this.state.dnsPrimary} can't find ${domain}: Server failed`
      ];
    }
  }

  handleTracert(target) {
    if (!this.state.adapterEnabled || !this.state.gatewayReachable) {
      return [
        `Tracing route to ${target} over a maximum of 30 hops:`,
        '  1     *        *        *     Request timed out.',
        'Trace complete.'
      ];
    }

    if (this.state.internetReachable) {
      return [
        `Tracing route to ${target} over a maximum of 30 hops:`,
        '  1    <1 ms    <1 ms    <1 ms  192.168.1.1',
        '  2    10 ms     9 ms    11 ms  10.100.0.1',
        '  3    15 ms    14 ms    14 ms  142.250.190.46',
        'Trace complete.'
      ];
    }

    return [
      `Tracing route to ${target} over a maximum of 30 hops:`,
      '  1    <1 ms    <1 ms    <1 ms  192.168.1.1',
      '  2     *        *        *     Request timed out.',
      'Trace complete.'
    ];
  }

  applyAction(actionCode) {
    if (!this.actionsTaken.includes(actionCode)) {
      this.actionsTaken.push(actionCode);
    }

    let output = [];

    switch (actionCode) {
      case 'FLUSH_DNS':
        this.state.dnsCacheCorrupted = false;
        this.reevaluateState();
        this.logAction('Action', 'Flushed Windows DNS Resolver Cache');
        output = ['Windows IP Configuration', '', 'Successfully flushed the DNS Resolver Cache.'];
        break;

      case 'START_DHCP_SERVICE':
        this.state.dhcpServiceRunning = true;
        this.logAction('Action', 'Started DHCP Client Service');
        output = ['Service [DHCP Client] started successfully.'];
        break;

      case 'RENEW_DHCP':
        if (this.state.dhcpServiceRunning && this.state.adapterEnabled) {
          this.state.ipAddress = '192.168.1.105';
          this.state.subnetMask = '255.255.255.0';
          this.state.gateway = '192.168.1.1';
          this.state.dnsPrimary = '192.168.1.1';
          this.reevaluateState();
          this.logAction('Action', 'DHCP Lease Renewed successfully');
          output = [
            'Windows IP Configuration',
            '',
            'Ethernet adapter Ethernet0:',
            '   IPv4 Address. . . . . . . . . . . : 192.168.1.105',
            '   Subnet Mask . . . . . . . . . . . : 255.255.255.0',
            '   Default Gateway . . . . . . . . . : 192.168.1.1'
          ];
        } else {
          this.logAction('Action Failed', 'DHCP Renew failed (Service down or adapter disabled)');
          output = ['An error occurred while renewing interface Ethernet0 : The DHCP client has been stopped.'];
        }
        break;

      case 'FIX_GATEWAY':
        this.state.gateway = '192.168.1.1';
        this.reevaluateState();
        this.logAction('Action', 'Updated Default Gateway to 192.168.1.1');
        output = ['Default Gateway updated to 192.168.1.1'];
        break;

      case 'ENABLE_ADAPTER':
        this.state.adapterEnabled = true;
        if (this.state.ipAddress === '0.0.0.0') {
          this.state.ipAddress = '192.168.1.105';
          this.state.subnetMask = '255.255.255.0';
          this.state.gateway = '192.168.1.1';
          this.state.dnsPrimary = '192.168.1.1';
        }
        this.reevaluateState();
        this.logAction('Action', 'Enabled Network Adapter Ethernet0');
        output = ['Network Adapter Ethernet0 enabled successfully.'];
        break;

      default:
        output = ['Unknown Action'];
    }

    return output;
  }

  reevaluateState() {
    this.state.gatewayReachable = this.state.adapterEnabled && this.state.gateway === '192.168.1.1';

    this.state.internetReachable = this.state.gatewayReachable && this.state.ipAddress.startsWith('192.168.');

    this.state.dnsResolutionWorking =
      this.state.internetReachable && !this.state.dnsCacheCorrupted && this.state.adapterEnabled;
  }

  checkResolution(requiredActions) {
    const isSolved = requiredActions.every((action) => this.actionsTaken.includes(action));
    return {
      isSolved,
      state: this.state,
      actionsTaken: this.actionsTaken,
      logs: this.logs
    };
  }
}