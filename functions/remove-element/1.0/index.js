import _ from 'lodash';
const removeElement = async ({ inputArray, element }) => {
  if (!Array.isArray(inputArray)) {
    throw new Error("The input array isn't an array.");
  }

  return {
    as: _.reject(inputArray, element),
  };
};

export default removeElement;
