import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";
import {FaPaperPlane} from "react-icons/fa";

const Header = () => {
  return (
    <>
    <header className='header flex flex-center flex-column'>
        <Navbar />
        <div className='container'>
            <div className='header-content text-center flex flex-column'>
                <h1 className='header-title'>ꜱᴛ. ᴊᴏꜱᴇᴘʜ ꜱᴄʜᴏᴏʟ</h1>
                <p className='text-lead text'>Creating Our Student Future</p>
                <a href = "http://ivs.edupto.com/" target='_blank' className='btn header-btn btn-blue border-radius: 20px'>
                    <FaPaperPlane /> <span><a href="">Login</a></span>
                </a>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header