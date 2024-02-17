const kitReducer=(state={data: null},action) => {
    switch(action.type) {
        case 'CREATE_KIT':
            return {...state}
        case 'FETCH_ALL_KIT':
            return {...state,data: action.payload}
        case 'FETCH_METADATA':
            return {...state,metaData: action.payload}
        default:
            return state;
    }
}

export default kitReducer