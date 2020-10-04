import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

   return (

          <div className="app-writer">
             <Header/>
             <Nav state={props.state}/>
             <div className="app_content">
                <Route path="/profile" render={() => <Profile />}/>
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
             </div>
          </div>

   );
}

export default App;