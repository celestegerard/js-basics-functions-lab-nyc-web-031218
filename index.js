function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42
  } else if (block < 42){
    return 42 - block
  }
}

function distanceFromHqInFeet(block) {
  let blocksAway = distanceFromHqInBlocks(block);
  return blocksAway * 264
}

function distanceTravelledInFeet(startingBlock, endingBlock){
  if (endingBlock > startingBlock) {
    let blocksTraveled = endingBlock - startingBlock
    return blocksTraveled * 264
  } else {
    let blocksTraveled = startingBlock - endingBlock
    return blocksTraveled * 264
  }
}

function preciseRound(number, factor) {
  let factor = Math.pow(number, factor)
  return Math.round() / factor;
}

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

function calculatesFarePrice(start, destination) {
  let distanceTraveled = distanceTravelledInFeet(start, destination)
  if (distanceTraveled < 400) {
    return 0;
  } else if (400 <= distanceTraveled && distanceTraveled<= 2000) {
    let distance = .02 * distanceTraveled - 8
    console.log(distance)
    return precisionRound(distance, 2)
  } else if (2500 > distanceTraveled && distanceTraveled > 2000){
    return 25;
  } else if (distanceTraveled > 2500) {
    return "cannot travel that far"
  }
}
