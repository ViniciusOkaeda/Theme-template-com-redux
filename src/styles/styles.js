import styled from "styled-components";

export const Title = styled.h1``;


export const StyledDiv = styled.div`
    color: ${(props) => props.theme.div.texto};
    width: 300px;
    height: 300px;
    background: ${(props) => props.theme.div.background};
    box-shadow: ${(props) => props.theme.div.boxShadow}
`;