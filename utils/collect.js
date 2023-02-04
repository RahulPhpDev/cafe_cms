const collect  = class Collect {

    static sum(rows, key) {
        const sum = rows.reduce( (a, b) => {
           
            return a + parseInt(b[key]);
        } ,0);
        return sum
    }
}   

module.exports = collect;
