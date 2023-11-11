// Write your code here

import './index.css'

const Suggestionitem = props => {
  const {item, maindispaly} = props
  const {suggestion} = item

  const display = () => {
    maindispaly(suggestion)
  }
  return (
    <li className="list">
      <div className="simple_element">
        <p>{suggestion}</p>

        <button type="button" alt="text" className="outer_but">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="ok"
            className="but_size"
            onClick={display}
          />
        </button>
      </div>
    </li>
  )
}

export default Suggestionitem
