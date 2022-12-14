import React from 'react'

export const Header = () => {
  return (
   <header className="s-header">
  <div className="row s-header__nav-wrap">
    <nav className="s-header__nav">
      <ul>
        <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
        <li><a className="smoothscroll" href="#about">About</a></li>
        <li><a className="smoothscroll" href="#resume">CV</a></li>
        <li><a className="smoothscroll" href="#contact">Say Hello</a></li>
      </ul>
    </nav>
  </div>
  <a className="s-header__menu-toggle" href="#0" title="Menu">
    <span className="s-header__menu-icon" />
  </a>
</header> 

  )
}
