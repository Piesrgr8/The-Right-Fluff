import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

import '../../assets/css/form.css'

export default function FormSchedule(props) {
    const service_id = process.env.REACT_APP_SERVICE_ID
    const template_id = process.env.REACT_APP_TEMPLATE
    const public_key = process.env.REACT_APP_PUBLIC_KEY

    const list2 = props.events

    const [sent, setSent] = useState(false)
    const [btnHide, setBtnHide] = useState(false)
    const [captchaVerified, setCaptchaVerified] = useState(false)

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

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(service_id, template_id, form.current, public_key)
            .then(
                (result) => {
                    console.log(result.text)
                    setSent(true)
                },
                (error) => {
                    console.log(error.text)
                    setSent(false)
                    setBtnHide(false)
                }
            )
    }

    const changeHandler = (e) => {
        setSend((prevSend) => ({
            ...prevSend,
            [e.target.name]: e.target.value,
        }))
    }

    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const requiredFields = [
            'first_name',
            'last_name',
            'email',
            'date',
            'fromTime',
            'toTime',
            'venue',
            'eventTyp',
            'address',
        ]
        const allFieldsFilled = requiredFields.every((field) => send[field])

        if (allFieldsFilled && captchaVerified) {
            setBtnHide(true)
            sendEmail(e)
        } else if (!captchaVerified) {
            alert('Please complete the reCAPTCHA.')
        } else {
            alert('Please fill in all required fields.')
        }
    }

    return (
        <div className="formdata">
            {sent ? (
                <p id="sent">
                    Sent! We will review this data and get to you shortly!
                </p>
            ) : (
                <form ref={form} onSubmit={handleSubmit}>
                    <p>Contact Information</p>
                    <section>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="first_name"
                            value={send.first_name}
                            onChange={changeHandler}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="last_name"
                            value={send.last_name}
                            onChange={changeHandler}
                            required
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
                            id="date"
                            placeholder="01/01/2023"
                            name="date"
                            value={send.date}
                            onChange={changeHandler}
                            required
                        />
                    </section>
                    <section>
                        <p>From:</p>
                        <input
                            type="time"
                            id="fromTime"
                            placeholder="12:00 PM"
                            name="fromTime"
                            value={send.fromTime}
                            onChange={changeHandler}
                            required
                        />
                        <p>To:</p>
                        <input
                            type="time"
                            id="toTime"
                            placeholder="12:00 PM"
                            name="toTime"
                            value={send.toTime}
                            onChange={changeHandler}
                            required
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
                            required
                        />
                        <label htmlFor="in">Indoor</label>

                        <input
                            type="radio"
                            id="out"
                            name="venue"
                            value="Outdoor"
                            onChange={changeHandler}
                            required
                        />
                        <label htmlFor="out">Outdoor</label>
                    </section>
                    <section>
                        <select
                            name="eventTyp"
                            id="event"
                            onChange={changeHandler}
                            required
                        >
                            <option value="">Choose an option...</option>
                            {list2.map((m) => (
                                <option key={m.id} value={m.shortname}>
                                    {m.name}
                                </option>
                            ))}
                        </select>
                    </section>
                    <section>
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={send.address}
                            onChange={changeHandler}
                            required
                        />
                    </section>
                    <p>
                        Give us an idea on what your event is about! (Optional)
                    </p>
                    <section>
                        <textarea
                            name="message"
                            onChange={changeHandler}
                        ></textarea>
                    </section>
                    <span>
                        <ReCAPTCHA
                            sitekey="6LfqsdIiAAAAAMkT6RAT4D9KOQgnpmPRDi5CjAsq"
                            size="normal"
                            onChange={handleCaptchaChange}
                        />
                    </span>
                    {!btnHide && (
                        <button type="submit" name="done">
                            Schedule
                        </button>
                    )}
                </form>
            )}
        </div>
    )
}
