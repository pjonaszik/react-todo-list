import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";



const mapStateToProps = (state: any) => {
    return {
      todos: state,
    };
  };
  
const mapDispatchToProps = (dispatch: any) => {
    return {
        addTodo: (obj: any) => dispatch(addTodo(obj)),
    };
};

const Todo = (props: any) => {
    const [todo, setTodo] = useState("");

    const handleChange = (e: any) => {
        setTodo(e.target.value);
    };

    const add = () => {
        if (todo === "") {
        alert("Input is Empty");
        } else {
        props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
        });
        setTodo("");
        }
    };

    return (
        <div className="addTodos">
            <input
                type="text"
                onChange={(e) => handleChange(e)}
                className="todo-input"
                value={todo}
            />

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="add-btn"
                onClick={() => add()}
            >
                <GoPlus />
            </motion.button>
            <br />
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);