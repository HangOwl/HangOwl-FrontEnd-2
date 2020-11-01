import React, { useState, useEffect, useRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, Redirect } from 'react-router-dom';
import { SidebarData2 } from './SidebarData2';
import './Navbar.css';
import { IconContext } from 'react-icons';
import {Input, Modal, Sidebar} from 'semantic-ui-react';
import MyModal from '../../Modal';
import logo from '../../Pics/HangOwlLogo.png';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [sidestate, setSidestate] = useState(false);
  const [modalPath, setModalPath] = useState(null);
  const [changePage, setChangePage] = useState(false);
  const [term, setTerm] = useState('');
  const ref = useRef();

  const showSidebar = () => {
    setSidebar(!sidebar)
    console.log('show sidebar', sidebar);
  };

  const handleChange = (item) => {
    setSidestate(!sidestate);
    setModalPath(item);
  };

  const handleChange2 = () => {
    //onsole.log('naboon');
    setSidestate(false);
  }

  useEffect(() => {        
      const timeoutId = setTimeout(() => {
        if (term){
          console.log(term);
          setChangePage(true);
        }
        setChangePage(false);
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
        setChangePage(false);
      }
  }, [term]);

  //console.log('change page: ', changePage);
  if(changePage && term.length !== 0){
    return<Redirect to='/searchresult/' />
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={() => {showSidebar(); handleChange2();}} />
          </Link>
          
          <Link to='/customerhome'><img className="logo_photo" src={logo} /></Link>

          {/* <div className="search_box ui right floated"> */}
            <Input size='big' className="search_bar" icon='search' placeholder='Search...' onChange={(e) => setTerm(e.target.value)}/>
          {/* </div> */}
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData2.map((item, index) => {
              return (
                <div onClick={() => handleChange(item.path)} >
                <li key={index} className={item.cName}>
                      <Link to={item.path}>
                          {item.icon}
                          {item.title}
                      </Link> 
                </li>
                </div>
              );
            })}
            {/* <div ref={ref} className="fuck" />
            {console.log('modal' , sidestate)} */}

            {/* <MyModal items={modalPath} mystate={sidestate}/>
              {console.log('side state: ',sidestate)} */}

          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;