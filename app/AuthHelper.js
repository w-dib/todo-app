import { auth, provider } from "./fbconfig";
import { signInWithPopup } from "firebase/auth";

const handleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export { handleLogin };
