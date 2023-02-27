import _ from 'lodash';
const includes = async ({ inputArray, element }) => {
  if (!Array.isArray(inputArray)) {
    throw new Error("The input array isn't an array.");
  }

  return {
    as: _.find(inputArray, element) === undefined ? false : true,
  };
};

export default includes;
