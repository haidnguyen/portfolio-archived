import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route component={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
