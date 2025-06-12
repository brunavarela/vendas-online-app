import styled from "styled-components/native";

interface DisplayProps {
  customMargin?: string;
};

export const DisplayFlexColumn = styled.View<DisplayProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin: ${(props: any) => props.customMargin ? props.customMargin : '0px'};
`;

export const FlexBetweenRow = styled.View`
  display: flex;
  justify-content: space-between;
`;

