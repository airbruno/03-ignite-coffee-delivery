import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5rem;
`

export const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 588px 1fr;
  gap: 3.5rem;
  height: 544px;
  padding-top: 5.875rem;

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ItemsContainer = styled.div`
  margin-top: 4.125rem;
  font-size: 1rem;

  .row {
    display: flex;
    justify-content: space-between;
    gap: 2.5rem;
  }

  .item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    width: 294px;
  }

  svg {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    background: gray;
    padding: 8px;
  }
`
