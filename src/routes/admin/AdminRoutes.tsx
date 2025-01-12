import React from 'react';
import { RouteObject } from 'react-router-dom';
import Dashboard from '../../pages/admin/Dashboard';
import AdminLayout from '../../components/Admin/AdminTemplate';
import AdminManageUser from '../../pages/admin/users/AdminManageUser';
import AdminManageCelebrity from '../../pages/admin/celebrities/AdminManageCelebrity';
import AdminManageMovies from '../../pages/admin/movies/AdminManageMovies';
import AdminViewUser from '../../pages/admin/users/AdminViewUser';
import AdminManageGenres from '../../pages/admin/Genres/AdminManageGenres';

const AdminRoutes: RouteObject[] = [
    { path: '/admin', element: <AdminLayout ><Dashboard /></AdminLayout>},
    { path: '/admin/users', element: <AdminLayout ><AdminManageUser/></AdminLayout>},
    { path: '/admin/celebrities', element: <AdminLayout ><AdminManageCelebrity/></AdminLayout>},
    { path: '/admin/movies', element: <AdminLayout ><AdminManageMovies /></AdminLayout>},
    { path: `/admin/users/:id`, element: <AdminLayout ><AdminViewUser /></AdminLayout>},
    { path: `/admin/genres`, element: <AdminLayout ><AdminManageGenres /></AdminLayout>},
];

export default AdminRoutes;