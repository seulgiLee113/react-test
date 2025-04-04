import { useContext, useReducer } from "react"
import LoginCom from "../components/LoginCom"
import { initialState, reducer } from "../modules/member_red"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../store/AuthContext"
import { loginCheck } from "../service/member"

const LoginCon = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch({type : "CHANGE_INPUT", name, value, form : "login"})
    }
    
    //로그인 검증
    const {login} = useContext(AuthContext);
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault();

        try {
            dispatch({type : "LOADING"})
            const result = loginCheck(state.login.id, state.login.pwd)
            dispatch({type : "FINISHED"})
            
            if(result === 0) {
                login(state.login.id) // authContext의 user로 들어감.
                navigate("/")
            } 
        } catch (e) {
            dispatch({type : "ERROR", error : e.toString()})
        }
    }

    return (
        <>
            <LoginCom onChange={onChange} onSubmit={onSubmit} username={state.login.id}
                        password={state.login.pwd} loading={state.loading}/>
        </>
    )
}

export default LoginCon