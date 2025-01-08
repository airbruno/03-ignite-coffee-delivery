import { Plus, Minus } from 'phosphor-react'
import { InputContainer } from './styles'

interface IIncrementalInputProps {
  increaseQuantity: (e: React.SyntheticEvent) => void
  decreaseQuantity: (e: React.SyntheticEvent) => void
  quantity: number
  id: string
}

export function IncrementalInput(props: IIncrementalInputProps) {
  return (
    <InputContainer>
      <button className="minus" onClick={props.decreaseQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      <input
        type="number"
        id={props.id}
        value={props.quantity}
        min={1}
        max={99}
        step={1}
        readOnly
      />
      <button className="plus" onClick={props.increaseQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </InputContainer>
  )
}
