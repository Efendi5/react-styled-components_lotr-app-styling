import styled from "styled-components";

export const StyledList = styled.ul`
  list-style-type: none;
`;
export const StyledListItem = styled.li`
margin: 20px;
padding: 4px;
border-radius: 18px;
&:hover {
  background-color: grey;
  border: 2px solid grey;
  color: black;
`;
export const StyledHeading = styled.h1`
  text-decoration: underline;
`;
export const StyledParagraph = styled.p`
  padding: 1rem;
  word-spacing: 0.2rem;
  line-height: 1.5;
  border: 2px solid black;
`;
