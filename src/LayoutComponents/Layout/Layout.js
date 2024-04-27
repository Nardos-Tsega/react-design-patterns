const Layout = ({children, sidebarWidth, MainContentWidth}) => {
    const [sidebar, mainContent] = children;
    return (
        <div style={{display:'flex'}}>
            <div style={{flex:sidebarWidth}}>{sidebar}</div>
            <div style={{flex:MainContentWidth,height: '100%'}}>{mainContent}</div>
        </div>
    )
}

export default Layout;