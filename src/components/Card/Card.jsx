import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../providers/auth";

const Card = ({ data, ...rest }) => {
  const { user } = useAuthContext();

  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  return (
    <Container {...rest}>
      {user.isAdmin ? (
        <button onClick={handleRemoveDish}>
          <FaTrashAlt size={25} />
        </button>
      ) : null}

      <div>
        <img src={imageURL} alt={data.title} />
      </div>

      <a
        type="button"
        onClick={
          user.isAdmin
            ? () => handleEditDish(data.id)
            : () => handleDetails(data.id)
        }
      >
        <h3>
          {data.title} <FaAngleRight />
        </h3>
      </a>

      <p>{data.description}</p>
      <strong>R$ {data.price}</strong>
      {user.isAdmin ? (
        <div></div>
      ) : (
        <div>
          <Button
            title="incluir"
            onClick={() => handleAddDishToCart(data, imageURL)}
            disabled={paymentAccept}
          />
        </div>
      )}
    </Container>
  );
};

export default Card;
