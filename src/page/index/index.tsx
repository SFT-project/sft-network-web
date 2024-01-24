import React from 'react';

import './index.modal.less';

import LogoSvg from '../../assets/logo.svg'

export default function Home() {


  return (
    <div className='homeBox'>
      <div className="ts-background ts-shapes-canvas position-fixed ts-separate-bg-element" data-bg-color="#fff">
      <img src={LogoSvg} alt="" />
    </div>
    </div>
  );
}
