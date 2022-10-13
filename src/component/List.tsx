import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  completeTodo,
  removeTodo,
  updateTodo,
} from "../redux/reducer";
import TodoElement from "./TodoElement";
import { AnimatePresence, motion } from "framer-motion";

const mapStateToProps = (state: any) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addTodo: (obj: any) => dispatch(addTodo(obj)),
        removeTodo: (id: any) => dispatch(removeTodo(id)),
        updateTodo: (obj: any) => dispatch(updateTodo(obj)),
        completeTodo: (id: any) => dispatch(completeTodo(id)),
    };
};

const DisplayTodo = (props: any) => {
    const [sort, setSort] = useState("active");
    return (
        <div className="displaytodos">
            <div className="buttons">
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSort("active")}
                >
                Active
                </motion.button>
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSort("completed")}
                >
                Completed
                </motion.button>
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSort("all")}
                >
                All
                </motion.button>
            </div>
            <ul>
                <AnimatePresence>
                {props.todos.length > 0 && sort === "active"
                    ? props.todos.map((item: any) => {
                        return (
                        item.completed === false && (
                            <TodoElement
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                            />
                        )
                        );
                    })
                    : null}
                {/* for completed items */}
                {props.todos.length > 0 && sort === "completed"
                    ? props.todos.map((item: any) => {
                        return (
                        item.completed === true && (
                            <TodoElement
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                            />
                        )
                        );
                    })
                    : null}
                {/* for all items */}
                {props.todos.length > 0 && sort === "all"
                    ? props.todos.map((item: any) => {
                        return (
                        <TodoElement
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                        />
                        );
                    })
                    : null}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo);