import { randomUUID } from 'crypto';

import { Serial } from './Component.types';

/**
 * Abstract Component class. This class is part of the ECS subsystem.
 *
 * @remarks
 * Classes that extend the Component class should not managed the data it generates. Data within
 * this classes that extend the Component class should only be managed by the System class, and
 * it's inheritors. Metadata for classes that extend the Component class is handled by both the
 * Entity class and the Scene class.
 *
 * @example
 * Extending the Component class:
 * ```ts
 * class ComponentName extends Component {
 *   // ...component data...
 * }
 * ```
 *
 * @public
 */
abstract class Component {
  /**
   * UUID for this Component.
   *
   * @readonly
   */
  public readonly uuid: string;

  /**
   * Construct a new Component.
   *
   * @param serial - Serial to construct this component from.
   *
   * @public
   */
  public constructor(serial?: Serial) {
    Object.defineProperties(this, {
      uuid: {
        value: serial?.uuid || randomUUID(),
      },
    });
  }
}

export default Component;
