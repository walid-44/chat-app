import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3)
      return toast.error("search must be at least 3 characters");
    const conversation = conversations?.find(
      (c) =>
        c.fullName.toLowerCase().includes(search.toLowerCase()) ||
        c.username === search.toLowerCase()
    );
    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("");

    } else {
      toast.error("conversation not found");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="search"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit " className="btn btn-circle bg-sky-500 text-white">
        <FcSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
