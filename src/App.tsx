import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import TaskList from './task-list'
import UploadFile from './upload'
import TaskDetail from './task-detail'
import Home from './home'

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
        <Route path='/task-list' exact component={TaskList}></Route>
        <Route path='/task-detail' exact component={TaskDetail}></Route>
        <Route path='/upload' exact component={UploadFile}></Route>
      </BrowserRouter>
    )
  }
}
