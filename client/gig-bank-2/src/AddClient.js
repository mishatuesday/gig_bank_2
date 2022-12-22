
function AddClient({setShowAddClient, client, setClient}) {
    //not sure I need client
    return (
        <>
        <p>AddClient component</p>
        <a href="#" onClick={() => setShowAddClient(false)}>cancel</a>
        </>
    )
}

export default AddClient