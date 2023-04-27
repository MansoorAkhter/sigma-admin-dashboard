import Header from '@/components/Header';
import SidebarMenu from '@/components/Sidebar';
import '@/styles/globals.css'
import { ProSidebarProvider } from 'react-pro-sidebar';


export default function App({ Component, pageProps }) {
  return (
    <ProSidebarProvider>
      <div className="flex relative w-full h-full m-0 p-0">
        <SidebarMenu />
        <main className='w-full h-full'>
          <Header />
          <Component {...pageProps} />
        </main>
      </div>
    </ProSidebarProvider>
  )
}
