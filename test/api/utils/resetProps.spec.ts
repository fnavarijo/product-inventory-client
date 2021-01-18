import { resetPropsWith } from '@/api/utils';

describe('Reset Props Utility', () => {
  it('should default value when property value is null', () => {
    const objectToReset = {
      name: 'John Doe',
      age: 25,
      bio: null,
      hobbies: [],
    };

    const resetStringProps = resetPropsWith('');
    const resettedObject = resetStringProps(['name', 'bio'])(objectToReset);

    expect(resettedObject).toMatchObject({
      name: 'John Doe',
      age: 25,
      bio: '',
      hobbies: [],
    });
  });
});
