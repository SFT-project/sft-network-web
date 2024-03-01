import './Footer.less'
import LogoSvg from '../../assets/logo.svg'

export default function Footer() {
  return (
    <div>
      <div className='footerBox'>
        <div className='footerLeft'>
          <div className='footerBoxItem'>
            <p className='footerBoxItemTitle'>GET STARTED</p>
            <p className='footerBoxItemText'>What is SFT Chain</p>
            <p className='footerBoxItemText'>Vision</p>
            <p className='footerBoxItemText'>Roadmap</p>
            <p className='footerBoxItemText'>Privacy Policy</p>
            <p className='footerBoxItemText'>Terms Of Use</p>
          </div>
          <div className='footerBoxItem'>
            <p className='footerBoxItemTitle'>INVESTORS</p>
            <p className='footerBoxItemText'>Get rSPD</p>
            <p className='footerBoxItemText'>Stake</p>
            <p className='footerBoxItemText'>Lend</p>
            <p className='footerBoxItemText'>Bridge</p>
          </div>
          <div className='footerBoxItem'>
            <p className='footerBoxItemTitle'>DePIN</p>
            <p className='footerBoxItemText'>SFT Wallet</p>
            <p className='footerBoxItemText'>Explorer</p>
            <p className='footerBoxItemText'>Web3 Connector</p>
          </div>
          <div className='footerBoxItem'>
            <p className='footerBoxItemTitle'>BUILDERS</p>
            <p className='footerBoxItemText'>Whitepaper</p>
            <p className='footerBoxItemText'>Docs</p>
            <p className='footerBoxItemText'>Github</p>
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
      <div className="footerCopyRight">
        <div className="footerCopyRightContent">
          <div>@2023 SFT</div>
          <div>Terms of Use & Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}
