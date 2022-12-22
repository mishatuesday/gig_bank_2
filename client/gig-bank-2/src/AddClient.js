
function AddClient({setShowAddClient, setClient}) {
    
    return (
        <>
        <p>A Form to Enter a Client</p>
        <a href="#" onClick={() => setShowAddClient(false)}>cancel</a>
        </>
    )
}

export default AddClient