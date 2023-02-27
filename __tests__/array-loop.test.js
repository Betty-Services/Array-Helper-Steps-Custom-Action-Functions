import arrayLoop from '../functions/array-loop/1.0';
describe('Array Loop', () => {
  test('It loops over a collection and execustes child steps', async () => {
    const input = [{ id: 1 }, { id: 2 }];
    const childSteps = jest.fn();

    await arrayLoop({ input }, childSteps);

    expect(childSteps).toHaveBeenCalledTimes(input.length);
    expect(childSteps).toHaveBeenLastCalledWith({
      iterator: input.slice(-1).pop(),
      index: input.length - 1,
    });
  });

  test("It returns a failure because the input isn't an array", async () => {
    const input = { foo: 'bar' };

    await expect(arrayLoop({ input })).rejects.toThrow();
  });
});
