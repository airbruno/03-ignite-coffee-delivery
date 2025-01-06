import styled from 'styled-components'

export const CoffeeCard = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    position: relative; /* Allows precise placement */
    top: -30px; /* Moves the image 10px above the container */
    left: 0;
  }

  p {
    padding: 0.25rem 0.5rem;
    font-size: 0.675rem;
    font-weight: bold;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yelow-light']};
    text-align: center;
    border-radius: 100px;
    margin-top: -45px;
  }

  strong {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
    text-align: center;

    width: 216px;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    width: 216px;
  }
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;

  strong {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
    text-align: center;
  }

  .price {
    height: 38px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  .checkoutButton {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    width: 38px;
    height: 38px;

    text-decoration: none;
    border: 0;
    border-radius: 6px;
    cursor: pointer;

    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
  }
`
