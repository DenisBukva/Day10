function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Picardia band",
            title: "Usne od Borovnica",
            release_year: 2020,
            formats: {
                1: "USB",
                2: "Youtube",
                3: "IDJ-videos"
            }
        }
    }
    return myMusic;
};
console.log(myFunction()[2]);
module.exports = myFunction;