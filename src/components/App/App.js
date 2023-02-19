import { Component } from 'react'

import AppFilter from '../AppFilter/AppFilter'
import AppInfo from '../AppInfo/AppInfo'
import SearchPanel from '../SearchPanel/SearchPanel'
import TodoList from '../TodoList/TodoList'
import TodoAddForm from '../TodoAddForm/TodoAddForm'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      term: '',
      filter: 'all',
    }
    this.maxId = 1
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }))
    this.maxId -= 1
  }

  addItem = (item) => {
    const newItem = {
      taskName: item.taskName,
      priorityChecked: item.priorityChecked,
      completedChecked: false,
      id: this.maxId++,
    }

    this.setState(({ data }) => {
      const newArr = [...data, newItem]
      return {
        data: newArr,
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      }),
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => item.taskName.indexOf(term) > -1)
  }

  onUpdateSearch = (term) => {
    this.setState({ term })
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'priority':
        return items.filter((item) => item.priorityChecked)
      case 'completed':
        return items.filter((item) => item.completedChecked)
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { data, term, filter } = this.state

    const totalNumberOfTasks = data.length
    const totalNumberOfPriorityTasks = data.filter(
      (item) => item.priorityChecked
    ).length
    const totalNumberOfCompletedTasks = data.filter(
      (item) => item.completedChecked
    ).length
    const visibleData = this.filterPost(this.searchEmp(data, term), filter)

    return (
      <div className="App">
        <AppInfo
          totalNumberOfTasks={totalNumberOfTasks}
          totalNumberOfPriorityTasks={totalNumberOfPriorityTasks}
          totalNumberOfCompletedTasks={totalNumberOfCompletedTasks}
        />

        <div className="SearchPanel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <TodoList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <TodoAddForm onAdd={this.addItem} />
      </div>
    )
  }
}

export default App
