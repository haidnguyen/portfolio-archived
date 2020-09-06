const pts = jest.requireActual('pts');

module.exports = {
  ...pts,
  CanvasSpace: jest.fn().mockImplementation(() => ({
    setup: jest.fn().mockImplementation(() => ({
      getForm: jest.fn(),
      add: jest.fn(),
      bindMouse: jest.fn().mockImplementation(() => ({
        play: jest.fn(),
      })),
    })),
  })),
};
