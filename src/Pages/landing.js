import React from 'react'
import "../App.css"
import icLibrary from '../Assets/ic_landing.png'
import bgLanding from '../Assets/bg_landing.png'

function Landing() {
    return (
        <div className="landing">
            <view className="flex-row">
                <img src={icLibrary} />
                <h2>Lib'rary</h2>
            </view>

            <div>
                <h1><span>Your</span> library<br />anywhere</h1>
                <p>Sign-up today and receive unlimited<br />access to all of your reading - share<br />your book</p>

                <button className="orange" onClick="">Sign Up</button>
                <button className="btn-right" onClick="">Sign In</button>
            </div>
        </div>
    )
}

export default Landing