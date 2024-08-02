import React from "react";
import styled from "styled-components";

const BackdropComponent = styled.div`
    display: ${props => (props.active ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
    /* z-index: ${props => (props.active ? 'block' : 'none')}; */
`;

function Backdrop({ active }) {
    return (
        <BackdropComponent active={active} />
    );
}

export default Backdrop;
