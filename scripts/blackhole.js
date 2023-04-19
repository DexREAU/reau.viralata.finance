
const maxSupply = 1000000000000000
const initialBurn = 500000000000000


let burntToday;

let bigBlackholeValue;

let totalSupply;
let totalOnBlackhole;
let totalBurn;

const blackholeValueEl = document.querySelector('#total_burnt_value')
const totalSupplyEl = document.querySelector('#total_supply')
const totalOnBlackholeEl = document.querySelector('#total_blackhole')
const totalBurnEl = document.querySelector('#total_queimado')

async function logJSONData() {
    const response = await fetch("https://tecnocao.github.io/reau-blackhole/blackhole.json");
    const jsonData = await response.json();
    // console.log("hoje: " + jsonData.last_updated)
    // console.log(jsonData.results[0].total_burnt)

    // console.log(Number(String(BigInt(Number(jsonData.results[0].total_burnt))).substring(0, 15)) );

    bigBlackholeValue = BigInt(Number(jsonData.results[0].total_burnt));
    
    burntToday = jsonData.last_updated;

    bigBlackholeValue = `
        ${String(BigInt(Number(jsonData.results[0].total_burnt))).substring(0,3)}
        <span class="restante">
            ${String(BigInt(Number(jsonData.results[0].total_burnt)).toLocaleString('pt-br')).substring(3, 19)}
        </span>
    `

    // Supply total = 1 quatrilhão - blackhole
    totalSupply = (maxSupply - Number(String(BigInt(Number(jsonData.results[0].total_burnt))).substring(0, 15))).toLocaleString('pt-br')

    totalOnBlackhole = String(BigInt(Number(jsonData.results[0].total_burnt)).toLocaleString('pt-br')).substring(0, 19)
    
    totalBurn = (Number(String(BigInt(Number(jsonData.results[0].total_burnt))).substring(0, 15)) - initialBurn).toLocaleString('pt-br')


    blackholeValueEl.innerHTML = bigBlackholeValue
    totalSupplyEl.innerHTML = totalSupply
    totalOnBlackholeEl.innerHTML = totalOnBlackhole
    totalBurnEl.innerHTML = totalBurn





        let typewritedValue = new Typewriter('#total_burnt_value', {
            autoStart: true,
            loop:false,
            delay:100,
        });

        typewritedValue
        .typeString(`${String(BigInt(Number(jsonData.results[0].total_burnt))).substring(0,3)}`)
        .typeString(`<span class="restante">
        ${String(BigInt(Number(jsonData.results[0].total_burnt)).toLocaleString('pt-br')).substring(3, 19)}
    </span>`)
        .start()
}

  logJSONData()






