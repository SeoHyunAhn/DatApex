import React from 'react'

const posts = [
  { path: 'labsel', title: 'Label Encoding' },
  { path: 'one-hot', title: 'One-Hot Encoding' },
  { path: 'delete-rc', title: 'Delete Row/Column' },
  { path: 'replaceW', title: 'Replace W' },
  { path: 'certain', title: 'Select Certain' },
]
import Head from "./header"

export default class extends React.Component {
  static async getInitialProps({ query, res }) {
    const post = posts.find(post => post.path === query.path)

    if (!post && res) {
      res.statusCode = 404
    }

    return { post }
  }

  render() {
    const { post } = this.props

    if (!post) return (
      <div>
        <Head />
        <h1>Post not found</h1>
      </div>
    )

    return (
      <div>
        <Head />
        <h1>{post.title}</h1>
      </div>
    )
  }
}
