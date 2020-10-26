import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

export default function Logo() {
  return (
    <h3 css={css``}>
      <Link to="/">
        Tonys<span>Pizza</span>{' '}
      </Link>
    </h3>
  )
}
