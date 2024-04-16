import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';
import { YMaps } from '@pbe/react-yandex-maps';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Button from './components/list/button/Button';

const router = createBrowserRouter([
        {
        path: "*",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
            path: "country/:countryName",
            element: <Button></Button>,
            },
        ]
    }]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <YMaps query={{apikey: "25395906-d6ec-4279-86c1-04677d106d14"}}>
            <RouterProvider router={router}>
                    <Main />
            </RouterProvider>
        </YMaps>
    </React.StrictMode>
);  