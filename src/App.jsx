import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { ConfigProvider } from "antd";

import { publicRouters, privateRouters } from "./routers";
import DefaultLayout from "./layouts/DefaultLayout";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  const isAdmin = false;

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Roboto, sans-serif",
        },
      }}
    >
      <Router>
        <div className="App">
          <Routes>
            {isAdmin
              ? privateRouters.map((route, index) => {
                  const Page = route.component;

                  let LayoutPrivate = AdminLayout;

                  if (route.layout) {
                    LayoutPrivate = route.layout;
                  } else if (route.layout === null) {
                    LayoutPrivate = Fragment;
                  }

                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <LayoutPrivate>
                          <Page />
                        </LayoutPrivate>
                      }
                    />
                  );
                })
              : publicRouters.map((route, index) => {
                  const Page = route.component;

                  let LayoutPublic = DefaultLayout;

                  if (route.layout) {
                    LayoutPublic = route.layout;
                  } else if (route.layout === null) {
                    LayoutPublic = Fragment;
                  }

                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <LayoutPublic>
                          <Page />
                        </LayoutPublic>
                      }
                    />
                  );
                })}
          </Routes>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;
