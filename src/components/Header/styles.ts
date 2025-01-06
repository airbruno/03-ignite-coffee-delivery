import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 2rem 10rem;

  nav {
    display: flex;
    gap: 0.75rem;

    text-decoration: none;
  }
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  border-radius: 6px;
`

export const CartContainer = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    text-decoration: none;
    border-radius: 6px;
    cursor: pointer;

    background: ${(props) => props.theme['yelow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`
