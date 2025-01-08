import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
  /* Hide number controls in Safari */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Ensure consistent appearance */
  input[type='number'] {
    appearance: textfield; /* For modern browsers */
  }

  input {
    height: 38px;
    width: 72px;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-title']};
    text-align: center;

    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  .plus {
    position: absolute;
    top: 30%; /* Move 50% down from the top of the container */

    text-align: center; /* Optional: centers text horizontally */
    left: 55%;
    transform: translateX(70%);
  }

  .minus {
    position: absolute;
    top: 30%; /* Move 50% down from the top of the container */

    text-align: center; /* Optional: centers text horizontally */
    left: 45%;
    transform: translateX(-170%);
  }

  button {
    background: transparent;

    margin: 0;
    padding: 0;
    border: 0;
    cursor: pointer;
  }
`
