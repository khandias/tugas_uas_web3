const initialState = {
    
    name: 'khandias'
}


const glogalReducer = (state = initialState, action) => {
     if (action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'sahroi'
        }
    }
    return state;
}

export default glogalReducer;