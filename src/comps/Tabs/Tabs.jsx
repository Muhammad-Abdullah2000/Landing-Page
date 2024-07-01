import React, { useState } from 'react';
import Ecommerce from '../Ecommerce/Ecommerce';
import Fitness from '../Fitness/Fitness';
import Food from '../Food/Food';
import Transport from '../Transport/Transport';
import Technology from '../Technology/Technology';

import './Tabs.css';
// import All_Categories from '../pages/All_Categories';


const Tabs = () => {

    const [isActive, setIsActive] = useState(1);
    const handleActive = (btn) => setIsActive(btn);


    return (
        <section id='Tabs'>
            <div className="tabsV2Container">
                <div className="tabsContainer">
                    <div className="btnContainer">

                        <button className={`tabs ${isActive === 1 ? 'activeTab' : null}`} onClick={() => handleActive(1)}>Ecommerce</button>
                        <button className={`tabs ${isActive === 2 ? 'activeTab' : null}`} onClick={() => handleActive(2)}>Fitness</button>
                        <button className={`tabs ${isActive === 3 ? 'activeTab' : null}`} onClick={() => handleActive(3)}>Food</button>
                        <button className={`tabs ${isActive === 4 ? 'activeTab' : null}`} onClick={() => handleActive(4)}>Transport</button>
                        <button className={`tabs ${isActive === 5 ? 'activeTab' : null}`} onClick={() => handleActive(5)}>Technology</button>
                    </div>




                </div>
            </div>

            {isActive === 1 && <Ecommerce />}
            {isActive === 2 && <Fitness/>}
            {isActive === 3 && <Food/>}
            {isActive === 4 && <Transport/>}
            {isActive === 5 && <Technology/>}
        </section>
    )
}

export default Tabs