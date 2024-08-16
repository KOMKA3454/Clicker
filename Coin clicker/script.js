let coins = document.querySelector('.coins')
let click = document.querySelector('.click')
let upgradeCost = document.querySelector('.cost')
let upgradeBtn = document.querySelector('.upgrade-btn')
let nn = document.querySelector('.a')
let score = 0
let perClick = 1
let cost = 10
let c = 0
let a = 1
let cmul = 2
function clicked() {
    score += perClick
    coins.innerHTML = score
    if (score >= 1000) {
        coins.innerHTML = `${(score - score%100)/1000}K`
    }
    if (score >= 1000000) {
        coins.innerHTML = `${(score - score%10000)/1000000}M`
    }
}

function upgraded() {
    if (score >= cost) {
        score -= cost
        coins.innerHTML = score
        perClick += a
        a = 2
        cost *= cmul
        upgradeCost.innerHTML = cost
        click.innerHTML = perClick
        if (perClick >= 10) {
            a = 10
        }
        if (perClick >= 20) {
            a = 50
        }
        if (perClick >= 50) {
            a = 50
        }
        if (perClick >= 100) {
            a = 100
            cmul = 1.5
        }
        if (perClick >= 1000) {
            a = 300
        }
        if (perClick >= 2000) {
            a = 500
        }
        if (score >= 1000) {
            coins.innerHTML = `${(score - score%100)/1000}K`
        }
        if (score >= 1000000) {
            coins.innerHTML = `${(score - score%10000)/1000000}M`
        }
        nn.innerHTML = `+${a}`
        if (cost >= 1000) {
            upgradeCost.innerHTML = `${(cost - cost%100)/1000}K`
        }
        if (cost >= 1000000) {
            upgradeCost.innerHTML = `${(cost - cost%10000)/1000000}M`
        }
        if (perClick >= 1000) {
            click.innerHTML = `${(perClick - perClick%100)/1000}K`
        }
        if (a >= 1000) {
            nn.innerHTML = `${(a - a%100)/1000}K`
        }
    }
}

console.log(1280%100)