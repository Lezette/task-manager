import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons'

const AddTask = () => {

  return(
    <section>
      <h4>Add New Task</h4>

      <form>
        <div>
          <label htmlFor="title">title</label>
          <input id="title" placeholder="e.g Take Coffee break" />
        </div>
        <div>
          <label htmlFor="description">description</label>
          <textarea id="description" placeholder="it's always good to take a break, taking a 15 minutes break can help you relax"></textarea>
        </div>
        <div>
          <p>Subtasks</p>
          <div>
            <input placeholder="eg. make coffee" />
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <button>
            <FontAwesomeIcon icon={faPlus} />
            <span>Add new subtask</span>
          </button>
        </div>
        <div>
          <label htmlFor="status">status</label>
          <select id="status">
            <option>Todo</option>
            <option>Todo</option>
          </select>
        </div>
        <input type="submit" value="Create Task" />
      </form>
    </section>
  )
}

export default AddTask