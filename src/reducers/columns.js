import * as types from '../constants/actionTypes';

const initialState = {
    columns: [],
    search: '',
    newColumn: ''
}

const columns = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_COLUMN:
            return {...state, search: action.search};
        case types.NEW_COLUMN: 
            return {...state, newColumn: action.payload};
        case types.CREATE_COLUMN:
            if(state.newColumn) {
                return {
                    ...state, 
                    columns: state.columns.concat({
                        id: Date.now(),
                        title: state.newColumn,
                        date: new Date().toLocaleDateString(),
                        background: action.background,
                        cards: [],
                        newCardForm: false,
                        newCard: ''
                    }),
                    newColumn: ''
                }
            }
            return state;
        case types.DELETE_COLUMN:
            return {
                ...state, 
                columns: [...state.columns.slice(0, action.index), ...state.columns.slice(action.index + 1)]
            };
        case types.OPEN_CLOSE_COLUMN_FORM:
            return {
                ...state, 
                columns: [...state.columns].map(
                    (item, index) => 
                    index === action.index
                        ? {...item, newCardForm: !item.newCardForm}
                        : item
                )
            };
        case types.NEW_CARD:
            return {
                ...state,
                columns: [...state.columns].map(
                    (item, index) =>
                    index === action.index 
                        ? {...item, newCard: action.title}
                        : item
                )
            };
        case types.PUSH_ON_CARDS: 
            return {
                ...state, 
                columns: [...state.columns].map(
                    (item, index) => 
                    index === action.index 
                        ? item.newCard 
                            ? {...item, 
                                cards: item.cards.concat({
                                    title: item.newCard,
                                    modalCard: false,
                                    completed: false,
                                    description: 'Click this text to add а description on this card!',
                                    time: new Date().toLocaleTimeString(),
                                    date: new Date().toDateString(),
                                    id: Date.now()
                                }),
                                newCard: ''}
                            : {...item}
                        : {...item}
                )
            };
        case types.SORT_CARDS:
            let time = new Date().toLocaleTimeString();
            let date = new Date().toLocaleDateString();
            return {
                ...state,
                columns: [...state.columns].map(
                    (item, index) => 
                    index === action.columnIndex
                        ? {...item, cards: [...item.cards.sort((s, d) => s.time < time || d.date < date)]}
                        : {...item}
                )
            };
        case types.MODAL_CARD:
            return {
                ...state, 
                columns: [...state.columns].map(
                    (column, index) => 
                    index === action.columnIndex 
                        ? {...column, 
                            cards: column.cards.map(
                                (card, i) => 
                                i === action.cardIndex
                                    ? {...card, modalCard: !card.modalCard}
                                    : {...card}
                            )}
                        : {...column}
                )
            };
        case types.DONE_NOT_DONE:
            return {
                ...state, 
                columns: [...state.columns].map(
                    (column, index) => 
                    index === action.columnIndex 
                        ? {...column, 
                            cards: column.cards.map(
                                (card, i) => 
                                i === action.cardIndex
                                    ? {...card, completed: !card.completed}
                                    : {...card}
                            )}
                        : {...column}
                )
            };
        case types.DELETE_CARD: 
            return {
                ...state, 
                columns: [...state.columns].map(
                    (column, index) => 
                    index === action.columnIndex 
                        ? {...column, 
                            cards: [...column.cards.slice(0, action.cardIndex), ...column.cards.slice(action.cardIndex + 1)]}
                        : {...column}
                )
            };
        case types.EDIT_TITLE:
            return {
                ...state,
                columns: [...state.columns].map(
                    (item, index) =>
                    index === action.index 
                        ? {...item, title: action.value}
                        : item
                )
            };
        case types.EDIT_CARD:
            return {
                ...state, 
                columns: [...state.columns].map(
                    (column, index) => 
                    index === action.columnIndex 
                        ? {...column, 
                            cards: column.cards.map(
                                (card, i) => 
                                i === action.cardIndex
                                    ? {...card, title: action.value}
                                    : {...card}
                            )}
                        : {...column}
                )
            };
        case types.EDIT_DESCRIPTION:
            return {
                ...state, 
                columns: [...state.columns].map(
                    (column, index) => 
                    index === action.columnIndex 
                        ? {...column, 
                            cards: column.cards.map(
                                (card, i) => 
                                i === action.cardIndex
                                    ? {...card, description: action.value}
                                    : {...card}
                            )}
                        : {...column}
                )
            };
        case types.REORDER_COLUMNS: 
            return {...state, columns: action.payload};
        default:
            return state;
    }
}

export default columns;