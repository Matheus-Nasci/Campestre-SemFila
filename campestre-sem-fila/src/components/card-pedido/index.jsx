import styled from "styled-components";

const Card = styled.div`
  margin-top: 1%;
  width: 20%;
  height: 150px;
  display: flex;
  flex-direction: row;
  margin-left: 1%;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 10px 0px 0px 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left: 0;
    border-radius: 10px;
  }
`;

const Image = styled.div`
  border-radius: 10px 0px 0px 10px;
  height: 100%;
  width: 30%;
  background-image: url(${(props) => props.imagem});
  background-size: cover;
  background-position: center 10%;
  background-repeat: no-repeat;
`;

const InfoProduct = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 50%;

  @media (max-width: 768px) {
    width: 80%;
    gap: 20px;
  }
`;


const PartOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 5%;
`;

const NomeProduct = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const PriceProduct = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: #000000;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PartTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 5%;
`;

const LengthProduct = styled.span`
  font-weight: 300;
  font-size: 20px;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


const QuantityProduct = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #ff0000;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;


export {
  Card,
  Image,
  InfoProduct,
  LengthProduct,
  NomeProduct,
  PartOne,
  PartTwo,
  PriceProduct,
  QuantityProduct,
};
