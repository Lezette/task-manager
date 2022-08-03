import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const Menu = () => {

  return (
    <nav className="menu flex justify-between items-center">
      <h4>Platform Launch</h4>
      <button className="flex items-center">
        <FontAwesomeIcon icon={faPlus} />
        <span>add new task</span>
      </button>
    </nav>
  )
}

export default Menu