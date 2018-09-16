import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { chooseBackground } from '../../actions/'

class DropDownSidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-wrapp">
                    <ul>
                        {this.props.backgrounds.map((sw, index) => 
                            <li 
                                onClick={() => this.props.chooseBackground(sw.color)}
                                key={index} 
                                style={{background: `${sw.color}`}}>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        backgrounds: state.interfaceReducer.switchBg
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        chooseBackground
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDownSidebar)