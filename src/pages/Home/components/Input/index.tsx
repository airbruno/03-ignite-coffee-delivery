import { Plus, Minus } from 'phosphor-react'
import { InputContainer } from './styles'

interface IInputProps {
  increaseQuantity: (e: React.SyntheticEvent) => void
  decreaseQuantity: (e: React.SyntheticEvent) => void
  quantity: number
}

export function Input(props: IInputProps) {
  return (
    <InputContainer>
      <button className="minus" onClick={props.decreaseQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      <input
        type="number"
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
