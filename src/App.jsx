import { Layout } from 'antd';
import AppHeader from './components/layout/AppHeader';
import AppSider from './components/layout/AppSider';
import AppContent from './components/layout/AppContent';

const footerStyle = {
  textAlign: 'center',
  height: 60,
  color: '#fff',
  backgroundColor: '#4096ff',
};

export default function App() {
  return (
    <>
      <Layout>
        <AppHeader />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
      </Layout>
    </>
  );
}
