import React from 'react';

import './Footer.less'
import LogoSvg from '../../assets/logo.svg'

export default function Footer() {



  return (
    <div className='footerBox'>
      <div className='footerLeft'>
        <div className='footerBoxItem'>
          <p className='footerBoxItemTitle'>What is SFT Chain</p>
          <p className='footerBoxItemText'>Vision</p>
          <p className='footerBoxItemText'>Roadmap</p>
          <p className='footerBoxItemText'>Privacy Policy</p>
          <p className='footerBoxItemText'>Terms Of Use</p>
        </div>
        <div className='footerBoxItem'>
          <p className='footerBoxItemTitle'>INVESTORS</p>
          <p className='footerBoxItemText'>Vision</p>
          <p className='footerBoxItemText'>Roadmap</p>
          <p className='footerBoxItemText'>Privacy Policy</p>
          <p className='footerBoxItemText'>Terms Of Use</p>
        </div>
        <div className='footerBoxItem'>
          <p className='footerBoxItemTitle'>DePIN</p>
          <p className='footerBoxItemText'>Vision</p>
          <p className='footerBoxItemText'>Roadmap</p>
          <p className='footerBoxItemText'>Privacy Policy</p>
          <p className='footerBoxItemText'>Terms Of Use</p>
        </div>
        <div className='footerBoxItem'>
          <p className='footerBoxItemTitle'>What is SFT Chain</p>
          <p className='footerBoxItemText'>Vision</p>
          <p className='footerBoxItemText'>Roadmap</p>
          <p className='footerBoxItemText'>Privacy Policy</p>
          <p className='footerBoxItemText'>Terms Of Use</p>
        </div>
      </div>
      <div className='footerRight'>
        <img className='logo' src={LogoSvg} alt="LogoSvg" />
        <div className='communityIconBox'>
        <img src="https://sft-img.b-cdn.net/network/smallTelegram.png" alt="Telegram" />
        <img src="https://sft-img.b-cdn.net/network/smallDiscord.png" alt="Telegram" />
        <img src="https://sft-img.b-cdn.net/network/smallYoutube.png" alt="Telegram" />
        <img src="https://sft-img.b-cdn.net/network/smallTwitter.png" alt="Telegram" />
        <img src="https://sft-img.b-cdn.net/network/smallMedia.png" alt="Telegram" />

        </div>
      </div>

    </div>
  );
}
