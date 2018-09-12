import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Ionicon from 'react-ionicons'

import { 
    openForm, 
    dropdownSidebar, 
    chooseBackground, 
    searchColumn 
} from '../actions/index';

import logo from '../images/logo.svg'

import '../styles/NavBar.css'

class NavBar extends Component {
    render() {
        const flex = { display: 'flex', alignItems: 'center' }

        const DropDownSidebar = () => (
            <div className="sidebar">
                <div className="sidebar-wrapp">
                    <ul>
                        {this.props.backgrounds.map((sw, index) => (
                            <li 
                                onClick={() => this.props.chooseBackground(sw.color)}
                                key={index} 
                                style={{background: `${sw.color}`}}>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )

        const viewSidebar = this.props.backgroundSidebar && <DropDownSidebar/>


        return (
            <div className="top-nav">
                <div className="container">
                    <div className="top-nav-wrapp">
                        <div className="top-nav-wrapp_boards">
                            <div style={flex} >
                                <img src={logo} className="App-logo" alt="logo"/>
                                <h3>Board</h3>
                            </div>
                        </div>
                        <div className="top-nav-wrapp_logo" style={flex}>
                            <h3>React Trello App</h3>
                            <img src={logo} className="App-logo" alt="logo"/>
                        </div>
                        <div className="top-nav-wrapp_icons">
                            <div className="top-nav-wrapp_search">
                                <form>
                                    <input 
                                        type="text" 
                                        onChange={e => this.props.searchColumn(e.target.value)} 
                                        placeholder="Enter the name of the column"
                                    />
                                    <Ionicon icon="md-search" fontSize="1em" color="white"/>
                                </form>
                            </div>
                            <div 
                                className="top-nav-wrapp_icon"
                                onClick={() => this.props.openForm()}>
                                <Ionicon 
                                    icon="md-add" 
                                    fontSize="1.10em" 
                                    color="white"
                                />
                            </div>
                            <div 
                                className="top-nav-wrapp_icon"
                                onClick={() => this.props.dropdownSidebar()}>
                                <Ionicon 
                                    icon="md-color-fill" 
                                    fontSize="1.10em" 
                                    color="white"
                                />
                                {viewSidebar}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        backgrounds: state.interfaceReducer.switchBg,
        backgroundSidebar: state.interfaceReducer.dropdownSidebar,
        getBackground: state.interfaceReducer.background
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ 
        openForm, 
        dropdownSidebar,
        chooseBackground,
        searchColumn
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)