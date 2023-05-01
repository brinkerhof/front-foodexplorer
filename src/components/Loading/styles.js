import styled, { keyframes } from "styled-components";
import { FiRefreshCcw } from "react-icons/fi";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const RotatingIcon = styled(FiRefreshCcw)`
  size: 50;
  animation: ${spin} 2s linear infinite;
`;
