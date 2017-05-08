/*

Task Model

*/

class Task {
  constructor(user,content,completed){
    this.user = user; //owner of task
    this.content = content; //content of task
    this.completed = completed; //true if task is completed else false
  }
}

//Export Task
module.exports = Task;
