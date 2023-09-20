import { configureStore, createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: { items: [], totalQuantity: 0 },

  reducers: {
    addItemToCard(state, action) {
      const newItem = action.payload;
      const exitingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!exitingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        exitingItem.quantity++;
        exitingItem.totalPrice = exitingItem.totalPrice + newItem.price;
      }
    },

    removeItemFromCard(state, action) {
      const id = action.payload;
      const exitingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (exitingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exitingItem.totalPrice -= exitingItem.price;
        exitingItem.quantity--;
      }
    },

    deleteFromCard(state, action) {
      const id = action.payload;
      const deletedProduct = state.items.find((p) => p.id === id);

      state.items = state.items.filter(
        (product) => product.id !== deletedProduct.id
      );

      state.totalQuantity -= deletedProduct.quantity;
    },
  },
});

export const cardActions = cardSlice.actions;

const store = configureStore({
  reducer: { card: cardSlice.reducer },
});

export default store;
