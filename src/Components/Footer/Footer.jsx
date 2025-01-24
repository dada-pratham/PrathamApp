import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <>
        <div>
            {/* Footer */}
           <footer className="footer">
                <div className="container">
                 <p>&copy; 2025 PRATHAM APP. All rights reserved.</p>
                 <p>
                   Follow us:
                   <Link href="#" className="social-link">Facebook</Link>
                   <Link href="#" className="social-link">Twitter</Link>
                   <Link href="#" className="social-link">Instagram</Link>
                 </p>
                </div>
          </footer>
      </div>
    </>

  ) 
}

export default Footer