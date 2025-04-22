// BEGIN
function manyTime(...params) {
    let sum = params.reduce((acc, cur) => acc + cur, 0);
    let news = (...newArgs) => {return manyTime(...params, ...newArgs);};
    news.valueOf = () => sum;
    return news;
}
export default manyTime;
// END
