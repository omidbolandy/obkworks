<template>
  <footer class="bg-white dark:bg-gray-900 rounded-2xl mx-4">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between mx-5 mb-8">
        <div class="mb-12 md:mb-0 md:max-w-xs">

          <!-- obk Icon -->
          <router-link class="flex items-center self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            to="/">
            <img src="/src/assets/obk-Logo-2.webp" class="w-10 h-10 mx-2 sm:h-16 sm:w-16 rounded-full"
              alt="obkProject Logo" />
            {{ $t("appName") }}
          </router-link>
          <p class="text-justify leading-relaxed mt-3 max-sm:text-xs text-sm text-gray-500 dark:text-gray-400">
            {{ $t("footer.tagline") }}
          </p>
        </div>

        <!-- quickAccess -->
        <div class="flex flex-col items-center text-center md:items-start md:text-start md:ms-20">
          <h2 class="mb-4 md:mb-6 text-md font-bold text-gray-900 uppercase dark:text-white">
            {{ $t("footer.quickAccess") }}
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-3 md:mb-4">
              <router-link class="hover:underline" to="/">{{ $t("nav.home") }}</router-link>
            </li>
            <li class="mb-3 md:mb-4">
              <router-link class="hover:underline" to="/Projects">{{ $t("nav.projects") }}</router-link>
            </li>
            <li class="mb-3 md:mb-4">
              <router-link class="hover:underline" to="/Articles">{{ $t("nav.articles") }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />

      <!-- copyright & contact -->
      <div class="sm:flex sm:items-center sm:justify-between sm:mx-3 mx-3">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {{ $t("footer.copyright") }}
        </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0">
          <a href="mailto:omidbolandy@gmail.com" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.4l-8 6-8-6V6h16Zm-16 12V8.9l7.4 5.55a1 1 0 0 0 1.2 0L20 8.9V18H4Z" />
            </svg>
            <span class="sr-only">{{ $t("home.contact.gmail") }}</span>
          </a>
          <a href="https://www.github.com/omidbolandy" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd" />
            </svg>
            <span class="sr-only">{{ $t("home.contact.github") }}</span>
          </a>
          <a
            href="https://www.linkedin.com/in/omid-bolandy"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.333 1H3.667C2.193 1 1 2.193 1 3.667v12.666C1 17.807 2.193 19 3.667 19h12.666c1.474 0 2.667-1.193 2.667-2.667V3.667C19 2.193 17.807 1 16.333 1ZM6.002 16.002H3.335V7.335h2.667v8.667ZM4.668 6.135a1.534 1.534 0 1 1 0-3.068 1.534 1.534 0 0 1 0 3.068ZM16.668 16.002h-2.667v-4.175c0-1.002-.018-2.29-1.396-2.29-1.397 0-1.611 1.092-1.611 2.218v4.247H8.327V7.335h2.56v1.184h.036c.356-.675 1.226-1.387 2.525-1.387 2.702 0 3.2 1.778 3.2 4.092v4.778Z"
                clip-rule="evenodd"/>
            </svg>
            <span class="sr-only">{{ $t("home.contact.linkedin") }}</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
