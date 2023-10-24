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
  background-color: #161360;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  tex-alig: center;
  transition: background-color 0.5s;

  &:hover {
    background-color: #2722d0;
  }
`;
