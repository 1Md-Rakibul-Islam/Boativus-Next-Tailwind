// import { Lexend, Poppins, Roboto } from 'next/font/google';
import { Playfair_Display, Barlow, Montserrat } from 'next/font/google';

export const playfair_display = Playfair_Display({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export const barlow = Barlow({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-barlow',
    display: 'swap',
});

export const montserrat = Montserrat({
    weight: ['300', '400', '500', '700', '900'],
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});