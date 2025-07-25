let arr = ["sai", "sree"];

let userObject = {
    name: "sai",
    city: "sss",
    getIntro: function () {
        console.log(this.name + " from " + this.city);
    }
};
