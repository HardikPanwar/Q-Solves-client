import axios from "axios"

export const createKit=(title,content,navigate)=> async (dispatch)=> {
    try {
        const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/kit/create/`,{title,content});
        dispatch({type: 'POST_QUESTION',payload: data})
        // dispatch(fetchAllKits());
        navigate('/kit');
    }
    catch(error) {
        console.log(error)
    }
}

export const fetchAllKits=()=> async (dispatch) => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/kit/getAll/`);
        dispatch({type: 'FETCH_ALL_KIT',payload: data})
    }
    catch(error) {
        console.log(error)
    }
}

export const getMetaData = ()=> async (dispatch) => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/kit/getMetaData/`);
        dispatch({type: 'FETCH_METADATA',payload: data.data})
    }
    catch(error) {
        console.log(error)
    }
}