import logo from '../../assets/logo.png';
import con from '../../assets/con.png';
import { Link, useLocation, useNavigation } from 'react-router';
import { useEffect, useState } from 'react';
import Loading from '../../pages/Loading';

const Navbar = () => {
    const location=useLocation();
    const navigation=useNavigation();
    const [isLoading,setIsLoading]=useState(false);

    useEffect(()=>{
        navigation.state==="loading"?setIsLoading(true):setTimeout(() => {
            setIsLoading(false)
        },400);
    },[navigation.state])

    const navs=[{name:"Home", path:'/'},{name:"Apps", path:"/Apps"},{name:"Installation", path:"/Installation"}]
    return (
        <>
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navs.map(nav=>(
                                <li key={nav.name}>
                                        <Link to={nav.path} 
                                            className={`${location.pathname===nav.path? "font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-2 border-[#632EE3]": "font-bold"}`}>
                                            {nav.name}
                                        </Link> 
                                    </li>
                            ))
                        }
                    </ul>
                    </div>
                    <Link to='/'>
                        <div className='flex items-center gap-1'>
                            <img className='w-10 h-10' src={logo} alt="logo" srcset="" />
                            <a className="text-[16px] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</a>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className='flex gap-3 cursor-pointer'>
                        {
                            navs.map(nav=>(
                                <li key={nav.name}>
                                        <Link to={nav.path} 
                                            className={`${location.pathname===nav.path? "font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-2 border-[#632EE3]": "font-bold"}`}>
                                            {nav.name}
                                        </Link> 
                                    </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://github.com/Rad0130' className='flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2 rounded-[5px]'>
                        <img src={con} alt="con" srcset="" />
                        <h3 className='text-white font-bold'>Contribute</h3>
                    </a>
                </div>
            </div>
        </div>
        {
            isLoading && <div><Loading></Loading></div>
        }
        </>
    );
};

export default Navbar;