import GigForm from './GigForm'
// import VenueForm from './VenueForm'
import { useState } from 'react'

function AddGig() {

    const [formData, setFormData] = useState([])

    return (
        <div className="content-panel">
            <h1>Gig Details</h1>
            <p>client form</p>
            {/* <VenueForm formData={formData} setFormData={setFormData} /> */}
            <GigForm  formData={formData} setFormData={setFormData} />
        </div>
    )
}

export default AddGig