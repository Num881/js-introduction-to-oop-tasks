// BEGIN
export default function createRatNum  (numer, denom) {
    return{
        numer,
        denom,

        setNumer(valueNum) {
            this.numer = valueNum;
        },
        setDenom(valueDenom) {
            this.denom = valueDenom;
        },
        getNumer(){
            return this.numer;
        },
        getDenom() {
            return this.denom;
        },
        toString() {
            return `${this.numer}/${this.denom}`;
        },
        add(fraction){
            let valueNum = this.numer * fraction.getDenom() + this.denom * fraction.getNumer();
            let valueDenom = this.denom * fraction.getDenom();
            return createRatNum(valueNum, valueDenom);
        },
    };
}
// END