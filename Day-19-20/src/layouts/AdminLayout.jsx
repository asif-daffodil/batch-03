import { Outlet } from "react-router";
import AdminHeader from "../components/admin/AdminHeader";
import AdminSidebar from "../components/admin/AdminSidebar";

const AdminLayout = () => {
    return (
        <div className="flex">
            <AdminSidebar />
            <div className="flex-1 flex flex-col">
                <AdminHeader />
                <div className="p-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;