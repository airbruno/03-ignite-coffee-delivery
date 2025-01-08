import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  strong {
    font-size: 1rem;
    font-weight: bold;
  }
  hr {
    border: 0.1px solid ${(props) => props.theme['base-button']};
  }

  .checkoutCard {
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      gap: 1.35rem;
    }

    aside {
      display: grid;
      grid-template-columns: 72px 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 0.5rem;

      span {
        grid-column: 1 / span 2;
        font-size: 1rem;
      }
    }
  }
`

export const RemoveButton = styled.button`
  height: 2rem;
  background: ${(props) => props.theme['base-button']};
  border: 0;
  border-radius: 6px;

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.6;
  color: ${(props) => props.theme['base-text']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0 0.5rem;

  cursor: pointer;

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Text drop shadow */
  svg {
    color: ${(props) => props.theme.purple};
  }
`
