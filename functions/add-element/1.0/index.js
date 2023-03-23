const addElement = async ({ input, element }) => {
  if (!Array.isArray(input)) {
    throw new Error("The input array isn't an array.");
  }

  input.push(element);

  return {
    as: input,
  };
};

export default addElement;
