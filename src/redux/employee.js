initialState = [];


const employeeHandler = (state=initialState, action) => {
    switch(action.type){
        case 'ADD':
            return state;
        case 'DELETE':
            return state;
        default:
            return state;

    }
}

export default employeeHandler;