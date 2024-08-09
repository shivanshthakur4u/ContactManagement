import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Contacts from "./pages/Contacts";
import ChartAndMaps from "./pages/ChartAndMaps";
import { useState } from "react";
import Header from "./components/Header";
import ContactDetails from "./components/ContactDetails";

function App() {
  const [open, setOpen] = useState(true);

  // Component to get the current page title based on the current route
  const PageTitle: React.FC = () => {
    const location = useLocation();
    const path = location.pathname;

    // Defining page titles based on path names
    const titleMap: Record<string, string> = {
      "/": "Contacts",
      "/charts-and-maps": "Charts and Maps",
      "/contacts/:id":"Contact Details"
    };
    // handling dynamic path
    let title = titleMap[path];
    if (!title) {
      if (path.startsWith("/contacts")) {
        title = "Contact Details";
      } else {
        title = "Dashboard";
      }
    }
    return <Header title={title} />;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 z-50">
          <PageTitle />
        </header>

        <div className="flex flex-grow pt-16 overflow-hidden">
          <Sidebar open={open} setOpen={setOpen} />
          <main
            className={`${
              open ? "lg:ml-72 max-sm:ml-16" : "ml-16"
            } w-full duration-500 overflow-y-auto lg:p-4 p-0`}
          >
            <Routes>
              <Route path="/" element={<Contacts />} />
              <Route path="/contacts/:id" element={<ContactDetails />} />
              <Route path="/charts-and-maps" element={<ChartAndMaps />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
