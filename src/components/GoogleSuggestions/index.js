// Write your code here
import {Component} from 'react'

import suggestionitem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {search: ''}

  searchingdata = event => {
    this.setState({search: event.target.value})
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
            <input type="search" onChange={this.searchingdata} />
          </div>
          <div>
            {filtereddata.map(each => (
              <suggestionitem key={each.id} item={each} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
