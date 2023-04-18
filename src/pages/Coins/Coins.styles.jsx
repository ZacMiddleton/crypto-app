import styled, {withTheme} from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BtcChartWrapper = styled.div `
    display: flex;
    width: calc(100% - 108px);
    color: ${(props) => {
        return props.theme.text;
    }};
    justify-content: space-between;
    margin: 40px 0 80px 0;
`