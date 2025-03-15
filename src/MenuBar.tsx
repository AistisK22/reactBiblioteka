import { useState } from "react";

export interface MenuItem {
  label: string;
  link?: string;
  submenu?: MenuItem[];
}

export interface MenuBarProps {
  rounded?: boolean;
  shadow?: boolean;
  items: MenuItem[];
  color?: string;
  textColor?: string;
}

const MenuBar = ({
  rounded,
  items,
  shadow,
  color = "007bff",
  textColor = "white",
}: MenuBarProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav
      style={{
        borderRadius: rounded ? "16px" : "0px",
        boxShadow: shadow
          ? "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          : "none",
        backgroundColor: color,
        color: textColor,
      }}
      className="menu-bar"
    >
      <ul className="menu-list">
        {items.map((item) => (
          <li
            key={item.label}
            className="menu-item"
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={item.link || "#"} className="menu-link">
              {item.label}
            </a>
            {item.submenu && activeMenu === item.label && (
              <ul className="submenu">
                {item.submenu.map((subItem) => (
                  <li key={subItem.label} className="submenu-item">
                    <a href={subItem.link || "#"} className="submenu-link">
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuBar;
