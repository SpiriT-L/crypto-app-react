import { Layout } from 'antd';
import AppContent from './components/layout/AppContent';
import AppFooter from './components/layout/AppFooter';
import AppHeader from './components/layout/AppHeader';
import AppSidebar from './components/layout/AppSidebar';
import { CryptoContextProvider } from './context/crypto-context';

export default function App() {
  return (
    <>
      <CryptoContextProvider>
        <Layout>
          <AppHeader />
          <Layout>
            <AppSidebar />
            <AppContent />
          </Layout>
          <AppFooter />
        </Layout>
      </CryptoContextProvider>
    </>
  );
}
