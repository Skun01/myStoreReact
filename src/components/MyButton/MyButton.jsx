import './MyButton.css';

function MyButton({text, onClick}){
  return(
    <button className="myButton" onClick={onClick}>
      {text}
    </button>
  )
}

export default MyButton;