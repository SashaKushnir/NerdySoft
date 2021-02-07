import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ListContainer from './components/List/ListContainer';
import NavBar from './components/NavBar/NavBar';
import PushContainer from './components/Push/PushContainer';
import SearchContainer from './components/Search/SearchContainer';
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Redirect exact from ='/' to ='/list'/>
        <Redirect exact from ='/NerdySoft' to ='/list'/>
        <Route path ='/list' render = {() =><ListContainer />}/>
        <Route path ='/newAnnouncement' render = {() =><PushContainer />}/>
        <Route path = '/search' render = {() =><SearchContainer />}/>
        <Route path = '*' render = {() => <div>Something went wrong</div>}/>
      </Switch>
    </div>
  )
}

export default App;
