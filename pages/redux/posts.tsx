import { ChangeEventHandler, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/app/store';
import { postAdded } from '@/features/posts/postsSlice';
import { nanoid } from '@reduxjs/toolkit';
import Link from 'next/link'

const Posts = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
  const posts = useSelector((state: RootState) => state.posts)
  const postsElement = useMemo(() => {
    return posts.map(({ id, title, content }) => (
      <li key={id}>
        <p>{title}</p>
        <p>{content}</p>
        <Link
          href={{
            pathname: '/redux/posts/[id]',
            query: { id }
          }}
        >
          view
        </Link>
      </li>
    ))
  }, [posts])

  const handleClickPostButton = () => {
    if (!title || !content) {
      return;
    }

    dispatch(postAdded({
      id: nanoid(),
      title,
      content
    }))

    setTitle('')
    setContent('')
  }

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (event) => setTitle(event.target.value)
  const handleChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (event) => setContent(event.target.value)

  return (
    <div>
      <h2>Posts</h2>
      <form>
        <label htmlFor='title'>Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
        <label htmlFor='content'>Content:</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={handleChangeContent}
        />
        <button type="button" onClick={handleClickPostButton}>Post</button>
      </form>
      <ul>{postsElement}</ul>
    </div>
  )
}

export default Posts
