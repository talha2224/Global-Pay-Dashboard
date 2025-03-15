
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import LoaderGif from './assets/loader.gif';
import Profile from './pages/Dashboard/Profile';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LoadScript } from '@react-google-maps/api';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminVerificationPage from './pages/Admin/AdminVerificationPage';
import AdminHomePage from './pages/Admin/Dashboard/AdminHomePage';
import AdminCompanyPage from './pages/Admin/Dashboard/AdminCompanyPage';
import AdminApiPage from './pages/Admin/Dashboard/AdminApiPage';
import TransactionHistoryPage from './pages/Admin/Dashboard/TransactionHistoryPage';
import AdminSecurityPage from './pages/Admin/Dashboard/AdminSecurityPage';
import AdminSettingsPage from './pages/Admin/Dashboard/AdminSettingsPage';
const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage'));
const LoginPage = lazy(() => import('./pages/Auth/LoginPage'));
const Layout = lazy(() => import('./components/dashboard/Layout'));
const Home = lazy(() => import('./pages/Dashboard/Home'));
const Contacts = lazy(() => import('./pages/Dashboard/Contacts'));
const Companies = lazy(() => import('./pages/Dashboard/Companies'));
const CallLogs = lazy(() => import('./pages/Dashboard/CallLogs'));
const User = lazy(() => import('./pages/Dashboard/User'));


const AdminLayout = lazy(() => import('./components/admin/Layout'));


function SuspenseWithDelay({ children, fallback, delay = 0, minDisplayTime = 2000 }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), minDisplayTime);
    return () => clearTimeout(timer);
  }, [minDisplayTime]);

  return isLoading ? (
    <div className="flex justify-center items-center w-screen h-screen">
      <img src={LoaderGif} alt="Loading..." className="h-[6rem]" />
    </div>
  ) : (
    <Suspense fallback={fallback}>{children}</Suspense>
  );
}

function App() {
  const googleMapsApiKey = "AIzaSyA0P_pnW6OWas9hZhiEOt0qJ8hSopz_91s";

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Toaster />
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <BrowserRouter>
          <SuspenseWithDelay fallback={<div className="flex justify-center items-center w-screen h-screen"><img src={LoaderGif} alt="HopOn Dashboard- Loader" className="h-[6rem]" /></div>} minDisplayTime={2000}>
            
            <Routes>

              <Route path='/admin/login' element={<AdminLogin />} />
              <Route path='/admin/verify' element={<AdminVerificationPage />} />
              <Route path="/admin/dashboard/" element={<AdminLayout />}>
                <Route path="home" element={<AdminHomePage />} />
                <Route path="companies" element={<AdminCompanyPage />} />
                <Route path="api" element={<AdminApiPage />} />
                <Route path="transactions" element={<TransactionHistoryPage />} />
                <Route path="security" element={<AdminSecurityPage />} />
                <Route path="settings" element={<AdminSettingsPage />} />
              </Route>

{/* 



              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard/" element={<Layout />}>
                <Route path="home" element={<Home />} />
                <Route path="wallet" element={<Contacts />} />
                <Route path="bookings" element={<Companies />} />
                <Route path="calls" element={<CallLogs />} />
                <Route path="users" element={<User />} />
                <Route path="profile" element={<Profile />} />
              </Route> */}
            </Routes>
          </SuspenseWithDelay>
        </BrowserRouter>
      </LoadScript>
    </>
  );
}

export default App;
