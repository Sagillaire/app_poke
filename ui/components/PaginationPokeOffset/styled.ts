import styled from 'styled-components';

export const PaginationContainer = styled.div`
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonPage = styled.button`
    color: brown;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    padding: 2px 10px;
    border-radius: 5px;
    background-color: #FFD585;

    :disabled {
        color: #8C8C8C;
        background-color: #E5E5E5;
        :hover {
            cursor: not-allowed;
            background-color: #E5E5E5;
        }
    }

    :hover {
        background-color: #FFC048;
    }
`;