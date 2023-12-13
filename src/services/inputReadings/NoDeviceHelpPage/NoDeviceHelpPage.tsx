import { FC, useCallback, useEffect } from "react";
import {
  ChevronWrapper,
  Wrapper,
  Text,
  Description,
  PhoneNumber,
} from "./NoDeviceHelpPage.styled";
import { Props } from "./NoDeviceHelpPage.types";
import { PhoneIcon } from "@/components/icons/Phone";
import { useNavigate } from "react-router-dom";

export const NoDeviceHelpPage: FC<Props> = () => {
  const navigate = useNavigate();

  const goBack = useCallback(() => navigate("/"), [navigate]);

  useEffect(() => {
    const btn = Telegram.WebApp.MainButton;

    btn.text = "Вернуться в главное меню";
    btn.show();
    btn.enable();
    btn.onClick(goBack);
    btn.color = "#007AFF";

    return () => {
      btn.offClick(goBack);
      btn.hide();
    };
  }, [goBack]);

  return (
    <Wrapper>
      <ChevronWrapper>
        <PhoneIcon />
      </ChevronWrapper>
      <Text>Обратитесь в нашу службу поддержки!</Text>
      <Description>
        Позвоните нам для вызова контролера или добавления нового счетчика к
        расчету.
      </Description>
      <PhoneNumber>☎️ Номер телефона 43-08-88</PhoneNumber>
    </Wrapper>
  );
};