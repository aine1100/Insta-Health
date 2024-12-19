
import Sidebar from "../../components/Patient/Sidebar";
import MessageList from "../../components/Patient/MessageList";
import ChatWindow from "../../components/Patient/ChatWindow";

const Messages = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        activeTab={"Messages"}
        onTabChange={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <MessageList />
      <ChatWindow />
    </div>
  );
};

export default Messages;
