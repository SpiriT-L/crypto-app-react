import { Layout } from 'antd';
import AppHeader from './components/layout/AppHeader';
import AppSider from './components/layout/AppSider';

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 7.5rem)',
  color: '#fff',
  backgroundColor: '#001529',
};

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
          <AppSider/ >
          <Layout.Content style={contentStyle}>Content</Layout.Content>
        </Layout>
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
      </Layout>
    </>
  );
}
