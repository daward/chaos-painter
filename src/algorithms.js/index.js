import logisticMap from "./logisticmap";
import gingerbreadMap from "./gingerbreadmap";
import standardMap from "./standardmap";

const algorithm = (settings) => {
  switch (settings.algorithm) {
    case "logistic": {
      return logisticMap(settings);
    }

    case "gingerbread": {
      return gingerbreadMap(settings)
    }

    case "standard": {
      return standardMap(settings)
    }

    default: {
      return standardMap(settings);
    }
  }
}

export default algorithm;