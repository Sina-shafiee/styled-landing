import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');

    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        background-color: ${({ theme }) => theme.colors.body};
        color: #333;
        font-size: 1.1rem;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
        font-size: 1rem;
    }
`;

export default GlobalStyles;
