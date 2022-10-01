



const MainReducer = (state,action) => {

    switch (action.type) {
        case "hide":{
            return { ...state, show: false };
        }
        break;

        case "registerRate":{
            return{...state,rate:action.payload};
        }
            
    
        default:
            break;
    }
}



export default MainReducer;