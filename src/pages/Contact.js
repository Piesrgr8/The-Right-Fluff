import React from 'react'
import FormSchedule from '../comp/features/FormSchedule'
import { flavors, partyType } from '../comp/important/Options'

export default function Contact() {
    return (
        <div>
            <h1>Contact Us!</h1>
            <p>
                If you love cotton candy, then why dont you invite us over to
                make it special for you?
            </p>

            <FormSchedule flavors={flavors} events={partyType} />
        </div>
    )
}
