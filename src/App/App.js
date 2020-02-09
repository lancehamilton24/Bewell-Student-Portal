import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ButtonAppBar from '../components/Navbar/Navbar';
import { Home } from '../components/Pages/Home/Home';
import { UserProfile } from '../components/Pages/UserProfile/UserProfile';
import { TakeSurvey } from '../components/Pages/TakeSurvey/TakeSurvey';
import { ViewSurvey } from '../components/Pages/ViewSurvey/ViewSurvey';
import './App.scss';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <ButtonAppBar></ButtonAppBar>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/UserProfile' component={UserProfile} />
            <Route path='/Survey' component={TakeSurvey} />
            <Route path='/ViewSurvey' component={ViewSurvey} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
