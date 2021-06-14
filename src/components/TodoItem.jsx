import React from 'react'
import useStore from '../store/todoStore'

function TodoItem({task}) {

    const {deleteTask} = useStore((state) => state)

    return (
        <div style={{display: 'flex', marginTop: '20px'}}>
            <h4 style={{marginRight: '15px'}} >{task.text}</h4>
            <button className='btn btn-danger' onClick={()=> deleteTask(task.id)}>Delete</button>
        </div>
    )
}

export default TodoItem
