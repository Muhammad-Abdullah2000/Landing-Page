import React from 'react';
import './Ecommerce.css';
import ecomimg1 from './new1.webp';
import ecomimg2 from './new2.webp';
import ecomimg3 from './new3.webp';
import ecomimg4 from './new4.webp';
import ecomimg5 from './new5.webp';
import ecomimg6 from './new6.webp';
import ecomimg7 from './new7.webp';
import ecomimg8 from './new8.webp';
import ecomimg9 from './new9.webp';
import ecomimg10 from './new10.webp';
import ecomimg11 from './new11.webp';
import ecomimg12 from './new12.webp';

const Ecommerce = () => {
    return (
        <section id='ecomm'>

            <div className="cardContainer">
                <div className="card">
                    <img src={ecomimg1} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

               <div className="card">
                    <img src={ecomimg2} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

               <div className="card">
                    <img src={ecomimg3} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

               <div className="card">
                    <img src={ecomimg4} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                   <div className="card">
                    <img src={ecomimg5} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

              <div className="card">
                    <img src={ecomimg6} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                <div className="card">
                    <img src={ecomimg7} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                <div className="card">
                    <img src={ecomimg8} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                <div className="card">
                    <img src={ecomimg9} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                <div className="card">
                    <img src={ecomimg10} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                <div className="card">
                    <img src={ecomimg11} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                <div className="card">
                    <img src={ecomimg12} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>  

              
            </div> 



        </section>
    )
}

export default Ecommerce