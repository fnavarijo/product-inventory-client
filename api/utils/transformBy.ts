import { Dictionary } from '@/@types/global';

// TODO: have to find a cool sintax to write nest functions;
export const transformBy = (transformer: any) =>
  (property: string) =>
    ({ [property]: propertyToTransform, ...rest }: Dictionary<any>) => ({
      ...rest, [property]: transformer(propertyToTransform),
    });
