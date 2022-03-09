import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { unmountComponentAtNode, render } from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  import Layout from './layout';
  import AppName from './appname';
import Timer from './timer';

let HomeScreen=()=> {
  return (<Router>
    <Routes>
      <Route path='/' index element={<Layout/>}/>
      <Route path="/clock" element={<div><AppName desc='Tick tock goes the clock'>Clock</AppName>
                                    <Timer></Timer></div>}>
      </Route>
      <Route path="/stopwatch" element={<AppName desc='It is time to stop the watch'>StopWatch</AppName>}></Route>
      <Route path="/timer" element={<AppName desc='Good things take time'>Timer</AppName>}></Route>
    </Routes>
  </Router>
);
}

export default HomeScreen;