import useGetConversation from "../../hooks/useGetConversation"
import Conversation from "./Conversation"


const Conversations = () => {
  const {loading , conversations } = useGetConversation();
  console.log("Conversations" , conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations?.map((conversation) => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))}
      {loading && <div>Loading...</div>}
    </div>
  )
}

export default Conversations