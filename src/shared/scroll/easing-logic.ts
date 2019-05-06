/**
 * Collection of easing manners
 * @export
 * @class OpEeasing
 */
export class OpEeasing {
  /**
   * Sinusoidal asing
   * @param t current time
   * @param b beginning value
   * @param c change In value
   * @param d duration
   */
  public static sinusoidal (t: number, b: number, c: number, d: number): number {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  }
  /**
   * Quadratic easing
   * @param t current time
   * @param b beginning value
   * @param c change In value
   * @param d duration
   */
  public static quadratic (t: number, b: number, c: number, d: number): number {
    t /= d;
    return c * t * t + b;
  }

  /**
   * Quintic easing
   * @param t current time
   * @param b beginning value
   * @param c change In value
   * @param d duration
   */
  public static quintic (t: number, b: number, c: number, d: number): number {
    t /= d;
    return c * t * t * t * t * t + b;
  }
}
