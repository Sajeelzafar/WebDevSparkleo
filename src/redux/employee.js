let initialState = [{
    firstname: "Saira",
    lastname: "Rubab",
    email: "sadew@fs.fdnwo",
    phone: 321,
}];

export const addAction = (obj) => {
    return {
        type: 'ADD',
        payload: {
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
        payload: obj.id,
    }
}


const employeeHandler = (state=initialState, action) => {
    switch(action.type){
        case 'ADD':
            console.log(state);
            return [...state,
                {
                    firstname: action.payload.firstname,
                    lastname: action.payload.lastname,
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