
import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

interface ViewsProps {
    pageContainerType?: 'default' | 'gutterless' | 'contained'
    layout?: any
}

type AllRoutesProps = ViewsProps


const Start = React.lazy(() => import('@/components/start'));
const Tablement = React.lazy(() => import('@/pages/tablement'));

const AllRoutes = (props: AllRoutesProps) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Start />}  />
            <Route path="/table" element={<Tablement />}  />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    )
}

const Views = (props: ViewsProps) => {
    return (
        <Suspense fallback={<h2>🌀 Loading...</h2>}>
            <AllRoutes {...props} />
        </Suspense>
    )
}

export default Views
