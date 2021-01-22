export const ProductContainerBase = {
  props: {
    category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
