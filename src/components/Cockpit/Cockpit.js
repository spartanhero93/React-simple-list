import React from "react";

import classes from './Cockpit.css'

const cockpit = (props) => {
    const assignClasses = [];
    
    let btnClass = '';
    if (props.showPerson) { btnClass = classes.Red; }
    if (props.persons.length <= 2) { assignClasses.push(classes.red) };
    if (props.persons.length <= 1) { assignClasses.push(classes.bold) };

    return (
        <div className={classes.Cockpit}>
        <h1>React with Waifus</h1>
        <h3 className={assignClasses.join(' ')}>Waifus</h3>
        <button
            className={btnClass}
            onClick={props.clicked}>Toggle waifus</button>
        </div>
    )
}

export default cockpit;