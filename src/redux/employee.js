let initialState = [];

export const addAction = (obj) => {
    return {
        type: 'ADD',
        payload: {
            first_name: obj.firstname,
            last_name: obj.lastname,
            email: obj.email,
            phone: obj.phone,
        },
    }
}

export const readEmployee = () => {
    return {
        type: 'READ'
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
            return [...state,
                {
                    first_name: action.payload.firstname,
                    last_name: action.payload.lastname,
                    email: action.payload.email,
                    phone: action.payload.phone,
                }];

        case 'READ':
            return state;

        case 'DELETE':
            return state;

        default:
            return state;

    }
}

export default employeeHandler;