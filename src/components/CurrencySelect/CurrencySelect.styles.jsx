import styled, {withTheme} from "styled-components"

export const DropDownWrapper = styled.div`
    position: relative;
    margin: 0 20px;
    height: 100%;
    background-color: ${({theme}) => theme.nav};
    p {
        cursor: pointer;
    }
`

export const DropDownMenu = styled.ul`
    display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
    position: absolute;
    left: -20%;
    top: 100%;
    list-style: none;
    z-index: 1;
    min-width: 50px;
    padding: 0;
    margin: 0 auto;
    background: ${(props) => props.theme.nav};
    li {
        cursor: pointer;
        display: flex;
        justify-content: center;a
    }
`

export const DropDownItem = styled.li`

`