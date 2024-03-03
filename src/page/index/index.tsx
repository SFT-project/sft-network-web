import { useEffect } from 'react';
import { init } from './earth.js'
import './index.modal.less';
import LeftArrow from '../../assets/index/leftArrow.svg'
import DataStorageImage from './dataStorage.png'
import { Button, Input } from 'antd';

export default function Home() {
  useEffect(() => {
    init()
  }, [])

  return (
    <div className='homeBox'>
      <div className="ts-background ts-shapes-canvas position-fixed ts-separate-bg-element" data-bg-color="#fff">
        <div className='homeBoxTop'>
          <div className='topTitle'>
            <p><span>Chain</span> of Chains</p>
          </div>
          <div className='topInfo'>
            <p>
              Building a Bridge between Physical Infrastructure and Web3 through
              <span> DePIN</span>
            </p>
          </div>
          <div className="topBtnContainer ButtonContainer">
            <div className="topBtn">
              <p> Get Started</p>
              <img src={LeftArrow} alt="LeftArrow" />
            </div>
          </div>
        </div>
        <div className="homeDataBox">
          <div className="homeDataBoxItem">
            <p>22,455</p>
            <span>DEVICES</span>
          </div>
          <div className='homeDataBoxItem'>
            <p>70,800,818</p>
            <span>TRANSACTIONS</span>
          </div>
          <div className='homeDataBoxItem'>
            <p>120K+</p>
            <span>COMMUNITY</span>
          </div>
          <div className='homeDataBoxItem'>
            <p>46,555</p>
            <span>STAKERS</span>
          </div>
        </div>
        <div className='homeBuilder'>
          <div className='builderTitle'>
            <p>The Protocol for <span>DePIN</span> <br />Builders</p>
          </div>
          <div className='builderContent'>
            <div className='builderContentItem'>
              <img className='contentIcon' src={DataStorageImage} alt="" />
              <div>
                <p className="contentTitle">Web3 Hardware Data Storage</p>
                <p className="contentInfo">
                  SFT Chain adopts HDFS, distributing data storage across multiple nodes
                </p>
              </div>
            </div>
            <div className="builderContentItem">
              <img className="contentIcon" src="https://sft-img.b-cdn.net/network/High.png"
                   alt="" />
              <div>
              <p className="contentTitle">High-Performance Computing Cloud</p>
                <p className="contentInfo">
                  It is an efficient, reliable, flexible, and secure computing service
                </p>
              </div>
            </div>
            <div className="builderContentItem">
              <img className="contentIcon" src="https://sft-img.b-cdn.net/network/IEC.png" alt="" />
              <div>
                <p className="contentTitle">Intelligent Edge Cloud (IEC)</p>
                <p className="contentInfo">
                  Deployed in closer proximity to enterprise and high-traffic user areas, providing
                  a consistent experience with the central cloud
                </p>
              </div>
            </div>
          </div>
          <div className="globalBox">
            <div className="earthBox">
              {/*<svg xmlns="http://www.w3.org/2000/svg" width="634" height="634" viewBox="0 0 634 634" fill="none">*/}
              {/*  <path d="M317 634C492.074 634 634 492.074 634 317C634 141.926 492.074 0 317 0C141.926 0 0 141.926 0 317C0 492.074 141.926 634 317 634Z" fill="url(#paint0_radial_10209_23)" />*/}
              {/*  <defs>*/}
              {/*    <radialGradient id="paint0_radial_10209_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(317.009 311.66) scale(324.39)">*/}
              {/*      <stop offset="0.7502" stop-color="#112D35" stop-opacity="0.19" />*/}
              {/*      <stop offset="0.8094" stop-color="#101010" stop-opacity="0.3822" />*/}
              {/*      <stop offset="0.8691" stop-color="#04181F" stop-opacity="0.5756" />*/}
              {/*      <stop offset="0.929" stop-color="#000F14" stop-opacity="0.7697" />*/}
              {/*      <stop offset="0.9885" stop-color="#033240" />*/}
              {/*    </radialGradient>*/}
              {/*  </defs>*/}
              {/*</svg>*/}
              <div id="container"></div>
            </div>
            <div className='globalLeft'>
              <p className='globalLeftTitle'>Global Distributed Nodes</p>
              <p className='globalLeftInfo'>SFT Chain aims to build a distributed network of the most crucial hardware infrastructure for human society.</p>
              <div className="globalLeftBtnContainer ButtonContainer">
                <div className="globalLeftBtn">
                  Explore the DePIN
                </div>
              </div>
            </div>
          </div>
          <div className="launchpadBox">
          <p className='launchpadTitle'>A Launchpad for Blockchain Ideas and Projects</p>
            <div className='launchpadCon'>
              <div className='launchpadConLeft'>
                <p className='launchpadConLeftTitle'>The SFT Chain hosts an ever-growing ecosystem of projects and products that have been developed by members of the SFT community</p>
                <div className="launchpadConLeftInfoContainer ButtonContainer">
                  <div className="launchpadConLeftInfo">
                    Explore DApp
                  </div>
                </div>
              </div>
              <div className="launchpadConRight">
                <div className="launchpadConRightRow">
                  <div className="launchpadConRightItem">
                    <div className="launchpadConRightItemInner">
                      <div className="launchpadConRightItemFront">
                        <p>Decentralized</p>
                        <div className="launchpadConRightItemImgBox">
                          <img src="https://sft-img.b-cdn.net/network/Decentralized.png"
                               alt="Decentralized" />
                        </div>
                      </div>
                      <div className="launchpadConRightItemBack">
                        SFT has <b>100+</b> nodes, managed in a fully decentralized manner
                      </div>
                    </div>
                  </div>
                  <div className="launchpadConRightItem">
                    <div className="launchpadConRightItemInner">
                      <div className="launchpadConRightItemFront">
                        <p>Device Ready</p>
                        <div className="launchpadConRightItemImgBox">
                          <img src="https://sft-img.b-cdn.net/network/DeviceReady.png"
                               alt="Decentralized" />
                        </div>
                      </div>
                      <div className="launchpadConRightItemBack">
                        SFT Chain is a blockchain protocol that connects real-world data
                        with <b>DApps</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="launchpadConRightRow">
                  <div className="launchpadConRightItem">
                    <div className="launchpadConRightItemInner">
                      <div className="launchpadConRightItemFront">
                        <p>Ultra Fast</p>
                        <div className="launchpadConRightItemImgBox">
                          <img src="https://sft-img.b-cdn.net/network/UltraFast.png"
                               alt="Decentralized" />
                        </div>
                      </div>
                      <div className="launchpadConRightItemBack">
                        Every transaction on the SFT Chain is virtually <b>instantaneous</b> and comes with
                        almost zero transaction costs
                      </div>
                    </div>
                  </div>
                  <div className="launchpadConRightItem">
                    <div className="launchpadConRightItemInner">
                      <div className="launchpadConRightItemFront">
                        <p>Secure & Tested</p>
                        <div className="launchpadConRightItemImgBox">
                          <img src="https://sft-img.b-cdn.net/network/Secure.png"
                               alt="Decentralized" />
                        </div>
                      </div>
                      <div className="launchpadConRightItemBack">
                        SFT boasts one of the best cryptographic <b>security systems</b> in the blockchain
                        space
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="joinCommunity">
            <p className="joinCommunityTitle">Join the Community</p>
            <p className="joinCommunityInfo">Help shape the future of the SFT network and learn more
              about SFT by chatting with team members and other people in the community.</p>
            <div className="communityBox">
              <div className="communityBoxItem">
                <img src="https://sft-img.b-cdn.net/network/Telegram.png" alt="Telegram" />
                <p className="communityBoxItemTitle">Telegram</p>
                <p className='communityBoxItemInfo'>Chat and read our<br /> announcements</p>
              </div>
              <div className='communityBoxItem'>
                <img src="https://sft-img.b-cdn.net/network/Discord.png" alt="Telegram" />
                <p className='communityBoxItemTitle'>Discord</p>
                <p className='communityBoxItemInfo'>A community with shared<br /> interests with you</p>
              </div>
              <div className='communityBoxItem'>
                <img src="https://sft-img.b-cdn.net/network/Twitter.png" alt="Telegram" />
                <p className='communityBoxItemTitle'>Twitter</p>
                <p className='communityBoxItemInfo'>Follow the latest<br /> SFT news</p>
              </div>
              <div className='communityBoxItem'>
                <img src="https://sft-img.b-cdn.net/network/Github.png" alt="Telegram" />
                <p className='communityBoxItemTitle'>Github</p>
                <p className='communityBoxItemInfo'>
                  Track our<br /> development
                </p>
              </div>
              <div className='communityBoxItem'>
                <img src="https://sft-img.b-cdn.net/network/Youtube.png" alt="Telegram" />
                <p className='communityBoxItemTitle'>Youtube</p>
                <p className='communityBoxItemInfo'>
                  Watch our latest<br /> content
                </p>
              </div>
            </div>
            <div className='communitySubmitBox'>
              <p className='communitySubmitTitle'>Stay Updated</p>
              <p className='communitySubmitInfo'>Subscribe to our monthly newsletter</p>

              <div className='inputBox'>
                <Input className='inputFarm' placeholder='Email' />
                <Button className='inputBtn' type="primary">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
