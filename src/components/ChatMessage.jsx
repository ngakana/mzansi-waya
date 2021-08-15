// import avatar from "../assets/images/1.jpg";

function ChatMessage({byUser}) {

    return(
        <li className={`post ${ byUser===false ? "sent" : "received"}`}>
            {/* <img src={avatar} alt="avatar" /> */}
            <div className="avatar"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dolore itaque similique assumenda hic ad minima. Quam cum voluptatibus, labore nobis repellat reprehenderit nostrum in voluptates nisi! Quod, ratione nostrum!</p>
        </li>
    );
}

export default ChatMessage;