import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  padding: 0 5rem;

  display: grid;
  grid-template-columns: 560px 1fr;
  grid-gap: 2rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
  }
`
export const UserInfoContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const FormSection = styled.section`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .inputFrame {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .row {
    display: flex;
    gap: 0.75rem;
    width: 100%;
  }

  input[placeholder='CEP'] {
    width: 12.5rem;
  }

  input[placeholder='Número'] {
    width: 12.5rem;
  }

  input[placeholder='Bairro'] {
    width: 12.5rem;
  }

  input[placeholder='UF'] {
    width: 3.75rem;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  .formSectionHeader {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`
export const CartContainer = styled.aside`
  margin-top: 15px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  footer {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div {
      display: flex;
      justify-content: space-between;
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 0.875rem;
      font-weight: regular;
    }

    .total {
      font-size: 1.25rem;
      font-weight: bold;
    }

    button {
      border: 0;
      border-radius: 6px;
      padding: 0.75rem 0.5rem;
      background: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.white};
      font-size: 0.875rem;
      font-weight: bold;
      line-height: 1.6;

      cursor: ponter;

      &:hover {
        background: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`
export const PaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  input {
  }
`
