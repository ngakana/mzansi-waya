import { useState } from "react";

const useTypebox = (postCallback) => {

    const [state, setState] = useState("");

    const handleChange = (event) => {
        event.persist();
        setState(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await postCallback(state);
    }

    return [state, handleChange, handleSubmit];
}

export default useTypebox;