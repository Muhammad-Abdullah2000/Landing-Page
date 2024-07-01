import React from 'react';
import './Technology.css';
import timg1 from './1.webp';
import timg2 from './2.webp';
import timg3 from './3.webp';
import timg4 from './4.webp';
import timg5 from './5.webp';
import timg6 from './6.webp';
import timg7 from './t-7.webp';
import timg8 from './t-8.webp';


const Technology = () => {
    return (
        <section id='ecomm'>

            <div className="cardContainer">
                <div className="card">
                    <img src={timg1} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

               <div className="card">
                    <img src={timg2} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

               <div className="card">
                    <img src={timg3} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

               <div className="card">
                    <img src={timg4} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                   <div className="card">
                    <img src={timg5} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

              <div className="card">
                    <img src={timg6} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                <div className="card">
                    <img src={timg7} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

                <div className="card">
                    <img src={timg8} alt="" style={{ width: '285.5px', height: '800px', borderRadius: '10px' }} />
                </div>

             

              
            </div> 



        </section>
    )
}

export default Technology