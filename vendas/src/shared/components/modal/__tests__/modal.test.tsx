import { render, screen, fireEvent } from '@testing-library/react-native';
import Modal from '../generalModal/Modal';
import { modalTestId } from '../__mocks__/modal.testid';
import { View as MockView } from 'react-native';
import { ReactNode } from 'react';

const mockTitle = 'mockTitle';
const mockText = 'mockText';
const mockOnClose = jest.fn();

jest.mock('react-native-linear-gradient', () => {
  return ({ children }: { children: ReactNode }) => {
    return <MockView>{children}</MockView>;
  };
});

describe('Modal', () => {

  beforeEach(() => {
    render(
        <Modal 
            title={mockTitle}
            text={mockText}
            onCloseModal={mockOnClose}
            testID={modalTestId.MODAL_CONTAINER}
        />,
    );
  });

  it('should render success', () => {
    const modal = screen.getByTestId(modalTestId.MODAL_CONTAINER);

    expect(modal).toBeDefined();
  });

  it('should render title', () => {
    const title = screen.getByText(mockTitle);

    expect(title).toBeDefined();
  });

  it('should render button and onPress', () => {
    const button = screen.getByTestId(modalTestId.MODAL_CLOSE_BUTTON)

    expect(button).toBeDefined();

    fireEvent.press(button);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should render icon and onPress', () => {
    const icon = screen.getByTestId(modalTestId.MODAL_CLOSE_ICON)

    expect(icon).toBeDefined();

    fireEvent.press(icon);

    expect(mockOnClose).toHaveBeenCalled();
  });

});