import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, Redirect } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import {Input} from 'semantic-ui-react';
import MyModal from '../../Modal';
import logo from '../../Pics/HangOwlLogo.png';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [sidestate, setSidestate] = useState(false);
  const [modalPath, setModalPath] = useState(null);
  const [changePage, setChangePage] = useState(false);
  const [term, setTerm] = useState('');
  //const ref = useRef();

  const showSidebar = () => {
    setSidebar(!sidebar)
  };

  const handleChange = (item) => {
    setSidestate(true);
    setModalPath(item);
  };
  
  // useEffect( () => {
  //   document.body.addEventListener('click',(event) => {
  //     console.log('event ' , event.target)
  //     if (ref.current.contains(event.target)) {
  //       return ;
  //     }
  //     console.log("fuck")
  //     setSidestate(false);
  //   });
  //   const onBodyClick = (event) =>{
  //     console.log(event.target);
  //     console.log(ref)
  //     if (ref.current.contains(event.target)){
  //         return;
  //     }
  //     setSidestate(false);
  //   };
    
  //   document.body.addEventListener('click', onBodyClick);
  //   console.log(sidestate);
  //   return () => {
  //     document.body.removeEventListener('click', onBodyClick);
  // };
  // },[]);

  // const onSearchSubmit = () =>{
  //   if(changePage){
  //     return <Redirect to='/searchresult/' />
  //   };
  // };

  useEffect(() => {        
      const timeoutId = setTimeout(() => {
        if (term){
          console.log(term);
          setChangePage(true);
        }
        setChangePage(false);
      }, 1000);
      return () => {
        console.log('finish term');
        clearTimeout(timeoutId);
        setChangePage(false);
      }
  }, [term]);

  console.log('change page: ', changePage);
  if(changePage && term.length !== 0){
    return<Redirect to='/searchresult/' />
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          
          <Link to='/'><img className="logo_photo" src={logo} /></Link>

          <div className="search_box ui right floated">
            <Input size='big' className="search_bar" icon='search' placeholder='Search...' onChange={(e) => setTerm(e.target.value)}/>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
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
            {/* <div ref={ref} className="fuck" >
            {console.log('modal' , sidestate) ,
            console.log('ref :' , ref) ,
            console.log("fuck-condition ", ref.current)
            }
             */}
              <MyModal items={modalPath} mystate={sidestate} />
              {console.log(sidestate)}
            {/* </div> */}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;