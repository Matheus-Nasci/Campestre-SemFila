import styled from "styled-components";

const Card = styled.div`
  cursor: pointer;
  margin-right: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120px;
  width: 116px;
  background-color: white;
  transition: transform 0.2s ease-in-out;
  text-align: center;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }
  :hover {
    transform: scale(1.2);
    transition: transform 0.2s ease-in-out;
  }
`;

const ImageProduto = styled.img`
  height: 120%;
  border-radius: 8px;
`;

const TituloProduto = styled.span``;

const PrecoProduto = styled.span`
  width: 200px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #7a8098;

`;

export { Card, TituloProduto, PrecoProduto, ImageProduto };
