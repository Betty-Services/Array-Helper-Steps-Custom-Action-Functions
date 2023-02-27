import count from '../functions/count/1.0';
describe('Test Count', () => {
  test('Run Count with expected outcome', async () => {
    const { as } = await count({
      countable: [{ foo: 'bar' }, { foo: 'bar' }, { foo: 'bar' }],
    });
    expect(as).not.toBeNull();
    expect(as).toEqual(3);
  });

  test('Run Includes with expected outcome', async () => {
    const { as } = await count({
      countable: [],
    });
    expect(as).not.toBeNull();
    expect(as).toEqual(0);
  });

  test('Run Includes to failure', async () => {
    await expect(count({ countable: undefined })).rejects.toThrow();
  });
});
