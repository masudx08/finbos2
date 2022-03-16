import React from 'react'

export default function Affiliate() {
  return (
    <div>
      <section class="program" id="program">
                <div class="container">
                    <div class="section-title">
                        <h2>
                            AFFILIATE  PROGRAM
                        </h2>
                    </div>
                    <div class="program-wrap">
                        <div class="program-header f-center-jcsb">
                            <div class="program-referal">
                                <p class="program-referal__point">
                                    Your referral link:
                                </p>
                                <input id="referralLink" type="text" name="referal" class="program-referal__input" required/>
                            </div>
                            <div class="program-referal">
                                <p class="program-referal__point">
                                    Total paid referral rewards
                                </p>
                                <p class="program-referal__value"><span id="totalReferralBonus"></span>   
                                     BNB  
                                </p>
                            </div>
                        </div>
                        <div class="program-table">
                            <div class="program-table__header">
                                Your referral total
                            </div>
                            <ul class="program-list">
                                <li class="program-list__item f-center-jcsb">
                                    <div class="program-list__offer">
                                        <h3 class="program-list__title">
                                            level 1
                                        </h3>
                                        <p class="program-list__subtitle">
                                            5% referral rewards
                                        </p>
                                    </div>
                                    <p class="program-list__value"><span id="userRefLevel1"></span>
                                         BNB
                                    </p>
                                </li>
                                <li class="program-list__item f-center-jcsb">
                                    <div class="program-list__offer">
                                        <h3 class="program-list__title">
                                            level 2
                                        </h3>
                                        <p class="program-list__subtitle">
                                            3% referral rewards 
                                        </p>
                                    </div>
                                    <p class="program-list__value"><span id="userRefLevel2"></span>
                                         BNB
                                    </p>
                                </li>
                                <li class="program-list__item f-center-jcsb">
                                    <div class="program-list__offer">
                                        <h3 class="program-list__title">
                                            level 3
                                        </h3>
                                        <p class="program-list__subtitle">
                                            1.5% referral rewards 
                                        </p>
                                    </div>
                                    <p class="program-list__value"><span id="userRefLevel3"></span>
                                         BNB
                                    </p>
                                </li>
                                <li class="program-list__item f-center-jcsb">
                                    <div class="program-list__offer">
                                        <h3 class="program-list__title">
                                            level 4
                                        </h3>
                                        <p class="program-list__subtitle">
                                            0.5% referral rewards 
                                        </p>
                                    </div>
                                    <p class="program-list__value"><span id="userRefLevel4"></span>
                                         BNB
                                    </p>
                                </li>
                                <li class="program-list__item f-center-jcsb">
                                    <div class="program-list__offer">
                                        <h3 class="program-list__title">
                                            level 5
                                        </h3>
                                        <p class="program-list__subtitle">
                                            0.25% referral rewards
                                        </p>
                                    </div>
                                    <p class="program-list__value"><span id="userRefLevel5"></span>
                                         BNB
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}
