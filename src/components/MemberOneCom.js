const MemberOneCom = ({onModify, onDelete, userData, loginUser}) => {
    return (
        <>
           {userData &&
           <ul>
                <li>아이디 : {userData.id}</li>
                <li>비밀번호 : {userData.pwd}</li>
                <li>이름 : {userData.name}</li>
                <li>주소 : {userData.addr}</li>
                { loginUser === userData.id && 
                <li>
                    <button onClick={() => onModify(userData.id)}>수정</button>
                    <button onClick={() => onDelete(userData.id)}>삭제</button>
                </li>
                }
           </ul>
           }
        </>
    )
}

export default MemberOneCom