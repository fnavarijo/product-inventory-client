// on tsconfig.ts, if using files prop overrides includes default value
// "include: [] if "files" is specified, otherwise ["**/*"]""
declare module '*.svg?inline' {
  import Vue, { VueConstructor } from 'vue';
  const content: VueConstructor<Vue>;
  export default content;
}
