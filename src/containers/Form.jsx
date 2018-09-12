import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Ionicon from 'react-ionicons'

import { openForm, closeForm, titleColumn, createColumn } from '../actions';

import '../styles/ModalForm.css'

class Form extends Component {
    handleChangeOnNewColumn = e => this.props.titleColumn(e.target.value)

    handleClick = e => {
        e.preventDefault()
        this.props.createColumn(this.props.newColumn)
        this.props.closeForm()
    }

    render() {
        if(this.props.modalForm) {
            return (
                <div className="add-column">
                    <div className="add-column-wrapp">
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