
export default function findPath(obj) {
    let ans;
    for (let i in obj) {
        ans = dfs(obj[i], i);
        if (ans !== undefined) break;
    }
    if (ans === undefined) return null;
    return ans;
}

//more info: https://e-maxx.ru/algo/dfs
function dfs(obj, name) {
    if (obj === 15) return name;
    if (Array.isArray(obj)) {
        let t = obj.reduce((acc, cur, index) => {
            let path = dfs(obj[index], index);
            if (path !== undefined) return `${name}.${path}`;
        },"");
        if (t !== "") return t;
    }
    if (obj === Object(obj)) {
        for (let i in obj) {
            let path = dfs(obj[i], i);
            if( path !== undefined ) return `${name}.${path}`;
        }
    }
}
