import Layout from "./Layout/Layout";
import MainContent from "./Layout/MainContent";
import Sidebar from "./Layout/Sidebar";
import MainList from "./List/MainList";
import HiddenAuthor from "./List/authors/HiddenAuthor";
import HiddenBook from "./List/books/HiddenBook";
import { authors } from "./List/data/authors";
import { books } from "./List/data/books";

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
                <li>List items</li>
               <li>
                <MainList items={books} sourceName={'book'} ItemComponent={HiddenBook} />
               </li>
               <li>
                <MainList items={authors} sourceName={'author'} ItemComponent={HiddenAuthor} />
               </li>
            </ul>
            
        </div>
    )
}

export default LayoutComponents;