import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavigationBar } from '#components/NavigationBar/NavigationBar';

export const Layout = () => {

  return (
    <>
        <NavigationBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
