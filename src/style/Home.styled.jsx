import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 400px;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Section = styled.div`
    padding-top: 100px;
`;
export { Title, Wrapper, Button, Section };
