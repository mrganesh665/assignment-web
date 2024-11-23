import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import imagegirl from '../assets/girl.svg'

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start">
   
        <div className="mb-8 md:mb-0 md:mr-10 flex-shrink-0 lg:mr-28">
          <img
            src={imagegirl}
            alt="Laundry Basket"
            className="h-[50vh] w-auto rounded-lg"
          />
        </div>

    
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
    
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-xl font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#laundry-pricing" className="hover:underline">
                  Laundry Pricing
                </a>
              </li>
              <li>
                <a href="#dry-cleaning-pricing" className="hover:underline">
                  Dry Cleaning Pricing
                </a>
              </li>
              <li>
                <a href="#pickup-delivery" className="hover:underline">
                  Pick up and Delivery
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:underline">
                  What our Clients Say
                </a>
              </li>
            </ul>
          </div>

         <div className="flex justify-between ">
          <div className="col-span-2 flex flex-col space-y-2 mt-6">
            <p className="flex items-center space-x-2">
              <MdPhone className="text-lg" />
              <span>+61 403861744</span>
            </p>
            <p className="flex items-center space-x-2">
              <MdEmail className="text-lg" />
              <span>info@washmate.com.au</span>
            </p>
          </div>

        
          <div className="col-span-2 mt-6 flex justify-around space-x-6  ml-56 ">
            <a
              href="#facebook"
              className="hover:text-gray-200 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="#instagram"
              className="hover:text-gray-200 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="#tiktok"
              className="hover:text-gray-200 transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok className="text-2xl" />
            </a>
            <a
              href="#youtube"
              className="hover:text-gray-200 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
