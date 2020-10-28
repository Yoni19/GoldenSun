import React,{ useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Works from './Pages/Works'

import Navbar from './components/NavBar';
import "./sass/mystyles.scss"
import { IntlProvider } from 'react-intl';
import messagesFr from './translation/fr';
import messagesEn from './translation/en';
import StudyCase from "./Pages/StudyCase";


const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const App = () => {
  const [language, setLanguage] = useState('fr');
  return (

    <IntlProvider locale={language} messages={messages[language]}>
    <Router>
      
      <div>
        <Navbar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route exact path="/works">
            <Works />
          </Route>

          <Route path="/works/:clientname">
          <StudyCase />
        </Route>
        

          <Route exact path="/">
            <Home />
          </Route>

          <Route>
            <h1>Cette page n'exite pas</h1>
          </Route>
        </Switch>
      </div>
    </Router>
    </IntlProvider>

  );
}

ReactDOM.render(<App />, document.querySelector("#root"));