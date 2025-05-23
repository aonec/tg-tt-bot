import { FC } from "react";
import { ActionLinkProps } from "./ActionLink.types";
import {
  ChevronWrapper,
  Description,
  Title,
  Wrapper,
} from "./ActionLink.styled";
import { ChevronRightWhite } from "../icons/ChevronRightWhite";

export const ActionLink: FC<ActionLinkProps> = ({
  title,
  description,
  path,
}) => {
  return (
    <Wrapper to={path}>
      <Title>
        {title}
        {description && <Description>{description}</Description>}
      </Title>
      <ChevronWrapper>
        <ChevronRightWhite />
      </ChevronWrapper>
    </Wrapper>
  );
};
