import styled from "styled-components/native";
import { Icon } from "../../icon/Icon";
import { theme } from "../../../themes/theme";

interface IconProps {
  color?: string;
}

export const ContainerModal = styled.View`
  position: absolute;
  bottom: 0;
  background-color: ${theme.colors.neutralTheme.white};
  height: 200px;
  width: 100%;

  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding: 16px;
  z-index: 9;

  shadow-color: ${theme.colors.neutralTheme.black};
  shadow-offset: {
    width: 0;
    height: 0;
  }

  shadow-opacity: 1;
  shadow-radius: 1px;
  elevation: 10;

`

export const IconCloseModal = styled(Icon)<IconProps> `
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 10;
  ${(props: {color: any}) => (props.color ? `color: ${props.color};` : '')};
`