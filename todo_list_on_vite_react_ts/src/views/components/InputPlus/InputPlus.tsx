import React, {useCallback, useState} from 'react';
import style from './InputPlus.module.scss';

interface InputPlusProps {
    onAdd: (title: string) => void;
};

export const InputPlus: React.FC<InputPlusProps> = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState('');
    const addTask = useCallback(()=>{
        if(inputValue){
            onAdd(inputValue);
            setInputValue('');
        };   
    },[inputValue]);

    return (
        <div className={style.inputPlus}>
            <input
                className={style.inputPlusValue}
                type="text"
                value={inputValue}
                onChange={(e) =>{
                    setInputValue(e.target.value)
                }}
                onKeyDown={(e) =>{
                    if(e.key === 'Enter'){
                        addTask();
                    }
                }}
            />
            <button
                onClick={addTask}
                className={style.inputPlusButton}
                aria-label="Add"
            />
        </div>
    );
};