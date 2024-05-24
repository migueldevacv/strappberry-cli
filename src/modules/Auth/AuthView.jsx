import { MainLogo } from "@assets/index";
import { Colors } from "@core/Colors";
import { Outlet } from "react-router-dom";

export default function AuthView() {
    return (<>
        <div className={`flex min-h-[100vh] bg-blue items-center justify-center`}>
            <div className="flex flex-col h-full items-center">
                <img src={MainLogo} className="pb-10 sm:min-w-[300px] min-w-0 w-[50vw] sm:w-[20vw] " />
                <div className="flex flex-col bg-white w-[80vw] sm:w-[50vw] rounded-md h-full mb-10 items-center px-10 pt-14 pb-5 gap-5">
                    <Outlet />
                </div>
            </div>
        </div>
    </>);
}