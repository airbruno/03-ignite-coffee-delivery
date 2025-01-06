import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 10rem;
`

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  max-width: 588px;
  height: 544px;
  padding-top: 5.875rem;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 588px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 588px;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.125rem;

  font-size: 1rem;
  gap: 1.25rem;

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

export const ArtContainer = styled.div`
  img {
    object-fit: cover;
    object-position: center;
    width: 476px;
    height: 360px;
  }
`
