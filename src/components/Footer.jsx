import React from "react";
import bgDesktop from "../assets/images/bg-pattern-footer-desktop.svg";
import bgMobile from "../assets/images/bg-pattern-footer-mobile.svg";
import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import tiwter from "../assets/images/icon-twitter.svg";
import pintrest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#FAFAFA] relative font-family-karla font-bold uppercase text-center md:text-left text-sm text-[#333] px-4">
        <div className="container mx-auto relative z-10">
          <div className="py-20">
            <div className="flex flex-col md:flex-row md:justify-between gap-6 md:items-center items-center border-b border-[#E1E1E1] pb-4">
              <img src={logo} alt="" className="mx-auto md:mx-0" />
              <div className="flex justify-center md:justify-start items-center space-x-4 mt-4 md:mt-0">
                <img src={facebook} alt="" />
                <img src={tiwter} alt="" />
                <img src={pintrest} alt="" />
                <img src={instagram} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 text-center md:text-left">
              <div className="flex flex-col space-y-5">
                <h2 className="text-[#837D87]">our company</h2>
                <ul className="leading-relaxed">
                  <li>How we work</li>
                  <li>Why insure?</li>
                  <li>View plans</li>
                  <li>Reviews</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-5">
                <h2 className="text-[#837D87]">help me</h2>
                <ul className="leading-relaxed">
                  <li>faq</li>
                  <li>terms of use</li>
                  <li>privacy policy</li>
                  <li>cookies</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-5">
                <h2 className="text-[#837D87]">contact</h2>
                <ul className="leading-relaxed">
                  <li>sales</li>
                  <li>support</li>
                  <li>live chat</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-5">
                <h2 className="text-[#837D87]">others</h2>
                <ul className="leading-relaxed">
                  <li>careers</li>
                  <li>press</li>
                  <li>licenses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img
          src={bgDesktop}
          alt=""
          className="hidden md:flex absolute left-0 top-0  z-0 pointer-events-none"
        />
        <img
          src={bgMobile}
          alt=""
          className="md:hidden absolute left-0 top-0  z-0 pointer-events-none"
        />
      </footer>
    </>
  );
};

export default Footer;
