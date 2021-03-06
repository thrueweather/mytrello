import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Ionicon from 'react-ionicons'

import { openForm, closeForm, titleColumn, createColumn } from '../actions';

import '../styles/ModalForm.css'

class Form extends Component {
    state = { color: '' }

    handleChangeOnNewColumn = e => this.props.titleColumn(e.target.value)

    handleClickOnGetColor = e => this.setState({ color: e.target.style.backgroundColor })

    handleClick = e => {
        e.preventDefault();
        this.props.createColumn(this.state.color);
        this.setState({ color: '' });
        this.props.closeForm();
    }

    render() {
        if(this.props.modalForm) {
            return (
                <div className="add-column">
                    <div className="add-column-wrapp">
                        <div className="add-column-wrapp-container">
                            <form onSubmit={this.handleClick}>
                                <span onClick={() => this.props.closeForm()}>
                                    <Ionicon icon="ios-close-circle-outline"/>
                                </span>
                                <input 
                                    type="text" 
                                    autoFocus
                                    maxLength="25"
                                    onChange={this.handleChangeOnNewColumn} 
                                    value={this.props.newcolumn} 
                                    placeholder="Add new column..."/> <br/>
                                <button onClick={this.handleClick}>Add</button>
                            </form>
                            <div className="colors">
                                <ul onClick={e => this.handleClickOnGetColor(e)}>
                                    <li style={{backgroundColor: '#43c0f0c5'}}></li>
                                    <li style={{backgroundColor: '#e6e624c5'}}></li>
                                    <li style={{backgroundColor: '#e24040c5'}}></li>
                                    <li style={{backgroundColor: '#11c311c5'}}></li>
                                    <li style={{backgroundColor: '#d912d9c5'}}></li>
                                    <li style={{backgroundColor: '#fcbc47c5'}}></li>
                                    <li style={{backgroundColor: '#eeeeeec5'}}></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

const mapStateToProps = state => {
    return {
        modalForm: state.interfaceReducer.modalForm,
        newColumn: state.interfaceReducer.newColumn
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ 
        openForm,
        closeForm,
        titleColumn,
        createColumn
    }, dispatch)
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Form)