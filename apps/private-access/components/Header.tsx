import React from 'react'
import Image from 'next/image'
import SubHeader from './SubHeader'
import Link from 'next/link'

const Header = () => {
  return (
    <header id="myHeader">
      <SubHeader />
      <nav className="navbar navbar-expand-sm navbar-light mainNav">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="account account-m">
              {/* <Image src="/images/profile-pic-default.svg" alt="Profile Image" width="48" height="48" className="avatar" /> */}
              <p tabIndex={0}>Welcome,<br /><span className="name">Mrs. Van</span></p>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/" >Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header