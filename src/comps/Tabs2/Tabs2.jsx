import React, { useState } from 'react';


import './Tabs2.css';
import Website from '../Website/Website';
import Ecom from '../Ecom/Ecom';
import Web_Development  from '../Web_Development/Web_Development'
// import All_Categories from '../pages/All_Categories';


const Tabs2 = () => {

    const [isActive, setIsActive] = useState(1);
    const handleActive = (btn) => setIsActive(btn);


    return (
        <section id='Tabs1'>
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
          
        </section>
    )
}

export default Tabs2