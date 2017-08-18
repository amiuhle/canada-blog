/* eslint-env jest */

import postLoader from '../post-loader'

describe('posts-loader', () => {
  it('extracts meta information', () => {
    expect(postLoader(
`\`\`\`json
{
  "title": "Hello From Canada!",
  "images": [
    "2017-07-08/01.jpg"
  ]
}
\`\`\`

## Headline

Body
`
    )).toEqual(JSON.stringify({
      title: 'Hello From Canada!',
      images: [
        '2017-07-08/01.jpg'
      ],
      markdown: `## Headline

Body
`
    }))

    expect(postLoader(
`\`\`\`json
{
  "title": "First Post",
  "heroImages": [
    "2017-07-08/01.jpg"
  ]
}
\`\`\`

## First Post
`
    )).toEqual(JSON.stringify({
      title: 'First Post',
      heroImages: [
        '2017-07-08/01.jpg'
      ],
      markdown: `## First Post
`
    }))
  })
})
