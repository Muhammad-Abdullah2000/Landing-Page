import React, { useState } from 'react';
import './Header.css';
import Logo from './google.webp';
import Logo2 from './Accrediated-Logss-03.svg';
import fifty from './50percent.webp';
import Slider from '../Slider/Slider';
import Tabs from '../Tabs/Tabs';
import Tabs2 from '../Tabs2/Tabs2';
import Lap from './cta-img.webp';
import award from './award-side-1.webp';
import award1 from './award-side-2.webp';
import award2 from './award-side-4.webp';
import fLaptop from './footer-laptop.webp';
import cards from './card-brands.webp';
import dmca from './dmca_protected_sml_120l.png';
import Tabs3 from '../Tabs3/Tabs3';
import ig from '../form-image.webp';
import Nav from '../../components/Nav';
import { Link } from 'react-router-dom';


import axios from 'axios';


const Header = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        await axios.post('http://localhost:5000/api/v1/sendmail', {
            name,
            email,
            number,
            content,
        }).then((res) => {

            console.log(res);

            alert('Data sended');

            setName('');
            setEmail('');
            setNumber('');
            setContent('');
        })

    }



    return (
        <>

            {/* <Navbar /> */}


            <Nav />


            <section id='header'>



                <div className="c">
                    <div className="container1">
                        <p id='pcon1'>CUSTOM WEBSITE DEVELOPMENT SOLUTION</p>
                        <h1 id='hcon1' >From Concept to Launch:</h1>
                        <h1 id='hcon2' >Customized Web Development Solutions</h1><br />

                        <p id='pcon2'>Ready to build website to the next level? Well, you've landed in the perfect spot!</p><br />

                        <p id='pcon3'>Our custom web design service offers not only stunning visuals but also robust functionality that will leave your visitors impressed. Whether you need an online store, portfolio design, informative website, or anything else, we've got you covered.</p><br />

                        <li style={{ color: 'white' }}>Unlimited product pages.</li>
                        <li style={{ color: 'white' }}>Creative concept from a professional designer within 24hrs.</li>
                        <li style={{ color: 'white' }}>Full copyright and production readiness.</li>
                        <li style={{ color: 'white' }}>Full copyright and production ready files</li>
                        <li style={{ color: 'white' }}>100% guaranteed satisfaction.</li>

                        <div className="imgs">
                            <img src={Logo} alt="" style={{ width: '90px' }} />
                            <img src={Logo2} alt="" style={{ width: '90px' }} />
                        </div>

                        <div className="btn">
                            <button>Talk With Our Web Designer Experts</button>
                        </div>
                    </div>
                </div>

                <div className="d">

                    <div className="t">
                        <h1>Chat With Us to</h1>
                        <h1 style={{ fontSize: '30px', color: 'red' }}>Avail 70% Discount</h1>
                    </div>


                    <form action="" id='cform'>

                        <label htmlFor="">Name</label>
                        <input type="text" name="" id="inp1" />
                        <label htmlFor="">Email Address</label>
                        <input type="text" name="" id="inp1" />
                        <label htmlFor="">phone</label>
                        <input type="text" name="" id="inp1" />
                        <label htmlFor="">To help us understand better,enter a brief description about your project</label>
                        <textarea name="" id="t" cols="30" rows="10"></textarea>
                    </form>

                    <div className="c1btn">
                        <button id='cbt'>GET FREE CONSULTANCY</button>
                    </div>

                    <div className="p">
                        <p ><Link style={{ textDecoration: 'none' }} to={'https://logowithweb.com/contact/'}>Talk To Our Design Consultant Now</Link></p>
                    </div>

                </div>



            </section>



            <Slider />


            <div className="container2">


                <p id='pcon21'>We rated 4.7 out of 5  served 1200+ satisfied customers.</p>


                <div className="third">


                    <div className="th">

                        <div className="txt">
                            <h1 id='hcon21' >987+</h1>
                            <p id='pcon22'>Website/Web App Developed</p>
                        </div>

                        <div className="txt">
                            <h1 id='hcon21' >3487 +</h1>
                            <p id='pcon22' >Logo and UX/UI Designing</p>
                        </div>

                        <div className="txt">
                            <h1 id='hcon21' >74 +</h1>
                            <p id='pcon22' >Mobile Application Developed</p>
                        </div>

                        <div className="txt">
                            <h1 id='hcon21' >878 +</h1>
                            <p id='pcon22' >Ecommerce Website Developed</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container3">
                <div className="left">
                    <div className="txt1">
                        <h1 id='hcon13' >Beyond the Basics: How</h1>
                        <h1 id='hcon13'>Our Value-Added</h1>
                        <h1 id='hcon13'>Services Set Us Apart</h1><br /> <br />

                        <p id='pcon13'>The Logo with Web doesn't just stop at providing exceptional website designer and development services. We also offer various value-added services to take your online presence to the next level. From SEO optimization to social media marketing, our supplementary services can be availed separately or in combination with our core offerings to provide tangible benefits for your business. Let us help you thrive in the digital landscape with our comprehensive suite of services.</p>

                        <div className="button" >
                            <button>DISCUSS YOUR IDEA</button>
                        </div>

                    </div>






                </div>

                <div className="right12">
                    <Tabs3 />
                </div>
            </div>





            <div className="container4">
                <h1 id='hcon14'>Innovating for a Better Tomorrow</h1>
                <p id='pcon14' >Innovating for a better tomorrow requires collaboration with extraordinary clients worldwide. Together, we can achieve design excellence.</p>
            </div>

            <Tabs />


            <div className="container5">
                <div className="first">
                    <h2 style={{ width: '380px', color: 'white' }}>Want to Refresh Your Website's Design and Functionality?</h2><br />
                    <p style={{ width: '335px', color: 'white' }}>We value your time and are here to assist you - get in touch with us today!</p>
                </div>

                <div className="middle">
                    <img src={fifty} alt="" />
                    <h1 style={{ color: 'white' }}>CHAT
                        WITH US TO AVAIL
                        70% OFF</h1>
                </div>

                <div className="last">
                    <button>Chat Now</button>
                </div>
            </div>


            <Tabs2 />


            <div className="container10">
                <div className="con10left">
                    <h1 id='h10head'>Complete Branding Solution</h1> <br />
                    <h4 id='h10head1'>THE WEB DESIGN LLC IS YOUR ONE STOP SHOP.</h4>

                    <div className="mi">
                        <div className="c10lef">

                            <div className="oneone">
                                <h4>Logo Design</h4> <br />
                                <li>Logo Design</li>
                                <li>Unlimited Logo Concepts</li>
                                <li>Unlimited Revisions</li>
                                <li>(PSD, PDF, AI, JPEG, PNG)</li>
                                <li>Icon Design</li>
                            </div>

                            <div className="twotwo">
                                <h4>Stationary</h4> <br />
                                <li>Stationary</li>
                                <li>MS Word (Letterhead)</li>
                                <li>(Envelope, Business Card)</li>

                            </div>

                            <div className="threethree">
                                <h4>Social Media</h4> <br />
                                <li>Social Media</li>
                                <li>Facebook Page Design</li>
                                <li>Twitter Page Design</li>
                                <li>YouTube Page Design</li>
                                <li>Google+ Page Design</li>


                            </div>

                        </div>

                        <div className="c10mi">

                            <div className="oneoneone">
                                <h4>Website</h4> <br />
                                <li>Website</li>
                                <li>Websites Dynamic Liquid</li>
                                <li>CMS</li>
                                <li>Developers Mobile Responsive</li>
                                <li>with (IOS, Android, Tablets etc)</li>
                                <li>Custom Forms</li>
                                <li>Lead Capturing Forms (Optional)</li>
                                <li>15 Stock images</li>
                                <li>(8 Unique Banner Designs)</li>
                                <li>Jquery Sliders</li>
                                <li>Free Google Friendly Sitemap</li>
                                <li>Certified WordPress (Add,delete Products)</li>
                                <li>(Pages, Pictures, Videos)</li>
                                <li>Testing And Deployment</li>
                                <li>Cross Browser Compatible</li>
                                <li>Unique Interface</li>
                                <li>SEO Friendly Design</li>

                            </div>



                        </div>

                        <div className="c10la">

                            <div className="fourfour">
                                <h4>Value Added Services</h4> <br />
                                <li>Value Added Services</li>
                                <li>All Final File Formats</li>
                                <li>Dedicated Account Managers</li>
                                <li>100% Satisfaction Guarantee</li>
                                <li>100% Unique Design Guarentee</li>
                                <li>100% Satisfaction And Money</li>
                                <li>Back Guarantee</li> <br />


                                <div className="ig">
                                    <img src={ig} alt="" id='ig' />
                                </div>

                                <h1>$1,499</h1>


                                <div className="btren">
                                    <button id='btttt'>Order Now</button>
                                </div>





                            </div>



                        </div>

                    </div>




                </div>

                <div className="con10right">
                    <img src={fLaptop} alt="" id='fg' />
                </div>
            </div>



            <div className="container7">
                <div className="cleft">
                    <h1>Building Your <br /> Digital Presence, One Step at a Time</h1> <br />
                    <p>Partner with our team of website designer to achieve your goal of developing an engaging and robust website for your business. We offer comprehensive technical advice and support at every step of the development process.</p> <br />

                    <div className="cbtn">
                        <button>Chat With Us</button>
                    </div>
                </div>

                <div className="cright">
                    <img src={Lap} alt="" id='fg' />
                </div>


            </div>




            <div className="container8">
                <div className="container8txt">
                    <p id='pcon18'>TRANSFORMING BUSINESSES</p>
                    <h1 id='hcon18'>Escalating Reach</h1>
                    <p id='pcon28' >From startups to established organizations, we provide website solutions that help create an online presence, generate leads, increase conversions, and develop online stores. Our comprehensive range of services is tailored to meet each business's unique needs, combining innovation and creativity to drive results.</p>
                </div>

                <div className="con8imgs">

                    <div className="a8imgs">

                        <div className="o">
                            <img src={award} alt="" style={{ width: '200px' }} id='o' />
                            <p>First Recognition By Fast Company</p>
                        </div>

                        <div className="n">
                            <img src={award1} alt="" style={{ width: '200px' }} id='n' />
                            <p>Then Fortune 100 Joins The Race</p>
                        </div>

                        <div className="e">
                            <img src={award2} alt="" style={{ width: '200px' }} id='e' />
                            <p>The Finality By The Software Report</p>
                        </div>



                    </div>

                </div>
            </div>


            <div className="container9">

                <div className="con9left">

                    <div className="t1">
                        <h1>Feedback Welcome: <br /> We Want to Hear from You</h1>
                    </div>

                    <div className="t2">
                        <p id='pcon19' >Attention! In order to benefit from the top-notch services and packages offered by Logo with Web, signing up is a mandatory requirement. With our expertise and dedication, we ensure to turn all your ideas into a successful project that exceeds your expectations.</p>
                    </div>


                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" id='name' name="name" placeholder='Name *' value={name} onChange={(e) => setName(e.target.value)} />

                        <div className="inp">
                            <input type="email" placeholder='Email *' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="number" placeholder='Number *' name="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div>


                        <textarea name="content" id="textarea" placeholder='Comment' value={content} onChange={(e) => setContent(e.target.value)}></textarea> <br /> <br />

                        <button type='submit'>Submit</button>
                    </form>


                </div>

                <div className="con9right">
                    <img src={fLaptop} alt="" />
                </div>

            </div>


            <footer>
                <div className="f1">
                    <p style={{ color: 'red' }}>UNITED STATES</p>

                    <div className="fbtns">
                        <button>Contact Us</button>
                        <button style={{ background: 'white', color: 'black' }}>Get Started</button>
                    </div>
                </div>

                <div className="f2">
                    <p>13727 SW 152nd Street suit <br /> #1067 Miami, FL 33177 <br /> <br /> (786) 4534883</p>
                    <img src={cards} alt="" id='fimg' />


                    <div className="icons">
                        <i className='bx bxl-facebook'></i>
                        <i className='bx bxl-instagram'></i>
                        <i className='bx bxl-twitter'></i>
                    </div>


                </div>

                <hr style={{ width: '80%', margin: 'auto' }} />

                <div className="f3">
                    <p>Copyright © 2023 The Logo with Web. All rights <br /> reserved</p>

                    <img src={dmca} alt="" id='fimg1' />

                    <div className="icons1" >
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </footer>







        </>

    )
}

export default Header