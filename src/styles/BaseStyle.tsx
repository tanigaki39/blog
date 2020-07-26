import React from 'react'
import { Global, css } from '@emotion/core'

const styles = css`
  /* アンカーリンク（gatsby-remark-autolink-headersカスタム） */
  h1 .anchor,
  h2 .anchor,
  h3 .anchor,
  h4 .anchor,
  h5 .anchor,
  h6 .anchor {
    box-shadow: none;
  }

  /* 引用 */
  blockquote {
    margin-left: 0;
    margin-right: 0;
    font-size: 1rem;
    padding-left: 1rem;
    border-left: 0.32813rem solid hsla(0, 0%, 0%, 0.5);
  }

  /* マークダウンプレビューエリアの画像を左寄せする */
  .gatsby-resp-image-wrapper {
    margin-left: 0 !important;
  }

  /* はてブのアイコン幅をカスタム */
  .hatena-bookmark-button-frame {
    width: 32px !important;
  }

  /* font-awsome初期表示時にアイコンが大きくなるのを防止 */
  .svg-inline--fa {
    height: 1em;
  }
`

const BaseStyle: React.FC = () => {
  return <Global styles={styles} />
}

export default BaseStyle
