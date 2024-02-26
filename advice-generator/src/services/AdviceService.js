import axios from "axios";

export const adviceService = {
    getAdvice: async () => {
        try {
            const { data } = await axios.get('https://api.adviceslip.com/advice');

            return data.slip;
        } catch (error) {
            return "Lorem Ipsum Error"
        }
    }
}