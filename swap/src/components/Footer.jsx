import React, {Component} from 'react';
import styled from 'styled-components';

const FooterWrap = styled.div`
height: 3rem;
background-color: rgb(203, 57, 53);
position: fixed;
bottom:0;
width:100%;
display:flex;
justify-content:flex-end;
align-items:center;
`;


const BasketWrap = styled.div`
height:60%;
width: 20vw;
background-color: white;
margin-right: 2rem;
display: flex;
align-items:center;
justify-content:center;
box-shadow: 2px 2px 2px rgba(81,90,90, .4);
p{ 
    align-items: center;
}
`;

class Footer extends Component {
render() {
    return (
        <FooterWrap>
            <BasketWrap>
                <p>Basket</p>
            </BasketWrap>
        </FooterWrap>
    )
}
}


export default Footer;
