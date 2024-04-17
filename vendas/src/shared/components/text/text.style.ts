import styled from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  fontSize: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular';
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props: {color: any}) => (props.color ? `color: ${props.color}` : '')};

  font-size: ${(props: {fontSize: any}) => props.fontSize};
  font-family: ${(props: {fontFamily: any}) => props.fontFamily};
`;
