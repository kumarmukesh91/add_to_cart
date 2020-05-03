import { PRICE_LOW_TO_HIGH, PRICE_HIGH_TO_LOW, DISCOUNT } from '../types';

export const getItemsSelector = (item) => {
  const filters = item.filters;
  let items = item.items;

  switch (filters.sortBy) {
    case PRICE_LOW_TO_HIGH:
      items = items.sort((a, b) => a.price.actual - b.price.actual);
      break;
    case PRICE_HIGH_TO_LOW:
      items = items.sort((a, b) => b.price.actual - a.price.actual);
      break;
    case DISCOUNT:
      items = items.sort((a, b) => a.discount - b.discount);
      break;

    default:
      break;
  }

  if (filters.priceRange) {
    items = items.filter(
      (item) =>
        filters.priceRange[0] <= item.price.actual &&
        item.price.actual <= filters.priceRange[1]
    );
  }

  if (filters.search) {
    items = items.filter((item) =>
      item.name.toLowerCase().includes(filters.search)
    );
  }

  return items;
};
