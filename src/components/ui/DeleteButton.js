import React from 'react';

export default function DeleteButton(props) {
    const {onClick} = props;


    return (<div className="pull-right buttons">
        <a title="Delete Item"
            className={"button del"}
            onClick={onClick}></a>
    </div>);
}
