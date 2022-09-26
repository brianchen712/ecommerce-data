import './App.css';
import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import AddInstructor from './components/AddInstructor';
import UpdateInstructor from './components/UpdateInstructor';
import CourseContent from './components/CourseContent';
import AddCourse from './components/AddCourse';
import UpdateCourse from './components/UpdateCourse';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/addInstructor" component={AddInstructor}></Route>
          <Route exact path="/updateInstructor/:instructorId" component={UpdateInstructor}></Route>
          <Route exact path="/courseContent/:instructorId" component={CourseContent}></Route>
          <Route exact path="/addCourse/:instructorId" component={AddCourse}></Route>
          <Route exact path="/updateCourse/:courseId" component={UpdateCourse}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
