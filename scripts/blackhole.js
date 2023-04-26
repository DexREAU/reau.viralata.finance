
const relativeDate = document.getElementById('relative_date')

function formatRelativeDate(unixTimestamp) {
    const milliseconds = unixTimestamp * 1000; // convert to milliseconds
    const date = new Date(milliseconds); // create a new Date object
    
    const now = new Date(); // get the current date
    
    const secondsAgo = Math.floor((now - date) / 1000); // calculate the number of seconds ago
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    
    if (secondsAgo < 60) {
      return `🔥 Última atualização há ${secondsAgo} segundos 🔥`;
    } else if (minutesAgo < 60) {
      return `🔥 Última atualização há ${minutesAgo} minuto(s) 🔥`;
    } else if (hoursAgo < 24) {
      return `🔥 Última atualização há ${hoursAgo} hora(s) 🔥`;
    } else {
      return `🔥 Última atualização há ${daysAgo} dia(s) 🔥`;
    }
}


const maxSupply = BigInt(1000000000000000);
const initialBurn = BigInt(500000000000000);

let burntToday;
let bigBlackholeValue;
let totalSupply;
let totalOnBlackhole;
let totalBurn;
let rawTotalBurn;
let jsonResult;

async function logJSONData() {
  try {
    const response = await fetch("https://tecnocao.github.io/reau-blackhole/blackhole.json");

    const jsonData = await response.json();

    jsonResult = jsonData.results[jsonData.results.length - 1];

    bigBlackholeValue = rawTotalBurn;

    burntToday = jsonData.last_updated;

    rawTotalBurn = BigInt(jsonResult.total_burnt);

    bigBlackholeValue = `
      ${String(rawTotalBurn).substring(0,3)}
      <span class="restante">
        ${String(rawTotalBurn).toLocaleString('pt-br').substring(3, 19)}
      </span>
    `;

    totalSupply = (maxSupply - BigInt(String(rawTotalBurn).substring(0, 15))).toLocaleString('pt-br');

    totalOnBlackhole = String(rawTotalBurn.toLocaleString('pt-br')).substring(0, 19);

    totalBurn = (BigInt(String(rawTotalBurn).substring(0, 15)) - initialBurn).toLocaleString('pt-br');
    
    // Média semanal

    let soma = 0;

    let media;

    for(let i=0;i<7;i++) {
      // console.log(Number(String(jsonData.results[jsonData.results.length - i - 1].prev_diff).substring(0, 10)));

      soma += Number(String(jsonData.results[jsonData.results.length - i - 1].prev_diff).substring(0, 10))

      media = soma / 7;
      
      if(i==6) {
        document.querySelector('#media_semanal').innerHTML = `${Math.trunc(media).toLocaleString('pt-br')} <sub>$REAUs queimados</sub>`
      }
    }

    document.querySelector('#total_burnt_value').innerHTML = bigBlackholeValue;
    document.querySelector('#total_supply').innerHTML = totalSupply;
    document.querySelector('#total_blackhole').innerHTML = totalOnBlackhole;
    document.querySelector('#total_queimado').innerHTML = totalBurn;

    let typewritedValue = new Typewriter('#total_burnt_value', {
      autoStart: true,
      loop:false,
      delay:100,
    });

    typewritedValue
      .typeString(`${String(rawTotalBurn).substring(0,3)}`)
      .typeString(`<span class="restante">
      ${String(rawTotalBurn.toLocaleString('pt-br')).substring(3, 19)}
      </span>`)
      .start();

    relativeDate.innerHTML = formatRelativeDate(jsonResult.time);
  } catch (error) {
    console.error(error);
  }
}

logJSONData();