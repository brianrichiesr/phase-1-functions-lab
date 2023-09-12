function distanceFromHqInBlocks(destinationInt) {
    return Math.abs(42 - destinationInt);
}

function distanceFromHqInFeet(destinationInt) {
    return distanceFromHqInBlocks(destinationInt) * 264;
}

function distanceTravelledInFeet(start, finish) {
    return distanceFromHqInFeet((Math.abs(finish - start) + 42));
}

function calculatesFarePrice(start, finish) {
    const totalDistance = distanceTravelledInFeet(start, finish);
    if (totalDistance < 400) {
        return 0;
    } else if (totalDistance >= 400 && totalDistance <= 2000) {
        return (totalDistance - 400) * .02;
    } else if (totalDistance > 2000 && totalDistance <= 2500) {
        return 25
    }

    return 'cannot travel that far'
}