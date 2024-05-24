import LeftMenuComp from "@components/LeftMenuComp";

export default function AdminView() {
    return (<>
        <div className="flex">
            <LeftMenuComp />
            <div>admin</div>
        </div>
    </>);
}