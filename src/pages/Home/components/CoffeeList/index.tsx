import { CoffeeItem } from '../CoffeeItem'
import { List, ListContainer } from './styles'
import expresso from '../../../../assets/Type=Expresso.png'

export function CoffeeList() {
  return (
    <ListContainer>
      <h1>Nossos cafés</h1>
      <List>
        <CoffeeItem
          imgSrc={expresso}
          category={'TRADICIONAL'}
          name={'Expresso Tradicional'}
          description={'O tradicional cafe com agua quente e graos moidos'}
          price={9.9}
        />
        <CoffeeItem
          imgSrc={expresso}
          category={'TRADICIONAL'}
          name={'Expresso Tradicional'}
          description={'O tradicional cafe com agua quente e graos moidos'}
          price={9.9}
        />
        <CoffeeItem
          imgSrc={expresso}
          category={'TRADICIONAL'}
          name={'Expresso Tradicional'}
          description={'O tradicional cafe com agua quente e graos moidos'}
          price={9.9}
        />
        <CoffeeItem
          imgSrc={expresso}
          category={'TRADICIONAL'}
          name={'Expresso Tradicional'}
          description={'O tradicional cafe com agua quente e graos moidos'}
          price={9.9}
        />
        <CoffeeItem
          imgSrc={expresso}
          category={'TRADICIONAL'}
          name={'Expresso Tradicional'}
          description={'O tradicional cafe com agua quente e graos moidos'}
          price={9.9}
        />
        <CoffeeItem
          imgSrc={expresso}
          category={'TRADICIONAL'}
          name={'Expresso Tradicional'}
          description={'O tradicional cafe com agua quente e graos moidos'}
          price={9.9}
        />
        <CoffeeItem
          imgSrc={expresso}
          category={'TRADICIONAL'}
          name={'Expresso Tradicional'}
          description={'O tradicional cafe com agua quente e graos moidos'}
          price={9.9}
        />
      </List>
    </ListContainer>
  )
}
