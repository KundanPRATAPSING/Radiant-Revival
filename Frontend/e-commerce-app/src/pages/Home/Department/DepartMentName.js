import React from 'react'

export default function DepartMentName({departmentName}) {
  return (
    <div className="container" id="depart">
        <h3 className="d-flex justify-content-center justify-content-sm-start mt-5 mb-3">
          Department - {departmentName}
        </h3>
      </div>
  )
}
