import { Component } from 'react'

import './TodoAddForm.css'

class TodoAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskName: '',
      priorityChecked: false,
    }
  }

  onTaskNameChange = (e) => {
    this.setState(({ taskName }) => ({
      taskName: e.target.value,
    }))
  }

  onPriorityChange = () => {
    this.setState(({ priorityChecked }) => ({
      priorityChecked: !priorityChecked,
    }))
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.taskName.length < 3) return
    this.props.onAdd(this.state)
    this.setState({
      taskName: '',
      priorityChecked: false,
    })
  }

  render() {
    const { taskName, priorityChecked } = this.state

    return (
      <div className="todo-add-form">
        <h3>Add new task</h3>
        <form className="add-form" onSubmit={this.onSubmit}>
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Add new task"
              onChange={this.onTaskNameChange}
              value={taskName}
            />
            <button type="submit" className="btn btn-outline-light">
              ADD
            </button>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onChange={this.onPriorityChange}
              value={priorityChecked}
              checked={priorityChecked}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Priority
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default TodoAddForm
