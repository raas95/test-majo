let initialState = {
    data:null,
    detail:null
}
const reducer =(state = initialState, action)=>{
    switch(action.type){
        case 'GET_DATA':
         
            return {
                ...state,
                data: action.payload
            };
            case 'GET_DETAIL':
         
                return {
                    ...state,
                    detail: action.payload
                };
        
        default:
            return state
    }
}


export default reducer