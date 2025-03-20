import { useParams } from 'react-router'

const MailboxDetails = (props) => {
    console.log(props)

    const {boxId} = useParams() ;
    console.log(boxId)

    const singleMailbox = props.mailboxes.find((box) => {
        return (
            //we need to convert the id from string to integer
            box._id === Number(boxId)
        )
        console.log('mailbox: ', singleMailbox)
    })

    return (
        <>
            <h1>Mailbox {boxId}</h1>
            <h2>Details</h2>
            <dl>
                <dt>BoxHolder: {singleMailbox.boxOwner} </dt>
                <dd></dd>

                <br />
                <dt>Box Size: {singleMailbox.boxSize}</dt>
                <dd></dd>
            </dl>
        
        </>
    )
}

export default MailboxDetails