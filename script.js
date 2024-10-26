function diceRoller(){
    const value = document.getElementById("inputs").value;
    const result = document.getElementById("diceResult");
    const img = document.getElementById("diceImg");
    const valueResult =[];
    const valueImg = [];

    for(let i = 0 ; i < value; i++){
        const random = Math.floor(Math.random()*6) + 1;
        valueResult.push(random);
        valueImg.push(`<img src="assets/${random}.png" alt="Dice">`)
    }
    result.textContent = `Dices : ${valueResult.join(', ')} `;
    img.innerHTML = valueImg.join('');
}