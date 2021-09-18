const initialState = {
    items: []
}

export default function(state = initialState, action){
    switch(action.type){
        case 'SAVE_GRAFFITI': {
            var newItem = action.payload;
            // console.log(newItem);
            return {
                ...state,
                items: state.items.concat([newItem])
            }
        }
        case 'REMOVE_GRAFFITI': {
            return {
                ...state,
                items: state.items.filter(item => item !== action.payload)
            }
        }
        case "SET_GRAFFITI": {
            return{
                ...state,
                items: action.payload
            }
        }
        default: {
            return state;
        }
    }
}