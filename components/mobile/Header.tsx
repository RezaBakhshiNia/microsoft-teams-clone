import Image from 'next/image';
import React from 'react';

const Header = ({ title }: {title: string}) => {
  return (
    <header className="header">
      <div className="profile">
        <Image src="/public/mobile/statusBar/Battery.png" alt="Profile" className="profile-pic" />
        <h1>{title}</h1>
      </div>
      <nav className="header-actions">
        <i className="icon-menu"></i>
        <i className="icon-more"></i>
      </nav>
    </header>
  );
}

export default Header;
