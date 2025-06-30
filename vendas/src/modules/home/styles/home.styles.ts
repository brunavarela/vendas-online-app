import styled from "styled-components/native";
import { theme } from "../../../shared/themes/theme";



export const HeaderContainer = styled.View`
    align-items: center;
    background-color: ${theme.colors.neutralTheme.white};
`;

export const HeaderLogo = styled.Image `
 width: 140px;
 height: 30px;
 margin: 12px 0px;
`

export const HomeContainer = styled.View`
    padding: 8px;
`;
