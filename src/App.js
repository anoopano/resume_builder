import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import CreateResume from './components/CreateResume';
import ViewResume from './components/ViewResume';


function App() {

    return (
            <Router>

                <Switch>
                    <Route exact path="/">
                        <CreateResume />
                    </Route>

                    <Route exact path="/resumes">
                        <ViewResume />
                    </Route>

                </Switch>

            </Router>

    )
}

export default App
