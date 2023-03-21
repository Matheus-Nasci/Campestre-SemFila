import Title from './index';

function NumeroFicha({numeroFicha, status, tamanho}) {
    return (
        <Title status={status} tamanho={tamanho}>{numeroFicha}</ Title>
    )
}

export default NumeroFicha;