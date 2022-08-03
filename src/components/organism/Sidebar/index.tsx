import logo from '../../../logo.png'
import { Modes } from '../../molecules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSheetPlastic } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {

  return (
    <nav className="sidebar relative">
      <div className="flex siderbar--logo">
        <img src={logo} alt="Logo" />
        <h1>kanban</h1>
      </div>
      <section className="board-list-container">
        <h2>All Boards</h2>
        <div className="flex items-center board-list active" role={"menuitem"}>
          <FontAwesomeIcon icon={faSheetPlastic} />
          <h3>Travel</h3>
        </div>
        <div className="flex items-center board-list">
          <FontAwesomeIcon icon={faSheetPlastic} />
          <h3>Work</h3>
        </div>
        <div className="flex items-center board-list">
          <FontAwesomeIcon icon={faSheetPlastic} />
          <h3>Visa</h3>
        </div>
        <div className="flex items-center board-list">
          <FontAwesomeIcon icon={faSheetPlastic} />
          <h3>Plans</h3>
        </div>
        <div className="flex items-center board-list">
          <FontAwesomeIcon icon={faSheetPlastic} />
          <h3>WOO</h3>
        </div>
      </section>
      <aside className="">
        <Modes />
      </aside>
    </nav>
  )
}

export default Sidebar