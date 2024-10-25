import './../footer.css';
import { Icon } from '@iconify-icon/react';

export default function Footer() {  
    return (
        <>
            <div className="footer-container">
                
                    <div className="cards">
                        <div className="card">
                        <div className="icon-card">
                        <Icon icon="lineicons:offer" width="78" height="78"  style={{color: "#00B2EA"}} />

                        </div>
                            <h3>Best Price & Offers</h3>
                            <p>Order $50 Or More</p>
                        </div>
                        <div className="card">
                        <div className="icon-card">
                        <Icon icon="cil:truck" width="78" height="78"  style={{color: "#00B2EA"}} />

                        </div>
                            <h3>Free Delivary</h3>
                            <p>24/7 amazing services</p>
                        </div>
                        <div className="card">
                        <div className="icon-card">
                        <Icon icon="mdi:deal" width="78" height="78"  style={{color: "#00B2EA"}} />

                        </div>
                            <h3>Great Daily Deal</h3>
                            <p>When you sign up</p>
                        </div>
                        <div className="card">
                        <div className="icon-card">
                        <Icon icon="mdi:world-wide-web" width="78" height="78"  style={{color: "#00B2EA"}} />

                        </div>
                            <h3>Wide Assortment</h3>
                            <p>Wide Assortment</p>
                        </div>
                        <div className="card">
                        <div className="icon-card">
                        <Icon icon="tabler:truck-return" width="78" height="78"  style={{color: "#00B2EA"}} />

                        </div>
                            <h3>Easy Returns</h3>
                            <p>Within 30 days</p>
                        </div>
                      
                    </div>
                
                <div className="down-footer">
                
                    <div className="logo">
                        <div className="logo-info">
                    <img src="https://logo-icons.com/cdn/shop/files/1329-logo-1713455809.887color-D32F2F.svg?v=1713638841&width=1445" alt="logo" />
                    <h2 className="gorcer-h2">grocer</h2><h2 className="ex-h2">ex</h2> 

                        </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                     Lorem Ipsum has been the industry`&apos`s standard dummy text ever since the 1500s, <br />
                      when an unknown printer took a galley of type <br />
                       and scrambled it to make a type specimen book.</p>
                       <div className="payment-info">
                        <h4>Payment Accepted</h4>
                        <Icon icon="logos:visa" width="40" height="30" className="payment-icons"/>
                        <Icon icon="logos:mastercard" width="40" height="30" className="payment-icons"/>
                        <Icon icon="fontisto:paypal" width="40" height="30"  style={{color: "blue"}} className="payment-icons"/>
                       </div>
                    </div>
                    <div className="support">
                        <h2>support</h2>
                        
                        <ul>
                            <li>Track Your Order</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Help Centre</li>
                        </ul>
                    </div>
                    <div className="support">
                        <h2>Useful Links</h2>
                        
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>News & Articles</li>
                        </ul>
                    </div>
                    <div className="support">
                        <h2>Contact with me</h2>
                        
                        <ul>
                            <li><a href="tel:+9647726159889" >+9647726159889</a></li>
                            <li><a href="https://www.linkedin.com/in/ali-emad-53431a213/" target="_blank"> Linkedin</a></li>
                            <li><a href="https://github.com/AliAlkordy1" target="_blank">github</a></li>
                            
                        </ul>
                    </div>
                
                </div>
            </div>
        </>
    );
    
}