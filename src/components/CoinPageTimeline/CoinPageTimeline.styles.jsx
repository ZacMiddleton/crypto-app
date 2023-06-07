import styled from "styled-components";

export const TimelineWrapper = styled.div`
    height: 30px;
    width: 521px;
    display: flex;
    margin: 0 auto;
    margin-bottom: 40px;
    padding: 0;
    border: 1px solid ${({theme}) => theme.tertiary};
    border-radius: 5px;
    overflow: hidden;
`

export const TimeContainer = styled.div`
    height: 100%;
    width: 12.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme, isFocused}) => isFocused ? `#03E858` : theme.text};
    background-color: ${({theme, backgroundColor}) => theme[backgroundColor]};
    border-right: 1px solid ${({theme}) => theme.tertiary};
    cursor: pointer;

    &:last-child {
        border-right: none;
    }

    &:hover {
        background-color: ${({theme}) => theme.nav};
    }
`