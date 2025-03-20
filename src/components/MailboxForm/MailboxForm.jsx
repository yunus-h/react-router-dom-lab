import { useState} from "react";
import { useNavigate } from "react-router";

const MailboxForm = (props) => {
    // we need to have some initial states

    const initialState = {
        boxSize : '',
        boxOwner : '',
    }
    const [formData, setFormData] = useState(initialState)
    // navigate hook
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!')
        props.addBox(formData)
        setFormData(initialState)

        // go to pokemon list
        navigate('/mailboxes')

        
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <main>
            <h2>New Mailbox</h2>

            <form onSubmit= {handleSubmit}>

                <label htmlFor="boxOwner">Enter a Boxholder: </label>
                <input 
                    type ="text"
                    id = "boxOwner"
                    name = "boxOwner"
                    value={formData.boxOwner}
                    onChange={handleChange}
                />

                <br />

                <label htmlFor="boxSize">Select a Box Size: </label>
                <select 
                    name="boxSize" 
                    id="boxSize" 
                    value={formData.boxSize}
                    onChange={handleChange}
                    >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            
                <br />
                <br />

                <button type = "submit" style = {{background : 'red'}}>Submit</button>
            </form>
        </main>
    )
}

export default MailboxForm;