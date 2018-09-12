import React, { Component } from 'react';
import { connect } from 'react-redux'

import NavBar from '../containers/NavBar'
import Columns from '../containers/Board/Columns'
import Form from '../containers/Form'

import '../styles/App.css';

class App extends Component {
    render() {
        document.body.style.backgroundColor = this.props.background 
        return (
            <div className="App">
                <NavBar/>
                <Columns/>
                <Form/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        background: state.interfaceReducer.background
    }
}

export default connect(mapStateToProps, null)(App);
