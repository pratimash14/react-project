import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () =>{
    return (
        <>
    <footer>
    <div id="cbx-footer" className="cbx-footer">
        <div className="container">
            <div className="row">
			<div className="shadow roundBorder1222"> </div>
                <ul>
					<li><NavLink to="/">Home</NavLink></li>
					{/* <li><NavLink to="#">About us</NavLink></li> */}
					{/* <li><NavLink to="#">Feedback</NavLink></li> */}
					{/* <li><NavLink to="#">Contact us</NavLink></li> */}
					<li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
					<li><NavLink to="/terms-and-conditions">Terms &amp; Conditions</NavLink></li>
				</ul>				
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <div className="cbx-footer-bottom text-center ">
                        <hr/>
                        <p>Copyright © 2022 Indo-Asian News Service (IANS) India Private Limited. All Rights Reserved. Web Design by: <NavLink to="http://ianssoftware.com/" target="_parent" title="IANS Software Services">IANS Software Services</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
	<NavLink to="javascript:void(0);" id="return-to-top"><i className="fa fa-angle-up fa-3"></i></NavLink>	
</footer>       
        </>
    )
}
export default Footer