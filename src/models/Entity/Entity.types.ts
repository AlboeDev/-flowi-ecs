export interface Serial {
  /**
   * Collection of type-keyed Component objects associated with this Entity.
   */
  components?: Record<string, string>;

  /**
   * UUID for this Entity.
   */
  uuid?: string;
}
