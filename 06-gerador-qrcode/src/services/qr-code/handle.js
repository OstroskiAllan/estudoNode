import qr from "qrcode-terminal"
import chalk from "chalk";


async function handle(err, result){
    if(err){
        console.log("Error on applicatin");
        return;
    }

    const isSmall = result.type == 2;
    try {
        qr.generate(result.link, {small: isSmall}, (qrcode)=>{
            console.log(chalk.green("QR code geraqdo com sucesso: \n"));
            console.log(qrcode);
        })
    } catch (error) {
        console.error("Erro ao gerar o QR Code:", error);
    }
}

export default handle;