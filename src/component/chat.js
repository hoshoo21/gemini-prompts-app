import { useEffect, useRef, useState } from 'react'
import './chat.css'
import MessageComponent from './message';
import TypingIndicatorComponent from './typingindicator,js';

const ChatComponent = () => {
    const enteredInputRef = useRef();
    const displayAreaRef = useRef();
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const dispatchToContentGeneration = () => {
        const requesBody = { "promptText": enteredInputRef.current.value }
        console.log(requesBody)
        enteredInputRef.current.value = '';

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(requesBody);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,

        };

        fetch("http://localhost:5000/prompts", requestOptions)
            .then((response) => response.json())
            .then((result) => {

                setMessages((prevMessages) => [...prevMessages, {
                    classList: 'message bot',
                    text: result.promptResponse
                }]


                )
                console.log(messages)
                setIsTyping(false);
            })
            .catch((error) => console.error(error));
    }
    // useEffect(() => {
    //     console.log(messages)
    //     displayAreaRef.current.scrollTop = displayAreaRef.current.scrollHeight;
    // },

    //     [messages])
    const randomNumber = () => {
        console.log(Math.ceil(Math.random()) * 100000);
        return Math.ceil(Math.random()) * 100000;
    }

    const sendMessage = () => {
        const enteredInput = enteredInputRef.current.value.trim();
        if (enteredInput !== '') {
            setMessages([...messages, {
                classList: 'message user',
                text: enteredInput
            }])
            enteredInputRef.current.style.height = 'auto';

        }
        dispatchToContentGeneration();

        setIsTyping(true);

    }

    const handlePrompt = (evt) => {


    }
    const handleKeyInput = (evt) => {
        if (evt.keyCode === 13) {
            evt.preventDefault();
            sendMessage();


        }


    }
    return (
        <div className="chat-container">

            <div
                className="message-display-area" ref={displayAreaRef}>
                {messages.length > 0 && messages.map((message) => <MessageComponent id={randomNumber()} classList={message.classList} text={message.text} />)}
                {isTyping &&
                    <div className="message bot typing-indicator visible">
                        <span className="typing-dots">
                            <span className="typing-dots"></span>
                            <span className="typing-dots"></span>
                        </span>
                    </div>
                }
            </div>
            <div className='input-container'>
                <textarea
                    className='inputField'
                    onKeyUp={handleKeyInput}
                    rows='1'
                    placeholder='Type your prompt here'
                    ref={enteredInputRef}></textarea>
                <button className="sendButton" onClick={handlePrompt} > Send </button>
            </div>
        </div>
    );
}

export default ChatComponent;