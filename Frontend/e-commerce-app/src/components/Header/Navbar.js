import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../pages/Home/Home.css";
import { getSessionData } from "../../pages/Session/Session";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [profileInfo, setProfileInfo] = useState({})

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const user = getSessionData("userSession");
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
            navigate("/", { replace: true });
        }
    }, [navigate, user]);

    useEffect(() => {
        let isMounted = true; // Create a variable to track the mounted state

        fetchProfileData()
            .then(data => {
                if (isMounted) {
                    setProfileInfo(data);
                }
            })
            .catch(error => {
                console.log(error);
            });

        async function fetchProfileData() {
            const response = await fetch('http://localhost:8080/profile', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            return await response.json();
        }

        // Cleanup function to stop the execution
        return () => {
            isMounted = false;
        };
    }, [user]);

    return (
        <>
            <div className="container-fluid b25">
                <div className="row align-items-center p-2 b25 text-light">
                    <div className="col-md-3 d-none d-md-block h4 my-2">
                        (+91) 987-297-2339
                    </div>
                    <div className="col-md-7 d-none d-md-block h2 text-center my-2">
                        Welcome to Radiant Revival!
                    </div>

                    {/* <!-- Logout  --> */}
                    <div className="col-6 col-md-2 pr-3">
                        <div className="dropdown float-right">
                            <button
                                className="btn b1 text-white dropdown-toggle btn-outline-white"
                                type="button"
                                id="dropdownMenuButton"
                                onClick={toggleDropdown}
                            >
                                My account
                            </button>
                            <div
                                className={`dropdown-menu dropdown-menu-right${isDropdownOpen ? " show" : ""
                                    }`}
                                aria-labelledby="dropdownMenuButton"
                            >
                                {/* <!-- Profile  --> */}

                                <Link
                                    className="dropdown-item"
                                    to = "/profile"
                                    state={profileInfo}
                                    id="flask_profile"
                                >
                                    Profile
                                </Link>

                                <Link className="dropdown-item" to="{{url_for('myorders')}}">
                                    My orders
                                </Link>
                                <Link className="dropdown-item" to="{{url_for('settings')}}">
                                    Account Settings
                                </Link>
                                {/* <!-- Logout  --> */}
                                <Link className="dropdown-item" to="/logout" id="flask_logout">
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
