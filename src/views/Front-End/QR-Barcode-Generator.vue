<template>
  <!-- Link to return to projects -->
  <div class="max-w-3xl pt-8 mx-6 sm:mx-auto">
    <router-link
      to="/Projects"
      class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
      <svg
        class="h-4 w-4 transition-transform ltr:rotate-0 rtl:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
      </svg>
      <span>{{ $t("projectsPage.backToProjects") }}</span>
    </router-link>
  </div>

  <div class="min-h-screen text-gray-900 dark:text-gray-100 px-4 py-8 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto space-y-10 mt-7">
      <h1 class="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
        {{ i18n.global.t("qrBarcode.title") }}
      </h1>

      <div class="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 sm:p-12 space-y-10">
        <!-- QR CODE SECTION -->
        <section class="bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-lg space-y-4">
          <h2 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
            {{ i18n.global.t("qrBarcode.qrTitle") }}
          </h2>

          <div class="flex flex-col sm:flex-row gap-3">
            <input
              v-model="qrText"
              type="text"
              :dir="textDir"
              :maxlength="MAX_QR_LENGTH"
              :placeholder="i18n.global.t('qrBarcode.qrPlaceholder')"
              @keyup.enter="generateQR"
              class="flex-1 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"/>
            <button
              @click="generateQR"
              class="shrink-0 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition">
              {{ i18n.global.t("qrBarcode.generate") }}
            </button>
            <button
              @click="resetQR"
              class="shrink-0 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 active:bg-gray-400 dark:active:bg-gray-800 text-gray-800 dark:text-gray-100 font-medium px-5 py-2.5 rounded-lg transition">
              {{ i18n.global.t("qrBarcode.reset") }}
            </button>
          </div>

          <div
            class="flex items-center justify-between flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{{ qrText.length }} / {{ MAX_QR_LENGTH }}</span>
            <div class="flex items-center gap-2">
              <label class="text-gray-500 dark:text-gray-400">{{
                i18n.global.t("qrBarcode.size")
              }}</label>
              <select
                v-model="qrSize"
                :style="selectArrowStyle"
                class="appearance-none bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg pl-2 pr-6 rtl:pr-2 rtl:pl-6 py-1 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="small">{{ i18n.global.t("qrBarcode.sizeSmall") }}</option>
                <option value="medium">{{ i18n.global.t("qrBarcode.sizeMedium") }}</option>
                <option value="large">{{ i18n.global.t("qrBarcode.sizeLarge") }}</option>
              </select>
            </div>
          </div>

          <p v-if="qrError" class="text-red-400 text-sm" dir="auto">
            {{ qrError }}
          </p>

          <!-- Result box: always visible, empty until generated -->
          <div
            class="w-full min-h-[180px] sm:min-h-[220px] bg-gray-50 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl flex items-center justify-center p-4">
            <canvas
              v-show="qrGenerated"
              ref="qrCanvasRef"
              class="aspect-square max-w-full"
              :class="qrCanvasSizeClass">
            </canvas>
            <span v-if="!qrGenerated" class="text-gray-400 dark:text-gray-600 text-sm">
              {{ i18n.global.t("qrBarcode.emptyResult") }}
            </span>
          </div>

          <div v-if="qrGenerated" class="flex flex-wrap gap-3 max-[375px]:justify-center">
            <button
              @click="downloadQR('png')"
              class="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 text-sm font-medium px-4 py-2 rounded-lg transition">
              {{ i18n.global.t("qrBarcode.downloadPng") }}
            </button>
            <button
              @click="downloadQR('svg')"
              class="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 text-sm font-medium px-4 py-2 rounded-lg transition">
              {{ i18n.global.t("qrBarcode.downloadSvg") }}
            </button>
          </div>
        </section>

        <!-- BARCODE SECTION -->
        <section class="bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-lg space-y-4">
          <h2 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
            {{ i18n.global.t("qrBarcode.barcodeTitle") }}
          </h2>

          <div class="flex flex-col sm:flex-row gap-3">
            <input
              v-model="barcodeText"
              type="text"
              :dir="textDir"
              :maxlength="MAX_BARCODE_LENGTH"
              :placeholder="i18n.global.t('qrBarcode.barcodePlaceholder')"
              @keyup.enter="!hasUnsupportedBarcodeChars && generateBarcode()"
              class="flex-1 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"/>
            <button
              @click="generateBarcode"
              :disabled="hasUnsupportedBarcodeChars"
              :class="
                hasUnsupportedBarcodeChars
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white'
              "
              class="shrink-0 font-medium px-5 py-2.5 rounded-lg transition">
              {{ i18n.global.t("qrBarcode.generate") }}
            </button>
            <button
              @click="resetBarcode"
              class="shrink-0 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 active:bg-gray-400 dark:active:bg-gray-800 text-gray-800 dark:text-gray-100 font-medium px-5 py-2.5 rounded-lg transition">
              {{ i18n.global.t("qrBarcode.reset") }}
            </button>
          </div>

          <p
            v-if="hasUnsupportedBarcodeChars"
            class="text-amber-400 text-sm"
            dir="auto">
            {{ i18n.global.t("qrBarcode.errorPersianUnsupported") }}
          </p>

          <div
            class="flex items-center justify-between flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{{ barcodeText.length }} / {{ MAX_BARCODE_LENGTH }}</span>
            <div class="flex items-center gap-2">
              <label class="text-gray-500 dark:text-gray-400">{{
                i18n.global.t("qrBarcode.size")
              }}</label>
              <select
                v-model="barcodeSize"
                :style="selectArrowStyle"
                class="appearance-none bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg pl-2 pr-6 rtl:pr-2 rtl:pl-6 py-1 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="small">
                  {{ i18n.global.t("qrBarcode.sizeSmall") }}
                </option>
                <option value="medium">
                  {{ i18n.global.t("qrBarcode.sizeMedium") }}
                </option>
                <option value="large">
                  {{ i18n.global.t("qrBarcode.sizeLarge") }}
                </option>
              </select>
            </div>
          </div>

          <p v-if="barcodeError" class="text-red-400 text-sm" dir="auto">
            {{ barcodeError }}
          </p>

          <div
            class="w-full min-h-[140px] sm:min-h-[160px] bg-gray-50 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl flex items-center justify-center p-4 overflow-x-auto">
            <canvas
              v-show="barcodeGenerated"
              ref="barcodeCanvasRef"
              class="max-w-full h-auto">
            </canvas>
            <span v-if="!barcodeGenerated" class="text-gray-400 dark:text-gray-600 text-sm">
              {{ i18n.global.t("qrBarcode.emptyResult") }}
            </span>
          </div>

          <div v-if="barcodeGenerated" class="flex flex-wrap gap-3 max-[375px]:justify-center">
            <button
              @click="downloadBarcode('png')"
              class="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 text-sm font-medium px-4 py-2 rounded-lg transition">
              {{ i18n.global.t("qrBarcode.downloadPng") }}
            </button>
            <button
              @click="downloadBarcode('svg')"
              class="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 text-sm font-medium px-4 py-2 rounded-lg transition">
              {{ i18n.global.t("qrBarcode.downloadSvg") }}
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import QRCode from "qrcode";
import JsBarcode from "jsbarcode";
import i18n from "../../i18n.js";

