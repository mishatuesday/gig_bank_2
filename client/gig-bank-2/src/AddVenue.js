
function AddVenue({setShowAddVenue, setVenue}) {

    return (
        <>
        <p>A Form to Enter a Venue</p>
        <a href="#" onClick={() => setShowAddVenue(false)}>cancel</a>
        </>
    )
}

export default AddVenue