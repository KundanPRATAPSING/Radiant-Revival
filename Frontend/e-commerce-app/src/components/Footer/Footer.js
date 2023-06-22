import React from 'react'
import "../../assets/styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Radiant Revival! All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
