import { useState, useEffect } from "react";

export const GetItems = function() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("items.json")
        .then((response) => response.json())
        .then(setData);
    }, []);

    return data;
}
