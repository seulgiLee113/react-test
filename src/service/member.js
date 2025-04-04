let data_set = [
    {id:"111",pwd :"111", name : "홍길동", addr : '산골짜기'},
    {id:"222",pwd :"222", name:'김아무개', addr:'어딘가'},
    {id:"333",pwd :"333", name:'하이미디어', addr:'종로구'},
]

const getList = () => data_set

const getOne = (id) => data_set.filter( (item) => item.id === id)[0]

const loginCheck = (id, pwd) => {
    const data = data_set.filter(data => data.id === id)

    if(data.length !== 0){
        if(data[0].pwd === pwd){
            console.log("-로그인 성공-")
            return 0
        } else {
            console.log("-비밀번호 틀림-")
            return 1
        }
    } else {
        console.log("-존재하지 않는 id-")
        return -1
    }

}

const modifyOne = (userData) => {
    data_set = data_set.map((item)=> item.id === userData.id ? userData : item);
    return 1;
}

const deleteOne = (id) => {
    data_set = data_set.filter((item) => item.id !==id);
    return 1;
}


export {getList, getOne, loginCheck, modifyOne, deleteOne}