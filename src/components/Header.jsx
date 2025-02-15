import React from 'react'
import Logo from '../assets/logo.png'
import SearchBox from './SearchBox'

const Header = () => {
  return (
    <header className='header px-0 lg:px-14' id="header">
      <div className='header-container mx-0 lg:mx-6'>
        <div className='header-logo w-1/2 p-3'>
           <a className='navbar-brand' href="">
            <img className='logo_img' width={'10em'}  src={Logo} alt="Logo" /></a>
        </div>
         <nav className='w-1/2'>
            <SearchBox/>
         </nav>
      </div>

    </header>
  )
}

export default Header