const isDark = () => document.documentElement.classList.contains("dark");
const qrColors = () =>
  isDark()
    ? { dark: "#111827", light: "#f3f4f6" }
    : { dark: "#1f2937", light: "#ffffff" };
const barcodeColors = () =>
  isDark()
    ? { background: "#f3f4f6", lineColor: "#111827" }
    : { background: "#ffffff", lineColor: "#1f2937" };

const MAX_QR_LENGTH = 500;
const MAX_BARCODE_LENGTH = 80;

const qrText = ref("");
const qrGenerated = ref(false);
const qrError = ref("");
const qrCanvasRef = ref(null);
const qrSize = ref("medium");
const appliedQrSize = ref("medium");

const barcodeText = ref("");
const barcodeGenerated = ref(false);
const barcodeError = ref("");
const barcodeCanvasRef = ref(null);
const barcodeSize = ref("medium");

const textDir = computed(() => (i18n.global.locale === "fa" ? "rtl" : "ltr"));

const PERSIAN_ARABIC_RANGE =
  /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
const hasUnsupportedBarcodeChars = computed(() =>
  PERSIAN_ARABIC_RANGE.test(barcodeText.value)
);

const selectArrowStyle = computed(() => {
  const side = i18n.global.locale === "fa" ? "left" : "right";
  return {
    backgroundImage:
      "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%239ca3af%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `${side} 0.6rem center`,
    backgroundSize: "1em",
  };
});

const QR_SIZE_MAP = { small: 160, medium: 240, large: 320 };
const QR_CANVAS_SIZE_CLASSES = {
  small: "w-[120px] max-[425px]:w-[100px] max-[320px]:w-[80px]",
  medium: "w-[190px] max-[425px]:w-[150px] max-[320px]:w-[110px]",
  large: "w-[260px] max-[425px]:w-[190px] max-[320px]:w-[130px]",
};
const qrCanvasSizeClass = computed(
  () => QR_CANVAS_SIZE_CLASSES[appliedQrSize.value]
);
const BARCODE_HEIGHT_MAP = { small: 60, medium: 90, large: 130 };
const BARCODE_WIDTH_MAP = { small: 1.5, medium: 2, large: 2.8 };

