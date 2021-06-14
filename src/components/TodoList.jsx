import useStore from "../store/todoStore"
import TodoItem from "./TodoItem";

function TodoList() {

    //importing states from store
    const { tasks } = useStore(
        (state) => state
    )


    return (
    <div>
        <div clasName="my-8">
            {tasks.map((task) => {
            return <TodoItem key={task.id} task={task} />;
      })}
        </div>
    </div>
    )
}

export default TodoList
