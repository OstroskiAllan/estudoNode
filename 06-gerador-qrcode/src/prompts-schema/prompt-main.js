import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold(
            "Escolher a ferramenta: (Escolha 1 para o QrCode e 2 para Password)."
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic(
            "Escolha apenas entre 1 e 2!"
        ),
        required: true,
    },
];

export default mainPrompt;