import prompt from "prompt";
import promptQrCode from "../../prompts-schema/prompt-qrcode.js";
import handle from "./handle.js";

async function  createQrCode() {
    prompt.get(promptQrCode, handle);

    prompt.start();
}

export default createQrCode;