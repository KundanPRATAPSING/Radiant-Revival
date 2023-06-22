import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import ContactUs from '../Home/Components/ContactUs';
import SettingsInfo from '../Home/Components/SettingsInfo';

export default function Settings(props) {

    const location = useLocation();
    const profileInfo = location.state;

   return (
        <>
            {/* <!-- Navbar top --> */}
            <div className="navbar-top">
                <div className="title">
                    <h1>Profile</h1>
                </div>

                {/* <!-- Navbar --> */}
                <ul>
                    <li>
                        <Link to="/home">
                            <i className="fa fa-home fa-2x"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout">
                            <i className="fa fa-sign-out-alt fa-2x"></i>
                        </Link>
                    </li>
                </ul>
                {/* <!-- End --> */}
            </div>
            {/* <!-- End --> */}

            {/* <!-- Sidenav --> */}
            <div className="sidenav">
                <div className="profile">
                    <img
                        src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png"
                        alt=""
                        width="100"
                        height="100"
                    />

                    <div className="name"> {profileInfo.username} </div>
                    <div className="job"> Customer </div>
                </div>

                <div className="sidenav-url">
                    <div className="url">
                        <Link to="/settings" state={profileInfo} className="active">
                            Settings
                        </Link>
                        <hr align="center" />
                    </div>
                    <div className="url">
                        <Link to = "/profile" state={profileInfo} > Profile </Link>
                        <hr align="center" />
                    </div>
                </div>
            </div>
            {/* <!-- End --> */}

            {/* <!-- Main --> */}
            <div className="main">
                <SettingsInfo profileInfo = {profileInfo} />

                <ContactUs />

            </div>
            {/* <!-- End --> */}
        </>
    );
}

