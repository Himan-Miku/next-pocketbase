import Link from "next/link";
import React from "react";
import styles from "./Notes.module.css";

const Note = ({ note }: any) => {
  return (
    <>
      <Link key={note.id} href={`/notes/${note.id}`}>
        <div className={styles.note}>
          <h3 className={styles.title}>{note.title}</h3>
          <h5 className={styles.content}> {note.content} </h5>
          <p className={styles.created}> {note.created} </p>
        </div>
      </Link>
    </>
  );
};

export default Note;
