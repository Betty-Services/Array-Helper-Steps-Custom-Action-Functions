const arrayLoop = async ({ input }, steps) => {
  if (!Array.isArray(input)) {
    throw new Error("Array Loop: The input isn't an Array");
  }

  for (let index = 0; index < input.length; index += 1) {
    await steps({ iterator: input[index], index });
  }
};

export default arrayLoop;
