import React from 'react'
import { Link, useLocation } from 'react-router-dom';

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
                <h2>IDENTITY</h2>
                <div className="card">
                    <div className="card-body">
                        <i className="fa fa-pen fa-xs edit"></i>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>:</td>
                                    <td> {profileInfo.name} </td>
                                    <td> <Link to = "/updateName" state={profileInfo} > <i className="fas fa-edit" >  </i> </Link> </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>:</td>
                                    <td> {profileInfo.email} </td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>:</td>
                                    <td> {profileInfo.address} </td>
                                    <td>  <i className="fas fa-edit"></i> </td>
                                </tr>
                                <tr>
                                    <td>Phone Number</td>
                                    <td>:</td>
                                    <td> {profileInfo.phoneNumber} </td>
                                    <td>  <i className="fas fa-edit"></i> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Contact Us</h2>
                <div className="card">
                    <div className="card-body">
                        <i className="fa fa-pen fa-xs edit"></i>
                        <div className="social-media">
                            {/* <!-- facebook --> */}
                            <span className="fa-stack fa-sm">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <Link to="{{url_for('facebook')}}">
                                    {" "}
                                    <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>{" "}
                                </Link>
                            </span>

                            {/* <!-- twitter  --> */}
                            <span className="fa-stack fa-sm">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <Link to="{{url_for('twitter')}}">
                                    {" "}
                                    <i className="fab fa-twitter fa-stack-1x fa-inverse">
                                        {" "}
                                    </i>{" "}
                                </Link>
                            </span>

                            {/* <!-- instagram --> */}
                            <span className="fa-stack fa-sm">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <Link to="{{ url_for('instagram') }}">
                                    {" "}
                                    <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>{" "}
                                </Link>
                            </span>

                            {/* <!-- linkedin --> */}
                            <span className="fa-stack fa-sm">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <Link to="{{ url_for('linkedin') }}">
                                    {" "}
                                    <i className="fab fa-invision fa-stack-1x fa-inverse"></i>{" "}
                                </Link>
                            </span>

                            {/* <!-- whatsapp  --> */}
                            <span className="fa-stack fa-sm">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <Link to="{{ url_for('whatsapp') }}">
                                    {" "}
                                    <i className="fab fa-whatsapp fa-stack-1x fa-inverse"></i>{" "}
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End --> */}
        </>
    );
}

