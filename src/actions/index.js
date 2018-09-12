export const openForm = () => {
    return {
        type: 'OPEN_MODAL_FORM'
    }
}
export const closeForm = () => {
    return {
        type: 'CLOSE_MODAL_FORM'
    }
}
export const searchColumn = text => {
    return {
        type: 'SEARCH_COLUMN',
        search: text
    }
}
export const titleColumn = title => {
    return {
        type: 'NEW_COLUMN',
        payload: title
    }
}
export const createColumn = () => {
    return {
        type: 'CREATE_COLUMN'
    }
}
export const deleteColumn = i => {
    return {
        type: 'DELETE_COLUMN', 
        index: i
    }
}
export const dropdownSidebar = () => {
    return {
        type: 'DROP_DOWN_SIDEBAR'
    }
}
export const chooseBackground = background => {
    return {
        type: 'BACKGROUND',
        payload: background
    }
}
export const openCloseColumnCard = i => {
    return {
        type: 'OPEN_CLOSE_COLUMN_FORM',
        index: i
    }
}
export const newCard = (i, t) => {
    return {
        type: 'NEW_CARD',
        index: i,
        title: t
    }
}
export const createCard = (i, t) => {
    return {
        type: 'PUSH_ON_CARDS',
        index: i,
        title: t
    }
}
export const openModalCard = (column, card) => {
    return {
        type: 'MODAL_CARD',
        columnIndex: column,
        cardIndex: card
    }
}
export const completed = (column, card) => {
    return {
        type: 'DONE_NOT_DONE',
        columnIndex: column,
        cardIndex: card
    }
}
export const deleteCard = (column, card) => {
    return {
        type: 'DELETE_CARD',
        columnIndex: column,
        cardIndex: card
    }
}
export const editTitle = (i,text) => {
    return {
        type: 'EDIT_TITLE',
        index: i,
        value: text
    }
}
export const editCard = (column, card, text) => {
    return {
        type: 'EDIT_CARD',
        columnIndex: column,
        cardIndex: card,
        value: text
    }
}

export const editDescription = (column, card, text) => {
    return {
        type: 'EDIT_DESCRIPTION',
        columnIndex: column,
        cardIndex: card,
        value: text
    }
}

export const reorderArray = arr => {
    return {
        type: 'REORDER_COLUMNS',
        payload: arr
    }
} 