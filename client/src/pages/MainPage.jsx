import DisplayMessages from "../components/DisplayMessages";
import ChatForm from "../components/NewMessage";
import BlogDisplay from "../components/BlogDisplay";
import { fortniteNews, getPlayerStatsV2 } from "../utilities/ApiFunction";

export default function MainPage() {

 // getPlayerStatsV2();

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
