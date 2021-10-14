import PropTypes from "prop-types";
import React, {useState, useEffect} from 'react';
import {GoTrashcan, GoCheck} from 'react-icons/go';

import './styles.css'
export const Todo = (props) => {

    const [isComplete, setIsComplete]=useState(false);

    useEffect( () => {
        setIsComplete(props.isComplete)
    }, [props.isComplete])
   
    const toggleCompleteTodo = ()=>{
        setIsComplete(!isComplete);

    }

    return (
        <div className={`todo ${props.color}`} style={isComplete?{opacity:0.2}:{}}>
            <div>
                <p ClassName="todo-text">{props.text}</p>
                <p ClassName="todo-date">{props.date}</p>
            </div>
            <div ClassName="todo-btns">
                <button ClassName="todo-complete" onClick={toggleCompleteTodo}>
                    <GoCheck className="todo-icon" style={{fontSize:"35px"}}/>
                </button>
            </div>
            <div ClassName="todo-delete">
                <button ClassName="todo-complete">
                <GoTrashcan className="todo-icon" style={{fontSize:"35px"}}/>

                </button>
            </div>
        </div>
    )
}
Todo.propTypes = {
    text:   PropTypes.string.isRequired,
    date:   PropTypes.string.isRequired,
    color:  PropTypes.string.isRequired,
    priority: PropTypes.bool,
    isComplete: PropTypes.bool.isRequired
}

Todo.defaultProps = {
    text: "",
    date: "",
    color: "gray",
    priority: false,
    isComplete: false
}