
import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/frontend_src_assets_sounds_notification.mp3"
const useListenMessages = () => {
  const {socket} = useSocketContext()
  const {messages , setMessages} = useConversation()

  useEffect(() => {
    socket?.on('newMessage' , (newMessage) => {
      newMessage.shouldShake = true;
      const audio = new Audio(notificationSound);
      audio.play();
      setMessages( [...messages , newMessage])
    })

    return () => socket?.off('newMessage')
  }, [socket , setMessages , messages])
}

export default useListenMessages