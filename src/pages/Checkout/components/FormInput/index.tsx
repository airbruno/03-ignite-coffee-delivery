import { StyledInput } from './styles'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function FormInput(props: IFormInputProps) {
  return <StyledInput {...props} />
}
