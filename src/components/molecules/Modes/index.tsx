import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useDarkMode } from '../../../hooks'

const Mode = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <section className="switch-container">
      <div className="">
        <FontAwesomeIcon icon={faSun} />
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode((prev: boolean) => !prev)} />
          <span className="slider"></span>
        </label>
        <FontAwesomeIcon icon={faMoon} />
      </div>
    </section>
  )
}

export default Mode