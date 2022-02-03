import "./styles/App.scss";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import ProfileForm from "./components/ProfileForm";
import UserList from "./components/UserList";
import { DataProvider } from "./utils/dataProvider";

function App() {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<UserList />} />
            <Route path="profile/:userId" element={<ProfileForm />} />
          </Route>
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
