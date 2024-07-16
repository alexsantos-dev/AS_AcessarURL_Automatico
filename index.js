import axios from "axios";

async function main() {

    const accessUrlAndPrintMessage = async () => {
        try {
            await axios.get('url');
            console.log('Página acessada!');
        } catch (error) {
            console.error('Erro ao acessar a página:', error.message);
        }
    };

    await accessUrlAndPrintMessage();

    setInterval(accessUrlAndPrintMessage, 15 * 60 * 1000);

    await new Promise(() => { });
}

main();
