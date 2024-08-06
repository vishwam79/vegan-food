import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div id='footer' className='bg-[#323232] text-[#d9d9d9] flex flex-col items-center justify-center gap-5 p-4 pt-20 mt-20'>
        <div className="footer-content  grid grid-cols-4 gap-20 ">
            <div className="footer-content-left flex flex-col items-start gap-4">
                <img src={assets.logo} alt="" />
                <p className='text-[16px] '>The tomato is pour vegan food delivery site that give you more option to choose the vegan food and support us.</p>
                <div className="footer-social-icon flex">
                    <img className='hover:bg-orange-400 hover:rounded-full' src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

                </div>
            </div>
            <div className="footer-content-center flex flex-col items-start gap-4">
                <h2 className='text-white font-bold '>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right flex flex-col items-start gap-4">
                <h2 className='text-white font-bold'>OUR PAGES</h2>
                <ul>
                    <li>Vegan Recipes</li>
                    <li>Veg Salad</li>
                    <li>Full Day Meal</li>
                    <li>Dieting Plans</li>
                    <li>Our Services</li>
                </ul>
            </div>

            <div className="footer-content-right flex flex-col items-start gap-4">
                <h2 className='text-white font-bold'>GET IN TOUCH</h2>
                <ul>
                    <li>+914050XXXX</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>

           

        </div>

        <hr className='w-[85%] h-1 mt-4 text-gray-700 text-sm '/>
        <p>Copyright &copy All Rights Reserbe @Tomato</p>


    </div>
  )
}

export default Footer