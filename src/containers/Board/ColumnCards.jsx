import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { 
    openModalCard,
    completed,
    deleteCard
} from '../../actions/index'

import ModalCard from './ModalCard'

class ColumnCards extends Component {
    render() {
        return (
            <div className="list">
                {this.props.cards.map((card, index) => (
                    <div className="item" key={index}>
                        <p  
                            onClick={() => {this.props.openModalCard(this.props.columnIndex, index)}}
                            className={card.completed ? 'completed' : null}>
                            {card.title}
                        </p>
                        <ModalCard 
                            modal={card.modalCard} 
                            columnIndex={this.props.columnIndex}
                            cardIndex={index}
                            card={card}
                            column={this.props.column}
                            close={() => this.props.openModalCard(this.props.columnIndex, index)}
                            completed={() => this.props.completed(this.props.columnIndex, index)}
                            spliceCard={() => this.props.deleteCard(this.props.columnIndex, index)}
                        /> 
                    </div> 
                ))}  
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        columns: state.columns.columns
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        openModalCard, completed,
        deleteCard
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnCards)