import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartContainer, HeaderContainer, LocationContainer } from './styles'
import { NavLink } from 'react-router-dom'
import LogoSvg from '../../assets/Logo.svg'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'

export function Header() {
  const { cartItemsQuantity } = useContext(ShoppingCartContext)

  return (
    <HeaderContainer>
      <img src={LogoSvg} alt="" width={85} />
      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationContainer>
        <CartContainer>
          <NavLink to="/checkout">
            <ShoppingCart size={32} weight="fill" />
            <span>{cartItemsQuantity}</span>
          </NavLink>
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
