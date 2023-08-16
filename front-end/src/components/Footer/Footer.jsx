import React from 'react'
import './footer.css'
import Logo from '../../assets/logo.png'
import { InboxIcon, PhoneIcon, LoginIcon, UserIcon, LinkIcon, LocationMarkerIcon } from '@heroicons/react/outline'

const Footer = () => {
    return (
        <div className="cFooterWrapper">
            <hr />
            <div className="cFooter">
                <div className="logos">
                    <img src={Logo} alt="" />
                    <span>Amazon </span>
                </div>


                <div className="block">
                    <div className="detail">
                        <span>Contact Us</span>
                        <span className='pngLine'>
                            <LocationMarkerIcon className="icons" />
                            <span>111 North Avenu, Orlando, FL 234432</span>
                        </span>

                        <span className="pngLine">
                            {""}
                            <PhoneIcon className='icons' />
                            <a href="tel:081-3886-2185">081-388-621-85</a>
                        </span>

                        <span className="pngLine">
                            {""}
                            <InboxIcon className='icons' />
                            <a href="mailto:anuoluwafalaju@gmail.com">anuoluwafalaju@gmail.com</a>
                        </span>


                    </div>
                </div>
                <div className="block">
                    <div className="detail">
                        <span>Account</span>
                        <span className='pngLine'>
                            <LoginIcon className="icons" />
                            Sign In
                        </span>
                    </div>
                </div>

                <div className="block">
                    <div className="detail">
                        <span>Company</span>
                        <span className='pngLine'>
                            <UserIcon className="icons" />
                            <a href="/about">
                                <p>About Us</p>
                            </a>
                        </span>

                    </div>
                </div>

                <div className="block">
                    <div className="detail">
                        <span>Resources</span>
                        <span className='pngLine'>
                            <LinkIcon className="icons" />
                            <span>Safety Terms & Privacy</span>
                        </span>

                    </div>
                </div>


            </div>

            <div className="copyRight">
                <span>Copyright @2023 by Minions, Inc.</span>
                <span>All right reserved.</span>

            </div>
        </div>
    )
}

export default Footer