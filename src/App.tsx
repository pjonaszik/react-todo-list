import React from 'react';
import logo from './logo.svg';
import './App.scss';

import List from "./component/List";
import Todo from "./component/Todo";

import { motion } from "framer-motion";

function App() {
    return (
        <>
          <div className="App">
            <motion.h1
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={logo} className="App-logo" alt="logo" /><br /><br />
              Todo List App <br />
              <span>This sample Todo list is the property of {" "}
                  <a
                    className="App-link"
                    href="https://shock.ovh"
                    target="_blank"
                    rel="opener referrer"
                  >
                    Shock Digital Systems
                  </a>
              </span>
            </motion.h1>
            <motion.div
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 1 }}
            >
              <Todo />
              <List />
            </motion.div>
          </div>
        </>
    );
}

export default App;
