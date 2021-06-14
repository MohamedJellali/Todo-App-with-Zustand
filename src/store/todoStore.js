import create from "zustand";
import {uid} from "react-uid"


const useStore = create((set)=> ({
    tasks: [],
    addTask: (task) => set((state)=> ({
        tasks: [...state.tasks,
        {
            text: task,
            id: uid(`${task}-${state.tasks.length}`),
            isDone : false
        }
        ]
    })),
    deleteTask : (taskId) => set(state => ({
        tasks: state.tasks.filter(task => task.id != taskId)
    }))
}))

export default useStore
