import includes from '../functions/includes/1.0';
describe('Includes Test', () => {
  const inputArray = [{ foo: 'bar' }];
  const element = { foo: 'bar' };

  test('Run Includes with expected outcome', async () => {
    const { as } = await includes({
      inputArray,
      element,
    });
    expect(as).not.toBeNull();
    expect(as).toEqual(true);
  });

  test('Run Includes with expected outcome', async () => {
    const { as } = await includes({
      inputArray,
      element: { baz: 'qux' },
    });
    expect(as).not.toBeNull();
    expect(as).toEqual(false);
  });

  test('Run Includes to failure', async () => {
    await expect(includes({ inputArray: undefined })).rejects.toThrow();
  });
});
