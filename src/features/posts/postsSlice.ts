import { createSlice } from '@reduxjs/toolkit'

interface Post {
  id: string;
  title: string;
  content: string;
}

interface PostsState {
  [index: number]: Post;
}

const initialState: PostsState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export default postsSlice.reducer
