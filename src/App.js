import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import HeaderCon from './containers/HeaderCon';
import MemberOnePage from './pages/MemberOnePage';
import ModifyOnePage from './pages/ModifyOnePage';

function App() {
  return (
    <>
    <HeaderCon/>
    <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/member">
          <Route path='list' element={<ListPage/>}/>
          <Route path='one' element={<MemberOnePage/>}/>
          <Route path='modify/:id' element={<ModifyOnePage/>}/>
        </Route>
    </Routes>
    </>
  );
}

export default App;
