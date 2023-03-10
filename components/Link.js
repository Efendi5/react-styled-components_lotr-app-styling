import Link from "next/link";
import styled from "styled-components";

export default styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: white;
  padding: 4px;
  border-radius: 18px;
  border: 2px solid black;
  background-color: black;
  &:hover {
    background-color: grey;
    border: 2px solid grey;
    color: black;
  }
`;
