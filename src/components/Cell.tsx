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
            className="w-20 h-20 border flex items-center justify-center"
        >
            {value === "X" && <XIcon dimmed={dimmed} /> }
            {value === "O" && <OIcon dimmed={dimmed} /> }
        </button>
    );
}