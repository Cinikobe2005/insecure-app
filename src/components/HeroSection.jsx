import React from 'react'
import rightdesktop from '../assets/images/bg-pattern-intro-right-desktop.svg';
import leftmobile from '../assets/images/bg-pattern-intro-left-mobile.svg';
import leftimagedesktop from '../assets/images/bg-pattern-intro-left-desktop.svg';
import rightimagedesktop from '../assets/images/bg-pattern-intro-right-mobile.svg'
import  imagedesktop from '../assets/images/image-intro-desktop.jpg';
import imagemobile from '../assets/images/image-intro-mobile.jpg'


const HeroSection = () => {
    
  return (
    <>
    <section className = 'flex flex-col-reverse md:flex-row mb-[14rem] md:mb-[19rem]'>
      <main className = 'bg-[#2b2237] relative  w-full h-[80vh] md:h-[50vh] lg:h-[73vh] flex justify-start items-center '>
       <section className = 'md:px-6 sm:px-4 lg:px-20 md:mx-auto'>
        <div className = 'hidden md:block absolute top-0 right-0 w-80 md:w-60 lg:w-90 z-10'>
            <img src= {rightdesktop} alt="" className = 'w-[100%]'/>
         </div> 
         <div className = 'block md:hidden absolute top-0 left-0 '>
            <img src={leftmobile} alt=""/>
         </div>
         <div className = 'hidden md:block absolute lg:bottom-[-45%] md:bottom-[-34%]  left-0 w-40 md:w-30 lg:w-40 '>
           <img src= {leftimagedesktop} alt=""  clasName = 'w-[100%]'/>
         </div>
         <div className = 'block md:hidden absolute bottom-[-34%] right-0  '>
           <img src= {rightimagedesktop} alt=""/>
         </div>
        <section className = 'w-full  relative '>
          <div className = 'md:w-[44%]'>
            <div className = 'hidden md:block w-[30%] md:pb-[2.4rem]'>
              <hr className = 'border-[hsl(0,0%,98%)] w-'/>
            </div>
          <div className = 'text-center md:text-left px-5 md:px-0'>
              <h1 className = 'font-primary font-[400] text-[hsl(0,0%,98%)] text-5xl md:text-[34px] lg:text-5xl w-[100%] md:w-[90%] lg:w-[90%] pb-3'>Humanizing your insurance.</h1>
              <p className = 'font-secondary text-[15px] font-[400] text-[hsl(0,0%,98%)] py-3'>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
              <div className = 'py-3'>
                <button className = 'font-secondary text-[15px] font-[400] text-[hsl(0,0%,98%)] border-1 border-solid border-[hsl(0,0%,98%)] rounded-[3px] w-[120px] md:w-[140px] h-[40px]  hover:bg-[hsl(0,0%,98%)] hover:text-[#2b2237]'>VIEW PLANS</button>
              </div>
          </div> 
          </div>
        <div className = 'hidden md:block absolute top-0 right-0 md:w-100 lg:w-100'>
             <img src= {imagedesktop} alt="" clasName = '  w-[100%]'/>
            </div>
        </section>

       </section>
      </main>
         <div className = 'block md:hidden w-[100%]'>
               <img src= {imagemobile} alt="" className = 'w-full h-auto'/>
         </div>
  
    </section>
    </>
  )
}

export default HeroSection