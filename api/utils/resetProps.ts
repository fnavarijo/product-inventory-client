import { Dictionary } from '@/@types/global';

// TODO: Refactor and improve typing
export const resetPropsWith =
  (resetValue: string | number) =>
    (keys: Array<string>) =>
      (objectToReset: Dictionary<any>) => {
        return Object.keys(objectToReset).reduce((dictionary: Dictionary<any>, currentKey: any) => {
          const currentValue = objectToReset[currentKey];
          if (currentValue) { return { ...dictionary, [currentKey]: currentValue }; }
          else {
            return keys.includes(currentKey)
              ? { ...dictionary, [currentKey]: resetValue }
              : { ...dictionary, [currentKey]: currentValue };
          }
        }, {});
      };
