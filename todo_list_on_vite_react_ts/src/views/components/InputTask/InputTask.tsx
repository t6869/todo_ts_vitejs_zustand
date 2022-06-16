import React, { useCallback, useState } from 'react';
import style from './InputTask.module.scss';

interface InputTaskProps {
    id: string;
    title: string;
    onDone: (id: string) => void;
    onEdited: (id: string, title: string) => void;
    onRemoved: (id: string) => void;
};

export const InputTask: React.FC<InputTaskProps> = ({ id, title, onDone, onEdited, onRemoved }) => {
    const [checked, setChecked] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [value, setValue] = useState(title);

    return (
        <div className={style.inputTask}>
            <label className={style.inputTaskLabel}>
                <input
                    className={style.inputTaskCheckbox}
                    type="checkbox"
                    disabled={isEditMode}
                    checked={checked}
                    onChange={(e) => {
                        setChecked(e.target.checked);

                        if (e.target.checked) {
                            onDone(id);
                        };
                    }}
                />
                {
                    isEditMode ? (
                        <input
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                            className={style.inputTaskTitleEdit}
                        />
                    ) : (
                        <h3 className={style.inputTaskTitle}>
                            {title}
                        </h3>
                    )
                }
            </label>
            {
                isEditMode ? (
                    <button
                        aria-label='Save'
                        className={style.inputTaskSave}
                        onClick={() => {
                            onEdited(id, value);
                            setIsEditMode(false);
                        }}
                    />
                ) : (
                    <button
                        aria-label='Edit'
                        className={style.inputTaskEdit}
                        onClick={() => {
                            setIsEditMode(true);
                        }}
                    />
                )
            }

            <button
                aria-label='Remove'
                className={style.inputTaskRemove}
                onClick={() => {
                    if (confirm('Ты уверян, что хочешь удалить?')) {
                        onRemoved(id)
                    }
                }}
            />
        </div>
    );
};