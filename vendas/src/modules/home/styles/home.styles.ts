import styled from "styled-components/native";
import { theme } from "../../../shared/themes/theme";

export const HomeContainer = styled.View`
    flex: 1;
`;

export const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 16px;
    align-items: center;
    background-color: ${theme.colors.neutralTheme.white};
`;

export const HeaderLogo = styled.Image `
    width: 140px;
    height: 30px;
    margin: 12px 0px;
`

export const SearchContainer = styled.View`
    padding: 8px 16px;
`;

export const CategoryProductsScrollView = styled.ScrollView`
    padding: 0 8px;
`;