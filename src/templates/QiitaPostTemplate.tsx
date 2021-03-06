import React from 'react'
import { graphql } from 'gatsby'
import type { WindowLocation } from "@reach/router"

import Layout from '../components/Layout'
import Post from '../components/Post'
import QiitaPostStyle from '../styles/QiitaPostStyle'

import { QiitaPostQuery } from '../../types/graphql-types'

type Props = {
  pageContext: any
  location: WindowLocation
  data: QiitaPostQuery
}

const QiitaPostTemplate: React.FC<Props> = ({ pageContext, location, data }) => {
  const siteTitle = pageContext.siteMetadata.title

  return (
      <Layout location={location}>
        <QiitaPostStyle />
        <Post fields={data.post?.fields} headings={data.post?.headings} html={data.post?.rendered_body} pageContext={pageContext} siteTitle={siteTitle} />
      </Layout>
  )
}

export default QiitaPostTemplate

export const pageQuery = graphql`
  query QiitaPost($slug: String) {
    post: qiitaPost(fields: { slug: { eq: $slug } }) {
      rendered_body
      headings {
        id
        value
        depth
        parents {
          id
          value
          depth
        }
      }
      fields {
        slug
        title
        date
        excerpt
        tags
        keywords
        thumbnail
      }
    }
  }
`

