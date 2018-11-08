import React, { Component } from "react";
import Task from "./Task";

export default class Bucket extends Component {
  state = { tasks: [], showForm: false, newTask: "" };

  handleChange = e => {
    this.setState({ newTask: e.target.value });
  };

  render() {
    const {
      name,
      moveTask,
      addNewTask,
      createNewTask,
      showTaskForm,
      tasks,
      index,
      length
    } = this.props;

    let { showForm, newTask } = this.state;

    return (
      <div className="ui card">
        <div className="ui content">
          <h3>{name}</h3>
          <div className="ui divider" />
          <div class="ui list">
            {tasks.map((task, i) => {
              return (
                <Task
                  task={task}
                  moveTask={moveTask}
                  key={i}
                  index={index}
                  lastIndex={length - 1}
                />
              );
            })}
          </div>
          {showTaskForm !== name ? (
            <button
              onClick={() => createNewTask(name)}
              className="ui secondary button"
            >
              New Task
            </button>
          ) : null}
          {showTaskForm === name ? (
            <form
              className="ui form"
              onSubmit={e => {
                addNewTask(e, newTask, name);
                this.setState({ newTask: "" });
              }}
            >
              <div className="ui input">
                <input
                  value={newTask}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Add New Task"
                />
              </div>
            </form>
          ) : null}
        </div>
      </div>
    );
  }
}