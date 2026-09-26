Object.defineProperty(globalThis, '__DEV__', {
  value: false,
  configurable: true,
});

jest.mock('expo', () => ({
  requireNativeModule: jest.fn(() => ({})),
}));

const { onOpenURL } = require('../swift-ui/modifiers');

describe(onOpenURL, () => {
  it('serializes the in-app browser preference', () => {
    expect(onOpenURL(true)).toEqual({
      $type: 'onOpenURL',
      prefersInApp: true,
    });
  });
});
