import { ShallowWrapper } from 'enzyme';

/**
 * Return node(s) whit the given data-test attribute.
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
