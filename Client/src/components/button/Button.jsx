import styled from "styled-components";

const Button = ({ children, onClick, ...props }) => {
  return (
    <Btn onClick={onClick} {...props}>
      {children}
    </Btn>
  );
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
  font-weight: bold;

  &:hover {
    background-color: black;
  }
`;
