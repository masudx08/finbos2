import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer class="credits">
            <div class="container">
                <div class="credits-wrapper f-center-jcsb">
                    <p class="credits-text">
                        © Copyright BnbMoney.app 2022. All Rights Reserved
                    </p>
                    <ul class="credits-list f-center">
                        <li class="credits-list__item">
                            <a href="assets/docs/wp.pdf" class="credits-list__link main-btn" target="_blank">
                                Whitepaper
                            </a>
                        </li>
                        <li class="credits-list__item">
                            <a href="https://bscscan.com/address/0x6269df1321fcec2c5aba171436396628016e74a0" class="credits-list__link main-btn" target="_blank">
                                Contract
                            </a>
                        </li>
                        <li class="credits-list__item">
                            <a href="#" class="credits-list__link main-btn">
                                Audit
                            </a>
                        </li>
                        <li class="credits-list__item">
                            <a href="#" class="credits-list__link main-btn">
                                Chat
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}
