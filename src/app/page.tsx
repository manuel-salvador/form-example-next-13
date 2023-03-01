'use client';

import { ChangeEvent } from 'react';
import styles from './page.module.css';

export default function Home() {
  const sendForm = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const res = await fetch(`/api/hello`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log({ resStatus: res.status });
  };
  return (
    <main className={styles.main}>
      <form onSubmit={sendForm} className={styles.form}>
        <input type="text" name="name" id="name" placeholder="Name" required />
        <input type="email" name="email" id="email" placeholder="Email" required />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
