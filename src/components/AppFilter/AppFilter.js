import './AppFilter.css'

const AppFilter = (props) => {
  const buttonsData = [
    { name: 'all', label: 'All tasks' },
    { name: 'priority', label: 'Priority tasks' },
    { name: 'completed', label: 'Completed tasks' },
  ]

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name
    const clazz = active ? 'btn-light' : 'btn-outline-light'

    return (
      <button
        className={`btn ${clazz}`}
        key={name}
        type="button"
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    )
  })

  return <div className="btn-group">{buttons}</div>
}

export default AppFilter
