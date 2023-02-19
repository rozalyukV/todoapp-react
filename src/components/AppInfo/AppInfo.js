import './AppInfo.css'

const AppInfo = (props) => {
  const {
    totalNumberOfTasks,
    totalNumberOfPriorityTasks,
    totalNumberOfCompletedTasks,
  } = props

  return (
    <div className="AppInfo">
      <h1>Todo Application</h1>
      <h2>Total number of tasks: {totalNumberOfTasks} </h2>
      <h2>Total number of priority tasks: {totalNumberOfPriorityTasks}</h2>
      <h2>Total number of completed tasks: {totalNumberOfCompletedTasks} </h2>
    </div>
  )
}

export default AppInfo
