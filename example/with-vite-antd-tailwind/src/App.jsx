import { Layout, Menu, Tag } from "antd";
import React, { useEffect, useState } from "react";

import Donate from "components/Donate";
import Header from "components/Header";
import Loading from "components/Loading";
import { GetHash, ReplaceHash } from "utils/function";
import "./App.css?inline";

const AdvancedGuide = React.lazy(() => import("components/AdvancedGuide.jsx"));
const Basic = React.lazy(() => import("components/Basic.jsx"));
const EasyForm = React.lazy(() => import("components/EasyForm.jsx"));
const GetStarted = React.lazy(() => import("components/GetStarted.jsx"));

const { Content, Sider } = Layout;
const items = [
  {
    key: "get_started",
    label: "Get Started",
  },
  {
    key: "basic",
    label: "Basic/Default view",
  },
  {
    key: "form",
    label: "With Ant Design Form",
  },
  {
    key: "advanced",
    label: "Advanced Guide",
  },
  {
    key: "donate",
    label: (
      <div className="flex justify-between">
        <span>Donate</span>
        <Tag className="h-fit self-center leading-snug" color="#ff0000">
          NEW
        </Tag>
      </div>
    ),
  },
];
const renderItem = {
  get_started: <GetStarted />,
  basic: <Basic />,
  form: <EasyForm />,
  advanced: <AdvancedGuide />,
  donate: <Donate />,
};

const App = () => {
  const [menuSelect, setMenuSelect] = useState(["get_started"]);

  useEffect(() => {
    const hash = GetHash();
    if (hash) setMenuSelect([hash.replace("#", "")]);
  }, []);

  return (
    <Layout
      hasSider
      style={{
        backgroundColor: "transparent",
      }}
    >
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <div
          name="menuLogo"
          className="h-8 m-4 bg-white/30 flex justify-center items-center"
        >
          <a
            href="https://github.com/buildingwatsize/thaidatepicker-react"
            className="flex items-center gap-2 text-black"
          >
            <svg viewBox="0 0 16 16" version="1.1" height="24">
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            <div>buildingwatsize</div>
          </a>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          selectedKeys={menuSelect}
          onSelect={(select) => {
            ReplaceHash(`#${select.key}`);
            setMenuSelect([select.key]);
          }}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
          backgroundColor: "transparent",
        }}
      >
        <Content
          style={{
            padding: "24px 16px 0",
            overflow: "initial",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            zIndex: 0,
          }}
        >
          <Header
            title={import.meta.env["VITE_PROJECT_NAME"]}
            className="!mb-0 !mt-4"
          />
          <div className="text-p px-8 pt-4 pb-8 relative flex-1">
            <React.Suspense fallback={<Loading />}>
              {renderItem[menuSelect[0]]}
            </React.Suspense>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
