import { ICoffee } from '../../../../contexts/ShoppingCartContext'
import { CoffeeItem } from '../CoffeeItem'
import { List, ListContainer } from './styles'

interface ICoffeeListProps {
  inventory: ICoffee[]
}

export function CoffeeList(props: ICoffeeListProps) {
  const { inventory } = props

  return (
    <ListContainer>
      <h1>Nossos cafés</h1>
      <List>
        {inventory.map((item) => (
          <CoffeeItem
            key={item.name}
            imgSrc={`src/assets/Type=${item.name}.png`}
            category={item.category[0]}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </List>
    </ListContainer>
  )
}
