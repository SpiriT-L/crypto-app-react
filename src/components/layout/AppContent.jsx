import { Layout } from 'antd';

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 7.5rem)',
  color: '#fff',
  backgroundColor: '#001529',
  padding: '1rem',
};

export default function AppContent() {
  return <Layout.Content style={contentStyle}>Content</Layout.Content>;
}
