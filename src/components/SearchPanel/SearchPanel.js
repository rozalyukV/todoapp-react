import { Component } from 'react'

import './SearchPanel.css'

class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value
    this.setState({ term })
    this.props.onUpdateSearch(term)
  }

  render() {
    return (
      <input
        className="form-control"
        type="text"
        placeholder="Find task"
        value={this.state.term}
        onChange={this.onUpdateSearch}
      />
    )
  }
}

export default SearchPanel
