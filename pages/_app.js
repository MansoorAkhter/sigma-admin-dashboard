import '@/styles/globals.css'
import Header from '@/components/Header';
import SidebarMenu from '@/components/Sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Public_Sans } from 'next/font/google'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const font = Public_Sans({ subsets: ['latin'] });

const theme = createTheme({
  palette: {
    primary: {
      main: '#696CFF'
    }
  }
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ProSidebarProvider>
        <main className={font.className}>
          <div className="flex relative w-full h-full m-0 p-0">
            <SidebarMenu />
            <main className='w-full h-full'>
              <Header />
              <Component {...pageProps} />
            </main>
          </div>
        </main>
      </ProSidebarProvider>
    </ThemeProvider>

  )
}
