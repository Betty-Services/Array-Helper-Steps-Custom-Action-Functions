import createArray from '../functions/create-array/1.0';
describe('Create Array Test', () => {
  test('Run Create Array with expected outcome', async () => {
    const { as } = await createArray({});
    expect(as).not.toBeNull();
    expect(as).toEqual([]);
  });
});
