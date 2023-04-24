import styled from 'styled-components';

type TCardContainer = {
    bgColor?: string;
}
export const CardContainer = styled.div<TCardContainer>`
    gap: 10px;
    width: 300px;
    color: brown;
    margin: 0 auto;
    height: 200px;
    display: flex;
    cursor: pointer;
    transition: .3s;
    overflow: hidden;
    position: relative;
    border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    outline: 2px solid #FFC048;
    box-shadow: 0px 0px 14px 7px rgba(255,192,72,0.4);
    -moz-box-shadow: 0px 0px 14px 7px rgba(255,192,72,0.4);
    -webkit-box-shadow: 0px 0px 14px 7px rgba(255,192,72,0.4);
    :hover {
        > span {
            height: 40px;
            padding: 5px 20px;
        }
    }
`;

export const CardSelection = styled.span`
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0px;
    color: white;
    display: flex;
    transition: .3s;
    font-size: 1.3em;
    overflow: hidden;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: #FFC048;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;