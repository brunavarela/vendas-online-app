// Importações do testing-library/react-native
import { render, screen, fireEvent } from '@testing-library/react-native';

// Importa o componente que vamos testar
import Button from '../Button';

// Importa o View do react-native e renomeia pra MockView (pra evitar conflitos)
import { View as MockView } from 'react-native';

// Importa o tipo ReactNode pra tipar corretamente o mock do LinearGradient
import { ReactNode } from 'react';
import { buttonTestId } from '../__mocks__/button.testid';

// Mock do react-native-linear-gradient
// Substitui o componente pelo View básico, ignorando o estilo de gradiente 
// (se nao fizer isso, gera erro de gradiente no teste)
jest.mock('react-native-linear-gradient', () => {
  return ({ children }: { children: ReactNode }) => {
    return <MockView>{children}</MockView>;
  };
});

// Cria uma função mockada que simula o comportamento do onPress do botão
const mockOnPress = jest.fn();

// Início da suíte de testes do componente <Button />
describe('Button', () => {

  // Antes de cada teste, renderiza o botão com título, testID e função onPress simulada
  beforeEach(() => {
    render(
      <Button 
        title='Test' 
        testID={buttonTestId.BUTTON_TEST_ID} 
        onPress={mockOnPress} 
      />
    );
  });

  // Primeiro teste: verifica se o botão foi renderizado com sucesso
  it('should render button success', () => {
    // Pega o botão pelo testID
    const button = screen.getByTestId(buttonTestId.BUTTON_TEST_ID);

    // Verifica se ele está definido (ou seja, existe na árvore de render)
    expect(button).toBeDefined();
  });

  // Segundo teste: verifica se o onPress foi chamado ao clicar no botão
  it('should call onPress', () => {
    // Seleciona o botão pelo testID
    const button = screen.getByTestId(buttonTestId.BUTTON_TEST_ID);

    // Dispara o evento de clique (simula o usuário apertando)
    fireEvent.press(button);

    // Espera que a função mockada tenha sido chamada
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('should hide loading', () => {
    const loading = screen.queryAllByTestId(buttonTestId.BUTTON_LOADING)

    expect(loading.length).toEqual(0);
  });

  it('should render loading', () => {
    render(
      <Button 
        title='Test' 
        testID={buttonTestId.BUTTON_TEST_ID} 
        onPress={mockOnPress} 
        loading
      />
    );

    const loading = screen.queryAllByTestId(buttonTestId.BUTTON_LOADING);

    expect(loading.length).toEqual(1);
  });
});
