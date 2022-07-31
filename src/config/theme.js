import { ThemeProvider } from "styled-components";

export const theme = {
    background: '#000026',
    primary: '#00b707',
    secondary: '#5231c3',
    text: '#FFF'
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

export default Theme;