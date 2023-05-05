import React, { useState } from "react";
import {
    CancelButton,
    Button,
    Footer,
    Body,
    Title,
    CloseButton,
    TitleCloseBtn,
    ModalBackground,
    ModalContainer,
    InputLabel,
    InputField,
    FileInputLabel,
    FileInputField,
} from "./index";
import axios from "axios";

function Modal({ setOpenModal }) {
    const [produto, setProduto] = useState({
        nome: "",
        valor: 0,
        tamanho: "",
        imagem: null,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleImageChange = (event) => {
        const image = event.target.files[0];
        setProduto({ ...produto, imagem: image });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const produtoObj = {
            nome: produto.nome,
            valor: produto.valor,
            tamanho: produto.tamanho
        };

        const json = JSON.stringify(produtoObj);
        const blob = new Blob([json], {
            type: 'application/json'
        });

        const formData = new FormData();
        formData.append('produto', blob);
        formData.append('imagem', produto.imagem);

        try {
            const response = await axios.post(
                'http://192.168.0.108:8080/campestre-sem-fila/api/v1/produtos',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            console.log(response.data);
            setOpenModal(false);
        } catch (error) {
            console.log(error);
        }

    };


    return (
        <ModalBackground>
            <ModalContainer>
                <TitleCloseBtn>
                    <CloseButton onClick={() => setOpenModal(false)}>X</CloseButton>
                </TitleCloseBtn>
                <Title>Adicionar Produto</Title>
                <form onSubmit={handleSubmit}>
                    <Body>
                        <div>
                            <InputLabel htmlFor="nome">Nome:</InputLabel>
                            <InputField type="text" id="nome" name="nome" value={produto.nome} onChange={handleChange} />
                        </div>
                        <div>
                            <InputLabel htmlFor="valor">Valor:</InputLabel>
                            <InputField type="number" id="valor" name="valor" value={produto.valor} onChange={handleChange} />
                        </div>
                        <div>
                            <InputLabel htmlFor="tamanho">Tamanho:</InputLabel>
                            <InputField type="text" id="tamanho" name="tamanho" value={produto.tamanho} onChange={handleChange} />
                        </div>
                        <div>
                            <FileInputLabel htmlFor="imagem">Imagem:</FileInputLabel>
                            <FileInputField type="file" id="imagem" name="imagem" onChange={handleImageChange} />
                        </div>
                    </Body>
                    <Footer>
                        <CancelButton onClick={() => setOpenModal(false)}>Cancelar</CancelButton>
                        <Button type="submit">Adicionar</Button>
                    </Footer>
                </form>
            </ModalContainer>
        </ModalBackground>
    );

}

export default Modal;
