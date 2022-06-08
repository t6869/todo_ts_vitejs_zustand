import React, {useCallback, useState} from 'react';
import style from './InputTask.module.scss';

interface InputTaskProps {
    id: string;
    title: string;
    onDone: (id: string) => void;
    onEdited: (id: string, title: string) => void;
    onRemoved: (id: string) => void;
};

export const InputTask: React.FC<InputTaskProps> = ({ id, title, onDone, onEdited, onRemoved }) => {

    return (
        <div className={style.inputPlus}>
            {title} 
        </div>
    );
};