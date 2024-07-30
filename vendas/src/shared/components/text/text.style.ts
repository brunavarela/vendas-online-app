import styled from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  customMargin?:string
  fontSize: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-SemiBold' | 'Poppins-Light' | 'Poppins-Regular';
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props: {color: any}) => (props.color ? `color: ${props.color};` : '')};
  ${(props: {customMargin: any}) => (props.customMargin ? `margin: ${props.customMargin};` : '')};

  font-size: ${(props: {fontSize: any}) => props.fontSize};
  font-family: ${(props: {fontFamily: any}) => props.fontFamily};
`;
