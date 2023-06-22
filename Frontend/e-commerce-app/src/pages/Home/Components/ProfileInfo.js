import React from "react";

export default function ProfileInfo({ profileInfo }) {
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
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>:</td>
                <td> {profileInfo.phoneNumber} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
