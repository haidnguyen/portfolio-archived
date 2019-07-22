import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, CV } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/cv' component={CV}/>
          <Route component={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
