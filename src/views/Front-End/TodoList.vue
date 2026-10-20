<template>
  <!-- Top Bar Box (  Link to return to projects & Copy link & Share Icons)-->
    <div class="flex max-w-2xl mt-16 mx-auto items-center justify-between rounded-2xl border border-gray-200 bg-white/90 p-3 shadow-md backdrop-blur dark:border-gray-700 dark:bg-gray-900/90 sm:p-4">
      <router-link
        to="/Projects"
        class="group inline-flex items-center gap-2 rounded-xl border border-gray-200/80 dark:border-gray-700/80 bg-gray-50/80 dark:bg-gray-800/80 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800/60 transition-all duration-200 shadow-sm hover:shadow cursor-pointer">
        <svg
          class="h-4 w-4 stroke-current transition-transform duration-200 group-hover:-translate-x-1 ltr:rotate-0 rtl:rotate-180 rtl:group-hover:translate-x-1 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span class="truncate">{{ $t("projectsPage.backToProjects") }}</span>
      </router-link>
      <div class="flex items-center gap-1 sm:gap-2 shrink-0">
        <button
          @click="copyLink"
          type="button"
          class="relative inline-flex items-center justify-center p-1.5 max-[425px]:p-1.5 min-[426px]:p-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/80 transition-all cursor-pointer"
          :title="$t('projectsPage.copyLink')">
          <svg class="w-4 h-4 min-[426px]:w-5 min-[426px]:h-5 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          <transition name="fade">
            <span 
              v-if="copied" 
              class="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 text-white text-[10px] px-2 py-1 shadow-lg dark:bg-gray-100 dark:text-gray-900 font-sans z-20">
              {{ $t("projectsPage.copied") }} ✨
            </span>
          </transition>
        </button>
        <button
          @click="shareProject"
          type="button"
          class="inline-flex items-center justify-center p-1.5 max-[425px]:p-1.5 min-[426px]:p-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/80 transition-all cursor-pointer"
          :title="$t('projectsPage.share')">
          <svg class="w-4 h-4 min-[426px]:w-5 min-[426px]:h-5 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>
      </div>
    </div>
    
  
  <div
    class="mx-auto  mt-10 sm:w-full max-w-2xl mb-10 px-4 py-2 rounded-2xl text-gray-800 border border-gray-300 bg-gray-200 dark:border-transparent dark:bg-gray-900 dark:text-white sm:px-6 lg:px-8">
    <!-- title -->
    <div
      class="flex justify-center font-bold text-2xl max-[375px]:text-xl sm:text-3xl md:text-4xl my-6 sm:my-10 dark:text-white text-gray-800 px-2 text-center">
      <h1>{{ $t("todo.title") }}</h1>
    </div>
    
    <!-- description & tip & features -->
    <div class="my-6 sm:my-10 dark:text-white text-gray-800">
      <h2 class="text-xl max-[375px]:text-lg sm:text-2xl md:text-3xl font-medium mb-4 text-sky-500">
        {{ $t("todo.description") }}
      </h2>
      <p class="text-base max-[375px]:text-sm sm:text-lg md:text-xl mb-6 sm:mb-9">
        {{ $t("todo.tip") }}
      </p>
      <p class="text-sky-500 text-lg max-[375px]:text-base sm:text-xl md:text-2xl font-medium">
        {{ $t("todo.features") }}
      </p>
      <ol
        class="list-decimal list-inside text-base max-[375px]:text-sm sm:text-lg md:text-xl dark:text-white text-gray-800">
        <li>{{ $t("todo.addTask") }}</li>
        <li>{{ $t("todo.deleteTask") }}</li>
        <li>{{ $t("todo.checkComplete") }}</li>
        <li>{{ $t("todo.toggleView") }}</li>
      </ol>
    </div>
    <!-- todo-list -->
    <div class="my-14 dark:text-white text-gray-800">
      <div
        class="flex flex-wrap justify-between items-center gap-3 mb-6 sm:mb-8 dark:text-white text-gray-800">
        <p class="text-black text-left dark:text-white text-sm max-[375px]:text-xs sm:text-base">
          {{ $t("todo.tasksLeft", { count: incompletedTodos.length }) }}
        </p>
        <button
          @click="showAll = !showAll"
          class="self-center border border-gray-400 rounded text-white font-bold bg-gray-400 p-2 px-3 sm:px-4 text-sm max-[375px]:text-xs sm:text-base dark:text-white hover:bg-gray-500 transition duration-200">
          {{ showAll ? $t("todo.hideCompleted") : $t("todo.showAll") }}
        </button>
      </div>
      <div class="flex flex-col gap-1 my-2">
        <div class="flex gap-2">
          <input
            v-model="newTodo"
            :maxlength="maxTodoLength"
            :disabled="todos.length >= maxTodos"
            class="p-2 text-sm max-[375px]:text-xs w-full border border-gray-300 rounded text-black placeholder:text-sm max-[375px]:placeholder:text-xs focus:border focus:border-white dark:text-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            :placeholder="$t('todo.addNewTask')"
            @keyup.enter="addTodo"/>
          <button
            @click="addTodo"
            class="shrink-0  border border-sky-500 rounded text-white font-bold bg-sky-500 px-4 text-sm max-[375px]:text-xs sm:text-base hover:bg-sky-600 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="!newTodo.trim() || todos.length >= maxTodos">
            {{ $t("todo.add") }}
          </button>
        </div>
        <span v-if="todos.length >= maxTodos" class="text-xs text-red-500">
          {{ $t("todo.limitReached", { max: maxTodos }) }}
        </span>
        <span
          v-else
          class="text-xs self-end"
          :class="
            newTodo.length >= maxTodoLength ? 'text-red-500' : 'text-gray-400' " dir="ltr">
          {{ newTodo.length }}/{{ maxTodoLength }}
        </span>
      </div>
      <div
        v-for="todo in filteredTodos"
        :key="todo.id"
        class="flex justify-between border-2 border-gray-400 bg-gray-800 p-3 sm:p-4 text-white dark:text-white rounded my-2 items-center gap-2 sm:gap-4">
        <input
          type="checkbox"
          v-model="todo.completed"
          class="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded border-gray-400 text-sky-500 focus:ring-sky-500 focus:ring-2 cursor-pointer bg-gray-700 accent-sky-500"/>
        <p
          class="text-base max-[375px]:text-sm sm:text-xl dark:text-white flex-1 min-w-0 break-words">
          <span :class="{ completed: todo.completed }">{{ todo.task }}</span>
        </p>
        <button
          @click="removeTodo(todo)"
          class="font-bold text-white text-base max-[375px]:text-sm sm:text-lg hover:bg-black hover:rounded dark:text-white transition duration-200 p-1 px-2 shrink-0">
          X
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos") || "[]"),
      id: JSON.parse(localStorage.getItem("id") || 0),
      showAll: false,
      newTodo: "",
      maxTodoLength: 100,
      maxTodos: 50,
      copied: false,
      copyTimeout: null,
    };
  },
  computed: {
    filteredTodos() {
      return this.showAll ? this.todos : this.todos.filter((t) => !t.completed);
    },
    incompletedTodos() {
      return this.todos.filter((t) => !t.completed);
    },
  },
  watch: {
    todos: {
      handler(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
      },
      deep: true,
    },
    id: {
      handler(id) {
        localStorage.setItem("id", id);
      },
    },
  },
  methods: {
    async copyLink() {
      const url = window.location.href;

      if (!navigator?.clipboard?.writeText) {
        this.fallbackCopyText(url);
        return;
      }

      try {
        await navigator.clipboard.writeText(url);
        this.showCopiedToast();
      } catch (err) {
        this.fallbackCopyText(url);
      }
    },

    fallbackCopyText(text) {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        
        if (successful) {
          this.showCopiedToast();
        }
      } catch (err) {
        console.error("Fallback copy failed:", err);
      }
    },

    showCopiedToast() {
      this.copied = true;
      if (this.copyTimeout) clearTimeout(this.copyTimeout);
      
      this.copyTimeout = setTimeout(() => {
        this.copied = false;
      }, 2000);
    },

    async shareProject() {
      const currentUrl = window.location.href;

      if (!currentUrl.startsWith("http://") && !currentUrl.startsWith("https://")) {
        return;
      }

      const shareData = {
        title: document.title || "Portfolio Tool",
        text: "مشاهده این ابزار / پروژه در پورتفولیو",
        url: currentUrl,
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error("Share error:", err);
          }
        }
      } else {
        this.copyLink();
      }
    },

    addTodo() {
      const value = this.newTodo.trim();
      if (value === "") {
        return;
      }
      if (this.todos.length >= this.maxTodos) {
        return;
      }
      const safeValue = value.slice(0, this.maxTodoLength);
      this.todos.push({
        id: this.id++,
        task: safeValue,
        completed: false,
      });
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
      if (this.todos.length === 0) {
        this.id = 0;
        localStorage.setItem("id", 0);
      }
    },
  },
  unmounted() {
    if (this.copyTimeout) clearTimeout(this.copyTimeout);
  },
};
</script>

<style scoped>
.completed {
  position: relative;
  color: #ccc;
  display: inline-block;
}
.completed::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 60%;
  border-top: 1px solid #ccc;
}
</style>