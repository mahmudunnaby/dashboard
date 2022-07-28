import React from 'react';
import styles from './Dashboard.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div>

            <div className="drawer drawer-mobile ">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet></Outlet>
                    {/* <!-- Page content here --> */}


                </div>
                <div className="drawer-side">
                    <label for="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-accent text-base-content ">
                        {/* <!-- Sidebar content here --> */}
                        <li> <Link to='/dashboard'>My Profile</Link> </li>
                        {!admin && <li><Link to='/dashboard/manageusers'>Manage Users</Link> </li>}
                        {!admin && <li><Link to='/dashboard/managerole'>Manage Role</Link> </li>}
                        {!admin && <li><Link to='/dashboard/targetset'>Target Set</Link> </li>}
                        {!admin && <li><Link to='/dashboard/nexttask'>Next Task</Link> </li>}
                        {!admin && <li><Link to='/dashboard/exposureupdate'>Exposure Update</Link> </li>}
                        {!admin && <li><Link to='/dashboard/statusupdate'>Status Update</Link> </li>}
                    </ul>

                </div>
            </div>
        </div>

    )
};

export default Dashboard;