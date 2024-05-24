import IconComp from "@components/IconComp";
import LeftMenuComp from "@components/LeftMenuComp";

export default function ClientView() {
    return (<>
        <div className="flex ">
            <LeftMenuComp >
                <div className="flex justify-end text-[25px] pb-5">
                    Hola name
                    <IconComp  icon="shopping_cart" className='ms-5 !text-[40px]'/>
                </div>
            </LeftMenuComp >
        </div>
    </>);
}