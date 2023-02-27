import addElement from '../functions/add-element/1.0';
describe('Add Element Test', () => {
  const arrayInput = [{ foo: 'bar' }];

  test('Run Add Element with expected outcome', async () => {
    const element = { baz: 'qux' };
    const { as } = await addElement({ arrayInput, element });
    expect(as).not.toBeNull();
    expect(as).toEqual([{ foo: 'bar' }, { baz: 'qux' }]);
  });

  test('Run Add Element to failure', async () => {
    await expect(
      addElement({ input: undefined, element: undefined })
    ).rejects.toThrow();
  });
});
