import React from 'react'
import './hero.css'
import HeroImg from '../../assets/hero.png'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Hero = () => {
    const  transition = {duration:3, type: "spring"}


    return (
        <div className="containerr">

            {/* left side  */}

            <div className="h_sides">
                <span className='text1'>skin protection cream</span>

                <div className="text2">
                    <span>Trendy Collection</span>
                    <span>
                        {""}
                        Seedily say has suitable disposal and boy. Exercise joy man children rejoiced</span>

                </div>
            </div>


            {/* middle image  */}

            <div className="wrappa">

                < motion.div
                    initial={{ bottom: "2rem" }}
                    whileInView={{ bottom: "3rem" }}
                    className="blueCircle"
                    transition={transition}
                    
                    >
                    
                </motion.div>
                <motion.img
                transition={transition}
                initial={{ bottom: "-2rem" }}
                whileInView={{ bottom: "2rem" }}
                 src={HeroImg} alt="" width={500} />



                <motion.div
                transition={transition}
                initial={{ right: "2%" }}
                whileInView={{ right: "-2%" }}
                 className="cart2">
                    <RiShoppingBagFill />
                    <div className="signup">
                        <span>Hurry and signup</span>

                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </motion.div>

            </div>


            {/* right side  */}


            <div className="h_sides">
                <div className="traffic">
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>

                <div className="customers">
                    <span>100k</span>
                    <span>Happy Customers</span>

                </div>
            </div>
        </div>
    )
}

export default Hero