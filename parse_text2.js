const fs = require('fs');
const files = ["180", "177", "174", "171", "169"];
for (const f of files) {
    const data = JSON.parse(String((fs.readFileSync(`C:\\Users\\Дмитрий\\Desktop\\AntiGRAV3\\figma_0_${f}_utf8.json`, 'utf8'));
    console.log(`--- Node: ${data.name} ---`);
    if (data.characters) {
        console.log(`Text: ${data.characters}`);
    } else if (data.children) {
        for (const c of data.children) {
            if (c.characters) {
                console.log(`Child Text: ${c.characters}`);
            }
        }
    }
}
