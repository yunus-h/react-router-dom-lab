import { Link } from "react-router";

const MailboxList = (props) => {
    return (
      <>
        <h1>Mailbox List</h1>
        <ul>
          {props.mailboxes.map((currentMailbox) => (
            <li className = 'mail-box' key={currentMailbox._id}>
               
                <Link to={`/mailboxes/${currentMailbox._id}`}>
                    Mailbox {currentMailbox._id}
                </Link>

                
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default MailboxList;