import axios from "axios";

async function main() {

    const accessUrlAndPrintMessage = async () => {
        try {
            await axios.get('https://api-portifolio-ohio-br.onrender.com/');
            console.log('Página acessada!');
        } catch (error) {
            console.error('Erro ao acessar a página:', error.message);
        }
    };

    await accessUrlAndPrintMessage();

    setInterval(accessUrlAndPrintMessage, 30 * 60 * 1000);

    await new Promise(() => { });
}

main();