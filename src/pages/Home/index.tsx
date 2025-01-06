import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  ArtContainer,
  HomeContainer,
  InfoContainer,
  ItemsContainer,
  TitleContainer,
  IntroContainer,
} from './styles'
import CafeArt from '../../assets/Art.png'
import { CoffeeList } from './components/CoffeeList'

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
        <ArtContainer>
          <img src={CafeArt} alt="Imagem de um copo de café" />
        </ArtContainer>
      </IntroContainer>
      <CoffeeList />
    </HomeContainer>
  )
}
