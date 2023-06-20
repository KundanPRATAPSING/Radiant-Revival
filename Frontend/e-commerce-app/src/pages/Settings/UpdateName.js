import { React, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getSessionData } from "../Session/Session";

export default function UpdateName(props) {
    const location = useLocation();
    const profileInfo = location.state;
    const navigate = useNavigate();
    const userEmail = getSessionData("userSession");

    const nameImage = require("../../assets/images/name.png");
    const newNameImage = require("../../assets/images/new_name.png");
    const updateNameImage = require("../../assets/images/update_name.png");
    const loginLeftImage = require("../../assets/images/login_left.png");

    const [newName, setNewName] = useState("");
    const [isUpdated, setIsUpdated] = useState(false)
    const [formErrors,setFormErrors] = useState({})

    function cancelChange(){
        navigate(-1);
    }

    function handleNameChange(e) {
        setNewName(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const [changeErrors, updateError] = await Promise.all([validateChange(), validateUpdate()]);

        const hasChangeErrors = changeErrors && Object.keys(changeErrors).length > 0;
        const hasUpdateError = updateError && Object.keys(updateError).length > 0;

        setFormErrors({
            ...changeErrors,
            ...updateError,
        });

        if (!hasChangeErrors && !hasUpdateError) {
            setIsUpdated(true)
        }
    }


    async function validateUpdate() {
        const updateData = {
            email: userEmail.email,
            name: newName, // Example: New name to update
        };

        try {
            const response = await fetch("http://localhost:8080/updateName", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateData),
            });

            if (response.ok) {
                await response.json();
                console.log("Update successful:");
            } else {
                await response.json();
                console.error("Update failed:");
            }
        } catch (error) {
            console.error("Update failed:", error);
        }
    }

    function validateChange() {
        const errors = {};

        if (newName === "") {
            errors.update = "Field cannot be empty";
        }

        if(newName === profileInfo.name){
            errors.sameName = "New name cannot be same as the current"
        }

        return errors;
    }

    useEffect(()  => {
        if(Object.keys(formErrors).length === 0 && isUpdated === true){
            console.log('Updated')
            try {
                navigate("/home", { state: { isNameUpdated: true } });
            } catch (error) {
                console.error("Error occurred during navigation:", error);
            }
        }
    },[formErrors,isUpdated,navigate])

    return (
        <div className="LoginPageContainer">
            <div className="LoginPageInnerContainer">
                <div className="ImageContianer">
                    <img src={loginLeftImage} className="GroupImage" alt="..." />
                </div>

                <div className="LoginFormContainer">
                    <div className="LoginFormInnerContainer">
                        <div className="LogoContainer">
                            <img src={updateNameImage} className="logo" alt="..." />
                        </div>
                        <header className="header">Update Name</header>
                        <header className="subHeader">
                            Did not like the name <b>Don't worry!</b> Update with the one you
                            like😇
                        </header>

                        <form onSubmit={handleSubmit} method="POST">
                            {/* <!-- Name  --> */}
                            <div className="inputContainer">
                                <label className="label" htmlFor="name">
                                    <img src={nameImage} className="labelIcon" alt="..." />
                                    <span>Current Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="input"
                                    id="name"
                                    placeholder="Your current name"
                                    value={profileInfo.name}
                                    readOnly
                                />
                            </div>

                            {/* <!-- New Name  --> */}
                            <div className="inputContainer">
                                <label className="label" htmlFor="update_name">
                                    <img src={newNameImage} className="labelIcon" alt="..." />
                                    <span>New Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="update_name"
                                    className="input"
                                    id="update_name"
                                    placeholder="Enter your new name"
                                    value={newName}
                                    onChange={handleNameChange}
                                />
                            </div>

                            {/* Display Error Message  */}
                            {formErrors.update && (
                                    <div className="alert alert-danger" role="alert">
                                        {formErrors.update}
                                    </div>
                                )}

                            {formErrors.sameName && (
                                    <div className="alert alert-warning" role="alert">
                                        {formErrors.sameName}
                                    </div>
                                )}

                            <button className="LoginButton" type="submit">
                                {" "}
                                Update{" "}
                            </button>
                            <button className="LoginButton" type="button" onClick = {cancelChange} >
                                {" "}
                                Cancel{" "}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
