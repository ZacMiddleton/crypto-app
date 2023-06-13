import styled from 'styled-components';

export const StyledList = styled.ul`
    position: absolute;
    height: 200px;
    width: 200px;
    z-index: 1;
    top: 50px;
    color: ${({theme}) => theme.text};
    background: ${({theme}) => theme.nav};
`