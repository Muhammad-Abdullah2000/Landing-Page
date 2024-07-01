import React, { useState } from 'react';


import './Tabs3.css';
import Website from './Website';
import Digital from './Digital';
import SEO from './SEO';
import Logo from './Logo';

// import All_Categories from '../pages/All_Categories';


const Tabs3 = () => {

    const [isActive, setIsActive] = useState(1);
    const handleActive = (btn) => setIsActive(btn);


    return (

        <>
            {/* <section id='Tabs1'>
            <div className="tabsV2Container1">
                <div className="tabsContainer1">
                    <div className="btnContainer1">

                        <button className={`tabs1 ${isActive === 1 ? 'activeTab1' : null}`} onClick={() => handleActive(1)}>Website</button>
                        <button className={`tabs1 ${isActive === 2 ? 'activeTab1' : null}`} onClick={() => handleActive(2)}>Ecommerce</button>
                        <button className={`tabs1 ${isActive === 3 ? 'activeTab1' : null}`} onClick={() => handleActive(3)}>Web App Development</button>
                        
                    </div>




                </div>
            </div>

            {isActive === 1 && <Website />}
            {isActive === 2 && <Ecom />}
            {isActive === 3 && <Web_Development />}
          
        </section> */}


            <div className="hero-aria">



                <div className="circle">
                    <span><i className={`bx bx-laptop ${isActive === 1 ? 'bx bx-laptop' : null}`} onClick={() => handleActive(1)}></i></span>

                    <span><i className={`bx bx-microphone ${isActive === 1 ? 'bx bx-microphone' : null}`} onClick={() => handleActive(2)}></i></span>

                    <span><i className={`bx bx-paint ${isActive === 1 ? 'bx bx-paint ' : null}`} onClick={() => handleActive(3)}></i></span>

                    <span><i className={`bx bx-rocket ${isActive === 1 ? 'bx bx-rocket' : null}`} onClick={() => handleActive(4)}></i></span>


                    <div className="content">
                       
                        {isActive === 1 && <Website/>}
                        {isActive === 2 && <Digital/>}
                        {isActive === 3 && <SEO/>}
                        {isActive === 4 && <Logo/>}

                    </div>

                </div>
            </div>

        </>
    )
}

export default Tabs3