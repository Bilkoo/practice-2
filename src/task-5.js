import runRover from "./task-4";
import boundingRect from "./task-3.js"

function getExpeditionsTargets(commandSeries) {
    return commandSeries.map(x => runRover(x));
}

export default function boundingRover(commandSeries) {
    return boundingRect(getExpeditionsTargets(commandSeries));
}
