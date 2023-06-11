import { Route, Routes, Link } from 'react-router-dom'
import { lazy } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { MainLayout } from './layout/MainLayout'
import { AuthStatus } from './components/AuthStatus'
import { PrivateRoute } from './components/PrivateRoute'
import ErrorBoundry from './components/ErrorBoundry'

const Home = lazy(() => import('./pages/Home')); 
const Categories = lazy(() => import('./pages/Categories'));
const Login = lazy(() => import('./pages/Login'));
const ElementDetails = lazy(() => import('./pages/ElementDetails'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <>
      <AuthProvider>
        <AuthStatus />
        <Routes>
          <Route path="/login" element={<ErrorBoundry><Login /></ErrorBoundry>} />
          <Route path="*" element={<NotFound />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<ErrorBoundry><Home /></ErrorBoundry>} />
            <Route path="/character">
              <Route index element={<PrivateRoute><ErrorBoundry><Categories /></ErrorBoundry></PrivateRoute>} />
              <Route path="/character/:id" element={<PrivateRoute><ErrorBoundry><ElementDetails /></ErrorBoundry></PrivateRoute>} />
            </Route>
            <Route path="/location">
              <Route index element={<PrivateRoute><ErrorBoundry><Categories /></ErrorBoundry></PrivateRoute>} />
              <Route path="/location/:id" element={<PrivateRoute><ErrorBoundry><ElementDetails /></ErrorBoundry></PrivateRoute>} />
            </Route>
            <Route path="/episode">
              <Route index element={<PrivateRoute><ErrorBoundry><Categories /></ErrorBoundry></PrivateRoute>} />
              <Route path="/episode/:id" element={<PrivateRoute><ErrorBoundry><ElementDetails /></ErrorBoundry></PrivateRoute>} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;