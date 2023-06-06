import { Container } from './styles';
const Select = ({children, ...rest}) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}

export default Select
