import React from 'react'
import Flavors from '../comp/important/Options'

export default function Shop() {
    return (
        <div className="shop">
            <div>
                <h1>Coming Soon!</h1>
                <p>
                    From here, you'll be able to order our cotton candy from
                    home!
                </p>
            </div>
            <div className="flavors">
                {Flavors.map((m) => (
                    <div className="indflav" key={m.id}>
                        <img src={m.img} alt="" />
                        <h3>{m.name}</h3>
                        <p>{m.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
