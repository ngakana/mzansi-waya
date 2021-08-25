import { useState } from "react";

import Typebox from "./Typebox";
import ChatMessageList from "./ChatMessageList";
import { ReactComponent as Close } from "assets/icons/angle-double-up.svg";
import { ReactComponent as Open } from "assets/icons/angle-double-down.svg";

function Chatbox() {

    const [chatIsOpen, setChatIsOpen] = useState(true);

    const toggleChatbox = () => {
        setChatIsOpen(!chatIsOpen);
    }

    return(
        <div className={`chatbox ${ chatIsOpen ? null : "closed-chatbox" }`}>
            <div className="chat-header">
                <h2 className="text">Chat</h2>
                { chatIsOpen ? <Close onClick={toggleChatbox} /> : <Open onClick={toggleChatbox} /> }
            </div>
            <ChatMessageList />
            <Typebox />
        </div>
    );
}

export default Chatbox;