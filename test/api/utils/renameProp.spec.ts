import { renamePropWith } from '@/api/utils';

describe('RenameProp function', () => {
  it('should rename prop name', () => {
    const animals = {
      cat: 'woff',
      tigger: 'grr',
      fish: 'plup',
    };

    const renameProp = renamePropWith('dog')('cat');

    expect(renameProp(animals)).toMatchObject({
      dog: 'woff',
      tigger: 'grr',
      fish: 'plup',
    });
  });

  it('should rename prop name with object as value', () => {
    const animals = {
      cat: { sound: 'woff' },
      tigger: { sound: 'grr' },
      fish: { sound: 'plup' },
    };

    const renameProp = renamePropWith('dog')('cat');

    expect(renameProp(animals)).toMatchObject({
      dog: { sound: 'woff' },
      tigger: { sound: 'grr' },
      fish: { sound: 'plup' },
    });
  });
});
