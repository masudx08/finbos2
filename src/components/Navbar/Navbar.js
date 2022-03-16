import React from 'react'
import Logo from '../../assets/img/logo.png'
import PdfFile from '../../assets/docs/wp.pdf'
export default function Navbar() {
  return (
    <div>
      <header class="header">
            <div class="container f-center-jcsb">
                <div class="header-wrap f-center">
                    <div class="header-logo">
                        <img src={Logo} alt="" />
                    </div>
                    <nav class="header-nav">
                        <ul class="header-menu f-center">
                            <li class="header-menu__item">
                                <a href="#safety" class="header-menu__link scroll-link">
                                    Safety
                                </a>
                            </li>
                            <li class="header-menu__item">
                                <a href="#invest" class="header-menu__link scroll-link">
                                    Investment
                                </a>
                            </li>
                            <li class="header-menu__item">
                                <a href="#program" class="header-menu__link scroll-link">
                                    Affiliate Program
                                </a>
                            </li>
                            <li class="header-menu__item">
                                <a href="#faq" class="header-menu__link scroll-link">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="header-control f-center">
                    <a href={PdfFile} class="header-link main-btn" target="_blank">
                        Whitepaper
                    </a>
                    <div class="header-toggle">
                        <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 8H0V6H18V8ZM18 2H0V0H18V2Z" fill="#1F3CA6"/>
                        </svg>                  
                    </div>
                </div>
                <div class="header-mobile">
                    <div class="header-mobile__block">
                        <ul class="mobile-menu">
                            <li class="mobile-menu__item">
                                <a href="#" class="mobile-menu__link scroll-link">
                                    Connect
                                </a>
                            </li>
                            <li class="mobile-menu__item">
                                <a href="#safety" class="mobile-menu__link scroll-link">
                                    Safety
                                </a>
                            </li>
                            <li class="mobile-menu__item">
                                <a href="#invest" class="mobile-menu__link scroll-link">
                                    Investment
                                </a>
                            </li>
                            <li class="mobile-menu__item">
                                <a href="#program" class="mobile-menu__link scroll-link">
                                    Affiliate Program
                                </a>
                            </li>
                            <li class="mobile-menu__item">
                                <a href="#faq" class="mobile-menu__link scroll-link">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                        <div class="mobile-btns">
                            <a href="assets/docs/wp.pdf" class="mobile-btn main-btn main-btn_blue" target="_blank">
                                Whitepaper
                            </a>
                            <button type="button" class="mobile-btn main-btn main-btn_blue">
                                Audit
                            </button>
                            <a href="https://bscscan.com/address/0x6269df1321fcec2c5aba171436396628016e74a0" class="mobile-btn main-btn main-btn_blue" target="_blank">
                                Contract
                            </a>
                            <button type="button" class="mobile-btn main-btn main-btn_blue">
                                Chat
                            </button>
                        </div>
                        <p class="mobile-politic">
                            © Copyright BnbMoney.app 2022. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}
