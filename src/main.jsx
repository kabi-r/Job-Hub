import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statistics from './Component/Statistics/Statistics'
import SingleFeatureJob from './Component/JobsFeatures/SingleFeatureJob'
import AppliedJobs from './Component/AppliedJobs/AppliedJobs'
import DbJobsData from './Uitils/JobsData'
import Blog from './Component/Blog/Blog'
import MarkChart from './Component/MarkChart/MarkChart'
import Error from './Component/ErrorPagae/Error'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Statistics></Statistics>,
        loader: ()=>fetch('/Jobs.json')
      },
      {
        path:'/statistics',
        element:<MarkChart></MarkChart>
      },
      {
        path:'Statistics/:jobId',
        element:<SingleFeatureJob></SingleFeatureJob>
        // loader: ({params}) => fetch(`jobdata.json/${params.jobId}`)
      },
      {
        path:'/applied-jobs',
        element:<AppliedJobs></AppliedJobs>,
        loader:DbJobsData,
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
