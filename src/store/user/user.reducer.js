
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    console.log(action);
    const { type, payload } = action; //extract from action
    
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER: //importaint to create actions type or it wont jump 
            return{
                ...state, //spreads previous state either null of with users
                currentUser: payload //updates entry (ie payload) as current
            }

        default:
            return state; //need to return default state, cause dispatch applies to all, so when one is changed, another should stay the same, hence no throw error here
    }
};
