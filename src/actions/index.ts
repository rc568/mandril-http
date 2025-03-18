import { getGreeting } from "./greetings/get-greeting.action";
import { getLikes } from "./likes/get-likes.action";
import { updateLikes } from "./likes/update-likes.action";


export const server = {
    getGreeting,
    getLikes,
    updateLikes,
}