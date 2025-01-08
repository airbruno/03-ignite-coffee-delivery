import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HomeContainer,
  InfoContainer,
  ItemsContainer,
  TitleContainer,
  IntroContainer,
} from './styles'
import CafeArt from '../../assets/Art.png'
import { CoffeeList } from './components/CoffeeList'
import { ICoffee } from '../../contexts/ShoppingCartContext'

export const coffeeInventory: ICoffee[] = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moidos',
    category: ['TRADICIONAL'],
    price: 9.9,
    quantity: 0,
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    category: ['TRADICIONAL'],
    price: 9.9,
    quantity: 0,
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    category: ['TRADICIONAL'],
    price: 9.9,
    quantity: 0,
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    category: ['TRADICIONAL', 'GELADO'],
    price: 9.9,
    quantity: 0,
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    category: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    quantity: 0,
  },
  {
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    category: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    quantity: 0,
  },
  {
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    category: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    quantity: 0,
  },
  {
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    category: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    quantity: 0,
  },
  {
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    category: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    quantity: 0,
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    category: ['ESPECIAL', 'COM LEITE'],
    price: 9.9,
    quantity: 0,
  },
  {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    category: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    price: 9.9,
    quantity: 0,
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    category: ['ESPECIAL'],
    price: 9.9,
    quantity: 0,
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    category: ['ESPECIAL'],
    price: 9.9,
    quantity: 0,
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    category: ['ESPECIAL', 'ALCOÓLICO'],
    price: 9.9,
    quantity: 0,
  },
]

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <InfoContainer>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </p>
          </TitleContainer>
          <ItemsContainer>
            <div className="row">
              <div className="item">
                <ShoppingCart weight="fill" />
                <span>Compra simples e segura</span>
              </div>
              <div className="item">
                <Timer weight="fill" />
                <span>Entrega rápida e rastreada</span>
              </div>
            </div>
            <div className="row">
              <div className="item">
                <Package weight="fill" />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div className="item">
                <Coffee weight="fill" />
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </ItemsContainer>
        </InfoContainer>
        <div className="image">
          <img src={CafeArt} alt="Imagem de um copo de café" />
        </div>
      </IntroContainer>
      <CoffeeList inventory={coffeeInventory} />
    </HomeContainer>
  )
}
