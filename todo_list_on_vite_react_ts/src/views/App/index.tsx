import React from 'react';
import style from './index.module.scss';
import { useToDoStore } from '../../data/stores/useToDoStore';
import { InputPlus } from '../components/InputPlus/InputPlus';

export const App: React.FC = () => {
    const [
        tasks,
        createTask,
        updateTask,
        removeTask,
    ] = useToDoStore( state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask,
    ]);

    console.log(tasks,11)
    return(
        <article className={style.article}>
            <h1 className={style.articleTitle}>To Do List</h1>
            <section className={style.articleSection}>
                <InputPlus
                    onAdd = {(title)=>{
                        if(title){
                            createTask(title);
                        }
                    }}
                />
            </section>
            <section className={style.articleSection}>

            </section>
        </article>
    );
};