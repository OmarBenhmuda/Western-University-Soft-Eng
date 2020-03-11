let calenderName = function (string){
    let monthName = function (number){

        let month = " ";
        switch(number){
            case(1):
                month = "jan";
                break;
            case(2):
                month = "feb";
                break;
            case(3):
                month = "mar";
                break;
            case(4):
                month = "apr";
                break;
            case(5):
                month = "may";
                break;
            case(6):
                month = "jun";
                break;
            case(7):
                month = "jul";
                break;
            case(8):
                month = "aug";
                break;
            case(9):
                month = "sep";
                break;
            case(10):
                month = "oct";
                break;
            case(11):
                month = "nov";
                break;
            case(12):
                month = "dec";
                break;
            default:
                month = "unknown";
        }
        return month + "_m";
    };
    let dayName = function (number){

        let day = "";
        switch(number)
        {
            case(1):
                day = "mon";
                break;
            case(2):
                day = "tue";
                break;
            case(3):
                day = "wed";
                break;
            case(4):
                day = "thur";
                break;
            case(5):
                day = "fri";
                break;
            case(6):
                day = "sat";
                break;
            case(7):
                day = "sunday";
                break;
            default:
                day = "unknown";
        }
        return day + "_d";
    };
    if (string === 'm'){
        return monthName;
    }
    else{
        return dayName;
    }
};

let findNameOfTheMonth = calenderName('m');
console.log(findNameOfTheMonth(1));

let findNameOfTheDay = calenderName('d');
console.log(findNameOfTheDay(1));