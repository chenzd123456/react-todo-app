import React from 'react';
import CheckBox from './CheckBox';
import DeleteButton from './DeleteButton';

export default function TodoItem(props) {
    const {id, data, changeStatus, delItem} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange}/> {data.text} <DeleteButton onClick={() => delItem(id)}/>
                </label>
            </div>
        </li>
    );
}
