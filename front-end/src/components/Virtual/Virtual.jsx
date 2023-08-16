import React from 'react'
import './virtual.css'
import Shade from '../../assets/shade.png'
import ReactCompareImage from 'react-compare-image'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'

const Virtual = () => {
    return (
        <div className="Virtual">
            <div className="left">
                <span>Virtual Try-On</span>
                <span>Never Buy The Wrong Shade Again</span>
                <span>Try Now!</span>
                <img src={Shade} alt="" />

            </div>

            <div className="right">
                <div className="wrapped">
                    <ReactCompareImage leftImage={Before} rightImage={After} />

                </div>
            </div>
        </div>
    )
}

export default Virtual