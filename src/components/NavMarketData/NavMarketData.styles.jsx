import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: calc(60% - 40px);
    padding: 0 20px;
    height: 30px;
    justify-content: space-evenly;
    font-size: 12px;
    align-items: center;
    border-radius: 0 0 10px 10px;
    background-color: ${({theme}) => theme.secondary};
    p {
        margin-right: 20px;
        display: flex;
        align-items: center;
    }
`

export const PercentContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        height: 18px;
        margin: ${({Margin}) => Margin};
    }
    p {
        margin-right: 10px;
    }
    div {
        height: 12px;
        width: 60px;
        background: #2172E5;
        border-radius: 10px;
        margin-right: 0px;
    }
    span {
        height: 100%;
        width: ${({Percentage}) => Percentage}%;
        background: ${({theme}) => theme.text};
        z-index: 1;
        border-radius: 10px;
        display: block;
    }
`

export const Dot = styled.span`
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: ${({theme}) => theme.text};
`