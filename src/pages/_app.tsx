import * as i from 'types';
import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { type DehydratedState, Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer, Slide } from 'react-toastify';
import { SessionProvider } from 'next-auth/react';

import GlobalStyle from 'styles';
import theme from 'styles/theme';
import 'react-toastify/dist/ReactToastify.min.css';

const App: React.VFC<Props> = ({
  Component,
  pageProps: { state, session, ...pageProps },
}) => {
  const [isMounted, setIsMounted] = React.useState(false);

  // This ensures that data is not shared between different users and requests,
  // while still only creating the QueryClient once per component lifecycle.
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000, // 30 seconds
        cacheTime: 1000 * 6 * 10, // 10 minutes
        retry: false,
        notifyOnChangeProps: 'tracked',
      },
    },
  }));

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Enable CSR and prevent hydration issues
  if (!isMounted) {
    return null;
  }

  const getLayout = Component.layout || ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" sizes="192x192" href="/favicon.ico" />
      </Head>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        pauseOnHover
        draggable={false}
        transition={Slide}
        limit={3}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Hydrate state={state}>
            <SessionProvider session={session}>
              {getLayout(<Component {...pageProps} />)}
            </SessionProvider>
          </Hydrate>
          <ReactQueryDevtools position="bottom-right" />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

type Props = Omit<AppProps, 'pageProps'> & {
  pageProps: i.AnyObject & {
    state: DehydratedState;
    session: i.Session;
  };
  Component: i.NextPageComponent;
};

export default App;
