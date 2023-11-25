import React, { useState } from "react";
import { Form, Container } from ".";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../utils/api/api";

const AdicionarProduto = () => {
  const [nomeProduto, setNomeProduto] = useState("");
  const [tamanhoProduto, setTamanhoProduto] = useState("");
  const [precoProduto, setPrecoProduto] = useState(0);
  const [imagemProduto, setImagemProduto] = useState(null);

  const handleNomeChange = (e) => {
    setNomeProduto(e.target.value);
  };

  const handleTamanhoChange = (e) => {
    setTamanhoProduto(e.target.value);
  };

  const handlePrecoChange = (e) => {
    setPrecoProduto(e.target.value);
  };

  const handleImagemChange = (e) => {
    setImagemProduto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
      "produto",
      new Blob(
        [
          JSON.stringify({
            nome: nomeProduto,
            tamanho: tamanhoProduto,
            valor: precoProduto,
          }),
        ],
        { type: "application/json" }
      )
    );
    formData.append("imagem", imagemProduto);

    try {
      const response = await api.post("/produtos", formData, {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
        },
      });

      console.log(response.data);
      toast.success("Produto cadastrado com sucesso!", {
        autoClose: 2000,
      })
    } catch (error) {
      toast.error(error)
      console.error(error);
    }
  };

  return (
    <Container>
      <Form>
        <h1>Adicionar Produto</h1>
        <br />
        <span>Nome: </span>
        <br />
        <input
          type="text"
          placeholder="Nome do produto"
          value={nomeProduto}
          onChange={handleNomeChange}
        />
        <br />
        <span>Tamanho:</span>
        <br />
        <input
          type="text"
          placeholder="Tamanho do produto"
          value={tamanhoProduto}
          onChange={handleTamanhoChange}
        />
        <br />
        <span>Preço:</span>
        <br />
        <input
          type="number"
          placeholder="Preço do produto"
          value={precoProduto}
          onChange={handlePrecoChange}
        />
        <br />
        <span>Imagem do produto:</span>
        <br />
        <input
          type="file"
          name="foto"
          accept="image/*"
          onChange={handleImagemChange}
        />
        <br />
        <button onClick={handleSubmit} type="submit">
          Adicionar
        </button>
      </Form>
    </Container>
  );
};

export default AdicionarProduto;
