import React from 'react';
import { withRouter } from "react-router-dom";
import { API_BASE_URL } from '../../constants/apiContants';
function Header(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    if(props.location.pathname === '/') {
        title = 'Welcome'
    }
    // function renderLogout() {
    //     if(props.location.pathname === '/home'){
    //         return(
    //             <div className="ml-auto">
    //                 <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
    //             </div>
    //         )
    //     }
    // }
    function loginForm() {
        props.history.push('/login')
	}
	function home() {
        props.history.push('/')
	}
	function register() {
        props.history.push('/register')
    }
    return(
        // <nav className="navbar navbar-dark bg-primary">
        //     <div className ="row col-12 d-flex justify-content-center text-white">
        //         <img src="https://anphat.com.vn/media/banner/24_Auga1b049b3db2563cb3aa46dc7d71b4ac7.jpg"></img>
        //     </div>
        //     <div className="row col-12 d-flex justify-content-center text-white">
        //         <span className="h3">{props.title || title}</span>
        //         {renderLogout()}
        //     </div>
        // </nav>
        <header>
            <div id="top-header">
				<div class="container">
					<ul class="header-links pull-left">
						<li><a href="#"><i class="fa fa-phone"></i> +021-95-51-84</a></li>
						<li><a href="#"><i class="fa fa-envelope-o"></i> email@email.com</a></li>
						<li><a href="#"><i class="fa fa-map-marker"></i> 1734 Stonecoal Road</a></li>
					</ul>
					<ul class="header-links pull-right">
						<li><a href="#" onClick={register}><i class="fa fa-sign-in"></i>Đăng Kí</a></li>
						<li><a href="#" onClick={loginForm}><i class="fa fa-user-o"></i> Đăng Nhập</a></li>
					</ul>
				</div>
</div>
</header>
    )
}
export default withRouter(Header);