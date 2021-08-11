import { ThemeProvider } from '@material-ui/core';
import { render } from '@testing-library/react';
import theme from '../theme/theme';

export const customRender = children =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export * from '@testing-library/react';
export { customRender as render };
