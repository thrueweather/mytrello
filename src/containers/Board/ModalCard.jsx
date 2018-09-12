import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Ionicon from 'react-ionicons'

import { editCard, editDescription } from '../../actions/'

class ModalCard extends Component {
    render() {
        if(this.props.modal) {
            const checkmark = <Ionicon icon="ios-checkmark-circle-outline"/>
            const close = <Ionicon icon="ios-close-circle-outline"/>
            const trash = <Ionicon icon="md-trash"/>
            const paper = <Ionicon icon="ios-paper"/>
            const create = <Ionicon icon="ios-create"/>
            const time = <Ionicon icon="ios-time"/>

            return (
                <div>
                    <div className="modal-card">
                        <div className="modal-card-wrapp">
                            <div className="modal-card-wrapp_title">
                                <h2 
                                    title="Edit"
                                    contentEditable={true} 
                                    suppressContentEditableWarning={true}
                                    onBlur={
                                        e => this.props.editCard(
                                            this.props.columnIndex, 
                                            this.props.cardIndex, 
                                            e.target.textContent
                                        )
                                    }>{paper} 
                                    {` ${this.props.card.title}`}
                                </h2>
                                <h2 className="close" onClick={this.props.close}>{close}</h2>
                                <h4 className="modal-title">At column in "{this.props.column.title}"</h4>
                                <h2 onClick={this.props.completed}>{checkmark}{this.props.card.completed ? " Not Done" : " Done"}</h2>
                                <h2 onClick={this.props.spliceCard}>{trash}Delete</h2>
                            </div>  
                            <div className="modal-card-wrapp_main">
                                <h2>{create}Description</h2>
                                <h4
                                    contentEditable={true} 
                                    suppressContentEditableWarning={true}
                                    onBlur={
                                        e => this.props.editDescription(
                                            this.props.columnIndex, 
                                            this.props.cardIndex, 
                                            e.target.textContent
                                        )
                                    }>
                                    {this.props.card.description}
                                </h4>
                            </div>
                            <h2>{time}{` ${this.props.card.date}`} at {` ${this.props.card.time}`}</h2>
                        </div>
                    </div>
                </div> 
            )
            
        }
        return <div></div>
    }
} 

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        editCard,
        editDescription
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(ModalCard)