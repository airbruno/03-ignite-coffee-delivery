import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
`

export const List = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(
    auto-fit,
    minmax(256px, 256px)
  ); /* Create up to 3 equal-width columns */
  gap: 40px 32px; /* Space between items */
  max-width: calc(256px * 5);
`
