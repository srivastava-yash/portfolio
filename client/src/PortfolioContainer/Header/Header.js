import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href="index.html" className='nav__logo'>Yash</a>

            <div className='nav__menu'>
                <ul className='nav__list grid'>
                    <li className='nav__item'>
                        <a href='#home' className='nav__link active-link'>
                            <i className='uil uil- nav__icon'></i> Home
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#education' className='nav__link'>
                            <i className='uil uil- nav__icon'></i> Education
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#work' className='nav__link'>
                            <i className='uil uil- nav__icon'></i> Work
                        </a>
                    </li>
                </ul>
            </div>
            <div className='nav__toggle'>
                <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header>
  )
}
