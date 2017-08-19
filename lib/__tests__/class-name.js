/* eslint-env jest */

import className from '../class-name'

describe('className', () => {
  it('concatenates class names', () => {
    expect(className({className: 'class1'}, 'class2'))
      .toEqual('class1 class2')
  })

  it('filters out empty class names', () => {
    expect(className({}, 'class2'))
      .toEqual('class2')
  })
})
