import React from 'react'
import '../Plans.css';
// import '../App.css';
import plansimage from '../images/plansimage.png';
import unlock from '../images/unlock.png';
import endsplan from '../images/endsplan.png';

function PlansPage() {
  return (
    <>
    <header>
        <a href="#" className="logo"><i className="fa-solid fa-circle"></i>headspace</a>
    </header>

    <section className="home" id="home">
        <div className="content">
            <h5>Find some headspace today</h5>
            <h3>Be kind to your mind</h3>
            <p>A healthier, happier you starts right here. Choose a Headspace plan and get started</p>
        </div>
        <div className="boxes">
            <div className="box">
                <div className="box-content">
                    <h5>Annual - 14 days free - $69.99</h5>
                    <p>$5.83 USD/month</p>
                </div>
                <div className="check-box">
                    <input type="checkbox" id="myCheckbox"/>
                </div>
            </div>
            <div className="box">
                <div className="box-content">
                    <h5>Monthly - 7 days free</h5>
                    <p>- $12.99 USD/month</p>
                </div>
                <div className="check-box">
                    <input type="checkbox" id="myCheckbox"/>
                </div>
            </div>
        </div>
        <p className="plans-para">After your free trial, the annual subscription is $69.99 USD and automatically renews each
            year.</p>
        <div className="conditions">
            <p>Terms & conditions</p>
            <p>Cancel anytime</p>
        </div>
        <a href="#" className="btn">Start your free trial</a>
    </section>



    <div className="student" id="student">
        <div className="image">
            <img src={plansimage} alt=""/>
        </div>

        <h3>Check out our student and family plans, too.</h3>
        <div className="student-pricing">
            <a href="#" className="btn">View Student Pricing</a>
            <a href="#" className="btn">View Family Pricing</a>
        </div>

    </div>


    <div className="unlock" id="unlock">
        <h1 className="heading">Unlock everything</h1>
        <a href="#" className="btn">Start your free trial</a>
        <div className="image">
            <img src={unlock} alt=""/>
        </div>
    </div>


    <section className="meditating" id="meditating">
        <h1 className="heading">Join millions meditating with Headspace</h1>
        <div className="icons-container">
            <div className="icons">
                <div className="star-icons">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star-half-stroke"></i>
                </div>
                <h3>2.2Stars</h3>
                <p>Average rating</p>
            </div>
            <div className="icons">
                <i className="fa-solid fa-award"></i>
                <h3>275.4k Rating</h3>
                <p>On iOS and Google Play</p>
            </div>
            <div className="icons">
                <i className="fa-solid fa-users"></i>
                <h3>3M Downloads</h3>
                <p>Across all platforms</p>
            </div>
        </div>
        <div className="meditating-btn">
            <a href="#" className="btn">Start your free trial</a>
        </div>
    </section>

    <div className="endplans" id="endplans">
        <div className="headspaceplan">
            <div className="image">
                <img src={endsplan} alt=""/>
            </div>
            <div className="content">
                <h3>Find some headspace today</h3>
                <p><span><i className="fa-solid fa-check"></i></span>Access the full library of sleep exercises and audio experiences</p>
                <p><span><i className="fa-solid fa-check"></i></span>Make daytime happier with meditations, workouts, and inspiring videos</p>
                <p><span><i className="fa-solid fa-check"></i></span>Choose from a range of teachers and voices</p>
            </div>
        </div>
    </div>

    <section className="endsprice" id="endsprice">
        <div className="boxes">
            <div className="box">
                <div className="box-content">
                    <h5>Annual - 14 days free - $69.99</h5>
                </div>
                <div className="check-box">
                    <input type="checkbox" id="myCheckbox"/>
                </div>
            </div>
            <div className="box">
                <div className="box-content">
                    <h5>Monthly - 7 days free - $12.99</h5>
                </div>
                <div className="check-box">
                    <input type="checkbox" id="myCheckbox"/>
                </div>
            </div>
        </div>
        <p className="plans-para">After your free trial, the annual subscription is $69.99 USD and automatically renews each
            year.</p>
        <div className="conditions">
            <p>Terms & conditions</p>
            <p>Cancel anytime</p>
        </div>
        <a href="#" className="btn">Start your free trial</a>
    </section>



    <div className="end-footer" id='plans-foot'>
        <nav className="footer-line">
            <a href="#© 2023 Headspace Inc.">© 2023 Headspace Inc.</a>
        </nav>
    </div>
    </>
  )
}

export default PlansPage