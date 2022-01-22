import Component from '../Component/Component.fixture';

import Entity from './Entity';

describe('models.Entity', () => {
  describe('constructor()', () => {
    it('should assign a uuid', () => {
      expect.assertions(1);

      const entity = new Entity();

      expect(entity.uuid).toBeDefined();
    });

    it('should have a unique uuid', () => {
      expect.assertions(1);

      const entityA = new Entity();
      const entityB = new Entity();

      expect(entityA.uuid).not.toBe(entityB.uuid);
    });

    it('should create a components property', () => {
      expect.assertions(1);

      const entity = new Entity();

      expect(entity.components).toBeInstanceOf(Object);
    });
  });

  describe('hasComponent()', () => {
    it('should return false if the Component does not exist on this Entity', () => {
      expect.assertions(1);

      const entity = new Entity();
      const component = new Component();

      expect(entity.hasComponent(component)).toBe(false);
    });

    it('should return true if hte Component does exist on this Entity', () => {
      expect.assertions(1);

      const entity = new Entity();
      const component = new Component();

      entity.mount(component);

      expect(entity.hasComponent(component)).toBe(true);
    });

    describe('hasType()', () => {
      it('should return false if the Component type does not exist on this Entity', () => {
        expect.assertions(1);

        const entity = new Entity();
        const component = new Component();

        expect(entity.hasType(component.type)).toBe(false);
      });

      it('should return true if hte Component type does exist on this Entity', () => {
        expect.assertions(1);

        const entity = new Entity();
        const component = new Component();

        entity.mount(component);

        expect(entity.hasType(component.type)).toBe(true);
      });
    });

    describe('mount()', () => {
      it('should mount a Component', () => {
        expect.assertions(1);

        const entity = new Entity();
        const component = new Component();

        entity.mount(component);

        expect(entity.components[component.type]).toBe(component.uuid);
      });

      it('should not mount a Component if a component of the same type exists', () => {
        expect.assertions(1);

        const entity = new Entity();
        const componentA = new Component();
        const componentB = new Component();

        entity.mount(componentA, componentB);

        expect(entity.components[componentB.type]).not.toBe(componentB.uuid);
      });
    });

    describe('remove()', () => {
      it('should remove a Component by the provided type', () => {
        expect.assertions(1);

        const entity = new Entity();
        const component = new Component();

        entity.mount(component);
        entity.remove(component.type);

        expect(entity.components[component.type]).toBeUndefined();
      });

      it('should not remove a Component type if a component type does not exist', () => {
        expect.assertions(1);

        const componentType = 'example';
        const entity = new Entity();
        const component = new Component();

        entity.mount(component);
        entity.remove(componentType);

        expect(entity.components[component.type]).toBe(component.uuid);
      });
    });

    describe('unmount()', () => {
      it('should unmount a Component', () => {
        expect.assertions(1);

        const entity = new Entity();
        const component = new Component();

        entity.mount(component);
        entity.unmount(component);

        expect(entity.components[component.type]).toBeUndefined();
      });

      it('should not unmount a Component if the component does not exist', () => {
        expect.assertions(1);

        const entity = new Entity();
        const componentA = new Component();
        const componentB = new Component();

        entity.mount(componentA);
        entity.unmount(componentB);

        expect(entity.components[componentA.type]).toBe(componentA.uuid);
      });
    });
  });
});
