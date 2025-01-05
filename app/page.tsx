'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { neon } from '@neondatabase/serverless';

export default function Home() {
  const [comment, setComment] = useState('');

  // コメントをデータベースに保存する関数
  const create = async (e: React.FormEvent) => {
    e.preventDefault();

    // ネオンデータベースに接続
    const sql = neon(`${process.env.DATABASE_URL}`);
    // フォームデータからコメントを取得
    const formData = new FormData(e.target as HTMLFormElement);
    const comment = formData.get('comment');

    if (typeof comment === 'string') {
      try {
        // コメントをデータベースに挿入
        await sql('INSERT INTO comments (comment) VALUES ($1)', [comment]);
        alert('Comment submitted successfully!');
        setComment('');  // コメント送信後、入力をクリア
      } catch (error) {
        console.error('Error inserting comment:', error);
        alert('Error submitting comment');
      }
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <form onSubmit={create}>
        <input
          type="text"
          placeholder="write a comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}  // 入力値の管理
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
