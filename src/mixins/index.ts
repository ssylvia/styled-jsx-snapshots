/**
 *
 * CSS properties that make an element appear visually hidden on the page
 * but have it still available to screen readers.
 */
export const screenReaderOnly = () => {
  return "position: absolute; width: 1px; height: 1px; padding: 0; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;";
};
