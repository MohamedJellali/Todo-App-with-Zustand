import useStore from "../store/todoStore"
import { useState } from "react"

function TodoInputs() {
    const [task, setTask] = useState("");

    //importing states from store
    const { addTask } = useStore(
        (state) => state
    )

    return (
        <div>
                  <div className="row m-2">
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          type="text"
          className="col form-control"
          placeholder="Add a Task"
        />
        <button
          className="btn btn-primary mx-2"
          onClick={()=> {
            addTask(task);
            setTask("")
          }}
        >
          ADD NEW TASK
        </button>
      </div>
        </div>
    )
}

export default TodoInputs
