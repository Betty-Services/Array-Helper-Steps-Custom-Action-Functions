import removeElement from '../functions/remove-element/1.0';
describe('Remove Element Test', () => {
  const inputArray = [{ foo: 'bar' }, { baz: 'qux' }];
  const element = { foo: 'bar' };

  test('Run Remove Element with expected outcome', async () => {
    const { as } = await removeElement({ inputArray, element });
    expect(as).not.toBeNull();
    expect(as).toEqual([{ baz: 'qux' }]);
  });

  test('Run Remove Element to failure', async () => {
    await expect(removeElement({ inputArray: undefined })).rejects.toThrow();
  });
});
