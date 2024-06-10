import "./Navbar.css"
import { Link } from "react-scroll"
import React,{useState, useEffect} from "react"
import logo from '../../assets/logo.png'
import menu from '../../assets/menu-icon.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const togg = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)

  }
  return (
   <nav className={`container ${sticky ? 'dark-nav' : ''}` }>
    <h1 className="hhh1" >JellyU&C</h1>
    <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li> <Link to='header' offset={0} smooth={true} duration={500} >Home</Link> </li>  
        <li> <Link to='programs' offset={-260} smooth={true} duration={500} >Programs</Link></li>  
        <li> <Link to='about' offset={-150} smooth={true} duration={500} >About Us</Link></li>  
        <li><Link to='campus' offset={-260} smooth={true} duration={500} >Campus</Link></li>  
        <li><Link to='testimonials' offset={-150} smooth={true} duration={500} >testimmonials</Link></li> 
        <li> <Link to='contact' offset={-260} smooth={true} duration={500} className="btn" >Contact us</Link> </li> 
    </ul>
    <img src={menu} alt="" onClick={togg} className="menu-icon" />
   </nav>
  )
}

export default Navbar