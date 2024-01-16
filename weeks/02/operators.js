// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

// Missing functions
// shipCanFire, isHit, reloadShip, isDestroyed
function shipCanFire() {
	return shipAmmo > 0 && shipHealth > 0
}

function isHit() {
	return Math.random() > 0.5;
}

function reloadShip() {
	shipAmmo += 3;
	shipHealth--;
}

function isDestroyed(health) {
	return health == 0;
}

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

encounter();