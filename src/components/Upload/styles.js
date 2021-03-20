import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #32CD32;
`;

const dragReject = css`
  border-color: #A52A2A;
`;

export const DropContainer = styled.div`
  height: 40px;
  border: 1px dashed #C0C0C0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#C0C0C0",
  error: "#A52A2A",
  success: "#32CD32"
};

export const UploadMessage = styled.p`
  display: flex;
  color: ${props => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;
