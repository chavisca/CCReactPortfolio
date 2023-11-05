export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [messageErrorMessage, setMessageErrorMessage] = useState('');

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    };

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
        validateName(newName);
    };

    const handleMessageChange = (e) => {
        const newMessage = e.target.value;
        setMessage(newMessage);
        validateMessage(newMessage);
    };

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            setEmailErrorMessage('Please enter a valid email address.');
        } else {
            setEmailErrorMessage('');
        }
    };

    const validateName = (name) => {
        if (!name.trim()) {
            setNameErrorMessage('This field is required.');
        } else {
            setNameErrorMessage('');
        }
    };

    const validateMessage = (name) => {
        if (!message.trim()) {
            setMessageErrorMessage('This field is required.');
        } else {
            setMessageErrorMessage('');
        }
    };

    const handleSubmit = () => {
        if (
            emailErrorMessage === '' &&
            nameErrorMessage === '' &&
            messageErrorMessage === '' 
        ) {

        }
    };

    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                action="https://getform.io/slug"
                method="POST"
                className="flex flex-col w-full md:w-7/12"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                        onBlur={handleNameChange}
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    {nameErrorMessage && <p className="text-red-500">{nameErrorMessage}</p>}
                    <input
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailChange}
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    {emailErrorMessage && <p className="text-red-500">{emailErrorMessage}</p>}
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        value={message}
                        onChange={handleMessageChange}
                        onBlur={handleMessageChange}
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <br></br><br></br>
                    {messageErrorMessage && <p className="text-red-500">{messageErrorMessage}</p>}
                    <button
                        type="button" 
                        onClick={handleSubmit}
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-yellow-500 drop-shadow-md hover:stroke-white"
                    >
                        Contact Me
                    </button>
                </form>
            </div>
        </div>
    )
}