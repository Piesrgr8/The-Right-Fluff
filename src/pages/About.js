import React from 'react'
import cert from '../assets/img/organiccertificate.png'

export default function About(props) {
    const imgs = props.images
    return (
        <div className="about">
            <h1>Our Story</h1>
            <br />
            <section className="pic-left">
                <div className="img">
                    <img src={imgs[5]} alt="Dana preparing cotton candy." />
                </div>
                <div className="text">
                    <p>
                        The Right Fluff is family-owned, a true small business
                        dedicated to bringing smiles to faces of all ages. After
                        all, few treats are as ageless and timeless as cotton
                        candy. And we couldn’t think of a more fun way to spread
                        a little joy to our community while teaching our own
                        kids about business.
                    </p>
                    <p>
                        But there’s more to the story. As parents of a child
                        with food sensitivities, we were heartbroken when she
                        couldn’t enjoy something as simple and fun as a cone of
                        cotton candy at the county fair. That got us thinking:
                        How many other kids (or kids at heart) deny themselves
                        such simple pleasures?
                    </p>
                </div>
            </section>
            {/* <section className='pic-left'>
            <div className='img'></div>
            <div className='text'>
                <p>But there’s more to the story. As parents of a child with food sensitivities, we were heartbroken when she couldn’t enjoy something as simple and fun as a cone of cotton candy at the county fair. That got us thinking: How many other kids (or kids at heart) deny themselves such simple pleasures?</p>
            </div>
        </section> */}
            <section className="pic-bottom">
                <div className="img">
                    <img src={cert} alt="" />
                </div>
                <div className="text">
                    <p>
                        That’s why our twist on a traditional treat is made with
                        dye-free, all-natural flavors blended into a base of
                        organic sugar that is guaranteed to bring back as many
                        memories as it will create new ones.
                    </p>
                </div>
            </section>
        </div>
    )
}
