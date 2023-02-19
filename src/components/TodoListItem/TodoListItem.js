import './TodoListItem.css'

const TodoListItem = (props) => {
  const {
    taskName,
    priorityChecked,
    completedChecked,
    onDelete,
    onToggleProp,
  } = props

  let clazz = 'list-group-item d-flex justify-content-between'

  if (completedChecked) {
    clazz += ' completedChecked'
  } else if (priorityChecked) {
    clazz += ' priorityChecked'
  }

  return (
    <li className={clazz}>
      <span className="list-group-item-label">{taskName}</span>
      <div className="d-flex justify-content-between">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            defaultChecked={priorityChecked}
            onChange={onToggleProp}
            value={priorityChecked}
            data-toggle="priorityChecked"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Priority
          </label>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            defaultChecked={completedChecked}
            onChange={onToggleProp}
            value={completedChecked}
            data-toggle="completedChecked"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Completed
          </label>
        </div>

        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  )
}

export default TodoListItem
