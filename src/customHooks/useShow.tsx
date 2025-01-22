import { useState } from "react";

export function useShow(){
    const [showTitle, setShowTitle] = useState<boolean>(false);

    return {showTitle, setShowTitle}
}