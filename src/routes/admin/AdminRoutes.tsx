import React from 'react';
import { RouteObject } from 'react-router-dom';
import Dashboard from '../../pages/admin/Dashboard';
import AdminLayout from '../../components/Admin/AdminTemplate';

const AdminRoutes: RouteObject[] = [
    { path: '/admin', element: <AdminLayout ><Dashboard /></AdminLayout>},
];

export default AdminRoutes;