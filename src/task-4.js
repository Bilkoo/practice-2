
export default function runRover(commandsList) {
    let curDirection = 0, ans;

    commandsList.sort((a, b) => a.order - b.order);
    ans = commandsList.reduce((acc, cur) => {
        if (cur.command === "turn right") {
            if (curDirection + 1 >= 4) curDirection = 0
            else curDirection += 1;
        }
        if (cur.command === "turn left") {
            if (curDirection - 1 <= -4) curDirection = 0
            else curDirection -= 1;
        }
        if (cur.command[0] === 'g' && cur.command[1] === 'o' &&
            cur.command[2] === ' ') {
            let m = Number(cur.command.slice(3));
            if (!isNaN(m)) {
                if (curDirection === 0) acc.y += m;
                if (curDirection === 1 || curDirection === -3) acc.x += m;
                if (curDirection === 2 || curDirection === -2) acc.y -= m;
                if (curDirection === -1 || curDirection === 3) acc.x -= m;
            }
        }
        return acc;
    }, {x: 0, y: 0});
    return ans;
}