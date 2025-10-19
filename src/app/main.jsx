import React from 'react'
import ReactDOM from 'react-dom/client'
import '../assets/styles/global.scss'
import '../shared/integrations/firebase.js'
import { PrimeReactProvider } from 'primereact/api'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeView from 'app/views/home'
import ContactView from 'app/views/contact'
import NotFoundView from 'app/views/not-found'
import AppContainer from 'app/app-container'
import ResumeView from 'app/views/resume'
import ProjectView from 'app/views/project'

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppContainer />,
        children: [
            {
                path: "/",
                element: <HomeView />,
            },
            {
                path: "/contact",
                element: <ContactView />,
            },
            {
                path: "/resume",
                element: <ResumeView />,
            },
            {
                path: "/projects/:projectSlug",
                element: <ProjectView />,
            },
            {
                path: "/*",
                element: <NotFoundView />,
            },
        ],
    },
]);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity
        },
    }
})

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <PrimeReactProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </PrimeReactProvider>
    </React.StrictMode>
);
