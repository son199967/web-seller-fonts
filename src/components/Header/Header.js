import React from 'react';
import { Route , withRouter} from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
function Header(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    if(props.location.pathname === '/') {
        title = 'Welcome'
    }
    function loginForm() {
        props.history.push('/login')
	}
	function home() {
        props.history.push('/')
	}
	function register() {
        props.history.push('/register')
    }
    function myaccount() {
        props.history.push('/myaccount')
    }
    function logout() {
       localStorage.setItem(ACCESS_TOKEN_NAME,null)
       props.history.push('/')
    }
    function hasLogin() {
        return <ul class="header-links pull-right">
        <li><a href="#" onClick={myaccount}><i class="fa fa-sign-in"></i>MyAccount</a></li>
        <li><a href="#" onClick={logout}><i class="fa fa-sign-in"></i>Logout</a></li>

    </ul>;
    }
    function hasLogout() {
       return <ul class="header-links pull-right">
       <li><a href="#" onClick={register}><i class="fa fa-sign-in"></i>Đăng Kí</a></li>
       <li><a href="#" onClick={loginForm}><i class="fa fa-user-o"></i> Đăng Nhập</a></li>
   </ul>;
    }
    function checklogin() {
        const checkLoginK=localStorage.getItem(ACCESS_TOKEN_NAME);
        console.log("localk",checkLoginK);
       if(checkLoginK==="null"||checkLoginK===null){
        return <ul class="header-links pull-right">
       <li><a href="#" onClick={register}><i class="fa fa-sign-in"></i>Đăng Kí</a></li>
       <li><a href="#" onClick={loginForm}><i class="fa fa-user-o"></i> Đăng Nhập</a></li>
         </ul>;  
       }
       return <ul class="header-links pull-right">
        <li><a href="#" onClick={myaccount}><i class="fa fa-sign-in"></i>MyAccount</a></li>
        <li><a href="#" onClick={logout}><i class="fa fa-sign-in"></i>Logout</a></li>

    </ul>;

      
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
					{checklogin()}
				</div>
</div>
</header>
    )
}
export default withRouter(Header);