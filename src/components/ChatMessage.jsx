
function ChatMessage({user, byUser}) {

    return(
        <li className={`post ${ byUser===true ? "sent" : "received"}`}>
            {/* <img src={avatar} alt="avatar" /> */}
            <div className="avatar"><span>{user}</span></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem!</p>
        </li>
    );
}

export default ChatMessage;