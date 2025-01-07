import './Loading.css';

function Loading({text}){
  return(
    <div className="loadingSection">
      <div className="loading"></div>
      <p className="loadingText">{text}</p>
    </div>
  )
}

export default Loading;