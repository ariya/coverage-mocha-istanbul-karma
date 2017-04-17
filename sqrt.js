var My = {
    sqrt: function(x) {
        if (x < 0) throw new Error("sqrt can't work on negative number");
        if ((x === 0) || (x === 1)) return x;
        return Math.exp(Math.log(x)/2);
    }
};
