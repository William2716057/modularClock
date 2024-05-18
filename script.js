function drawClock() {
    const base = parseInt(document.getElementById('base').value);
    const number = parseInt(document.getElementById('number').value);

    if (isNaN(base) || base <= 0 || isNaN(number)) {
        alert("Please enter valid numbers.");
        return;
    }

    const canvas = document.getElementById('clockCanvas');
    const ctx = canvas.getContext('2d');
    const radius = canvas.width / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Draw clock circle
    ctx.beginPath();
    ctx.arc(radius, radius, radius - 10, 0, 2 * Math.PI);
    ctx.stroke();

    //Draw numbers
    for (let i = 0; i < base; i++) {
        const angle = (i * 2 * Math.PI) / base - Math.PI / 2;
        const x = radius + (radius - 30) * Math.cos(angle);
        const y = radius + (radius - 30) * Math.sin(angle);
        ctx.fillText(i, x, y);
    }

    //Calculate modular result
    const result = number % base;
    const resultAngle = (result * 2 * Math.PI) / base - Math.PI / 2;
    const resultX = radius + (radius - 60) * Math.cos(resultAngle);
    const resultY = radius + (radius - 60) * Math.sin(resultAngle);

    //Draw result arrow
    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.lineTo(resultX, resultY);
    ctx.strokeStyle = "black";
    ctx.stroke();
}