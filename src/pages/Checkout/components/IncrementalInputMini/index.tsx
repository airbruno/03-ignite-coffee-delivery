import { Plus, Minus } from 'phosphor-react'
import { InputContainer } from './styles'

interface IIncrementalInputProps {
  increaseQuantity: (e: React.MouseEvent<HTMLButtonElement>) => void
  decreaseQuantity: (e: React.MouseEvent<HTMLButtonElement>) => void
  quantity: number
}

export function IncrementalInputMini(props: IIncrementalInputProps) {
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
