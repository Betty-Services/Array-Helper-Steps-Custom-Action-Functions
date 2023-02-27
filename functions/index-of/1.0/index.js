import _ from 'lodash';
const indexOf = async ({ inputArray, element }) => {
  if (!Array.isArray(inputArray)) {
    throw new Error("The input array isn't an array.");
  }

  return {
    as: _.findIndex(inputArray, element),
  };
};

export default indexOf;
