import axios from 'axios'
import { useState, useEffect } from 'react'

export default function GetAPICall() {
  const [postHtml, postHtmlSetter] = useState([])
  const getAllPosts = async (endPoint) => {
    try {
      const response = await axios.get(endPoint)
      const { data } = response
      const postStructuredHtml = data.map((postData, index) => {
        return (
          <div>
            <h4>User Post(By User :: {postData.id})</h4>
            <p><b>Post Title :</b> {postData.title}</p>
            <p><b>Post Comment :</b> {postData.body}</p>
            <span>=====================================</span>
          </div>
        )
      })
      postHtmlSetter(postStructuredHtml)
    }
    catch (err) {
      console.log('Internal Server Error!!', err)
    }
  }

  useEffect(() => {
    try {
      getAllPosts(process.env.REACT_APP_POSTS_ENDPOINT)
    }
    catch (err) {
      console.log('Internal Server Error!!', err)
    }
  }, [])

  return (
    <div>GetAPICall:: {postHtml}</div>
  )
}
