
function myButton() {

  function handleClick() {
    alert('Button clicked')
  }
  return (
    <button onClick={handleClick}>myButton</button>
  )
}

export default myButton