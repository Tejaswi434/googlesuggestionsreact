import {Component} from 'react'

import Suggestionitem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {search: ''}

  searchingdata = event => {
    this.setState({search: event.target.value})
  }

  maindispaly = suggestion => {
    this.setState({search: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {search} = this.state
    const filtereddata = suggestionsList.filter(every =>
      every.suggestion.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="img_1"
          className="google"
        />
        <div className="smallbox">
          <div className="search-display">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="img_2"
              className="search-icon"
            />
            <input
              type="search"
              onChange={this.searchingdata}
              value={search}
              placeholder="google search"
            />
          </div>
          <ul>
            {filtereddata.map(each => (
              <Suggestionitem
                key={each.id}
                item={each}
                maindispaly={this.maindispaly}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
