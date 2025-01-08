import { Trash } from 'phosphor-react'
import { Container, RemoveButton } from './styles'
import { IncrementalInputMini } from '../IncrementalInputMini'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../../../contexts/ShoppingCartContext'

interface ICartItemProps {
  name: string
  price: number
  quantity: number
}

export function CartItem(props: ICartItemProps) {
  const { removeFromCart, cartItemsQuantity, addItemToCart } =
    useContext(ShoppingCartContext)

  function handleIncreaseQuantity(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    addItemToCart({
      name: props.name,
      quantity: 1,
    })
  }

  function handleRemove(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    removeFromCart(props.name)
  }

  function handleDecreaseQuantity(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    addItemToCart({
      name: props.name,
      quantity: -1,
    })
  }

  if (cartItemsQuantity !== 0) {
    return (
      <Container>
        <div className="checkoutCard">
          <div>
            <img
              src={`src/assets/Type=${props.name}.png`}
              alt={props.name}
              height={64}
              width={64}
            />
            <aside>
              <span>{props.name}</span>
              <IncrementalInputMini
                quantity={props.quantity}
                increaseQuantity={handleIncreaseQuantity}
                decreaseQuantity={handleDecreaseQuantity}
              />
              <RemoveButton onClick={handleRemove}>
                <Trash size={16} />
                REMOVER
              </RemoveButton>
            </aside>
          </div>
          <strong>
            {props.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </strong>
        </div>
        <hr />
      </Container>
    )
  }
}
