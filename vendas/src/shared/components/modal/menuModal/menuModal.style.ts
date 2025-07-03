import styled from "styled-components/native";
import { theme } from "../../../themes/theme";

export const ContainerMenuModal = styled.View`
    background-color: ${theme.colors.neutralTheme.white};
    position: absolute;
    width: 100%;
    top: 55.4px;
    height: 100%;
    padding: 16px;
`

export const ListContent = styled.View`
    padding-bottom: 16px;
    border-bottom-width: .5px;
    border-bottom-color: ${theme.colors.grayTheme.gray80};
`

export const ViewCloseMenuModal = styled.View`
    background-color: rebeccapurple;
    width: 100%;
    height: auto;
    position: absolute;
    top: -3px;
`