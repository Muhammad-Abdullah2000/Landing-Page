import React from 'react';
import './Transport.css';
import Timg1 from './t-1.webp';
import Timg2 from './t-2.webp';
import Timg3 from './t-3.webp';
import Timg4 from './t-4.webp';
import Timg5 from './t-5.webp';
import Timg6 from './t-6.webp';
import Timg7 from './t-7.webp';
import Timg8 from './t-8.webp';


const Transport = () => {
    return (
        <section id='ecomm'>

            <div className="cardContainer">
                <div className="card">
                    <img src={Timg1} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

               <div className="card">
                    <img src={Timg2} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

               <div className="card">
                    <img src={Timg3} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

               <div className="card">
                    <img src={Timg4} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                   <div className="card">
                    <img src={Timg5} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

              <div className="card">
                    <img src={Timg6} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                <div className="card">
                    <img src={Timg7} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                <div className="card">
                    <img src={Timg8} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

             

              
            </div> 



        </section>
    )
}

export default Transport