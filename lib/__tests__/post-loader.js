/* eslint-env jest */

import postLoader from '../post-loader'
const input = `\`\`\`json
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

describe('posts-loader', () => {
  it('extracts meta information', () => {
    const result = postLoader(input)
    expect(result).toEqual({
      title: 'Hello From Canada!',
      images: [
        '2017-07-08/01.jpg'
      ],
      markdown: `## Headline

Body
`
    })
  })
})
