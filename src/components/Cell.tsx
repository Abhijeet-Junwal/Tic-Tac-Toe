import { Symbol } from "@/types/game";
import { XIcon } from "./icons/Xicon";
import { OIcon } from "./icons/Oicon";

export default function Cell({
    value,
    dimmed,
    onClick,
}:{
    value: Symbol | null,
    dimmed? : boolean,
    onClick : () => void,
}){
    return (
        <button
            onClick={onClick}
            className={`
                w-24 h-24 rounded-lg bg-[#66707a]
                hover:bg-[#9fa7af]
                flex items-center justify-center
                ${dimmed ? "opacity-30 scale-95" : ""}
            `}
        >

            {value === "X" && <XIcon dimmed={dimmed} /> }
            {value === "O" && <OIcon dimmed={dimmed} /> }
        </button>
    );
}