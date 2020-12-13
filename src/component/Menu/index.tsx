/*eslint-disable*/
import { NavLink, Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="container-fluid bg-faded fh5co_padd_mediya padding_786">
                <div className="container padding_786">
                    <nav className="navbar navbar-toggleable-md navbar-light ">
                        <button className="navbar-toggler navbar-toggler-right mt-3" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation"><span className="fa fa-bars"></span></button>
                        <a className="navbar-brand" href="#"><img src="images/logo.png" alt="img" className="mobile_logo_width" /></a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item ">
                                    <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                                </li>
                                <NavLink exact to='/regist' activeClassName="active">
                                    <li className="nav-item ">
                                        <a className="nav-link" href="blog.html">Regist RSS<span className="sr-only">(current)</span></a>
                                    </li>
                                </NavLink>
                                <NavLink exact to='/contact' activeClassName="active">
                                    <li className="nav-item ">
                                        <a className="nav-link" href="blog.html">Contact Us<span className="sr-only">(current)</span></a>
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
    );
}