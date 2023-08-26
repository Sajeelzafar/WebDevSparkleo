export const addAction = (obj) => {
    return {
        type: 'ADD',
        payload: {
            id: obj.id,
            firstname: obj.firstname,
            lastname: obj.lastname,
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

export const removeAction = (obj) => {
    return {
        type: 'DELETE',
        payload: obj,
    }
}


const employeeHandler = (state=[], action) => {
    switch(action.type){
        case 'ADD': {
            return [...state,
                {
                    id: action.payload.id,
                    firstname: action.payload.firstname,
                    lastname: action.payload.lastname,
                    email: action.payload.email,
                    phone: action.payload.phone,
                }];
            }

        case 'READ': {
            return state;
        }
        case 'DELETE': {
            let del = state.filter(id => action.payload !== id);
            return del;
        }
        default:
            return state;

    }
}

export default employeeHandler;