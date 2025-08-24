import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Course {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number; // Added quantity property
  selected?: boolean; // Added selected property
}

interface CartContextType {
  cart: Course[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: number) => void;
  updateQuantity: (courseId: number, quantity: number) => void; // Added updateQuantity
  toggleCourseSelection: (courseId: number) => void; // Added toggleCourseSelection
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Course[]>([]);

  const addToCart = (course: Course) => {
    setCart((prevCart) => {
      const existingCourse = prevCart.find((item) => item.id === course.id);
      if (existingCourse) {
        return prevCart.map((item) =>
          item.id === course.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prevCart, { ...course, quantity: 1, selected: true }]; // Default to selected
    });
  };

  const removeFromCart = (courseId: number) => {
    setCart((prevCart) => prevCart.filter((course) => course.id !== courseId));
  };

  const updateQuantity = (courseId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === courseId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const toggleCourseSelection = (courseId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === courseId ? { ...item, selected: !item.selected } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, toggleCourseSelection }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
