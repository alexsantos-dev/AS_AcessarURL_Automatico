import puppeteer from "puppeteer";

async function main() {

    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();

    await page.goto('https://api-portifolio-ohio-br.onrender.com/');

    setInterval(async () => {
        await page.reload();
        console.log('Página atualizada!');
    }, 30 * 60 * 1000);
    await new Promise(() => { });
}

main();