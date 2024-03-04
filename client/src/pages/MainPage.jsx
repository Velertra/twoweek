import DisplayMessages from "../components/DisplayMessages";
import ChatForm from "../components/NewMessage";
import BlogDisplay from "../components/BlogDisplay";

export default function MainPage() {

  return (
    <div className="main-content">
      <BlogDisplay />
      <div className="chat-section" id="chat-section">
        <DisplayMessages />
        <ChatForm />
      </div>
    </div>
  );
}
