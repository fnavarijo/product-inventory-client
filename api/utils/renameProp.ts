import { Dictionary } from '@/@types/global';

export const renamePropWith =
  (newName: string) =>
    (currentName: string) =>
      (data: Dictionary<any>) => {
        const dataClone = { ...data };
        const currentValue = data[currentName];
        delete dataClone[currentName];
        return { ...dataClone, [newName]: currentValue };
      };
