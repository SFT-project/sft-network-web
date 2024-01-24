import React from 'react';

import LogoSvg from '../../assets/logo.svg'
import NavIcon from '../../assets/navIcon.svg'
import { Dropdown, MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import './header.less'

export default function Header() {

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to={''}>
          1st menu item
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to={''}>
          1st menu item
        </Link>
      ),
      icon: <img src={LogoSvg}></img>,
    },
    {
      key: '3',
      label: (
        <Link to={''}>
          1st menu item
        </Link>
      ),
    },
  ];

  return (
    <div className='headerBox'>
      <div className='logoBox'>
        <img src={LogoSvg} alt="LogoSvg" />
      </div>
      <div className='headerLeft'>
        <div className='navBox'>
          <div className='navItem'>Get Started</div>
          <div className='navItem'>
            <Dropdown menu={{ items }}>
              <div className='navDropdown'>
                <p>
                  Invest
                </p>
                <img src={NavIcon} alt="NavIcon" />
              </div>
            </Dropdown>
          </div>
          <div className='navItem'>
            <Dropdown menu={{ items }}>
              <div className='navDropdown'>
                <p>
                  DePIN
                </p>
                <img src={NavIcon} alt="NavIcon" />
              </div>
            </Dropdown>
          </div>
          <div className='navItem'>
            <Dropdown menu={{ items }}>
              <div className='navDropdown'>
                <p>
                  Developers
                </p>
                <img src={NavIcon} alt="NavIcon" />
              </div>
            </Dropdown>
          </div>
          <div className='navItem'>
            <Dropdown menu={{ items }}>
              <div className='navDropdown'>
                <p>
                  About
                </p>
                <img src={NavIcon} alt="NavIcon" />
              </div>
            </Dropdown>
          </div>
        </div>
        <div className='launchBox'>
          <p>Launch DApp</p>
        </div>
      </div>

    </div>
  );
}
