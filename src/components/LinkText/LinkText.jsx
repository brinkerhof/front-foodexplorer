import { Container } from './styles';

const LinkText = ({ name, icon: Icon, ...rest }) => {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {name}
    </Container>
  )
}

export default LinkText
