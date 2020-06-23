import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function useBackgroundImages() {

  return useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: {eq: "background.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 100, pngQuality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      footerImage: file(relativePath: {eq: "background-for-footer.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 100, pngQuality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
}

