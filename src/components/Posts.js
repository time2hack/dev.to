import React, { useEffect, useState } from 'react';
import Post from './Post';
const devTo = 'https://dev.to/api/articles'

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(devTo).then(r=> r.json()).then(setPosts)
  }, [])

  return (
    posts.map(post => <Post post={post} />)
  )
}

export default Posts

