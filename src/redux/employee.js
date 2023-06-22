let initialState = [];

export const addAction = (obj) => {
    return {
        type: 'ADD',
        payload: {
            first_name: obj.fname,
            last_name: obj.lname,
            email: obj.email,
            phone: obj.phone,
        },
    }
}

const removeAction = (obj) => {
    return {
        type: 'DELETE',
        payload: obj.id,
    }
}


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