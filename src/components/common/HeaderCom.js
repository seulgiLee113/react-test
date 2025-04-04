import { Link, Outlet } from "react-router-dom"

const HeaderCom = ({isLoggedIn, user, onLogout}) => {
    return (
        <div>
            <header>
                <Link to="/">HOME</Link> &nbsp;
                <Link to="/member/list">MEMBER</Link> &nbsp;

                {isLoggedIn ? <>
                    {user}님 안녕하세요. &nbsp;
                    <Link to="/login" onClick={onLogout}>LOGOUT</Link> 
                    </> : 
                    <Link to="/login">LOGIN</Link>
                } &nbsp;
                <hr/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default HeaderCom