import React, { createContext, useEffect, useState } from 'react'

export const DataContext = createContext(null);

function DataContextProvider(props) {
    const [cartItems,setCartItems] = useState(()=>{
        const tasksFromLocalStorage = localStorage.getItem('cartItems');
        return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
      });

      useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return () => {
          localStorage.removeItem('cartItems');
        };
      }, [cartItems]);

    const clearData = () => {
        localStorage.removeItem('cartItems');
        setCartItems([]);
    }

    const addToCart = (newItem) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === newItem.id);
            if(existingItem) {
                return prevItems.map(item => {
                    if(item.id === newItem.id) {
                        return {...item, total: item.total + 1};
                    }
                    return item;
                });
            } else {
                return [...prevItems, newItem];
            }
        });
    }

    const contextValue = {addToCart,cartItems,clearData}

  return (
    <DataContext.Provider value={contextValue}>{props.children}</DataContext.Provider>
  )
}

export default DataContextProvider