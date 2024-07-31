
const MessageComponent = (props) => {

    return (
        <div style={{ whiteSpace: 'pre-wrap' }} key={props.id} className={props.classList}>
            {props.text}
        </div>
    );

}

export default MessageComponent;