import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(
    4,
    1fr
  ); /* Create up to 3 equal-width columns */
  gap: 40px 32px; /* Space between items */
  max-width: 100%; /* Optional: limits the overall width */
`
