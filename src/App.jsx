import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ApplyLeavePage from "./pages/ApplyLeavePage";
import LeaveHistoryPage from "./pages/LeaveHistoryPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<LoginPage />}
                />

                <Route
                    path="/dashboard"
                    element={<DashboardPage />}
                />
                <Route
    path="/apply-leave"
    element={<ApplyLeavePage />}
/>
                <Route
    path="/leave-history"
    element={<LeaveHistoryPage />}
/>
<Route
    path="/profile"
    element={<ProfilePage />}
/>
            </Routes>
            
        </BrowserRouter>
    );
}

export default App;