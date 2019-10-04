import React from 'react'

const posts = [
    { path: 'nba', title: 'Naive Bayes algorithm' },
    { path: 'lra', title: 'Logistic Regression algorithm' },
    { path: 'svm', title: 'Support Vector Machine algorithm' },
    { path: 'bag', title: 'Bagging algorithm' },
    { path: 'clus', title: 'Clustering algorithm' },
]
import Layout from '../components/layout';


export default class extends React.Component {
  static async getInitialProps ({ query, res }) {
    const post = posts.find(post => post.path === query.path)

    if (!post && res) {
      res.statusCode = 404
    }

    return { post }
  }

  render () {
    const { post } = this.props

    if (!post) return (
      <Layout>
        <h1>Page not found</h1>
      </Layout>
    )

    return (
      <Layout>
        <h1>{post.title}</h1>
        <hr></hr>
      </Layout>
    )
  }
}
