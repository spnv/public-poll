import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles/App.css';

import About from './pages/About';
import PollBoard from './pages/PollBoard';

import { test } from './actions/pollAction';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isCreatePollModalActive: false,
            question: '',
            message: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    createNewPollModalControl = () => {
        this.setState({ isCreatePollModalActive: !this.state.isCreatePollModalActive });
    }

    createNewPoll = () => {
        this.props.testt();
    }

    render() {

        return (
            <div className="my-app">
                <nav className="navbar is-light" aria-label="main navigation">
                    <div className="container">
                        {/* <div className="navbar-brand">
              <a className="navbar-item" href="https://devahoy.com">
                <img src="https://devahoy.com/assets/images/devahoy-text-logo.png" alt="DEVAHOY LOGO" width="112" height="28" />
              </a>
            </div> */}
                        <div className="navbar-menu">
                            <div className="navbar-start">
                                <NavLink exact to="/poll-board" className="navbar-item">Board</NavLink>
                                <NavLink exact to="/poll-board" className="navbar-item">Voted</NavLink>
                                <NavLink exact to="/about" className="navbar-item">About</NavLink>
                            </div>
                            <div className="navbar-end">
                                <div className="navbar-item">supanat.ve</div>
                                <div className="navbar-item">50 point</div>
                                <div className="control navbar-item">
                                    <button className="button is-danger" onClick={() => this.createNewPollModalControl()} >New poll</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="App container">
                    <Route exact path="/poll-board" component={PollBoard} />
                    <Route exact path="/about" component={About} />
                    <div className={`modal ${this.state.isCreatePollModalActive ? 'is-active' : ''}`}>
                        <div className="modal-background"></div>
                        <div className="modal-card">
                            <header className="modal-card-head">
                                <p className="modal-card-title">New Poll</p>
                                <button className="delete" aria-label="close" onClick={() => this.createNewPollModalControl()}></button>
                            </header>
                            <section className="modal-card-body">
                                <div className="field">
                                    <label className="label">Question</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="..." name="question" value={this.state.question}
                                            onChange={(e) => this.handleChange(e)} />
                                    </div>
                                    <label className="label">Message</label>
                                    <div className="control">
                                        <textarea className="textarea" placeholder="..." name="message" value={this.state.message}
                                            onChange={(e) => this.handleChange(e)}></textarea>
                                    </div>
                                </div>
                                <button className="button is-success" onClick={() => this.createNewPoll()}>Create Poll</button>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        test: state.poll
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        testt: test
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