function sanitizeInput(value) {
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim();
}

async function generateQR() {
  qrError.value = "";
  const value = sanitizeInput(qrText.value);

  if (!value) {
    qrError.value = i18n.global.t("qrBarcode.errorEmpty");
    qrGenerated.value = false;
    return;
  }
  if (value.length > MAX_QR_LENGTH) {
    qrError.value = i18n.global.t("qrBarcode.errorTooLong");
    qrGenerated.value = false;
    return;
  }

  try {
    await QRCode.toCanvas(qrCanvasRef.value, value, {
      width: QR_SIZE_MAP[qrSize.value],
      margin: 1,
      color: qrColors(),
    });
    if (qrCanvasRef.value) {
      qrCanvasRef.value.style.removeProperty("width");
      qrCanvasRef.value.style.removeProperty("height");
    }
    appliedQrSize.value = qrSize.value;
    qrGenerated.value = true;
  } catch (err) {
    qrError.value = i18n.global.t("qrBarcode.errorGeneric");
    qrGenerated.value = false;
  }
}

function resetQR() {
  qrText.value = "";
  qrError.value = "";
  qrGenerated.value = false;
  const canvas = qrCanvasRef.value;
  if (canvas) {
    const ctx = canvas.getContext("2d");
    ctx && ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function generateBarcode() {
  barcodeError.value = "";

  if (hasUnsupportedBarcodeChars.value) {
    barcodeError.value = i18n.global.t("qrBarcode.errorPersianUnsupported");
    barcodeGenerated.value = false;
    return;
  }

  const value = sanitizeInput(barcodeText.value);

  if (!value) {
    barcodeError.value = i18n.global.t("qrBarcode.errorEmpty");
    barcodeGenerated.value = false;
    return;
  }
  if (value.length > MAX_BARCODE_LENGTH) {
    barcodeError.value = i18n.global.t("qrBarcode.errorTooLong");
    barcodeGenerated.value = false;
    return;
  }

  try {
    JsBarcode(barcodeCanvasRef.value, value, {
      format: "CODE128",
      width: BARCODE_WIDTH_MAP[barcodeSize.value],
      height: BARCODE_HEIGHT_MAP[barcodeSize.value],
      ...barcodeColors(),
      displayValue: true,
      fontSize: 16,
      margin: 8,
    });
    barcodeGenerated.value = true;
  } catch (err) {
    barcodeError.value = i18n.global.t("qrBarcode.errorBarcodeUnsupported");
    barcodeGenerated.value = false;
  }
}

function resetBarcode() {
  barcodeText.value = "";
  barcodeError.value = "";
  barcodeGenerated.value = false;
  const canvas = barcodeCanvasRef.value;
  if (canvas) {
    const ctx = canvas.getContext("2d");
    ctx && ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function downloadCanvasAsPng(canvas, filename) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function downloadSvgString(svgString, filename) {
  const blob = new Blob([svgString], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = filename;
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
}

async function downloadQR(type) {
  const value = sanitizeInput(qrText.value);
  if (!value || !qrGenerated.value) return;

  if (type === "png") {
    downloadCanvasAsPng(qrCanvasRef.value, "obk-qr-code.png");
  } else {
    try {
      const svgString = await QRCode.toString(value, {
        type: "svg",
        width: QR_SIZE_MAP[qrSize.value],
        margin: 1,
        color: qrColors(),
      });
      downloadSvgString(svgString, "obk-qr-code.svg");
    } catch (err) {
      qrError.value = i18n.global.t("qrBarcode.errorGeneric");
    }
  }
}

function downloadBarcode(type) {
  const value = sanitizeInput(barcodeText.value);
  if (!value || !barcodeGenerated.value) return;

  if (type === "png") {
    downloadCanvasAsPng(barcodeCanvasRef.value, "obk-barcode.png");
  } else {
    try {
      const svgNamespace = "http://www.w3.org/2000/svg";
      const svgEl = document.createElementNS(svgNamespace, "svg");
      JsBarcode(svgEl, value, {
        format: "CODE128",
        width: BARCODE_WIDTH_MAP[barcodeSize.value],
        height: BARCODE_HEIGHT_MAP[barcodeSize.value],
        ...barcodeColors(),
        displayValue: true,
        fontSize: 16,
        margin: 8,
      });
      const svgString = new XMLSerializer().serializeToString(svgEl);
      downloadSvgString(svgString, "obk-barcode.svg");
    } catch (err) {
      barcodeError.value = i18n.global.t("qrBarcode.errorBarcodeUnsupported");
    }
  }
}
</script>
