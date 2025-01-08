import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 104px;

  padding: 2rem 5rem;
  white-space: nowrap;

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
  font-size: 0.875rem;

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
    width: 40px;
    height: 40px;

    text-decoration: none;
    border-radius: 6px;
    cursor: pointer;

    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    position: relative;

    span {
      position: absolute;
      border-radius: 50%;
      top: -10px;
      left: 30px;

      height: 1.25rem;
      width: 1.25rem;

      line-height: 1.3;
      font-weight: bold;
      font-size: 0.875rem;

      background-color: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
