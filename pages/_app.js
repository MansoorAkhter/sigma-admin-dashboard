import Header from '@/components/Header';
import SidebarMenu from '@/components/Sidebar';
import '@/styles/globals.css'
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Public_Sans } from 'next/font/google'

const font = Public_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
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
  )
}
