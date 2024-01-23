import { Chakra_Petch, Montserrat, Poppins } from 'next/font/google';

export const chakra_petch = Chakra_Petch({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-chakra_petch',
    display: 'swap',
});

export const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
});

export const montserrat = Montserrat({
    weight: ['300', '400', '500', '700', '900'],
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});