const count = async ({ countable }) => {
  if (!Array.isArray(countable)) {
    throw new Error("Count: Input wasn't an Array!");
  }
  return {
    as: countable.length,
  };
};

export default count;
