import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import OnBoarding from './pages/OnBoarding';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const App = () => {
    // Get cookies
    const [cookies] = useCookies(['user']);
    const authToken = cookies.AuthToken;

    return (
        <BrowserRouter>
            <Routes>
                {/* Route for the Home page */}
                <Route path="/" element={<Home />} />

                {/* Conditional rendering based on authentication token */}
                {authToken && <Route path="/dashboard" element={<Dashboard />} />}
                {authToken && <Route path="/onboarding" element={<OnBoarding />} />}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
