import React from "react";
import { Link } from 'react-router-dom';

export default function SettingsInfo({ profileInfo }) {
  return (
    <>
      <h2>IDENTITY</h2>
      <div className="card">
        <div className="card-body">
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td> {profileInfo.name} </td>
                <td>
                  {" "}
                  <Link to="/updateName" state={profileInfo}>
                    {" "}
                    <i className="fas fa-edit"> </i>{" "}
                  </Link>{" "}
                </td>
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
                <td>
                  {" "}
                  <Link to="/updateAddress" state={profileInfo}>
                    {" "}
                    <i className="fas fa-edit"> </i>{" "}
                  </Link>{" "}
                </td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>:</td>
                <td> {profileInfo.phoneNumber} </td>
                <td>
                  {" "}
                  <Link to="/updatePhone" state={profileInfo}>
                    {" "}
                    <i className="fas fa-edit"> </i>{" "}
                  </Link>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
