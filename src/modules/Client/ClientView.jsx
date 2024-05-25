import IconComp from "@components/IconComp";
import LeftMenuComp from "@components/LeftMenuComp";
import { Auth } from "@core/index";

export default function ClientView() {
    return (<>
        <div className="flex">
            <LeftMenuComp >
                <div className="flex w-full justify-end text-[25px] p-5">
                    Hola {Auth.getUser().name}
                    <IconComp icon="shopping_cart" className='ms-5 !text-[40px]' />
                </div>
            </LeftMenuComp >
        </div>
    </>);
}