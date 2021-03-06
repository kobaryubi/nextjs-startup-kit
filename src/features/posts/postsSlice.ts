import { createSlice } from '@reduxjs/toolkit'

interface Post {
  id: string;
  title: string;
  content: string;
}

const initialState: Post[] = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload)
    },
    postUpdated: (state, action) => {
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id === id)
      if (!existingPost) {
        return;
      }

      existingPost.title = title
      existingPost.content = content
    }
  }
})

export const { postAdded, postUpdated } = postsSlice.actions
export default postsSlice.reducer
