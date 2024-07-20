import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/exstracTime";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
	const formatDate = extractTime(message.updatedAt)
  const chatClassName = fromMe ? " chat-end" : " chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
		const bubbleBgColor = fromMe ? 'bg-blue-500' : ' ';
    const shakeClass = message.shouldShake ? "shake" : "";
  // console.log("MESSAHE", message.message, message.updatedAt);
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formatDate}</div>
    </div>
  );
};

export default Message;
