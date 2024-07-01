import React from 'react';
import './Fitness.css';
import Fimg1 from './t-1.webp';
import Fimg2 from './t-2.webp';
import Fimg3 from './t-1.webp';
import Fimg4 from './t-8.webp';
import Fimg5 from './t-5.webp';
import Fimg6 from './t-6.webp';
import Fimg7 from './t-7.webp';
import Fimg8 from './t-8.webp';


const Fitness = () => {
    return (
        <section id='ecomm'>

            <div className="cardContainer">
                <div className="card">
                    <img src={Fimg1} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

               <div className="card">
                    <img src={Fimg2} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

               <div className="card">
                    <img src={Fimg3} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

               <div className="card">
                    <img src={Fimg4} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                   <div className="card">
                    <img src={Fimg5} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

              <div className="card">
                    <img src={Fimg6} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                <div className="card">
                    <img src={Fimg7} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                <div className="card">
                    <img src={Fimg8} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

             

              
            </div> 



        </section>
    )
}

export default Fitness