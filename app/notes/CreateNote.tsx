"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateNote = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const router = useRouter();

  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: note.title,
        content: note.content,
      }),
    });
    setNote({
      title: "",
      content: "",
    });
    router.refresh();
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title..."
          value={note.title}
          onChange={(e) => {
            setNote({ ...note, title: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Content..."
          value={note.content}
          onChange={(e) => {
            setNote({ ...note, content: e.target.value });
          }}
        />
        <button onClick={create} type="submit">
          Create Note
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
