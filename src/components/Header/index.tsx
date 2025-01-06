import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartContainer, HeaderContainer, LocationContainer } from './styles'
import { NavLink } from 'react-router-dom'
import LogoSvg from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoSvg} alt="" />
      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationContainer>
        <CartContainer>
          <NavLink to="/checkout">
            <ShoppingCart size={32} weight="fill" />
          </NavLink>
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
