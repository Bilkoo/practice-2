
export default function getPolynomial(...coefficients) {
    const reducer = (acc, cur, index) => {
        if (cur === 0) return acc;
        if (acc === "") {
            if (index === coefficients.length - 2) {
                if (cur === 1 || cur === -1) return `${acc}${cur === -1 ? '-' : ''}x`;
                return `${acc}${cur > 0 ? "+" : ""}${cur}*x`;
            }
            if (index === coefficients.length - 1) return `${cur}`;
            if (cur === 1 || cur === -1) return `${cur === -1 ? '-' : ''}x^${coefficients.length - 1}`;
            return `${cur}*x^${coefficients.length - 1}`
        }
        if (index === coefficients.length - 2) {
            if (cur === 1 || cur === -1) return `${acc}${cur === -1 ? '-' : ''}x`;
            return `${acc}${cur > 0 ? "+" : ""}${cur}*x`;
        }
        if (cur === 1 || cur === -1) {
            if (index === coefficients.length - 1) return `${acc}${cur > 0 ? '+' : ''}${cur}`;
            return `${acc}${cur === -1 ? '-' : '+'}x^${coefficients.length - index - 1}`;
        }
        if (index === coefficients.length - 1) return `${acc}${cur > 0 ? '+' : ''}${cur}`;
        return `${acc}${cur > 0 ? '+' : ''}${cur}*x^${coefficients.length - index - 1}`
    };
    const ans = coefficients.reduce(reducer, "");
    if (ans === "") return "0";
    return ans;
}
