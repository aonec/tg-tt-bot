import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const ChevronWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  border: 2px solid #007aff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  width: 100%;
  max-width: 370px;
  color: var(--label-color-light-primary, #000);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const Description = styled.div`
  color: #000;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  max-width: 343px;
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 36px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
