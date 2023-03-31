import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskCard from './components/task-card/task-card';
import Navbar from './components/navbar/navbar';
import BoardView from './views/board-view';
import { appStyles } from './styles/app-style';


function App() {
  const styles = appStyles();

  return (
    <div className={styles.main}>
      <Navbar></Navbar>
      <BoardView></BoardView>
    </div>
  );
}

export default App;
