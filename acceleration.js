const canvas = document.getElementById('gravity');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let mercury = {x:39*.48, y:150, radius: 2439/1000, accY: 3.697};
let venus = {x:72*.48, y:150, radius: 6051/1000, accY: 8.858};
let earth = {x:100*.48, y:150, radius: 6378/1000, accY: 9.807};
let mars = {x:152*.48, y:150, radius: 3396/1000, accY: 3.722};
let jupiter = {x:520*.48, y:150, radius: 71492/1000, accY: 25.885};
let saturn = {x:953*.48, y:150, radius: 60268/1000, accY: 11.171};
let uranus = {x:1918*.48, y:150, radius: 25559/1000, accY: 8.995};
let neptune = {x:3006*.48, y:150, radius: 24764/1000, accY: 11.257};
let pluto = {x:3953*.48, y:150, radius: 1195/1000, accY: 0.583};

function render() {
    //Mercury
    ctx.beginPath();
    ctx.fillStyle = 'goldenrod';
    ctx.arc(mercury.x, mercury.y, mercury.radius, 0, Math.PI*2, true);
    ctx.fill();

    //Venus
    ctx.beginPath();
    ctx.fillStyle = 'antiquewhite';
    ctx.arc(venus.x, venus.y, venus.radius, 0, Math.PI*2, true);
    ctx.fill();

    //Earth
    ctx.beginPath();
    ctx.fillStyle = 'lightskyblue';
    ctx.arc(earth.x, earth.y, earth.radius, 0, Math.PI*2, true);
    ctx.fill();

    //Mars
    ctx.beginPath();
    ctx.fillStyle = 'orangered';
    ctx.arc(mars.x, mars.y, mars.radius, 0, Math.PI*2, true);
    ctx.fill();

    //Jupiter
    ctx.beginPath();
    ctx.fillStyle = 'burlywood';
    ctx.arc(jupiter.x, jupiter.y, jupiter.radius, 0, Math.PI*2, true);
    ctx.fill();

    //Saturn
    ctx.beginPath();
    ctx.fillStyle = 'lightyellow';
    ctx.arc(saturn.x, saturn.y, saturn.radius, 0, Math.PI*2, true);
    ctx.fill();

    //Uranus
    ctx.beginPath();
    ctx.fillStyle = 'darkturquoise'; //darkturquoise || lightseagreen
    ctx.arc(uranus.x, uranus.y, uranus.radius, 0, Math.PI*2, true);
    ctx.fill();

    //Neptune
    ctx.beginPath();
    ctx.fillStyle = 'deepskyblue';
    ctx.arc(neptune.x, neptune.y, neptune.radius, 0, Math.PI*2, true);
    ctx.fill();

    //Pluto
    ctx.beginPath();
    ctx.fillStyle = 'lightgrey';
    ctx.arc(pluto.x, pluto.y, pluto.radius, 0, Math.PI*2, true);
    ctx.fill();
} 

function freeFall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    render();

    mercury.y += mercury.accY*.08;
    venus.y += venus.accY*.08;
    earth.y += earth.accY*.08;
    mars.y += mars.accY*.08;
    jupiter.y += jupiter.accY*.08;
    saturn.y += saturn.accY*.08;
    uranus.y += uranus.accY*.08;
    neptune.y += neptune.accY*.08;
    pluto.y += pluto.accY*.08;

    if (mercury.y + mercury.radius > canvas.height) {
        let finalMercury = canvas.height - mercury.radius;
        mercury.y = finalMercury;
    }

    if (venus.y + venus.radius > canvas.height) {
        let finalVenus = canvas.height - venus.radius;
        venus.y = finalVenus;
    }

    if (earth.y + earth.radius > canvas.height) {
        let finalEarth = canvas.height - earth.radius;
        earth.y = finalEarth;
    }

    if (mars.y + mars.radius > canvas.height) {
        let finalMars = canvas.height - mars.radius;
        mars.y = finalMars;
    }

    if (jupiter.y + jupiter.radius > canvas.height) {
        let finalJupiter = canvas.height - jupiter.radius;
        jupiter.y = finalJupiter;
    }

    if (saturn.y + saturn.radius > canvas.height) {
        let finalSaturn = canvas.height - saturn.radius;
        saturn.y = finalSaturn;
    }

    if (uranus.y + uranus.radius > canvas.height) {
        let finalUranus = canvas.height - uranus.radius;
        uranus.y = finalUranus;
    }

    if (neptune.y + neptune.radius > canvas.height) {
        let finalNeptune = canvas.height - neptune.radius;
        neptune.y = finalNeptune;
    }

    if (pluto.y + pluto.radius > canvas.height) {
        let finalPluto = canvas.height - pluto.radius;
        pluto.y = finalPluto;
    }

    requestAnimationFrame(freeFall);
}

freeFall();
