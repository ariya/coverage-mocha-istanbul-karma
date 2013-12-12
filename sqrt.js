var My = {
    sqrt: function(x) {
        if (x < 0) throw new Error("sqrt can't work on negative number");
        return Math.exp(Math.log(x)/2);
    }
};
