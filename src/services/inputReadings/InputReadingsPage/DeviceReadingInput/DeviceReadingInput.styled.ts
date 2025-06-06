import { styled } from "styled-components";

export const DeviceCard = styled.div<{ isError?: boolean }>`
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  border: ${({ isError }) => (isError ? "1px solid #fc525b" : "")};
`;

export const Header = styled.div`
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MountPlace = styled.div`
  color: #000;
  opacity: 0.5;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const ReadingInput = styled.input`
  outline: none;
  width: calc(100% - 20px);
  border-radius: 8px;
  border: none;
  background-color: #f3f5f6;
  padding: 16px 10px;
  font-size: 16px;
`;

export const LastReading = styled.div`
  width: 100%;
  color: var(--label-color-light-primary, #000);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.4px;
`;

export const DeviceSerialNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ResourceWrapper = styled.div`
  transform: scale(0.9);
`;

export const DeviceReadingsInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ReadingsConsumption = styled.div`
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
`;

export const ErrorMessage = styled.div`
  color: #fc525b;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  padding: 4px 8px;
  border-radius: 6px;
  background-color: #fc525a20;
`;
