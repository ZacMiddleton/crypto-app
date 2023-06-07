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

    &::before {
        content: counter(item) '';
        margin-right: 5px;
    }

    p {
        margin-right: 5px;
    }
`;