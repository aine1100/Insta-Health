import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappBot(){
    return(
        <div className="w-full ">
            <div className="bg-[#17AE17] w-[200px]  text-white h-[50px] gap-3 ml-[600px] fixed flex items-center rounded-full -mt-[150px] p2 justify-center">
                <FaWhatsapp className="font-medium"/>
                <p className="font-medium ">Chat on Whatsapp</p>

            </div>

        </div>
    )
}