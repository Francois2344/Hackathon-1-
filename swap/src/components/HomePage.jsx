import React from 'react';
import Footer from './Footer';
import HomeButton from './HomeButton';
import styled from 'styled-components';
import Header from './Header';

const HomeWrapper = styled.div`
display: flex;
flex-direction: column;
align-content: center;
`;

const HomePage = () => {
    return (
        <HomeWrapper>
            <Header />
            <HomeButton />
            <Footer />
        </HomeWrapper>
    )
    }

export default HomePage;