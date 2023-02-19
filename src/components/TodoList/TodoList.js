import TodoListItem from '../TodoListItem/TodoListItem'

import './TodoList.css'

const TodoList = ({ data, onDelete, onToggleProp }) => {
  const tasks = data.map((item) => {
    const { id, ...itemProps } = item
    return (
      <TodoListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
        }
      />
    )
  })

  return <ul className="tasks-list list-group">{tasks}</ul>
}

export default TodoList
