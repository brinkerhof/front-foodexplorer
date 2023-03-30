import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft, FiUpload } from "react-icons/fi";
import Select from "react-select";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import IngredientCard from "../../components/IngredientCard";
import Textarea from "../../components/Textarea";

import { api } from "../../services/api";
import {
  ButtonBack,
  Container,
  Content,
  Form,
  InputWrapper,
  SectionIngredients,
} from "./styles";

const NewPlate = () => {
  const token = localStorage.getItem("token");
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  // TALVEZ USAR REACT-SELECT TAMBEM, CRIANDO UMA ARROW-FUCNTION QUE FACA REQUISICAO DE TODOS OS INGREDIENTES NO BANCO
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddIngredient = () => {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  };

  const handleRemoveIngredient = (deleted) => {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  };

  const handleNewPlate = async () => {
    if (!image) {
      return alert("Adicione uma imagem para o prato");
    }

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
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.map((ingredient) => formData.append("ingredients", ingredient));

    await api.post("/plates", formData, {
      headers: {
        Authorization: token,
      },
    });
    alert("Prato cadastrado com sucesso");
    navigate("/");

    setLoading(false);
  };

  const option = [
    { value: "salgados", label: "Salgados" },
    { value: "doces", label: "Doces" },
    { value: "bebidas", label: "Bebidas" },
  ];
  return (
    <Container>
      <Header />
      <Content>
        <ButtonBack>
          <Link to="/">
            {" "}
            <FiChevronLeft size={30} />
            Voltar
          </Link>
        </ButtonBack>

        <Form>
          <header>
            <legend>Adicionar Prato</legend>
          </header>

          <InputWrapper>
            <div className="smallBox">
              <label id="file" htmlFor="image">
                Imagem do prato
                <div>
                  <FiUpload size={24} />
                  <span>Selecione a imagem</span>
                  <input
                    id="image"
                    type="file"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                  />
                </div>
              </label>
            </div>
            <Input
              label="name"
              title="Nome do prato"
              type="text"
              placeholder="Ex.: Salada Ceasar"
              onChange={(e) => setName(e.target.value)}
            />
            <Select
              options={option}
              onChange={(e) => {
                setCategory(e.value);
              }}
            />
          </InputWrapper>

          <InputWrapper>
            <SectionIngredients>
              <span>Ingredientes</span>
              <div>
                {ingredients.map((ingredient, index) => (
                  <IngredientCard
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}
                <IngredientCard
                  isNew
                  value={newIngredient}
                  placeholder="Adicionar"
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={() => handleAddIngredient()}
                />
              </div>
            </SectionIngredients>
            <div className="smallBox">
              <Input
                label="price"
                title="Preço"
                type="text"
                placeholder="R$ 00,00"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </InputWrapper>
          <Textarea
            label="Description"
            title="Descrição"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e) => {
              setDescription(e.target.value);
              console.log(image);
            }}
          />
          <button type="button" onClick={handleNewPlate} disabled={loading}>
            {loading ? "Adicionando prato" : "Adicionar prato"}
          </button>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
};

export default NewPlate;
