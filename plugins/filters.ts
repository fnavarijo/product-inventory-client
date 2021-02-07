import Vue from 'vue';

// TODO: should be removed?
export const currencyFilter = (value: string) =>
  value
    ? parseFloat(value).toFixed(2)
    : '';

Vue.filter('currency', currencyFilter);
