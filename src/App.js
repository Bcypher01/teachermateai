import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Dashboard } from "./components/Dashboard";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
import { TopBar } from "./components/TopBar";
import { useState } from "react";
import CreateTaskForm from "./components/CreateTaskForm";
import EditTaskForm from "./components/EditTaskForm";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div className="w-full">
            {/* Nav bar */}
            <NavBar />
            <div className="flex">
              {/* Side bar */}
              <div
                className={`${
                  !showSidebar && "hidden"
                } min-w-5/12 lg:w-2/12 lg:block`}>
                <SideBar />
              </div>
              {/* Dashboard */}
              <div className="w-full lg:w-10/12 bg-slate-100">
                <TopBar
                  showSidebar={showSidebar}
                  setShowSidebar={setShowSidebar}
                />
                <div className="mt-10 mx-6">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/create-task" element={<CreateTaskForm />} />
                    <Route path="/edit-task/:id" element={<EditTaskForm />} />
                    {/* <Route path="*" element={<NoPage />} /> */}
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
