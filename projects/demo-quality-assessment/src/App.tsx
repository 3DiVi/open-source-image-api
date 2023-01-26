import { ChakraProvider } from '@chakra-ui/react';
import { I18nextProvider } from 'react-i18next';
import { RecoilRoot } from 'recoil';
import { AppRoutes } from './routes';
import theme from './theme/theme';
import i18n from './i18n';

function App() {
  return (
    <RecoilRoot>
      <I18nextProvider i18n={i18n}>
        <ChakraProvider theme={theme}>
          <AppRoutes />
        </ChakraProvider>
      </I18nextProvider>
    </RecoilRoot>
  );
}

export default App;
