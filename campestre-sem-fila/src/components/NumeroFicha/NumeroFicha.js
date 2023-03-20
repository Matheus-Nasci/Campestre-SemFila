import Title from './index';

function NumeroFicha({numeroFicha, status}) {
    return (
        <Title status={status}>{numeroFicha}</ Title>
    )
}

export default NumeroFicha;