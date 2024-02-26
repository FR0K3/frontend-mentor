import { useEffect, useState } from "react";
import { adviceService } from "../services/AdviceService";

const useAdvice = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        const advice = await adviceService.getAdvice();
        setData(advice);
        setLoading(false)
    }

    useEffect(() => {
        getData();
    }, [])

    return {
        data,
        getData,
        loading
    }
}

export default useAdvice