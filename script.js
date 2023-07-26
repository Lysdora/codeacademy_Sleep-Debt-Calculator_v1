const getSleepHours = (day) => {
  switch (day) {
    case "lundi":
      return 8;
      break;
    case "mardi":
      return 7;
      break;
    case "mecredi":
      return 6;
      break;
    case "jeudi":
      return 6;
      break;
    case "vendredi":
      return 7;
      break;
    case "samedi":
      return 9;
      break;
    case "dimanche":
      return 10;
      break;
    default:
      return 0;
      break;
  }
};

function getActualSleepHours() {
  const sleepHours =
    getSleepHours("lundi") +
    getSleepHours("mardi") +
    getSleepHours("mercredi") +
    getSleepHours("jeudi") +
    getSleepHours("vendredi") +
    getSleepHours("samedi") +
    getSleepHours("dimanche");
  return sleepHours;
}

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(
      `Bravo vous etes au top du temps de sommeil ! ❤️‍🔥 Votre temps de sommeil est egal au temps ideal ${idealSleepHours}`
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `Vous avez beaucoup d'heures de sommeil ! votre corps a besoin de ${idealSleepHours}`
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      `Il faut dormir plus ! 👀 Avec ${actualSleepHours} d'heures de sommeil vous devez viser ${idealSleepHours}`
    );
  }
}
calculateSleepDebt();
