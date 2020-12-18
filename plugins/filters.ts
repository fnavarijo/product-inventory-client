import Vue from 'vue';

export const currencyFilter = (value: string) =>
  value
    ? parseFloat(value).toFixed(2)
    : '';

Vue.filter('currency', currencyFilter);
