import logo from './logo.svg';
import './App.css';
import Users from "./components/Users"
import Home from './components/Home';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import UserData from './components/UserData';

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
       < Route path="posts/:id" element={<UserData/>}/>
      </Route>
    </Routes>
  );
}

export default App;
