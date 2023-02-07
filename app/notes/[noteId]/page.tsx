import styles from "../Notes.module.css";

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.noteId);

  return (
    <div>
      <h1 className={styles.pagetitle}>notes/{note.id}</h1>
      <div className={styles.note}>
        <h3 className={styles.title}>{note.title}</h3>
        <h5 className={styles.content}>{note.content}</h5>
        <p className={styles.created}>{note.created}</p>
      </div>
    </div>
  );
}
