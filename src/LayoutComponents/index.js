import Layout from "./Layout/Layout";
import MainContent from "./Layout/MainContent";
import Sidebar from "./Layout/Sidebar";

const LayoutComponents = () => {
    return (
        <div>
            <ul>
                <li>Screen layout</li>
                <li>
                    <Layout sidebarWidth={1} MainContentWidth={2} >
                        <Sidebar />
                        <MainContent />
                    </Layout>
                </li>
                <li>
                    <Layout sidebarWidth={2} MainContentWidth={1} >
                        <Sidebar />
                        <MainContent />
                    </Layout>
                </li>
                <li>
                    <Layout sidebarWidth={4} MainContentWidth={6} >
                        <Sidebar />
                        <MainContent />
                    </Layout>
                </li>
            </ul>
            
        </div>
    )
}

export default LayoutComponents;