import styled from "styled-components";

export const PortfolioContainer = styled.div`
    max-width: calc(100% - 108px);
    margin: 0 auto;
    background ${({theme}) => theme.primary};
    display: flex;
    justify-content: center;
`
export const AssetButton = styled.button`
    background-color: #06D554;
    width: 35%;
    height: 53px;
    color: ${({theme}) => theme.text};
    border: none;
    margin 80px auto;
    border-radius: 10px;
    cursor: pointer;
    font-size: 18px;

    &:active {
        transform: scale(0.98);
    }

    &:hover {
        border: 2px solid ${({theme}) => theme.text};
    }

    &:focus {
        outline: none;
    }
`;

export const StyledDialog = styled.dialog`
    position: fixed;
    width: 35%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
    padding: 1em;
    background: ${({theme}) => theme.nav};
    color: ${({theme}) => theme.text};
    border-radius: 10px;

    &::backdrop {
        background: rgba(0, 0, 0, 0.5);
    }

    &:focus {
        outline: none;
    }
`;

export const DialogContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const SelectionWrapper = styled.div`
    display: flex;
`

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledButton = styled.button `
    width 25%;
    background-color: #06D554;
    padding: 10px 0;
    border: none;
    margin: 10px;
    border-radius: 10px;
    color: ${({theme}) => theme.text};
    cursor: pointer;

    &:hover {
        background: ${({theme}) => theme.text};
        color: #06D554;
    }

    &:focus {
        outline: none;
    }
`