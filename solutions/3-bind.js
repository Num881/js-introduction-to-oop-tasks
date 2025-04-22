// BEGIN
const bind = (obj, fn) => {
    return function(...params) {
        return fn.call(obj, ...params);
    };
};
export default bind;
// END