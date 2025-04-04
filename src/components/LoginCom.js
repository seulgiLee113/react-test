const LoginCom = ({username, password, loading, onSubmit, onChange}) => {
    return (
        <>
        {loading ? <h3> 로딩중 입니다....</h3> :
        <form onSubmit={onSubmit}>
            <input type="text" name="id" value={username} onChange={onChange} placeholder="아이디"/><br/>
            <input type="text" name="pwd" value={password} onChange={onChange} placeholder="비밀번호"/><br/>
            <button>로그인</button>
        </form>
        }
        </>
    )
}

export default LoginCom