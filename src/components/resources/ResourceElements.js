import styled from 'styled-components';

export const Header2 = styled.div`
    font-family: Rubik, sans-serif;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    background-color: black;
    padding: 20px;
    color:  #18a7e4;


`;

export const OutsideDiv = styled.div`
    background-color: black; 
`;

export const ResourceWrapper = styled.div`
    background-color: #16185c;
    width: 900px;
    margin: auto;
    border-bottom: .1px solid #18a7e4;
    border-left: .1px solid #18a7e4;
    border-right: .1px solid #18a7e4;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    
`;

export const ResourceName = styled.div`
    font-size: 24px;
    font-family: Rubik, sans-serif
    text-align: center;
    padding-left: 30px;
    color: #18a7e4
    
    `;

export const Description = styled.div`
    font-size: 16px;
    text-align: center;
    padding: 10px;
    width: 800px;
    justify-content: flex-end;
    color: #18a7e4
`;

export const Image = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 1em;
    padding: 10px;

    `;
