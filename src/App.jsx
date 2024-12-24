import { Layout } from 'antd';
import AppHeader from './components/layout/AppHeader';

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 7.5rem)',
  color: '#fff',
  backgroundColor: '#001529',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
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
          <Layout.Sider width='25%' style={siderStyle}>
            Sider
          </Layout.Sider>
          <Layout.Content style={contentStyle}>Content</Layout.Content>
        </Layout>
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
      </Layout>
    </>
  );
}
