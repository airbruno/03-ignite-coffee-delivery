import { ButtonContainer } from './styles'

export function PaymentRadioButton() {
  return (
    <ButtonContainer>
      <input type="radio" id="card" />
      <label htmlFor="card">CARTAO DE CREDITO</label>
    </ButtonContainer>
  )
}
