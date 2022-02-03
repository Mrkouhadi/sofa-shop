import {LogRegister} from "./";
import useMediaQuery from "../hooks/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import { LogOut} from '../redux/auth';

const Profile = () => {
    const dispatch = useDispatch();
    const isTablet = useMediaQuery('(min-width:768px)');
    const {auth} = useSelector(state => state.auth);
    
  return <div className='min-h-screen p-2 md:p-8'>
            {
               auth.email === "" && auth.password === "" ? <LogRegister/> 
                     : (
                <div className="bg-gray-300 min-h-screen md:grid md:grid-cols-6">
                    <div className="bg-gray-200 h-24 px-2 py-4 md:h-full md:col-span-1 flex md:flex-col justify-between items-center">
                        {isTablet && (<>
                                            <img src='/assets/images/profile.jpg' height="80px" width="80px" className="rounded-full mb-4" alt="profile picture"/>
                                            <h1 className="font-extrabold mb-20 text-center text-gray-900">Bryan Kouhadi</h1>
                                         </>)
                        }
                        <button className=" font-bold text-gray-900 p-2 text-sm md:text-lg flex flex-col items-center md:mb-4"><i className="fas fa-user-circle text-3xl"></i> User Details</button>
                        <button className=" text-gray-900 p-2 text-sm md:text-lg  flex flex-col items-center md:mb-4"><i className="fas fa-bookmark text-3xl"></i> Orders</button>
                        <button className=" text-gray-900 p-2 text-sm md:text-lg  flex flex-col items-center md:mb-4"><i className="fas fa-bell text-3xl"></i> Notifications</button>
                        <button onClick={()=> dispatch(LogOut())} className=" text-gray-900 p-2 text-sm md:text-lg  flex flex-col items-center md:mt-48"><i className="fas fa-sign-out-alt text-3xl"></i> Log out</button>
                    </div>
                    <div className=" h-full md:col-span-5 flex items-center justify-center">
                        <div className="">
                            <h1 className=""> more content related to loggedin user to be added here !</h1>
                        </div>
                    </div>
                </div>
            )}
        </div>;
};

export default Profile;
