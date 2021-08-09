
import Typebox from "./Typebox";
import ChatMessageList from "./ChatMessageList";

function Chatbox() {

    return(
        <div className="chatbox">
            <div className="chat-header">
                <h1 className="text">Chat</h1>
            </div>
            <ChatMessageList />
            <Typebox />
        </div>
    );
}

export default Chatbox;