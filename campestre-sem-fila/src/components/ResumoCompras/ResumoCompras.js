import React, { useState } from "react";
import { Container, Content, HeaderContent } from "./index";

function ResumoCompras() {

    const [count, setCounter] = useState(0)

    return (
        <>
            <Container>
                <Content>
                    <HeaderContent>
                        <h1>Resumo</h1>
                        <h2>{count} itens</h2>
                    </HeaderContent>
                </Content>
            </Container>
        </>
    )
}

export default ResumoCompras;