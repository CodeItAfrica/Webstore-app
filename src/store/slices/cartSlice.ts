import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  variant?: string;
  image: string;
}

interface CartState {
  items: CartItem[];
  subtotal: number;
  itemCount: number;
}

const initialState: CartState = {
  items: [],
  subtotal: 0,
  itemCount: 0,
};

const calculateTotals = (items: CartItem[]) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { subtotal, itemCount };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      
      const totals = calculateTotals(state.items);
      state.subtotal = totals.subtotal;
      state.itemCount = totals.itemCount;
    },
    
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      
      const totals = calculateTotals(state.items);
      state.subtotal = totals.subtotal;
      state.itemCount = totals.itemCount;
    },
    
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== action.payload.id);
        } else {
          item.quantity = action.payload.quantity;
        }
      }
      
      const totals = calculateTotals(state.items);
      state.subtotal = totals.subtotal;
      state.itemCount = totals.itemCount;
    },
    
    clearCart: (state) => {
      state.items = [];
      state.subtotal = 0;
      state.itemCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
