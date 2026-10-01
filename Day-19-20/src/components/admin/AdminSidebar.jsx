import { NavLink } from "react-router";

const AdminSidebar = () => {
    return (
        <div className="w-72 bg-stone-600 min-h-screen text-white">
            <h2 className="px-5 py-5 text-2xl">Admin Panel</h2>
            <ul className="flex flex-col p-4 *:not-last:border-b *:p-2 *:has-[.active]:bg-stone-500">
                <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/admin/all-post">All post</NavLink></li>
                <li><NavLink to="/admin/add-post">Add post</NavLink></li>
                <li><NavLink to="/admin/all-commnets">All comments</NavLink></li>
            </ul>
        </div>
    );
};

export default AdminSidebar;