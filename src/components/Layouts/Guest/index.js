import Layout from '@/components/Elements/Layout';
import Content from '@/components/Elements/Content';

export default function Guest({ children }) {
    return (
        <>
            <Layout bgGray>
                <Content bgNone heightScreen>
                    {children}
                </Content>
            </Layout>
        </>
    )
}