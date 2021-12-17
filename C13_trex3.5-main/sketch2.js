var input 
var heading

function setup() {
    createCanvas(400,400);
    background = "green";
    input = createInput();
    input.position(5, 60);

    heading = createElement("h4", "Enter A Letter");
    heading.position(5,20);

    textAlign(CENTER);
    textSize(50);
}

function draw() {
    const Value = input.value();
    switch(Value) {
        case 'a':
            console.log("Vowel");
            break;

        case 'e':
            console.log("Vowel");
            break;

        case 'i':
            console.log("Vowel");
            break;

        case 'o':
            console.log("Vowel");
            break;

        case 'u':
            console.log("Vowel");
            break;
        default:
            console.log("Please Enter a Letter!");    
    }
    

}