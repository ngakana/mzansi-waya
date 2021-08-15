
import ChatMessage from "./ChatMessage";

function ChatMessageList() {

    return(
        <ul className="message-list">
            <ChatMessage user={"@sal"} byUser={true} />
            <ChatMessage user={"@therock"} byUser={false} />
            <ChatMessage user={"@therock"} byUser={false} />
            <ChatMessage user={"@therock"} byUser={false} />
            <ChatMessage user={"@therock"} byUser={false} />
            <ChatMessage user={"@therock"} byUser={false} />
            <ChatMessage user={"@therock"} byUser={false} />
            <ChatMessage user={"@sal"} byUser={true} />
            <ChatMessage user={"@therock"} byUser={false} />
            <ChatMessage user={"@therock"} byUser={false} />
            <ChatMessage user={"@therock"} byUser={false} />
            <ChatMessage user={"@therock"} byUser={false} />
            <ChatMessage user={"@therock"} byUser={false} />
            <ChatMessage user={"@sal"} byUser={true} />
            <ChatMessage user={"@therock"} byUser={false} />
            <ChatMessage user={"@therock"} byUser={false} />
        </ul>
    );
}

export default ChatMessageList;