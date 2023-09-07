import { LogoutOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import MenuItem from "antd/es/menu/MenuItem";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

const SideNavbar = () => {
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
      ): MenuItem {
        return {
          key,
          icon,
          children,
          label,
          type,
        } as MenuItem;
      }

    const sideNavbarItems : MenuProps['items'] = [
        getItem((<Link to={"/dashboard"}>dashboard</Link>), 'dashboard'),
        getItem(<Link to={"/about"}>about</Link>, 'about'), 
        {type: 'divider'},
        getItem((<Link to={"/logout"}>logout</Link>), 'Logout', <LogoutOutlined />)
      ]

    return (
        <Sider width={200}>
        <Menu 
            mode="inline"
            defaultSelectedKeys={[window.location.pathname.slice(1)]}
            defaultOpenKeys={['test']}
            style={{ height: '100%' }}
            items={sideNavbarItems}
        />
    </Sider>
    )
}

export default SideNavbar;