
const maxSupply = 1000000000000000
const initialBurn = 500000000000000


let burntToday;

let bigBlackholeValue;

let totalSupply;
let totalOnBlackhole;
let totalBurn;

let jsonResult;

async function logJSONData() {
    const response = await fetch("https://tecnocao.github.io/reau-blackhole/blackhole.json");

    const jsonData = await response.json();

    jsonResult = jsonData.results[jsonData.results.length - 1]

    // console.log(jsonResult.total_burnt)

    bigBlackholeValue = BigInt(Number(jsonResult.total_burnt));
    
    burntToday = jsonData.last_updated;

    bigBlackholeValue = `
        ${String(BigInt(Number(jsonResult.total_burnt))).substring(0,3)}
        <span class="restante">
            ${String(BigInt(Number(jsonResult.total_burnt)).toLocaleString('pt-br')).substring(3, 19)}
        </span>
    `

    // Supply total = 1 quatrilhão - blackhole
    totalSupply = (maxSupply - Number(String(BigInt(Number(jsonResult.total_burnt))).substring(0, 15))).toLocaleString('pt-br')

    totalOnBlackhole = String(BigInt(Number(jsonResult.total_burnt)).toLocaleString('pt-br')).substring(0, 19)
    
    totalBurn = (Number(String(BigInt(Number(jsonResult.total_burnt))).substring(0, 15)) - initialBurn).toLocaleString('pt-br')


    document.querySelector('#total_burnt_value').innerHTML = bigBlackholeValue
    document.querySelector('#total_supply').innerHTML = totalSupply
    document.querySelector('#total_blackhole').innerHTML = totalOnBlackhole
    document.querySelector('#total_queimado').innerHTML = totalBurn





        let typewritedValue = new Typewriter('#total_burnt_value', {
            autoStart: true,
            loop:false,
            delay:100,
        });

        typewritedValue
        .typeString(`${String(BigInt(Number(jsonResult.total_burnt))).substring(0,3)}`)
        .typeString(`<span class="restante">
        ${String(BigInt(Number(jsonResult.total_burnt)).toLocaleString('pt-br')).substring(3, 19)}
    </span>`)
        .start()
}

  logJSONData()






