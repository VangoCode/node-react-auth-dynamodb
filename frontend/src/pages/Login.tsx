import { GoogleOAuthProvider } from '@react-oauth/google';
import { Layout, Typography } from 'antd';
import GoogleLoginButton from '../components/GoogleLoginButton';
import TopNavbar from '../components/TopNavbar';
import { Content } from 'antd/es/layout/layout';
import AuthFooter from '../components/AuthFooter';

const Login = () => {
    return (
        // update your google oauth client id here
        <GoogleOAuthProvider clientId="[YOUR CLIENT ID HERE]">
            <Layout>
                <TopNavbar />
                <Content style={{ padding: '0 50px' }}>
                    <Layout style={{ padding: '24px 0' }}>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Typography.Title level={3}>Welcome to the open source template of my authentication system.</Typography.Title>
                            <GoogleLoginButton></GoogleLoginButton>
                        </Content>
                    </Layout>
                </Content>
                
                <AuthFooter />
                
            </Layout>
        </GoogleOAuthProvider>
    );
}

export default Login