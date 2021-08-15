// import avatar from "../assets/images/1.jpg";

<<<<<<< HEAD
function ChatMessage({user, byUser}) {

    return(
        <li className={`post ${ byUser===true ? "sent" : "received"}`}>
            {/* <img src={avatar} alt="avatar" /> */}
            <div className="avatar"><span>{user}</span></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem!</p>
=======
function ChatMessage({byUser}) {

    return(
        <li className={`post ${ byUser===false ? "sent" : "received"}`}>
            {/* <img src={avatar} alt="avatar" /> */}
            <div className="avatar"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dolore itaque similique assumenda hic ad minima. Quam cum voluptatibus, labore nobis repellat reprehenderit nostrum in voluptates nisi! Quod, ratione nostrum!</p>
>>>>>>> b337fb598fc9b2a1d2015f0ab020411ee7044594
        </li>
    );
}

export default ChatMessage;