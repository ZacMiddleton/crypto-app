import styled from "styled-components";

export const Container = styled.div`
    height: 240px;
    width: 100%;
    h1 {
        font-weight: 500;
    }
`

export const ChartWrapper = styled.div`
    width: calc(50% - 35px);
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => {
        return props.theme.secondary;
    }};
    padding: 30px 10px;
    border-radius: 20px;
`