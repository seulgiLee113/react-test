const ModifyOneCom = ({userData, onChange, onSubmit}) => {

    return (
        <>
             <form onSubmit={onSubmit}>
                <input type="text" name="id" onChange={onChange} value={userData.id || ""} readOnly/><br/>
                <input type="password" name="pwd" onChange={onChange} value={userData.pwd || ""} /><br/>
                <input type="text" name="name" onChange={onChange} value={userData.name || ""}/><br/>
                <input type="text" name="addr" onChange={onChange} value={userData.addr || ""}/><br/>
                <button>수정</button>
            </form>
        </>
    )
}

export default ModifyOneCom