import { Layout } from 'antd';
import AppContent from './components/layout/AppContent';
import AppFooter from './components/layout/AppFooter';
import AppHeader from './components/layout/AppHeader';
import AppSidebar from './components/layout/AppSidebar';

export default function App() {
  return (
    <>
      <Layout>
        <AppHeader />
        <Layout>
          <AppSidebar />
          <AppContent />
        </Layout>
        <AppFooter />
      </Layout>
    </>
  );
}
