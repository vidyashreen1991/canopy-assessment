import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import './App.css';
import NetworthChart from './components/NetworthChart';
import HoldingsTable from './components/HoldingsTable';

class App extends Component {
    render() {
        return (
            <>
                <Container fluid className="px-0">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/networth-chart" className="nav-link">Networth Chart</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/holdings-table" className="nav-link">Holdings Table</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </Container>
                <Switch>
                    <Route path="/networth-chart">
                        <NetworthChart />
                    </Route>
                    <Route path="/holdings-table">
                        <HoldingsTable />
                    </Route>
                    <Route>

                    </Route>
                </Switch>
            </>
        )
    }
}
export default App