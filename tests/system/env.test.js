import env from 'system/env'

describe('system/env', () => {
  test('isTest', () => {
    expect(env.isTest()).toBe(true)
  })
})
