import styled from "styled-components";

const Button = ({ children, ...props }) => {
  return <Btn {...props}>{children}</Btn>;
};

export default Button;

const Btn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-color: transparent;
  background-color: #178a00c2;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`;
