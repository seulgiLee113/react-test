import { useEffect, useReducer } from "react";
import { initialState, reducer } from "../modules/member_red";
import ListCom from "../components/common/ListCom";
import { getList } from "../service/member";

const ListCon = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    useEffect( () => {

        try{
            dispatch({type : "LOADING"})
            setTimeout( () => {
                const data = getList();
                dispatch({type : "FINISHED"})
                dispatch({type : "LIST", data})
            }, 2000)
        } catch (e) {
            dispatch( {type : "ERROR", error:e.toString() })
        }
        
    }, [])
    
    // console.log("ListCon....state : ", state);
    
    return (
        <>
            <ListCom data={state.data} loading={state.loading} error={state.error}/>
        </>
    )
    
}

export default ListCon