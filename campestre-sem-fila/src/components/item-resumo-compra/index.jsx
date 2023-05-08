import styled from "styled-components";

const DivItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4%;
`;

const DescricaoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const NomeProduto = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
`;

const PrecoProduto = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #7a8098;
`;

const PrecoTotalDiv = styled.div``;

const PrecoTotalSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #7a8098;
`;

export {
  DescricaoItem,
  NomeProduto,
  PrecoProduto,
  PrecoTotalDiv,
  PrecoTotalSpan,
  DivItem
};
