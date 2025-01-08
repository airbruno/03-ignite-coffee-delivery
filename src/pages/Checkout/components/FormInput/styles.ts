import styled from 'styled-components'

export const StyledInput = styled.input`
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  padding: 0.75rem;
  width: 100%;
  box-sizing: border-box;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3;

  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  outline: none;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`
