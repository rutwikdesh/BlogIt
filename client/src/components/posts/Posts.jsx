import Post from "../post/Post"
import "./posts.css"
import React from 'react'

export default function Posts({posts}) {
  return (
    <div className="posts">
      {posts.map((p)=>(
        <Post post={p}/>
      ))}
      {!posts.length ? <div>No Data Available!</div> : <div></div>}
    </div>
  )
}
