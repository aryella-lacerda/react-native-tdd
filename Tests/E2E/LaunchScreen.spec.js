/* eslint-env detox/detox, jest */

describe('Managing Restaurants', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have welcome screen', async () => {
    await expect(element(by.id('introText'))).toBeVisible()
  })
}) 