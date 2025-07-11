import React,{useState} from "react";
import "./navbar.scss";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";



const Navbar = ({ onHomeClick, onMainClick }) => {
  const [active, setActive] = useState('navBar');
  // Toggle Navbar
  const showNav = () => {
    setActive('navBar activeNavbar');
  }

  
  // Close Navbar
  const removeNavbar = () => {
    setActive('navBar');
  }


  return (
    <section className="navBarSection   ">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" /> VivuVietNam
            </h1>
          </a>
        </div>

        <div className= {active}>
          <ul className="navLists flex">
            <li className="navItem">
              <button onClick={onHomeClick}  className="navLink">
                Trang chủ
              </button>
            </li>

            <li className="navItem">
              <button onClick={onMainClick} className="navLink">
                Hành trình
              </button>
            </li>          

            <li className="navItem">
              <button  className="navLink">
                Về chúng tôi
              </button>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Khám phá thêm
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Tin tức
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Liên hệ
              </a>
            </li>

            <button className="btn">
              <a href="#">Đặt ngay</a>
            </button>
          </ul>
          <div onClick={removeNavbar} 
          className="closeNavbar">
            <IoIosCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav}
         className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
        
      </header>
    </section>
  );
};

export default Navbar;
