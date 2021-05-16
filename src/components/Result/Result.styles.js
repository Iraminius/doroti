import styled from "styled-components";

export const ResultWrapper = styled.div`
  margin-bottom: 24px;
  text-align: center;
`;

export const MainResult = styled.h1`
  margin: 0;
`;

export const SubResult = styled.h2`
  margin: 8px 0 0;
  font-size: 14px;
`;

export const Actions = styled.div`
  margin: 32px 0 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media print {
    display: none;
  }
`;

export const ResetButton = styled.button`
  margin-right: 32px;
`;

export const PrintButton = styled.button``;