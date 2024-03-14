import { AppProps } from 'next/app';

import Analytics from '../components/Analytics'; // Asegúrate de que la ruta sea correcta

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Analytics /> {/* Incluye el componente Analytics */}
    <Component {...pageProps} />
  </>
);

export default MyApp;
