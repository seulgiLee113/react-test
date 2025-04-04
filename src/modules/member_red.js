const initialState = {
    login : {id : "", pwd : ""},
    register : {id : "", pwd : "", name : "", addr : ""},
    data : null,
    loading : false,
    error : null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT" : 
            return {
                ...state, [action.form] : {...state[action.form], [action.name] : action.value}
            }
        case "LIST" : 
            return {...state, data : action.data}
        case "LOADING" : 
            console.log('-----loading-----')
            return { ...state, loading : true, error : null}
        case "FINISHED" : 
            console.log('-----finished-----')
            return { ...state, loading : false, error : null}
        case "ERROR" : 
            return {...state, loading : false, error : action.error}
        default : 
            return state;
    }
}

export {initialState, reducer}