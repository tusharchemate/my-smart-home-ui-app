import React from "react";
import "./common.css";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const items = [
  {
    key: "home",
    icon: <MailOutlined />,
    label: "Home",
  },
  {
    key: "products",
    icon: <AppstoreOutlined />,
    label: "Products",
  },
  {
    key: "consultation",
    label: "Consultation",
    icon: <SettingOutlined />,
  },
];

const LeftSidebar = () => {
  return (
    <div>
      {items?.map((item) => (
        <Link className="link" to={`/${item.key}`}>
          {item?.label}{" "}
        </Link>
      ))}
    </div>
  );
};

export default LeftSidebar;
