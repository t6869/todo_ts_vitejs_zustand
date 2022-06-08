import create from 'zustand';
import { generateId } from '../helpers'

interface Task {
    id: string;
    title: string;
    createdAt: number;
};

interface ToDoStore {
    tasks: Task[];
    createTask: (title: string) => void;
    updateTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;
};

export const useToDoStore = create<ToDoStore>((set, get) => ({
    tasks: [
        {
            id: "2",
            title: 'Моя первая таска',
            createdAt: 1,
        },
        {
            id: "3",
            title: 'Моя 2 таска',
            createdAt: 2,
        },
    ],
    createTask: (title) => {
        const  { tasks }  = get();
        const newTask = {
            id: generateId(),
            title: title,
            createdAt: Date.now(),
        }
        set({
            tasks: [newTask].concat(tasks),
        })
    },
    updateTask: (id, title) => {
        const { tasks } = get();

        set({
           tasks: tasks.map((task)=>(
               {
                   ...task,
                   title: task.id === id ? title : task.title
               }
           ))
        })
    },
    removeTask: (id) => {
        const { tasks } = get();

        set({
            tasks: tasks.filter((task)=> task.id !== id)
        });
    },
}));