import React from 'react'
import BnbCircle from '../../assets/img/bnb-circle.png'
export default function Invest() {
  return (
    <div>
      <section class="invest" id="invest">
                <div class="container">
                    <div class="section-title">
                        <h2>
                            TIME to INVEST
                        </h2>
                    </div>
                    <div class="invest-block f-jcsb">
                        <div class="invest-wrap">
                            <ul class="invest-list">
                                <li class="invest-list__item">
                                    <h3 class="invest-list__title">
                                        Total Invested
                                    </h3>
                                    <p class="invest-list__value"><span id="totalInvested"></span>
                                        BNB
                                    </p>
                                </li>
                                <li class="invest-list__item">
                                    <h3 class="invest-list__title">
                                        Total Withdrawals
                                    </h3>
                                    <p class="invest-list__value"><span id="totalWithdrawals"></span>
                                        BNB
                                    </p>
                                </li>

                               {/* <li class="invest-list__item">
                                   <h3 class="invest-list__title">
                                       deleted Block
                                   </h3>
                                   <p class="invest-list__value"><span id="contractBalance"></span>
                                       BNB
                                   </p>
                               </li> */}

                            </ul>
                            <div class="invest-bottom">
                                <div class="invest-connect">
                                    <span class="invest-connect__token f-center-center">
                                        BNB
                                    </span>
                                    <input id="investAmount" type="" name="invest" placeholder="500" step="" />
                                    <button onclick="deposit()" class="main-btn main-btn_blue invest-connect__btn">
                                        Invest Now
                                    </button>
                                </div>
                                <p class="invest-text">
                                    * 0.05 BNB Minimum Deposit
                                </p>
                            </div>
                        </div>
                        <div class="invest-wrap">
                            <ul class="invest-list invest-list_accent">
                                <li class="invest-list__item">
                                    <h3 class="invest-list__title">
                                        Your Total Deposits
                                    </h3>
                                    <p class="invest-list__value"><span id="userInvested"></span>
                                        BNB
                                    </p>
                                </li>
                                <li class="invest-list__item">
                                    <h3 class="invest-list__title">
                                        Your Withdrawals
                                    </h3>
                                    <p class="invest-list__value"><span id="userWithdrawn"></span>
                                        BNB
                                    </p>
                                </li>
                                <li class="invest-list__item">
                                    <h3 class="invest-list__title">
                                        Your Income
                                    </h3>
                                    <p class="invest-list__value"><span id="calculateReward"></span>
                                        BNB
                                    </p>
                                </li>
                                <li class="invest-list__item">
                                    <h3 class="invest-list__title">
                                        Referral Rewards
                                    </h3>
                                    <p class="invest-list__value"><span id="totalUserRefsAmount"></span>
                                        BNB
                                    </p>
                                </li>
                            </ul>
                            <div class="invest-bottom">
                                <div class="invest-offer f-center">
                                    <button onclick="withdraw();" type="button" class="main-btn">
                                        Claim
                                    </button>
                                </div>
                                <p class="invest-text">
                                    * 0.05 BNB Minimum Amount
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="invest-theme">
                        Profit
                    </div>
                    <div class="invest-circle rotate-circle">
                        <img src={BnbCircle} alt="" />
                    </div>
                </div>
            </section>
    </div>
  )
}
