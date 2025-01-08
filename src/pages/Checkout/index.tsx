import { useContext } from 'react'
import { CartItem } from './components/CartIrtem'
import { FormInput } from './components/FormInput'
import { PaymentRadioButton } from './components/PaymentRadioButton'
import {
  CartContainer,
  CheckoutContainer,
  FormSection,
  PaymentContainer,
  TitleContainer,
  UserInfoContainer,
} from './styles'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { useForm, Controller } from 'react-hook-form'

interface IUserInfo {
  zipcode: string
  street: string
  number: string
  additional: string
  neighborhood: string
  city: string
  state: string
}

export function Checkout() {
  const { cart } = useContext(ShoppingCartContext)
  const { control, handleSubmit, reset } = useForm<IUserInfo>({
    defaultValues: {
      zipcode: '',
      street: '',
      number: '',
      additional: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  function onSubmit(data: IUserInfo) {
    localStorage.setItem('userInfo', JSON.stringify(data))
    reset()
  }
  // const onSubmit: SubmitHandler<IUserInfo> = (data) => {
  //   localStorage.setItem('userInfo', JSON.stringify(data))
  //   reset()
  // }

  const itemsTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )
  const shippingCost = itemsTotal ? 3.5 : 0
  const overallTotal = itemsTotal + shippingCost

  return (
    <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="left">
        <h2>Complete seu pedido</h2>
        <UserInfoContainer>
          <FormSection>
            <TitleContainer>
              <MapPinLine size={22} color="#C47F17" />
              <div className="formSectionHeader">
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </TitleContainer>
            <div className="inputFrame">
              <div className="row">
                <Controller
                  name="zipcode"
                  control={control}
                  render={({ field }) => (
                    <FormInput placeholder="CEP" {...field} />
                  )}
                />
              </div>
              <div className="row">
                <Controller
                  name="street"
                  control={control}
                  render={({ field }) => (
                    <FormInput placeholder="Rua" {...field} />
                  )}
                />
              </div>
              <div className="row">
                <Controller
                  name="number"
                  control={control}
                  render={({ field }) => (
                    <FormInput placeholder="Número" {...field} />
                  )}
                />
                <Controller
                  name="additional"
                  control={control}
                  render={({ field }) => (
                    <FormInput placeholder="Complemento" {...field} />
                  )}
                />
              </div>
              <div className="row">
                <Controller
                  name="neighborhood"
                  control={control}
                  render={({ field }) => (
                    <FormInput placeholder="Bairro" {...field} />
                  )}
                />
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <FormInput placeholder="Cidade" {...field} />
                  )}
                />
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <FormInput placeholder="UF" {...field} />
                  )}
                />
              </div>
            </div>
          </FormSection>
          <FormSection>
            <TitleContainer>
              <CurrencyDollar size={22} color="#8047F8" />
              <div className="formSectionHeader">
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </TitleContainer>
            <PaymentContainer>
              <PaymentRadioButton />
              <PaymentRadioButton />
              <PaymentRadioButton />
            </PaymentContainer>
          </FormSection>
        </UserInfoContainer>
      </div>

      <div className="right">
        <h2>Cafés selecionados</h2>
        <CartContainer>
          {cart.map((item) => {
            return (
              <CartItem
                key={item.name}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            )
          })}
          <footer>
            <div>
              <span>Total de itens</span>
              <span>
                {itemsTotal.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>
                {shippingCost.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>
                {overallTotal.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
            <button type="submit">CONFIRMAR PEDIDO</button>
          </footer>
        </CartContainer>
      </div>
    </CheckoutContainer>
  )
}
