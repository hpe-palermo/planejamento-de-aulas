import React from "react";
import styled from 'styled-components';

const Page = styled.div`
    background-color: #f0f0f0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #333;
    font-family: Arial, sans-serif;
`;

const Title = styled.h1`
    font-size: 4rem;
    margin-bottom: 1rem;
`;

const Message = styled.p`
    font-size: 1.5rem;
    margin-bottom: 2rem;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    background-color: #101010;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #4d4d4d;
    }
`;

function PageNotFound() {
    const goToHome = () => {
        window.location.href = '/';
    };

    return (
        <Page>
            <Title>404</Title>
            <Message>Sorry, the page you are looking for does not exist.</Message>
            <Button onClick={goToHome}>Go to Home</Button>
        </Page>
    );
}

export default PageNotFound;
