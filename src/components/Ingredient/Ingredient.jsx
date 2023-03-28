import React from "react";

import { Container } from "./style";

import alface from "../../assets/Ingredientes/alface.png";
import tomate from "../../assets/Ingredientes/tomate.png";
import rabanete from "../../assets/Ingredientes/rabanete.png";
import paoNaan from "../../assets/Ingredientes/pao-naan.png";
import pao from "../../assets/Ingredientes/pao.png";
import presunto from "../../assets/Ingredientes/presunto.png";
import rucula from "../../assets/Ingredientes/rucula.png";
import camarao from "../../assets/Ingredientes/camarao.png";
import massa from "../../assets/Ingredientes/massa.png";
import pesto from "../../assets/Ingredientes/pesto.png";
import pepino from "../../assets/Ingredientes/pepino.png";
import ameixa from "../../assets/Ingredientes/ameixa.png";
import farinha from "../../assets/Ingredientes/farinha.png";
import pessego from "../../assets/Ingredientes/pessego.png";
import amendoas from "../../assets/Ingredientes/amendoas.png";
import claras from "../../assets/Ingredientes/claras.png";
import damasco from "../../assets/Ingredientes/damasco.png";
import maracuja from "../../assets/Ingredientes/maracuja.png";
import cafe from "../../assets/Ingredientes/cafe.png";
import canela from "../../assets/Ingredientes/canela.png";
import aniz from "../../assets/Ingredientes/aniz.png";
import limao from "../../assets/Ingredientes/limao.png";
import whiskey from "../../assets/Ingredientes/whiskey.png";
import maca from "../../assets/Ingredientes/maca.png";

const Ingredient = ({ ingredient }) => {
  const imageIngredient = (name) => {
    let ingredient = name
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    let result;

    if (ingredient == "alface") {
      return (result = alface);
    } else if (ingredient == "tomate") {
      return (result = tomate);
    } else if (ingredient == "rabanete") {
      return (result = rabanete);
    } else if (ingredient == "pao naan") {
      return (result = paoNaan);
    } else if (ingredient == "pao") {
      return (result = pao);
    } else if (ingredient == "presunto") {
      return (result = presunto);
    } else if (ingredient == "rucula") {
      return (result = rucula);
    } else if (ingredient == "camarao") {
      return (result = camarao);
    } else if (ingredient == "massa") {
      return (result = massa);
    } else if (ingredient == "pesto") {
      return (result = pesto);
    } else if (ingredient == "pepino") {
      return (result = pepino);
    } else if (ingredient == "ameixa") {
      return (result = ameixa);
    } else if (ingredient == "farinha") {
      return (result = farinha);
    } else if (ingredient == "pessego") {
      return (result = pessego);
    } else if (ingredient == "amendoas") {
      return (result = amendoas);
    } else if (ingredient == "claras") {
      return (result = claras);
    } else if (ingredient == "damasco") {
      return (result = damasco);
    } else if (ingredient == "maracuja") {
      return (result = maracuja);
    } else if (ingredient == "cafe") {
      return (result = cafe);
    } else if (ingredient == "canela") {
      return (result = canela);
    } else if (ingredient == "aniz") {
      return (result = aniz);
    } else if (ingredient == "limao") {
      return (result = limao);
    } else if (ingredient == "whiskey") {
      return (result = whiskey);
    } else if (ingredient == "maca") {
      return (result = maca);
    } else {
      return (result = damasco);
    }
  };

  let result = imageIngredient(ingredient);

  return (
    <Container>
      <div className="ingredient-wrapper">
        <img src={result} alt="" />
        <span>{ingredient}</span>
      </div>
    </Container>
  );
};
export default Ingredient;
