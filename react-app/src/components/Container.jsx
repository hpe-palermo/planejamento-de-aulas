import React from "react";
import styled from "styled-components";

const ContainerComponent = styled.div`
    height: calc(100vh - 69.41px);
    background-color: #d2d2d2;
`;

function Container() {
    return (
        <ContainerComponent />
    )
}

export default Container;