
export default function boundingRect(coordsList) {
    let ans = {};

    if (coordsList.length === 0) return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    coordsList.sort((a, b) => a.x - b.x);
    ans.left = coordsList[0].x;
    ans.right = coordsList[coordsList.length - 1].x;

    coordsList.sort((a, b) => a.y - b.y);
    ans.bottom = coordsList[0].y;
    ans.top = coordsList[coordsList.length - 1].y;
    return ans;
}
