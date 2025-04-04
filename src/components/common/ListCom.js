import { Link } from "react-router-dom"

const ListCom = ({data, loading, error}) => {
    return (
        <>
            <h3>멤버 목록</h3>
            {loading ? <h3> 목록을 불러오고 있습니다...</h3> : 
                error ? <h3> {error} </h3> :

                <table>
                    <thead>
                        <tr>
                            <th>아이디</th>
                            <th>이름</th>
                            <th>주소</th>
                        </tr>
                    </thead>
                    <tbody>

                    {data && data.map( item => 
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                            <Link to={"/member/one?id="+item.id}>{item.name}</Link>
                        </td>
                        <td>{item.addr}</td>
                    </tr>
                    )}
                    </tbody>
                </table>
}
        </>
    )
}

export default ListCom