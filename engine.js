const puppeteer = require('puppeteer');

async function run() {
    // 【ここにターゲットのURLを貼る】
    const targetUrl = 'https://major.bot/'; 

    const browser = await puppeteer.launch({ 
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    console.log("ターゲットへ侵入。爆撃を開始します...");
    await page.goto(targetUrl, { waitUntil: 'networkidle2' });

    // 自動タップ（24時間労働の強制）
    for (let i = 0; i < 500; i++) {
        await page.mouse.click(200, 400); 
        if (i % 50 === 0) console.log(`${i}連打完了...`);
        await new Promise(r => setTimeout(r, 100)); 
    }

    await browser.close();
    console.log("本日の戦果を回収。撤退します。");
}

run().catch(err => { process.exit(1); });
