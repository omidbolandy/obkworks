<template>
    <!-- Link to return to projects -->
    <div class="max-w-2xl pt-8 mx-6 sm:mx-auto">
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
    
  <!-- title -->
  <div
    class="flex justify-center font-bold text-2xl sm:text-3xl md:text-4xl my-6 sm:my-10 dark:text-white text-gray-800 px-2 text-center"
  >
    <h1>{{ $t("todo.description") }}</h1>
  </div>
  <div
    class="mx-auto w-[85%] sm:w-full max-w-2xl mb-10 px-4 py-2 rounded-2xl text-gray-800 dark:bg-gray-900 dark:text-white sm:px-6 lg:px-8"
  >
    <!-- description & tip & features -->
    <div class="my-6 sm:my-10 dark:text-white text-gray-800">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-medium mb-4 text-sky-500">
        {{ $t("todo.description") }}
      </h2>
      <p class="text-base sm:text-lg md:text-xl mb-6 sm:mb-9">
        {{ $t("todo.tip") }}
      </p>
      <p class="text-sky-500 text-lg sm:text-xl md:text-2xl font-medium">
        {{ $t("todo.features") }}
      </p>
      <ol
        class="list-decimal list-inside text-base sm:text-lg md:text-xl dark:text-white text-gray-800"
      >
        <li>{{ $t("todo.addTask") }}</li>
        <li>{{ $t("todo.deleteTask") }}</li>
        <li>{{ $t("todo.checkComplete") }}</li>
        <li>{{ $t("todo.toggleView") }}</li>
      </ol>
    </div>
    <!-- todo-list -->
    <div class="my-14 dark:text-white text-gray-800">
      <div
        class="flex flex-wrap justify-between items-center gap-3 mb-6 sm:mb-8 dark:text-white text-gray-800"
      >
        <p class="text-black text-left dark:text-white text-sm sm:text-base">
          {{ $t("todo.tasksLeft", { count: incompletedTodos.length }) }}
        </p>
        <button
          @click="showAll = !showAll"
          class="self-center border border-gray-400 rounded text-white font-bold bg-gray-400 p-2 px-3 sm:px-4 text-sm sm:text-base dark:text-white hover:bg-gray-500 transition duration-200"
        >
          {{ showAll ? $t("todo.hideCompleted") : $t("todo.showAll") }}
        </button>
      </div>
      <div class="flex flex-col gap-1 my-2">
        <div class="flex gap-2">
          <input
            v-model="newTodo"
            :maxlength="maxTodoLength"
            :disabled="todos.length >= maxTodos"
            autofocus
            class="p-2 text-sm w-full border border-gray-300 rounded text-black placeholder:text-sm focus:border focus:border-white dark:text-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            :placeholder="$t('todo.addNewTask')"
            @keyup.enter="addTodo"
          />
          <button
            @click="addTodo"
            class="shrink-0 border border-sky-500 rounded text-white font-bold bg-sky-500 px-4 text-sm sm:text-base hover:bg-sky-600 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="!newTodo.trim() || todos.length >= maxTodos"
          >
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
            newTodo.length >= maxTodoLength ? 'text-red-500' : 'text-gray-400'
          "
          dir="ltr"
        >
          {{ newTodo.length }}/{{ maxTodoLength }}
        </span>
      </div>
      <div
        v-for="todo in filteredTodos"
        :key="todo.id"
        class="flex justify-between border-2 border-gray-400 bg-gray-800 p-3 sm:p-4 text-white dark:text-white rounded my-2 items-center gap-2 sm:gap-4"
      >
        <input
          type="checkbox"
          v-model="todo.completed"
          class="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded border-gray-400 text-sky-500 focus:ring-sky-500 focus:ring-2 cursor-pointer bg-gray-700 accent-sky-500"
        />
        <p
          class="text-base sm:text-xl dark:text-white flex-1 min-w-0 break-words"
        >
          <span :class="{ completed: todo.completed }">{{ todo.task }}</span>
        </p>
        <button
          @click="removeTodo(todo)"
          class="font-bold text-white text-base sm:text-lg hover:bg-black hover:rounded dark:text-white transition duration-200 p-1 px-2 shrink-0"
        >
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