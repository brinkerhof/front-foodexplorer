import { FiX, FiPlus } from 'react-icons/fi';

import { Container } from './styles';


const IngredientCard = ({ isNew = false, onClick, size, ...rest }) => {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        size={size}
        readOnly={!isNew}
        placeholder="Adicionar"
        {...rest}
      />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}

export default IngredientCard
