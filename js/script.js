function getAkanName(CC, YY, MM, DD, gender) {
    var d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

    if (gender == "Female") {
        if (d == 1) {
            return "Akosua";
        } else if (d == 2) {
            return "Adwoa";
        } else if (d == 3) {
            return "Abenaa";
        } else if (d == 4) {
            return "Akua";
        } else if (d == 5) {
            return "Yaa";
        } else if (d == 6) {
            return "Afua";
        } else if (d == 7) {
            return "Ama";
        } else {
            return "Inavlid entry";
        }
    } else {
        if (d == 1) {
            return "Kwasi";
        } else if (d == 2) {
            return "Kwadwo";
        } else if (d == 3) {
            return "Kwabena";
        } else if (d == 4) {
            return "Kwaku";
        } else if (d == 5) {
            return "Yaw";
        } else if (d == 6) {
            return "Kofi";
        } else if (d == 7) {
            return "Kwame";
        } else {
            return "Inavlid entry";
        }
    }


}