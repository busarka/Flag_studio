import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import { YMaps } from '@pbe/react-yandex-maps';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Button from './components/list/button/Button';
import { store } from './features/store';
import { Provider } from 'react-redux';

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
    {/* <Provider store={store}> */}
        <YMaps>
            <RouterProvider router={router}>
                    <Main />
            </RouterProvider>
        </YMaps>
    {/* </Provider> */}
    </React.StrictMode>
);  