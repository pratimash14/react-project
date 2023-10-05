import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import SearchModal from './SearchModal';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

const Header =()=>{
    const locale = 'en';
    const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

    const year = new Date().getFullYear();
    // const day = today.toLocaleDateString(locale, { weekday: 'long' });
    // const date = `${day}, ${today.toLocaleDateString(locale, { month: 'long' })}${today.getDate()},${year} \n\n`;
    const date = `${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}  ${year} \n\n`;

    const hour = today.getHours();
    //const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
    const [search, setSearch] = useState();

    const [searchHead, SetSHead] = useState('template-search');
    const inputData=(event)=>{
        setSearch(event.target.value);
      }
      const history = useHistory();
      const getSearchData = () =>{
        // alert('rr');
  
        let path = `/search/`+search;
        //setShow(false);
        history.push(path);
        // window.open("/category/india/"+search)
      }
      const onSubmit = (e) => {
        e.preventDefault()
        // const { name, email, message } = e.target.elements
        // let searchData = {
        //   name: search
       
        // }
        // localStorage.removeItem('searchData');

        // localStorage.clear();

        // localStorage.setItem('searchData', search);

        let path = `/search/` +search;
            SetSHead('template-search')
        history.push(path);

        // console.log(conFom)
      }

    return (
        <>
        <header>
            <div id="cbx-header" className="cbx-header">
                <div className="cbx-header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-8 col-sm-7">
                            <ul className="list-inline list-unstyled cbx-top-left" >
                                    <li>{date}</li>
                                    <li>{time}</li>
                                </ul>
                            </div>
                            <div className="col-xs-4 col-sm-5">
                                <ul className="cbx-top-right share">			
                                    <li><NavLink to ="#" title="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></NavLink></li>
                                    <li><NavLink to ="#" title="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></NavLink></li>
                                    <li><a href ="https://www.youtube.com/user/BollywoodCountry" target="_blank" title="youtube"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                                    <li><NavLink to ="#" title="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cbx-header-logo">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="logo-area">
                                    <NavLink className="cbx-logo" to="/">
                                        <img src="/assets/img/bollywood-logo.png" alt=""/>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="menu-offscroll" className="cbx-mainmenu cbx-mainmenu-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div id="menu-offscrolls" className="navbar navbar-default yamm cbx-navbar">
                                    <div className="navbar-header cbx-navbar-header">
                                        <button className="navbar-toggle collapsed" data-target="#navbar-collapse-grid"
                                                data-toggle="collapse" type="button" aria-expanded="false">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>

                                        <div className="cbx-search hidden-sm hidden-md hidden-lg">
                                            <form onSubmit={onSubmit}>
                                                <input className="search" type="text"
                                                        placeholder="What're we looking for ?" onChange={inputData} name="search" value={search}/>
                                                {/* <NavLink className="search_submit" to="#"> */}
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                {/* </NavLink> */}
                                            </form>
                                        </div>

                                    </div>
                                    <div id="navbar-collapse-grid" className="navbar-collapse collapse cbx-main-nav" role="menu"
                                            aria-expanded="false" >
                                        <ul className="nav navbar-nav cbx-navbar-nav">
                                            <li className="text-center hidden-sm hidden-md">
                                             <NavLink to="/category/bollywood">Bollywood</NavLink>
                                            </li>
                                            <li className="text-center hidden-sm hidden-md">
                                                <NavLink to="/category/hollywood">Hollywood</NavLink>
                                            </li>
                                            <li className="dropdown text-center cbx-single-dropdown">
                                                <NavLink id="cbx-dropdownone" className="dropdown-toggle" to="/category/fashion" aria-expanded="false">Fashion<b className="caret  hidden-xs"></b></NavLink>
                                                <ul className="dropdown-menu cbx-dropdown-menu multi-level cbx-dropdown-menu-common  hidden-xs"
                                                role="menu" aria-labelledby="cbx-dropdownone">
                                                    <li className="dropdown-submenu">
                                                        <NavLink to="/category/beauty">Beauty</NavLink>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="dropdown text-center cbx-single-dropdown">
                                                <NavLink id="cbx-dropdownone" className="dropdown-toggle" to="#" aria-expanded="false">Special<b className="caret  hidden-xs"></b></NavLink>
                                                <ul className="dropdown-menu cbx-dropdown-menu multi-level cbx-dropdown-menu-common  hidden-xs"
                                                role="menu" aria-labelledby="cbx-dropdownone">
                                                    <li className="text-center hidden-sm hidden-md">
                                                        <NavLink to="/category/business">Business</NavLink>
                                                    </li> 
                                                </ul>
                                            </li>

                                            <li className="text-center hidden-sm hidden-md">
                                                <NavLink to ="/category/tv">TV</NavLink>
                                            </li>
                                            <li className="text-center hidden-sm hidden-md">
                                                <NavLink to ="/category/tattle">TATTLE</NavLink>
                                            </li>
                                            <li className="text-center hidden-sm hidden-md">
                                                <NavLink to ="/category/ott">OTT</NavLink>
                                            </li>
                                            <li className="text-center hidden-sm hidden-md">
                                                <NavLink to ="/category/music">Music</NavLink>
                                            </li>
                                            <li className="text-center hidden-sm hidden-md">
                                             <NavLink to ="/category/regional-cinema">Regional</NavLink>
                                            </li>
                                            <li className="cbx-search hidden-xs">
                                            <form onSubmit={onSubmit} >

                                            <input className="search" type="text"
                                            placeholder="What're we looking for ?" onChange={inputData} name="search" value={search}/>                       
                                            <NavLink className="search_submit" to="#">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                            </NavLink>
                                            </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}
export default Header;

