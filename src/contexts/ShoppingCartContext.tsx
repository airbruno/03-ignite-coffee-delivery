import { createContext, ReactNode, useEffect, useState } from 'react'
import { coffeeInventory } from '../pages/Home'

export interface ICoffee {
  name: string
  description: string
  category: string[]
  price: number
  thumbnail?: string
  quantity: number
}

export interface IItemData {
  name: string
  quantity: number
}

interface IShoppingCartContext {
  addItemToCart: (data: IItemData) => void
  removeFromCart: (name: string) => void
  cart: ICoffee[]
  cartItemsQuantity: number
}

interface IShoppingCartContextProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext)

export function ShoppingCartContextProvider({
  children,
}: IShoppingCartContextProps) {
  const [cart, setCart] = useState<ICoffee[]>([])

  const cartItemsQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addItemToCart(data: IItemData) {
    const newItem = coffeeInventory.find((item) => item.name === data.name)

    if (newItem) {
      setCart((state) => {
        const existingItem = state.find((item) => item.name === newItem.name)
        if (existingItem) {
          return state.map((item) =>
            item.name === newItem.name
              ? { ...item, quantity: item.quantity + data.quantity }
              : item,
          )
        } else {
          return [...state, { ...newItem, quantity: data.quantity }]
        }
      })
    } else {
      console.error(`Item com nome ${data.name} nao foi encontrado`)
    }
  }

  function removeFromCart(name: string) {
    setCart(cart.filter((item) => item.name !== name))
  }

  return (
    <ShoppingCartContext.Provider
      value={{ addItemToCart, cart, cartItemsQuantity, removeFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
