const RootComponent = {
  data() {
    return {
      task: "",
      toDoList: [],
      inProgressList: [],
      doneList: [],
      activeList: "todo",
    };
  },

  methods: {
    updateTask(e) {
      this.task = e.target.value;
    },

    addTaskToList() {
      this.toDoList.push(this.task);
      this.task = "";
    },

    switchTaskToInProgress(e) {
      const index = e.target.dataset.index;
      this.inProgressList.push(this.toDoList[index]);
      this.toDoList.splice(index, 1);
    },

    switchTaskToDone(e) {
      const index = e.target.dataset.index;
      this.doneList.push(this.inProgressList[index]);
      this.inProgressList.splice(index, 1);
    },

    deleteTask(e) {
      const index = e.target.dataset.index;
      this.doneList.splice(index, 1);
    },
  },
};

Vue.createApp(RootComponent).mount("#root");
