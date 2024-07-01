import React from 'react';
import './Food.css';
import fimg1 from './t-1 (1).webp';
import fimg2 from './t-2.webp';
import fimg3 from './t-3.webp';
import fimg4 from './t-4.webp';
import fimg5 from './t-5.webp';
import fimg6 from './t-6.webp';
import fimg7 from './t-7.webp';
import fimg8 from './t-8.webp';


const Food = () => {
    return (
        <section id='ecomm'>

            <div className="cardContainer">
                <div className="card">
                    <img src={fimg1} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

               <div className="card">
                    <img src={fimg2} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

               <div className="card">
                    <img src={fimg3} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

               <div className="card">
                    <img src={fimg4} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                   <div className="card">
                    <img src={fimg5} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

              <div className="card">
                    <img src={fimg6} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                <div className="card">
                    <img src={fimg7} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                <div className="card">
                    <img src={fimg8} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

             

              
            </div> 



        </section>
    )
}

export default Food