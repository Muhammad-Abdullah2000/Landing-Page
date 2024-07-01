import React from 'react';
import './Web_Development.css';
import { Link } from 'react-router-dom';

const Web_Development = () => {
    return (
        <section id='website'>
            <div className="wcards">
                <div className="wcard">

                    <div className="top">
                        <h1>Business Web App</h1><br />
                        <h1 style={{ fontSize: '30px' }}>$2,499</h1>
                    </div>

                    <div className="mtop">
                        <li>Custom Made, Interactive, Dynamic & High End Design</li>
                        <li>Custom WP (or) Custom PHP Development</li>
                        <li>1 jQuery Slider Banner</li>
                        <li>Up to 10 Custom Made Banner Designs</li>
                        <li>10 Stock Images</li>
                        <li>Unlimited Revisions</li>
                        <li>Special Hoover Effects</li>
                        <li>Content Management System (CMS)</li>
                        <li>Online Appointment/Scheduling/Online Ordering Integration (Optional)</li>
                        <li>Online Payment Integration (Optional)</li>
                        <li>Multi Lingual (Optional)</li>
                        <li>Custom Dynamic Forms (Optional)</li>
                        <li>Signup Area (For Newsletters, Offers etc.)</li>
                        <li>Search Bar</li>
                        <li>Live Feeds of Social Networks integration (Optional)</li>
                        <li>Mobile Responsive</li>
                    </div>

                    <div className="mbottom">
                        <button><Link id='li' to={'https://logowithweb.com/plan-form/'}>Order Now</Link></button>
                    </div>

                    <div className="bottom">

                        <div className="cardtxt1">
                            <h3>Share your idea?</h3>
                            <p style={{ color: 'red' }}>(786) 4534883</p>
                        </div>

                        <div className="cardtxt2">
                            <h3>Want to discuss</h3>
                            <p style={{ color: 'red' }}>Live Chat Now</p>
                        </div>

                    </div>
                </div>

                <div className="wcard">

                    <div className="top">
                        <h1>Automated Web App</h1><br />
                        <h1 style={{ fontSize: '30px' }}>$4,999</h1>
                    </div>

                    <div className="mtop">
                        <li>5 Stock Photos</li>
                        <li>5 Page Website</li>
                        <li>3 Banner Design</li>
                        <li>1 jQuery Slider Banner</li>
                        <li>FREE Google Friendly Sitemap</li>
                        <li>Complete W3C Certified HTML</li>
                        <li>Twitter Page Design</li>
                        <li>YouTube Page Design</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Satisfaction And Money Back Guarantee**</li>
                        <li>Mobile Responsive will be Additional $99*</li>
                        <li>CMS will be Additional $149*</li>
                    </div>

                    <div className="mbottom">
                        <button><Link id='li' to={'https://logowithweb.com/plan-form/'}>Order Now</Link></button>
                    </div>

                    <div className="bottom">

                        <div className="cardtxt1">
                            <h3>Share your idea?</h3>
                            <p style={{ color: 'red' }}>(786) 4534883</p>
                        </div>

                        <div className="cardtxt2">
                            <h3>Want to discuss</h3>
                            <p style={{ color: 'red' }}>Live Chat Now</p>
                        </div>

                    </div>
                </div>

                <div className="wcard">

                    <div className="top">
                        <h1>Automated/Interactive Ecommerce Web App</h1><br />
                        <h1 style={{ fontSize: '30px' }}>$7,999</h1>
                    </div>

                    <div className="mtop">
                        <li>Custom Made, Interactive, Dynamic & High End Design</li>
                        <li>Online Appointment/Scheduling/Online Ordering Integration (Optional)</li>
                        <li>Custom WP (or) Custom PHP Development</li>
                        <li>1 jQuery Slider Banner</li>
                        <li>Content Management System (CMS)</li>
                        <li>10 Stock Images</li>
                        <li>Unlimited Revisions</li>
                        <li>Special Hoover Effects</li>
                        <li>Content Management System (CMS)</li>
                        <li>Up to 10 Custom Made Banner Designs</li>
                        <li>Custom Made, Interactive, Dynamic & High End Design</li>
                        <li>Online Payment Integration (Optional)</li>
                        <li>Multi Lingual (Optional)</li>
                        <li>Custom Dynamic Forms (Optional)</li>
                        <li>Signup Area (For Newsletters, Offers etc.)</li>
                        <li>Search Bar</li>
                        <li>Live Feeds of Social Networks integration (Optional)</li>
                        <li>Mobile Responsive</li>
                    </div>

                    <div className="mbottom">
                        <button><Link id='li' to={'https://logowithweb.com/plan-form/'}>Order Now</Link></button>
                    </div>

                    <div className="bottom">

                        <div className="cardtxt1">
                            <h3>Share your idea?</h3>
                            <p style={{ color: 'red' }}>(786) 4534883</p>
                        </div>

                        <div className="cardtxt2">
                            <h3>Want to discuss</h3>
                            <p style={{ color: 'red' }}>Live Chat Now</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Web_Development