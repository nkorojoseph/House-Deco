import React from 'react';
import logo from './logo.svg';
import { SideBar } from './components/SideBar';
import { Header } from './components/Header';
import { Content } from './components/Content';
import "../src/style/main.css"

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <Header></Header>
      <Content/>
    </div>
  );
}

export default App;
