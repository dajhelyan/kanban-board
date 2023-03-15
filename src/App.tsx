import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskCard from './components/task-card/task-card';
import Navbar from './components/navbar/navbar';
import BoardView from './views/board-view';
import { makeStyles } from '@fluentui/react-components';
export const mainStyles = makeStyles({
  main: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    position: "relative"
  }
})

function App() {
  const styles = mainStyles();

  return (
    <div className={styles.main}>
      <Navbar></Navbar>
      <BoardView></BoardView>
    </div>
  );
}

export default App;
