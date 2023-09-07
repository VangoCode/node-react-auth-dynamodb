import { Layout, Typography,  } from 'antd';
import { Content, } from 'antd/es/layout/layout';
import TopNavbar from '../components/TopNavbar';
import SideNavbar from '../components/SideNavbar';
import AuthFooter from '../components/AuthFooter';


const About = () => {



    return (
        <Layout>
            <TopNavbar />
            <Content style={{ padding: '0 50px' }}>
                <Layout style={{ padding: '24px 0' }}>
                    <SideNavbar />
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Typography.Title level={1}>
                            About
                        </Typography.Title>
                        <Typography.Title level={4}>
                            this page is hidden behind an auth screen
                        </Typography.Title>
                        
                        
                    </Content>
                </Layout>
            </Content>
            <AuthFooter />
        </Layout>
    );
}

export default About