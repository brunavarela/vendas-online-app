import {TextProps as TextPropsNative} from 'react-native/types';
import {ContainerText} from './text.style';
import {textTypes} from './textTypes';
import {useMemo} from 'react';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
  margin?: string;
}

const Text = ({color, margin, type, ...props}: TextProps) => {
  const fontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_BOLD:
      case textTypes.TITLE_SEMIBOLD:
      case textTypes.TITLE_REGULAR:
      case textTypes.TITLE_LIGHT:
        return '24px';
      case textTypes.SUB_TITLE_BOLD:
      case textTypes.SUB_TITLE_SEMIBOLD:
      case textTypes.SUB_TITLE_REGULAR:
      case textTypes.SUB_TITLE_LIGHT:
        return '20px';
      case textTypes.BUTTON_BOLD:
      case textTypes.BUTTON_SEMIBOLD:
      case textTypes.BUTTON_REGULAR:
      case textTypes.BUTTON_LIGHT:
        return '18px';
      case textTypes.PARAGRAPH_SMALL_BOLD:
      case textTypes.PARAGRAPH_SMALL_SEMIBOLD:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
      case textTypes.PARAGRAPH_SMALL_LIGHT:
        return '10px';
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_SEMIBOLD:
      case textTypes.PARAGRAPH_LIGHT:
      default:
      case textTypes.PARAGRAPH_REGULAR:
        return '14px';
    }
  }, [type]);

  const fontFamily = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_BOLD:
      case textTypes.SUB_TITLE_BOLD:
      case textTypes.PARAGRAPH_SMALL_BOLD:
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.BUTTON_BOLD:
        return 'Poppins-Bold';
      default:
        return 'Poppins-Regular';
      case textTypes.TITLE_LIGHT:
      case textTypes.SUB_TITLE_LIGHT:
      case textTypes.PARAGRAPH_SMALL_LIGHT:
      case textTypes.PARAGRAPH_LIGHT:
      case textTypes.BUTTON_LIGHT:
        return 'Poppins-Light';
      case textTypes.TITLE_SEMIBOLD:
      case textTypes.SUB_TITLE_SEMIBOLD:
      case textTypes.PARAGRAPH_SMALL_SEMIBOLD:
      case textTypes.PARAGRAPH_SEMIBOLD:
      case textTypes.BUTTON_SEMIBOLD:
        return 'Poppins-SemiBold';
      case textTypes.TITLE_REGULAR:
      case textTypes.SUB_TITLE_REGULAR:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
      case textTypes.PARAGRAPH_REGULAR:
      case textTypes.BUTTON_REGULAR:
        return 'Poppins-Regular';
    }
  }, [type]);
  return (
    <ContainerText
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      customMargin={margin}
      {...props}
    />
  );
};

export default Text;
