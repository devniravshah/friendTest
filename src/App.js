import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import TabComponent from './Components'

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={TabComponent} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
