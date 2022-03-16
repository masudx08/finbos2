import React from 'react'
import MainImg from '../../assets/img/main-image.png'
import MainMobile from '../../assets/img/main-mobile.png'
import BnbCircle from '../../assets/img/bnb-circle.png'
export default function Header() {
  return (
    <div>
      <section class="main">
                <div class="container">
                    <div class="main-wrapper f-center-jcsb">
                        <div class="main-content">
                            <h1 class="main-content__title">
                                BNB-MONEY
                            </h1>
                            <p class="main-content__text">
                                Your Smart Investment Platform <span>in Web 3.0</span>
                            </p>
                            <a href="#connect" class="main-content__btn main-btn scroll-link" onclick="connect()" id="connectButton">
                                Connect wallet
                            </a>
                            <a href="#invest" class="main-content__btn main-btn main-btn_blue scroll-link">
                                Invest now
                            </a>
                        </div>
                        <div class="main-image">
                            <picture>
                                <source srcset={MainMobile} media="(max-width: 992px)" />
                                <img src={MainImg} alt="" />
                            </picture>
                        </div>
                    </div>
                    <div class="main-text">
                        BNB
                    </div>
                    <div class="main-circle rotate-circle">
                        <img src={BnbCircle} alt="" />
                    </div>
                </div>
            </section>
    </div>
  )
}
