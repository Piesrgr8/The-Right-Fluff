import '../assets/css/Pages.css'
import React from 'react'
import {flavors, partyType} from '../comp/important/Options'
import logo from '../assets/img/icon.svg'
import { Link } from 'react-router-dom';

const list1 = flavors;
const list2 = partyType;

export default function Home(props) {
    const imgs = props.images;
    return (
        <div className="home">
            <div className="home-header">
                <img id='logopop' src={logo} alt=''/>
                <div className="carousel">
                    <div className="carousel-track">
                        <div className="slide">
                            <img src={imgs[0]} key={1} alt="" />
                        </div>
                        <div className="slide">
                            <img src={imgs[1]} key={2} alt="" />
                        </div>
                        <div className="slide">
                            <img src={imgs[2]} key={3} alt="" />
                        </div>

                        <div className="slide">
                            <img src={imgs[3]} key={4} alt="" />
                        </div>
                        <div className="slide">
                            <img src={imgs[4]} key={5} alt="" />
                        </div>
                        <div className="slide">
                            <img src={imgs[5]} key={6} alt="" />
                        </div>

                        <div className="slide">
                            <img src={imgs[0]} key={7} alt="" />
                        </div>
                        <div className="slide">
                            <img src={imgs[1]} key={8} alt="" />
                        </div>
                        <div className="slide">
                            <img src={imgs[2]} key={9} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap" aria-label="Main Page"  aria-required="true">
                {/* <InfoCard /> */}
                <h1>Put a Fresh Spin on your Next Event</h1>
                <p>Make your next event a little sweeter with fresh live spinning and flavorful treats for your guests.</p>
                <ul id='events'>
                    {list2.map((m) =>
                    <li key={m.id} style={{'backgroundImage': 'url(' + m.banner + ')'}}><p>{m.name}</p></li>
                    )}
                </ul>
                <p>Inside or outdoors, day or night, rain or shine, we provide a fun and memorable highlight to any event. Our cotton candy is spun fresh from pure cane sugar. Certified Organic, Gluten-free, Kosher, Vegan, and free of arfticial colors.</p>
                <hr/>
                <h1>A Flavorful Twist on a Traditional Treat</h1>
                <p>We take those sweet memories of days at the county fair to a new level with gourmet flavors your guests will love. Our favorites include:</p>
                <ul id='flavors'>
                    {list1.map((m) =>
                    <li key={m.id} style={{'backgroundColor': m.basecolor}}><p style={{'color': m.id !== 5 ? 'black' : 'white'}}>{m.name}</p></li>
                    )}
                </ul>
                <p>Interested in a flavor that's not on this list?</p>
                <Link to={"/contact"}><strong id='link'>Contact us!</strong></Link>
                <hr/>
                <h1>Pricing</h1>
                <p>Book a live spinner for any size event, from backyard barbecues to all-day festivals. Our prices start at $250 for the 1st hour for up to 50 guests. Prices fluctuate with the size and duration of your event and flavor choices.</p>
                <Link to={"/contact"}>Contact us!</Link>
                <br/>
            </div>
        </div>
    )
}
