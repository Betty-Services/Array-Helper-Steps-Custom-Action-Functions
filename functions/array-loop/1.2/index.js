const arrayLoop = async ({ input }, steps) => {
  if (!Array.isArray(input)) {
    throw new Error("Array Loop: The input isn't an Array");
  }

  console.log('--- START ARRAY LOOP ---');
  console.log(input);
  console.log('--- END ARRAY LOOP ---');

  for (let index = 0; index < input.length; index += 1) {
    await steps({ iterator: input[index], index });
  }
};

export default arrayLoop;
