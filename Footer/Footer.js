import React from 'react';
import "./Footer.css";

const Footer = () => {

    let date = new Date();

  return (
    <footer className='footer bg-black flex flex-center' id = "footer">
        <div className='container flex flex-center w-100'>
            <div className='grid footer-content text-center'>
                <p className='text-foot'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, reprehenderit!</p>
                <span className='text-foot_2'>&copy; {date.getFullYear().toString()} St. Joseph</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer