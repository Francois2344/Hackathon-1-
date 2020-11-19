import React, {Component} from 'react';
import styled from 'styled-components'

const HeaderWrap = styled.div`
height: 6rem;
background-color: rgb(203, 57, 53);
position: fixed;
top: 0;
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
display:flex;
justify-content: center;
border-radius: 0 0 30% 30%;
p{
    color: white;
    font-size: 2rem;
}
`;

class Header extends Component {
    render() {
        return (
            <HeaderWrap>
                <p>SWAPPY SWAPPO</p>
            </HeaderWrap>
        )
}
}

export default Header;