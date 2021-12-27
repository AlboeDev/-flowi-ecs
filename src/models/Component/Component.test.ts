import Component from './Component.fixture';

describe('models.Component', () => {
  describe('constructor()', () => {
    it('should assign a uuid', () => {
      expect.assertions(1);

      const component = new Component();

      expect(component.uuid).toBeDefined();
    });

    it('should have a unique uuid', () => {
      expect.assertions(1);

      const componentA = new Component();
      const componentB = new Component();

      expect(componentA.uuid).not.toBe(componentB.uuid);
    });
  });
});
