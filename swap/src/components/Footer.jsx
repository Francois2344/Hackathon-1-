import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Knight from './pictos/Knight.svg';
import Pannier from './pictos/panier.png';

const FooterWrap = styled.div`
height: 3rem;
background-color: rgb(203, 57, 53);
position: fixed;
bottom: 0;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const FooterAccount = styled.div`
margin-left:2rem;
background-color:white;
height:40px;
width:40px;
border-radius:50%;
img{
    height:40px;
    object-fit: fit-content;
}
`;


const BasketWrap = styled.div`
height: 40px;
width: 40px;
border-radius: 50%;
background-color: white;
margin-right: 2rem;
display: flex;
align-items:center;
justify-content:center;
box-shadow: 2px 2px 2px rgba(81,90,90, .4);
img{ 
    height: 30px;
    object-fit: fit-content;
}
`;

class Footer extends Component {
render() {
    return (
        <FooterWrap>
            <Link to='/Account'><FooterAccount>
            <img src= {Knight} alt='profile logo'/>
            </FooterAccount></Link>
            
            <BasketWrap>
            <img src= {Pannier} alt='pannier' />
            </BasketWrap>
        </FooterWrap>
    )
}
}


export default Footer;
