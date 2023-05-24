const initialState = {
    title: 'old title',
    titleTwo: 'title two'
}


export default function reducer(state = initialState, action){

    console.log(action)

    if(action.type === 'CHANGE_TITLE'){
        return{
            ...state,
            title: 'New title'
        }
    }

    else if(action.type === "CHANGE_WITH_PARAMS"){
        return {
            ...state,
            title: action.payload
        }
    }
    else if (action.type === "FROM_INPUT"){
        return {
            ...state,
            title: action.payload
        }
    }
    else if (action.type === "DELETED"){
        return {
            ...state,
            title: ""
        }
    }

    return state

}