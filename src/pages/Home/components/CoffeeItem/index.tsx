import { useState } from 'react'
import { Input } from '../Input'
import { FormContainer, CardFooter, CoffeeCard } from './styles'
import { ShoppingCart } from 'phosphor-react'

interface ICoffeeItemProps {
  imgSrc: string
  category: string
  name: string
  description: string
  price: number
}

export function CoffeeItem(props: ICoffeeItemProps) {
  const [quantity, setQuantity] = useState(0)

  function handleIncreaseQuantity(e: React.SyntheticEvent) {
    e.preventDefault()
    if (quantity < 99) setQuantity(quantity + 1)
  }
  function handleDecreaseQuantity(e: React.SyntheticEvent) {
    e.preventDefault()
    if (quantity > 0) setQuantity(quantity - 1)
  }

  return (
    <CoffeeCard>
      <img src={props.imgSrc} alt="" />
      <p>{props.category}</p>
      <strong>{props.name}</strong>
      <span>{props.description}</span>
      <CardFooter>
        <div id="price">
          <span>R$ </span>
          <strong>
            {props.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </strong>
        </div>
        <FormContainer>
          <Input
            quantity={quantity}
            increaseQuantity={handleIncreaseQuantity}
            decreaseQuantity={handleDecreaseQuantity}
          />
          <button className="checkoutButton" type="submit">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </FormContainer>
      </CardFooter>
    </CoffeeCard>
  )
}
