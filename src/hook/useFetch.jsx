import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data : null,
        isLodiang : true,
        hasError : null
    })
    const getFetch = async () => {
        setState({
            ...state,
            isLodiang : true
        });
        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLodiang : false,
            hasError : null
        });
    }

    useEffect(() => {
      getFetch();
    }, [url])
    
  return {
    data : state.data,
    isLodiang : state.isLodiang,
    hasError: state.hasError
  };
}
