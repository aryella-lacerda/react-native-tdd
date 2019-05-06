/* eslint-env detox/detox, jest */

describe('Managing Restaurants', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  const id = (_id) => element(by.id(_id))
  const label = (_label) => element(by.label(_label))

  it('should allow creating a restaurant', async () => {
    const restaurant = 'Burger King'

    // Sequence of events
    await id('new-restaurant-button').tap()
    await id('restaurant-name-text-field').typeText(restaurant)
    await id('save-restaurant-button').tap()

    // Check result
    await expect(label(restaurant)).toBeVisible()
    await expect(id('restaurant-name-text-field')).toBeNotVisible()

  })
}) 