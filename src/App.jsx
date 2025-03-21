import './App.css'
import Header from './Compoenents/Header';
import Sidebar from './Compoenents/Sidebar';
import Home from './Compoenents/Home';
import { useState } from 'react';

function App(){

    const [openSidebarToggle,setopenSidebarToggle] = useState(false);

    const openSidebar = () =>{
        setopenSidebarToggle(!openSidebarToggle);
    }
    
    return <>
    <div className='grid-container'>
       <Header  openSidebar={openSidebar}/>
       <Home/>
       <Sidebar openSidebarToggle={openSidebarToggle}  openSidebar={openSidebar}/>
    </div>
    </>
}
export default App;





