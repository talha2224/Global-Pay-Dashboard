
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import LoaderGif from './assets/loader.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminVerificationPage from './pages/Admin/AdminVerificationPage';
import AdminHomePage from './pages/Admin/Dashboard/AdminHomePage';
import AdminCompanyPage from './pages/Admin/Dashboard/AdminCompanyPage';
import AdminApiPage from './pages/Admin/Dashboard/AdminApiPage';
import TransactionHistoryPage from './pages/Admin/Dashboard/TransactionHistoryPage';
import AdminSecurityPage from './pages/Admin/Dashboard/AdminSecurityPage';
import AdminSettingsPage from './pages/Admin/Dashboard/AdminSettingsPage';
import SelectAccountPage from './pages/Auth/SelectAccountPage';
import OtpPage from './pages/Auth/OtpPage';
import PasswordPage from './pages/Auth/PasswordPage';
import CardsPage from './pages/Dashboard/CardsPage';
import DepositPage from './pages/Dashboard/DepositPage';
import SendPage from './pages/Dashboard/SendPage';
import WithdrawPage from './pages/Dashboard/WithdrawPage';
import SettingsPage from './pages/Dashboard/SettingsPage';
import CompanyRegisterPage from './pages/Auth/Company/CompanyRegisterPage';
import CompanyOtpPage from './pages/Auth/Company/CompanyOtpPage';
import CompanyPasswordPage from './pages/Auth/Company/CompanyPasswordPage';
import CompanyInfoPage from './pages/Auth/Company/CompanyInfoPage';
import CompanyContactPage from './pages/Auth/Company/CompanyContactPage';
import CompanyDocumentsPage from './pages/Auth/Company/CompanyDocumentsPage';
import CompanyFinalPage from './pages/Auth/Company/CompanyFinalPage';
import CompanyHome from './pages/Company/CompanyHome';
import CompanyLayout from './components/company/CompanyLayout';
import CompanyApi from './pages/Company/CompanyApi';
import CopmpanyTransaction from './pages/Company/CopmpanyTransaction';
import CompanyDocumentation from './pages/Company/CompanyDocumentation';
import CompanyProfile from './pages/Company/CompanyProfile';
const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage'));
const Layout = lazy(() => import('./components/dashboard/Layout'));
const Home = lazy(() => import('./pages/Dashboard/Home'));


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

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Toaster />
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


            <Route path='/' element={<SelectAccountPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/otp' element={<OtpPage />} />
            <Route path='/password' element={<PasswordPage />} />

            <Route path='/company/register' element={<CompanyRegisterPage />} />
            <Route path='/company/otp' element={<CompanyOtpPage />} />
            <Route path='/company/password' element={<CompanyPasswordPage />} />
            <Route path='/company/info' element={<CompanyInfoPage />} />
            <Route path='/company/contact' element={<CompanyContactPage />} />
            <Route path='/company/documents' element={<CompanyDocumentsPage />} />
            <Route path='/company/final' element={<CompanyFinalPage />} />



            <Route path="/dashboard/" element={<Layout />}>
              <Route path="home" element={<Home />} />
              <Route path="cards" element={<CardsPage />} />
              <Route path="deposit" element={<DepositPage />} />
              <Route path="send" element={<SendPage />} />
              <Route path="withdraw" element={<WithdrawPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>

            <Route path="/company/dashboard/" element={<CompanyLayout />}>
              <Route path="home" element={<CompanyHome />} />
              <Route path="api" element={<CompanyApi />} />
              <Route path="transaction" element={<CopmpanyTransaction />} />
              <Route path="documentation" element={<CompanyDocumentation />} />
              <Route path="profile" element={<CompanyProfile />} />
            </Route>

          </Routes>
        </SuspenseWithDelay>
      </BrowserRouter>
    </>
  );
}

export default App;
