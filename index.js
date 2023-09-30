const zodiac = document.getElementById("zodiac");
const body=document.body;
const ChangeBackground = () => {
    switch (zodiac.value) {
        case "Aries":
            body.style.backgroundColor="blue";
            break;
        case "Taurus":
                body.style.backgroundColor="pink";
                break;
        case "Gemini":
                body.style.backgroundColor="red";
                break;
        case "Cancer":
                body.style.backgroundColor="grey";
                break;
        case "Leo":
                body.style.backgroundColor="orange";
                break;
        case "Virgo":
                body.style.backgroundColor="beige";
                break;
        case "Libra":
                body.style.backgroundColor="olive";
                break;
        case "Scorpio":
                body.style.backgroundColor="green";
                break;
        case "Saggitarius":
                body.style.backgroundColor="yellow";
                break;
        case "Aquarius":
                body.style.backgroundColor="purple";
                break;
                case "Capricorn":
                body.style.backgroundColor="violet";
                break;
                case "Pisces":
                body.style.backgroundColor="brown";
                break;


    
        default:
            body.style.backgroundColor="white";
            break;
    }
};