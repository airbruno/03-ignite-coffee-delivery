import { useContext, useState } from 'react'
import { IncrementalInput } from '../IncrementalInput'
import { FormContainer, CardFooter, CoffeeCard } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { ShoppingCartContext } from '../../../../contexts/ShoppingCartContext'

interface ICoffeeItemProps {
  imgSrc: string
  category: string
  name: string
  description: string
  price: number
}

export function CoffeeItem(props: ICoffeeItemProps) {
  const [quantity, setQuantity] = useState(0)
  const { addItemToCart } = useContext(ShoppingCartContext)

  function handleIncreaseQuantity(e: React.SyntheticEvent) {
    e.preventDefault()
    if (quantity < 99) setQuantity(quantity + 1)
  }
  function handleDecreaseQuantity(e: React.SyntheticEvent) {
    e.preventDefault()
    if (quantity > 0) setQuantity(quantity - 1)
  }

  function handleCheckoutClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    addItemToCart({
      name: props.name,
      quantity,
    })
    setQuantity(0)
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
          <IncrementalInput
            id={props.name}
            quantity={quantity}
            increaseQuantity={handleIncreaseQuantity}
            decreaseQuantity={handleDecreaseQuantity}
          />
          <button className="checkoutButton" onClick={handleCheckoutClick}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </FormContainer>
      </CardFooter>
    </CoffeeCard>
  )
}
