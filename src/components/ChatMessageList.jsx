
import ChatMessage from "./ChatMessage";

function ChatMessageList() {

    return(
        <ul className="message-list">
            <ChatMessage byUser={true} />
            <ChatMessage byUser={false} />
            <ChatMessage byUser={false} />
            <ChatMessage byUser={false} />
            <ChatMessage byUser={false} />
            <ChatMessage byUser={false} />
            <ChatMessage byUser={false} />
            <ChatMessage byUser={true} />
            <ChatMessage byUser={false} />
            <ChatMessage byUser={false} />
            <ChatMessage byUser={false} />
            <ChatMessage byUser={false} />
            <ChatMessage byUser={false} />
            <ChatMessage byUser={true} />
            <ChatMessage byUser={false} />
            <ChatMessage byUser={false} />
        </ul>
    );
}

export default ChatMessageList;