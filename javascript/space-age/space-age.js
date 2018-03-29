const minute = 60;
const hour = 60 * minute;
const day = 24 * hour;

function yearFromSeconds({ planet, seconds }) {
  const num = seconds / (ageMap[planet] * day);
  return Number(num.toFixed(2));
}

const ageMap = {
  earth: 365.25, // 31557600
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  onEarth() {
    const { seconds } = this;
    return yearFromSeconds({
      seconds,
      planet: 'earth'
    });
  }

  onMercury() {
    const { seconds } = this;
    return yearFromSeconds({
      seconds,
      planet: 'mercury'
    });
  }
  onVenus() {}
  onMars() {}
  onJupiter() {}
  onSaturn() {}
  onUranus() {}
  onNeptune() {}
}

module.exports = SpaceAge;
