import './TitleBar.css'
import PropTypes from 'prop-types';
function TitleBar({title}){
  return (
    <div className='titleBar'>
      <h1>{title}</h1>
    </div>
  )
}
TitleBar.propTypes = {
  title: PropTypes.string.isRequired
}
export default TitleBar;