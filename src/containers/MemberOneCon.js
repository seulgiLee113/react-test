import { useNavigate, useSearchParams } from "react-router-dom";
import MemberOneCom from "../components/MemberOneCom"
import { useContext, useEffect, useReducer, useState } from "react";
import { deleteOne, getOne } from "../service/member";
import { AuthContext } from "../store/AuthContext";
import { initialState, reducer } from "../modules/member_red";
import { type } from "@testing-library/user-event/dist/type";


const MemberOneCon = () => {

    const {auth, logout} = useContext(AuthContext);
    const loginUser = auth.user

    const [userData, setUserData] = useState({});
    const [params] = useSearchParams();

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect( () => {
        const id = params.get("id");
        setUserData(getOne(id));
    }, [params]);

    const navigate = useNavigate();
    

    const onModify = (id) => {
        navigate("/member/modify/" + id);
    }

    const onDelete = (id) => {
        try {
            dispatch({type: "LOADING"})
            const result = deleteOne(id);
            dispatch({type: "FINISHED"})
            
            if (result === 1) {
                alert("삭제하였습니다.");
                logout();
                navigate("/");
            }
        } catch (e) {
            dispatch({type : "ERROR", error : e.toString()})
        }
    }


    return (
        <>
            <MemberOneCom userData={userData} loginUser={loginUser}
                            onModify={onModify} onDelete={onDelete}/>
        </>
    )
}

export default MemberOneCon