import React from 'react'

const CardForm = ({ form, newCard, close, handleOnChange, handleOnPush, handleOnOpenClose }) => {
    if(form) {
        return (
            <form>
                <input 
                    onChange={handleOnChange} 
                    autoFocus 
                    value={newCard}
                    maxLength="60"
                    type="text" 
                    placeholder="Enter this card title..."/><br/>
                <button 
                    type="submit"
                    onClick={handleOnPush}>
                    Add new card
                </button>
                <button
                    type="button"
                    onClick={handleOnOpenClose}
                    name="ios-close"
                    style={{fontWeight: '100', padding: '8px 10px'}}>{close}
                </button>
            </form>
        )
    } else {
        return <div></div>
    }
}

export default CardForm