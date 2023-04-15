import toast from "react-hot-toast";

export const sucessNotify = (text) => toast.success(text);
export const errorNotify = (text) => toast.error(text);