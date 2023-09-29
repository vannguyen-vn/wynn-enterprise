import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SubHeader = () => {
  return (
    <div className="sub-header">
      <div className="container">
        <div className="dropdown account">
          <Link className="dropdown-toggle welcome-user" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            {/* <Image src="/images/profile-pic-default.svg" alt="Profile Image" width="48" height="48" className="avatar" /> */}
            <p>Welcome,<br /><span className="name">Mrs. Van</span></p>
            <i className="bi bi-caret-down-fill arrow" tabIndex={-1}></i>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><Link className="dropdown-item" href="#" data-id="password" data-bs-toggle="modal" data-bs-target="#PasswordBackdrop">Edit Password</Link></li>
            <li><Link className="dropdown-item" href="#">Sign Out</Link></li>
          </ul>
        </div>
        <div className="logo"><Link aria-label="Wynn Las Vegas Private Access" href="/"><Image src="/images/wynn-private-access-logo.svg" alt="Private Access" width="406" height="44" /></Link></div>
      </div>
    </div>
  )
}

export default SubHeader