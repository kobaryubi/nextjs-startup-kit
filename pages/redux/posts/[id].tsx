import { RootState } from '@/app/store'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Post = () => {
  const router = useRouter()

  const post = useSelector((state: RootState) => {
    if (!router.isReady) {
      return
    }

    const { id } = router.query
    return state.posts.find(post => post.id === id)
  })
  const { id, title, content } = post || {}

  if (!router.isReady) {
    return <p>Loading</p>
  }

  if (!post) {
    return <p>Not Found</p>
  }

  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
      <p>{content}</p>
      <Link
        href={{
          pathname: '/redux/posts/edit/[id]',
          query: { id }
        }}
      >
        edit
      </Link>
    </div>
  )
}

export default Post
