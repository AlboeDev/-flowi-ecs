import { randomUUID } from 'crypto';

import Component from '../Component';

import type { Serial } from './Entity.types';

/**
 * Entity class. This class is a part of the ECS subsystem.
 *
 * @remarks
 * This class should not be extended within the ECS subsystem, and should be used as a data layer
 * to associate Component objects with a common object shape.
 *
 * @example
 * Mounting a component:
 * ```ts
 * const entity = new Entity();
 * const component = new MyComponent();
 *
 * entity.mount(component);
 * ```
 *
 * @public
 */
class Entity {
  /**
   * Collection of type-keyed Component objects associated with this Entity.
   *
   * @readonly
   */
  public readonly components: Record<string, string>;

  /**
   * UUID for this Entity.
   *
   * @readonly
   */
  public readonly uuid: string;

  /**
   * Construct a new Entity.
   *
   * @param serial - Serial to construct this Entity from.
   *
   * @public
   */
  public constructor(serial?: Serial) {
    Object.defineProperties(this, {
      components: {
        value: {},
      },
      uuid: {
        value: serial?.uuid || randomUUID().toUpperCase(),
      },
    });
  }

  /**
   * Validate if a Component exists on this Entity.
   *
   * @param component - Component to validate if it exists on this Entity.
   * @returns `true` if the Component exists on this Entity.
   *
   * @public
   */
  public hasComponent(component: Component): boolean {
    return (this.components[component.type] === component.uuid);
  }

  /**
   * Validate if a Component type exists on this Entity.
   *
   * @param type - Component type to validate if it exists on this Entity.
   * @returns True if the Component type exists on this Entity.
   *
   * @public
   */
  public hasType(type: string): boolean {
    return (!!this.components[type]);
  }

  /**
   * Mount one or more Component objects to this Entity.
   *
   * @param components - Component object[s] to mount on this Entity.
   * @returns This Entity.
   *
   * @public
   */
  public mount(...components: Array<Component>): this {
    components.forEach((component: Component): void => {
      if (!this.hasType(component.type)) {
        this.components[component.type] = component.uuid;
      } else {
        // TODO - Throw Error.
      }
    });

    return this;
  }

  /**
   * Remove one or more Component types from this Entity.
   *
   * @param types - Component type[s] to remove from this Entity.
   * @returns This Entity.
   *
   * @public
   */
  public remove(...types: Array<string>): this {
    types.forEach((type: string): void => {
      if (this.hasType(type)) {
        delete this.components[type];
      } else {
        // TODO - Throw Error.
      }
    });

    return this;
  }

  /**
   * Unmount one or more Component objects from this Entity.
   *
   * @param components - Component object[s] to unmount from this Entity.
   * @returns This Entity.
   *
   * @public
   */
  public unmount(...components: Array<Component>): this {
    components.forEach((component: Component): void => {
      if (this.hasComponent(component)) {
        this.remove(component.type);
      } else {
        // TODO - Throw Error.
      }
    });

    return this;
  }
}

export default Entity;
