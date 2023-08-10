
var num1 =  +prompt("Add number")
var operater = prompt("add operater")
var num2 =  +prompt("Add number ")






switch (operater) {
    case ("+"):
        document.write(num1 + num2 )
        case ("%"):
        document.write(num1 % num2)
        case ("/"):
        document.write(num1 / num2)
        case ("-"):
        document.write(num1 - num2)
        case ("*"):
        document.write(num1 * num2)
        break;

    default:
        document.write("Error")
        break;
}