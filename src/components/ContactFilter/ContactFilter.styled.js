import styled from 'styled-components';

export const InputFilter = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  padding: 4px 4px 4px 8px;
  border-radius: 4px;
  outline: none;
  border: none;
  margin: 10px auto;
  background-color: #40e0d0;

  &:focus {
    background-color: #00ff7f;
  }
`;
