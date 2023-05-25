import{Route, Routes } from 'react-router-dom';
import Albums from './components/albums';
import Axion from './components/axion';
import Cmtdetail from './components/cmtdetail';
import Comments from './components/comments';
import Form from './components/Form';
import Header from './components/header';
import Input from './components/input';
import Mostpp from './components/mostpp';
import Photos from './components/photos';
import Postdetail from './components/postdetail';
import Posts from './components/posts';
import Sports from './components/sports';
import Todos from './components/todos';
import Trend from './components/trend';
import Users from './components/users';


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Trend />} />
      <Route path="/categories" element={<Mostpp/>}/>
      <Route path="/sports" element={<Sports/>}/>
      <Route path="/axion" element={<Axion/>}/>
      <Route path='/Form' element={<Form/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/posts/:id' element={<Postdetail/>}/>
      <Route path='/comments' element={<Comments/>}/>
      <Route path='/posts/:id/comments' element={<Cmtdetail/>}/>
      <Route path='/albums' element={<Albums/>}/>
      <Route path='/photos' element={<Photos/>}/>
      <Route path='/todos' element={<Todos/>}/>
      <Route path='/users' element={<Users/>}/>
    </Routes> 
   <Input/>
    </>
   )
  }
export default App;
