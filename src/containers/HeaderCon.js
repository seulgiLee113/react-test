import { useContext } from "react"
import HeaderCom from "../components/common/HeaderCom"
import { AuthContext } from "../store/AuthContext"

const HeaderCon = () => {

    const {auth, logout} = useContext(AuthContext);

    const onLogout = (e) => {
        // console.log("----로그아웃----")
        e.preventDefault()
        logout();
    }

    return (
        <>
            <HeaderCom isLoggedIn={auth.isLoggedIn} user={auth.user} onLogout={onLogout}/>
        </>
    )
}

export default HeaderCon