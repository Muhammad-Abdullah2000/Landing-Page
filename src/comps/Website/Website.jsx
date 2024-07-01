import React from 'react';
import './Website.css';
import { Link } from 'react-router-dom';

const Website = () => {
    return (
        <section id='website'>
            <div className="wcards">
                <div className="wcard">

                    <div className="top">
                        <h1>Basic Website</h1><br />
                        <h1 style={{ fontSize: '30px' }}>$148</h1>
                    </div>

                    <div className="mtop">
                        <li>Custom Designed Homepage (1x concept)</li>
                        <li>3 Custom Designed Inner Pages</li>
                        <li>3 Premium Stock Photos</li>
                        <li>1 Custom Banner Design</li>
                        <li>Cross-Browser (Chrome, Firefox, Safari, etc.) Compatibility</li>
                        <li>Contact Us Form</li>
                        <li>On-page SEO configuration</li>
                        <li>W3C Certified HTML</li>
                        <li>Complete Deployment</li>
                        <li>48-72 Hours Turnaround Time</li>

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
                        <h1>Professional Website</h1><br />
                        <h1 style={{ fontSize: '30px' }}>$398</h1>
                    </div>

                    <div className="mtop">
                        <li>Custom Designed Homepage (2x concepts)</li>
                        <li>5 Custom Designed inner pages</li>
                        <li>5 Premium Stock Photos</li>
                        <li>3 Custom Banner Design</li>
                        <li>Interactive & Animated Slider Banner</li>
                        <li>Contact Us Form</li>
                        <li>Cross-Browser (Chrome, Firefox, Safari, etc.) Compatibility.</li>
                        <li>On-page SEO configuration</li>
                        <li>Fast Load Time</li>
                        <li>Security Plugins</li>
                        <li>Google Friendly Sitemap</li>
                        <li>W3C Certified HTML</li>
                        <li>48-72 Hours Turnaround Time</li>
                        <li>Complete Deployment</li>
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
                        <h1>Business</h1><br />
                        <h1 style={{ fontSize: '30px' }}>$898</h1>
                    </div>

                    <div className="mtop">
                        <li>Custom Designed Homepage (3x concepts)</li>
                        <li>10 Custom Designed Inner Pages</li>
                        <li>Content Management System (CMS) Integration</li>
                        <li>Cross-Platform (Desktop, iPhone, Android, etc.) Responsive Compatibility</li>
                        <li>Interactive & Animated Slider Banner</li>
                        <li>8 Premium Stock Photos</li>
                        <li>5 Custom Banner Designs</li>
                        <li>Contact/Query Form</li>
                        <li>1 Landing Page Design</li>
                        <li>Newsletter Subscription (Optional)</li>
                        <li>2 Business Email Address</li>
                        <li>Social Media Integration (Facebook, Twitter, LinkedIn)</li>
                        <li>Google Friendly Sitemap</li>
                        <li>Cross-Browser (Chrome, Firefox, Safari, etc.) Compatibility</li>

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

export default Website