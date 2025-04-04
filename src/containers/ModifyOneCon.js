import { useEffect, useReducer, useState } from "react"
import ModifyOneCom from "../components/ModifyOneCom"
import { useNavigate, useParams } from "react-router-dom";
import { getOne, modifyOne } from "../service/member";
import { initialState, reducer } from "../modules/member_red";

const ModifyOneCon = () => {

    const [userData, setUserData] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect( () => {
        setUserData(getOne(params.id));
    }, [params])

    const onChange = (e) => {
        setUserData( {...userData, [e.target.name] : e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        try {
            dispatch({type : "LOADING"})
            modifyOne(userData);
            navigate("/member/one?id=" + userData.id);
            dispatch({type : "FINISHED"})
            
        } catch (e) {
            dispatch({type : "ERROR", error : e.toString()})
        }

        // modifyOne(userData);
        // navigate("/member/one?id=" + userData.id);
    }


    return (
        <>
            <ModifyOneCom userData={userData} onChange={onChange} onSubmit={onSubmit}/>
        </>
    )
}

export default ModifyOneCon