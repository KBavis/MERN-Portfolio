import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const MenuLink = ({ icon, to }) => (
  <MenuItem
    linkButton={true}
    onClick={() => openInNewTab(to)}
    className="menu-item"
    id="menu-item"
    icon={icon}
  ></MenuItem>
);

const MySidebar = () => (
  <div id="sidebar">
    <Sidebar>
      <Menu className="menu" id="menu">
        <MenuLink
          icon={<FaLinkedin />}
          to="https://www.linkedin.com/in/kellen-bavis-8b8108236/"
        ></MenuLink>
        <MenuLink icon={<FaGithub />} to="https://github.com/KBavis"></MenuLink>
        <MenuLink
          icon={<FaInstagramSquare />}
          to="https://www.instagram.com/kellenbav/"
        ></MenuLink>
      </Menu>
    </Sidebar>
  </div>
);

export default MySidebar;
