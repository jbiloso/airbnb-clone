import {Route, Routes} from 'react-router-dom'
import './App.css';

//layout
import Layout from './layout/Layout'

//pages
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'



function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout/> }>
        <Route index element={<IndexPage/>}/> 
        <Route path='/login' element={<LoginPage/>}/> 
      </Route>
    </Routes>

  );
}

export default App;
