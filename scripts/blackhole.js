let totalBurnt;
let burntToday;

const totalBurntValue = document.querySelector('#total_burnt_value')

async function logJSONData() {
    const response = await fetch("https://tecnocao.github.io/reau-blackhole/blackhole.json");
    const jsonData = await response.json();
    console.log("hoje: " + jsonData.last_updated)
    console.log(jsonData.results[0].total_burnt)
    console.log(BigInt(Number(jsonData.results[0].total_burnt)).toLocaleString('pt-br'));

    totalBurnt = BigInt(Number(jsonData.results[0].total_burnt));
    
    burntToday = jsonData.last_updated;

    totalBurntValue.innerHTML = `
        ${String(BigInt(Number(jsonData.results[0].total_burnt))).substring(0,3)}
        <span class="restante">
            ${String(BigInt(Number(jsonData.results[0].total_burnt)).toLocaleString('pt-br')).substring(3, 19)}
        </span>
    `
}

  logJSONData()
