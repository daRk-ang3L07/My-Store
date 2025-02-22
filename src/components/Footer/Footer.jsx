import {useContext} from 'react'
import "./Footer.css"
import { ThemeContext } from '../../contexts/DarkModeContext';
import { Link } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin} from "react-icons/fa";
// FaGithubSquare

function Footer() {
   //** toggle dark mode */
  //** use context for global state */
  const {darkMode} = useContext(ThemeContext);
  return (
    <div className={
      darkMode?
      'footer-container'
      :
      'footer-container dark-footer-container'
    }>
      <div className='social-icon-container'>
        <Link to="https://github.com/daRk-ang3L07?tab=overview&from=2025-02-01&to=2025-02-22"> <FaGithubSquare className='social-icons'/></Link>
        <Link to=""><FaLinkedin className='social-icons'/></Link>
      </div>
      <Link to='/contactUs'>Contact Us</Link>
    </div>
  )
}

export default Footer