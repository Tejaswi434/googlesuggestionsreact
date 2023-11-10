// Write your code here

const suggestionitem = props => {
  const {everyitem} = props
  const {suggestion} = everyitem
  return (
    <li>
      <p>{suggestion}</p>

      <button type="button">
        <img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" />
      </button>
    </li>
  )
}

export default suggestionitem
