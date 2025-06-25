import { fireEvent, render, screen } from "@testing-library/react-native";
import GlobalModal from "../GlobalModal";
import { globalModalTestId } from "../__mocks__/globalModal.testid";
import { ReactNode } from "react";
import { View as MockView } from 'react-native';
import { useGlobalReducer } from "../../../../../store/reducers/globalReducer/useGlobalReducer";
import { modalTestId } from "../../__mocks__/modal.testid";

const mockModal = {
    title:'mockTitle',
    text: 'mockText',
    visible: true,
};

const mockCloseModal = jest.fn()

jest.mock('react-native-linear-gradient', () => {
  return ({ children }: { children: ReactNode }) => {
    return <MockView>{children}</MockView>;
  };
});

jest.mock('../../../../../store/reducers/globalReducer/useGlobalReducer', () => ({
    useGlobalReducer: () => ({
    modal: mockModal,
    closeModal: mockCloseModal
   }),
}));

describe('GlobalModal', () => {

  beforeEach(() => {
    render( <GlobalModal />,);
  });

  it('should render success', () => {
    const globalModal = screen.getByTestId(globalModalTestId.GLOBAL_MODAL_CONTAINER);

    expect(globalModal).toBeDefined();
  });

  it('should close modal', () => {
    const buttonClose = screen.getByTestId(modalTestId.MODAL_CLOSE_BUTTON);

    fireEvent.press(buttonClose);

    expect(mockCloseModal).toHaveBeenCalled;
  });

  it('should render text', () => {
      const text = screen.getByText(mockModal.text);
  
      expect(text).toBeDefined();
  });

  it('should render title', () => {
      const title = screen.getByText(mockModal.title);
  
      expect(title).toBeDefined();
  });
});