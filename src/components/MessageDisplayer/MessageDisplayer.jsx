
export default function MessageDisplayer({msg, visible = true}){

    return(
        <>
        <p>Message:</p>
        {visible && (
            <p>{msg|| "No message"}</p>

        )}

        </>
    )

}