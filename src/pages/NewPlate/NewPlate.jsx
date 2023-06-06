import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft, FiUpload } from "react-icons/fi";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import IngredientCard from "../../components/IngredientCard";
import Select from "../../components/Select";

import { api } from "../../services/api";
import {
  Container,
  Form,
  Textarea
} from "./styles";
import LinkText from "../../components/LinkText";
import  Button  from "../../components/Button";

const NewPlate = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("salgados");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddIngredient = () => {
    if (newIngredient) {
      const isNewIngredient = !ingredients.includes(newIngredient);
      if (isNewIngredient) {
        setIngredients((prevState) => [...prevState, newIngredient]);
      } else {
        alert('Ingredient já Adicionado!');
      }
    }

    setNewIngredient('');
    document.getElementById('add').focus();
  };

  const handleRemoveIngredient = (deleted) => {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  };

  const handleNewPlate = async () => {
    if (!name) {
      return alert("Adicione um titulo para o prato");
    }

    if (!description) {
      return alert("Adicione uma descrição para o prato");
    }

    if (!price) {
      return alert("Adicione um preço para o prato");
    }

    if (newIngredient) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    if (ingredients.length < 1) {
      return alert("Adicione pelo menos um ingrediente");
    }

    setLoading(true);
    const response = await api.post("/plates", {name, category, price, description, ingredients})
    const plate_id = response.data.id.id
    console.log(plate_id)
    
    if (image) {
      const fileUploadForm = new FormData();
      fileUploadForm.append('image', image);

      await api.patch(`/plates/image/${plate_id}`, fileUploadForm);
    }

    alert('Prato adicionado!')
    navigate('/');
    setName('');
    setIngredients([]);
    setPrice('');
    setDescription('');

    setLoading(false);
  };

  function handleUploadPhoto(event) {
    const file = event.target.files[0];
    console.log(`Isso aqui eh o file: ${file}`)
    setImage(file);
  }
  return (
    <Container>
    <Header />

    <div className="wrapper">
      <LinkText name="voltar" icon={FiChevronLeft} to={-1} />
    </div>

    <main>
      <Form onSubmit={(e) => e.preventDefault()}>
        <h1>Novo prato</h1>

        <div id="threeColumns">
          <div className="input-wrapper">
            <label htmlFor="image">Imagem do prato</label>
            <div>
              <span>
                <FiUpload />{' '}
                {image ? image.name : 'Selecione a imagem'}
              </span>
              <Input
                id="image"
                accept="image/png, image/jpeg"
                type="file"
                style={{ cursor: 'pointer' }}
                onChange={handleUploadPhoto}
              />
            </div>
          </div>

          <Input
            id="name"
            label="Nome"
            placeholder="Salada Ceasar"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div>
            <label htmlFor="category">Categoria</label>
            <Select
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="meal">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebida</option>
            </Select>
          </div>
        </div>

        <div id="twoColumns">
          <div>
            <label htmlFor="add">Ingredientes</label>
            <div>
              {ingredients.map((ingredient, index) => (
                <IngredientCard
                  key={String(index)}
                  value={ingredient}
                  onClick={(e) => handleRemoveIngredient(ingredient)}
                  size={String(ingredient.length)}
                />
              ))}

              <IngredientCard
                id="add"
                isNew
                size="6"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={()=> handleAddIngredient()}
              />
            </div>
          </div>

          <Input
            id="price"
            type="number"
            label="Preço"
            placeholder="R$ 00,00"
            min="0"
            step="0.010"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div id="textarea">
          <label htmlFor="description">Descrição</label>
          <Textarea
            id="description"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <Button id="buttonAdd" title="Adicionar" onClick={()=>handleNewPlate() } />
      </Form>
    </main>
    <Footer />
  </Container>
  );
};

export default NewPlate;
