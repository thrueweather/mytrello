import React, { Component } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Ionicon from 'react-ionicons'

import { 
    openCloseColumnCard, newCard,
    createCard, deleteColumn,
    editTitle, reorderArray
} from '../../actions'

import ColumnCards from './ColumnCards'
import CardForm from '../../components/CardForm'

import '../../styles/Columns.css'

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const getListStyle = isDraggingOver => ({background: isDraggingOver ? '#00000055' : 'none'});

class Columns extends Component {
    constructor(props) {
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    handlePushOnCards = (e, index) => {
        e.preventDefault();
        this.props.createCard(index)
    }

    onDragEnd = (result) => {
        if(!result.destination) {
            return;
        }
        const items = reorder(
            this.props.columns,
            result.source.index,
            result.destination.index
        )
        this.props.reorderArray(items)
    }

    render() {
        const close = <Ionicon icon="ios-close"/>
        const date = {fontSize: '12px', color: 'gray'}

        if(this.props.columns.length) {
            return (
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable" direction="horizontal">
                        {(provided, snapshot) => (
                            <div className="columns" ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                                <div className="container">
                                    <ul>
                                        {this.props.columns.map((column, index) => (
                                            <Draggable key={index} draggableId={index} index={index}>
                                                {(provided, snapshot) => (
                                                    <li 
                                                        key={index}
                                                        ref={provided.innerRef} 
                                                        {...provided.draggableProps}
                                                        style={{backgroundColor: `${column.background}`}}
                                                    >
                                                        <div className="title-card" {...provided.dragHandleProps}>
                                                            <h2 
                                                                title="Edit"
                                                                contentEditable={true} 
                                                                suppressContentEditableWarning={true}
                                                                onBlur={e => this.props.editTitle(index, e.target.textContent)}>
                                                                {column.title}
                                                            </h2>
                                                            <span style={date}>{column.date}</span>
                                                            <Ionicon onClick={() => this.props.deleteColumn(index)} icon="md-trash"/>
                                                        </div>
                                                        <ColumnCards cards={column.cards} columnIndex={index} column={column}/>
                                                        <div className="form-card">
                                                            <h3 onClick={() => this.props.openCloseColumnCard(index)}>
                                                                + Add new card 
                                                            </h3>
                                                        </div>
                                                        <CardForm 
                                                            form={column.newCardForm} 
                                                            newCard={column.newCard} 
                                                            close={close}
                                                            handleOnChange={e => this.props.newCard(index, e.target.value)}
                                                            handleOnPush={e => this.handlePushOnCards(e, index)}
                                                            handleOnOpenClose={() => this.props.openCloseColumnCard(index)}
                                                        />
                                                    </li>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            )
        }
        return <div style={{textAlign: 'center', color: 'white'}}><h1>Please add column</h1></div> 
        
    }
}

const mapStateToProps = state => {
    return {
        columns: state.columns.columns.filter(item => {
            return item.title.toLowerCase().includes(state.columns.search.toLowerCase().trim())
        })
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        openCloseColumnCard, newCard,
        createCard, deleteColumn,
        editTitle, reorderArray
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Columns)