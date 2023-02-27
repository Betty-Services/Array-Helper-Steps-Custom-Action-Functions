import indexOf from '../functions/index-of/1.0';
describe('Index Of Test', () => {
  const inputArray = [{ foo: 'bar' }, { biz: 'qux' }];
  const element = { biz: 'qux' };

  test('Run Index Of with expected outcome', async () => {
    const { as } = await indexOf({ inputArray, element });
    expect(as).not.toBeNull();
    expect(as).toEqual(1);
  });

  test('Run Index Of with no match found', async () => {
    const { as } = await indexOf({ inputArray, element: { quux: 'corge' } });
    expect(as).not.toBeNull();
    expect(as).toEqual(-1);
  });

  test('Run Index Of to failure', async () => {
    await expect(indexOf({ inputArray: undefined, element })).rejects.toThrow();
  });
});
