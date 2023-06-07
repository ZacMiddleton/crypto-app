import styled from 'styled-components';

export const StyledList = styled.ol`
    img {
        height: 20px;
    }
    counter-reset: item;
`;

export const ListItem = styled.li`
    display: flex;
    margin: 10px 0;
    counter-increment: item;
    align-items: center;

    &::before {
        content: counter(item) '';
        margin-right: 5px;
    }

    p {
        margin-right: 5px;
    }

    div {
        height: 80px;
        width: 125px;
    }
`;