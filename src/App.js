// https://www.agiliq.com/blog/2018/05/understanding-react-state-and-props/

import React, { Component } from 'react';
import Profile from './components/Profile';
//import Profile from './components/ProfileFunction';

class App extends Component {
 
  render() {

    return (
      <div>
        <br/> <br/> <br/> <br/> <br/> <br/>
        
       <Profile 
       logo_url = "https://books.agiliq.com/projects/django-design-patterns/en/latest/_static/logo.png"
       title = "Mobile App, Web App and API Development and More"
       />
      </div>
    );
  }
}

export default App;
