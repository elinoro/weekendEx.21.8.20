const stops = [[7, 0],[3, 3],[1, 4],[3, 2],[2, 4]];

const peopleOnBus = (stop1) => stop1.reduce((total, [goingIn, goingOut]) => total + goingIn - goingOut, 0);

console.log(peopleOnBus(stops));

    