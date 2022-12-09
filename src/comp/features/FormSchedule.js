import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

import '../../assets/css/form.css'

export default function FormSchedule(props) {

    let service_id = process.env.REACT_APP_SERVICE_ID;
    let template_id = process.env.REACT_APP_TEMPLATE;
    let public_key = process.env.REACT_APP_PUBLIC_KEY;

    // const list = props.flavors;
    const list2 = props.events;

    var sent = false;

    // const [checked, setChecked] = useState([])

    const [send, setSend] = useState({
        first_name: '',
        last_name: '',
        email: '',
        date: '',
        fromTime: '',
        toTime: '',
        venue: '',
        eventTyp: '',
        address: '',
        phone: '',
        message: '',
    })

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(service_id, template_id, form.current, public_key)
          .then((result) => {
              console.log(result.text);
              sent = true;
          }, (error) => {
              console.log(error.text);
              sent = false;
          });
      };

    const changeHandler = (e) => {
        setSend({ [e.target.name]: e.target.value })
    }

    // const changeArrayHandler = (e) => {
    //     var newList = checked
    //     if (e.target.checked) {
    //         newList.push(e.target.value)
    //     } else {
    //         newList.splice(checked.indexOf(e.target.value), 1)
    //     }

    //     newList.sort()
    //     setChecked(newList)
    // }

    return (
        <div className="formdata">
            {sent ? <p id='sent'>Sent! We will review this data and get to you shortly!</p> :
            <form ref={form} onSubmit={sendEmail}>
                <p>Contact Information</p>
                <section>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value={send.first_name}
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        value={send.last_name}
                        onChange={changeHandler}
                    />
                </section>
                <section>
                    <input
                        type="text"
                        placeholder="E-Mail"
                        name="email"
                        value={send.email}
                        onChange={changeHandler}
                        required
                    />
                    <input 
                        type="tel"
                        placeholder="Phone #"
                        name="phone"
                        value={send.phone}
                        onChange={changeHandler}
                    />
                </section>
                <p>Date & Time</p>
                <section>
                    <input
                        type="date"
                        placeholder="01/01/2023"
                        name="date"
                        value={send.date}
                        onChange={changeHandler}
                    />
                </section>
                <section>
                    <p>From:</p>
                    <input
                        type="time"
                        placeholder="12:00 PM"
                        name="time"
                        value={send.fromTime}
                        onChange={changeHandler}
                    />
                    <p>To:</p>
                    <input
                        type="time"
                        placeholder="12:00 PM"
                        name="time"
                        value={send.toTime}
                        onChange={changeHandler}
                    />
                </section>
                <p>Venue & Party</p>
                <section style={{ width: 'fit-content' }}>
                    <input
                        type="radio"
                        id="in"
                        name="venue"
                        value="Indoor"
                        onChange={changeHandler}
                    />
                    <label htmlFor="in">Indoor</label>

                    <input
                        type="radio"
                        id="out"
                        name="venue"
                        value="Outdoor"
                        onChange={changeHandler}
                    />
                    <label htmlFor="out">Outdoor</label>
                </section>
                <section>
                    <select name='eventTyp'>
                        <option value="not">Choose an option...</option>
                        {list2.map((m) => 
                        <option key={m.id} value={m.shortname}>{m.name}</option>
                        )}
                    </select>
                </section>
                <section>
                    <input
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={send.address}
                        onChange={changeHandler}
                    />
                </section>
                <p>Give us an idea on what your event is about! (Optional)</p>
                <section>
                    <textarea name='message' onChange={changeHandler}></textarea>
                </section>
                <span>
                    <ReCAPTCHA
                        sitekey="6LfqsdIiAAAAAMkT6RAT4D9KOQgnpmPRDi5CjAsq"
                        size="normal"
                    />
                </span>
                <button type="submit" name="done">
                    Schedule
                </button>
            </form>}
        </div>
    )
}
