import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import About from './About'
import BasicExample from './BasicExample'
import Contact from './Contact'
import FormExample from './FormExample'

import Main from './main'

class App extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} ></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/basicexample" component={BasicExample}></Route>
                    <Route exact path="/form" component={FormExample}></Route>
                </Switch>
            </Router>
        )
    }
}

export default App