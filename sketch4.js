// load images, change image with the mouseover 

// define non-transparant buttons
let buttons = [];
// define transparant buttons
let buttonsTrans = [];
let answers = [];
let img;
let valueX;
let valueY;
let button;
let bw;
let bh;
let answer1;
let answer2;
let quest;
let iter=1;
let sec=0;
let timer = 1000;
let nextChange = timer; //syncs the timer and change rate
let counter=1;

function preload() {
    img_03gr = loadImage('Beeld/03gr.png');
    img_03Kl = loadImage('Beeld/03kl.png');
    img_06gr = loadImage('Beeld/06gr.png');
    img_06Kl = loadImage('Beeld/06kl.png');
    img_07 = loadImage('Beeld/07.png');
    img_07g = loadImage('Beeld/07g.png');
    img_08kl = loadImage('Beeld/08kl.png');
    img_09g = loadImage('Beeld/09g.png');
}


function setup () {
canvas = createCanvas (windowWidth*0.96, windowHeight);
canvas.position(0,0);
frameRate(1);
print(img_03gr.height,img_03gr.height);
}

// function draw (){
//     setTimeout(Step1,1);
//     // setTimeout(removeElements(),5000);
//     setTimeout(Step2,5010);
// }   


// here is the draw , add all steps to make it look like an animation

function draw(){
    Step1();
}

// function draw () {
//     console.log(frameCount);
//     if (frameCount<5) { 
//         canvas = createCanvas (windowWidth*0.96, windowHeight);
// canvas.position(0,0);
//     Step1();
   
//     }
//     else if (frameCount==5) {   
//         removeElements();      
        
//         }
//     else if (frameCount>5 && frameCount<40) { 
// Step2();
            

//     }
//     else {
//         // If iter increases by 11 then
//         // stop the loop
//         noLoop();
//     }
// }

function keyPressed() {
    // selectAll() returns an array of elements with class donkey. 
    // If none are found, it returns an empty array [].
    let quests = selectAll('.questStep1');
    // We can then iterate through the array and hide all the elements.
    for (let i = 0; i < quests.length; i++) {
      quests[i].hide();
    }
  }

// all functions to execute in the different steps 
// noLoop prevents the constant redrawing, this way the tekst is also sharp for transparent background
// if loop text is constantly redrawn as well, with background no problem as both background and text are redrawn
// without background, the text becomes unclear
// if playing with images - how to introduce the loop again?

function Step1 () {
    removeElements();
    noLoop();
    createButtonsTransStep1 ();
    createQuestStep1() ;
    createButtonsStep1();    
    buttons[0].mouseOver(overButton0Step1);
    buttons[0].mouseOut(outButton0Step1);
    buttons[1].mouseOver(overButton1Step1);
    buttons[1].mouseOut(outButton1Step1);
    buttons[2].mouseOver(overButton2Step1);
    buttons[2].mouseOut(outButton2Step1);
    buttonsTrans[0].mouseOver(overButtonTrans0Step1);
    buttonsTrans[1].mouseOver(overButtonTrans1Step1);
    buttonsTrans[2].mouseOver(overButtonTrans2Step1);
    buttons[0].mouseClicked(clickButton0Step1);
    buttons[1].mouseClicked(clickButton1Step1);
    buttons[2].mouseClicked(clickButton2Step1);
    // console.log(answers[0]);
    if (answers[0] == 0) {text('button1', width*0.10,height*0.10);} 
    // removeQuestStep1() ;
    }

function Step2 () {
    removeElements();
    noLoop();
    clear();
    
    createQuestStep2() ;
    createButtonsStep2();
    buttons[0].mouseOver(overButton0Step2);
    buttons[0].mouseOut(outButton0Step2);
    buttons[1].mouseOver(overButton1Step2);
    buttons[1].mouseOut(outButton1Step2);
    buttons[2].mouseOver(overButton2Step2);
    buttons[2].mouseOut(outButton2Step2);
    }


    function createQuestStep1() {
        // quest1.hide(); 
        quest1Step1=createP("You want to become the future model European?");
        quest1Step1.style("top","1%");
        quest1Step1.style("right","2%");
        quest1Step1.style("position","absolute");
        quest1Step1.style("font-size","24px");
        quest1Step1.style("font-family","coordinates");
        quest1Step1.style("font-weight","lighter");    
        quest2Step1=createP("Can it think?");
        quest2Step1.style("top","48px");
        quest2Step1.style("right","50px");
        quest2Step1.style("position","absolute");
        quest2Step1.style("font-size","14px");
        quest2Step1.style("font-family","coordinates");
        quest2Step1.style("font-weight","lighter");
        quest3Step1=createP("I've never heard of that one.");
        quest3Step1.style("top","30%");
        quest3Step1.style("right","50px");
        quest3Step1.style("position","absolute");
        quest3Step1.style("font-size","24px");
        quest3Step1.style("font-family","coordinates");
        quest3Step1.style("font-weight","lighter"); 
    }
    
    function createButtonsStep1 () {
        buttons[0] = createButton("Yes");
        buttons[1] = createButton("No");
        buttons[2] = createButton("HAHA");
        buttons[0].position(width*0.7,height*0.1);
        buttons[1].position(width*0.8,height*0.1);
        buttons[2].position(width*0.9,height*0.1);
        // let bw=concat(",1000,px");
        for (let button of buttons) {
        button.style("background-color","#FF1493");
        button.style("min-width","100px");
        button.style("min-height","100px");
        button.style("border-radius","100px");
        button.style("color","#dcdcdc");
        button.style("font-size","20px");
        button.style("font-family","coordinates");
        button.style("border","none");
    }
    }

    
    function createButtonsTransStep1 () {
        buttonsTrans[0] = createButton("");
        buttonsTrans[1] = createButton("");
        buttonsTrans[2] = createButton("");
        buttonsTrans[0].position(width*0,height*0);
        buttonsTrans[1].position(width*0.33,height*0);
        buttonsTrans[2].position(width*0.66,height*0);
        // let bw=concat(",1000,px");
        for (let button of buttonsTrans) {
        button.style("background-color","transparent");
        // button.style("background-color","0");
        // button.style("background-image","none");
        button.style("outline","none");
        button.style("min-width","33.334%");
        button.style("min-height","100%");
        // buttons.style("border-radius","100px");
        // buttons.style("color","#dcdcdc");
        // buttons.style("font-size","20px");
        // buttons.style("font-family","coordinates");
        button.style("border","none");
    }
    }

    function overButton0Step1 () {
        // background(img_03gr);
        buttons[0].style("background-color","#7FFFD4");
        answer1Step1=createP("Excellent choice.");
        answer1Step1.style("position","absolute");
        answer1Step1.style("top","220px");
        answer1Step1.style("right","50px");
        answer2Step1=createP("Thinking is good for the soul.");
        answer2Step1.style("position","absolute");
        answer2Step1.style("top","270px");
        answer2Step1.style("right","50px");
        quest3Step1.remove();
    }
    
    function outButton0Step1 () {
        clear();
        buttons[0].style("background-color","#FF1493");
        answer1Step1.remove();
        answer2Step1.remove();
        quest3Step1=createP("I've never heard of that one.");
        quest3Step1.style("top","220px");
        quest3Step1.style("right","50px");
        quest3Step1.style("position","absolute");
        quest3Step1.style("font-size","24px");
        quest3Step1.style("font-family","coordinates");
        quest3Step1.style("font-weight","lighter");
    }
    

    function clickButton0Step1 () {
        answers[0]=0;
        Step2();
    }

    function clickButton1Step1 () {
        answers[0]=1;
        Step2();
    }
    
    function clickButton2Step1 () {
        answers[0]=2;
        Step2();
    }

    function overButtonTrans0Step1 () {
        background(img_03gr);
    }

    
    function overButton1Step1 () {
        background(img_03Kl);
        buttons[1].style("background-color","#7FFFD4");
        answer1Step1=createP("I don't think so either!");
        answer1Step1.style("position","absolute");
        answer1Step1.style("top","220px");
        answer1Step1.style("right","50px");
        answer2Step1=createP("You seem hardly fit.");
        answer2Step1.style("position","absolute");
        answer2Step1.style("top","270px");
        answer2Step1.style("right","50px");
        quest3Step1.remove();
    }
    
    function outButton1Step1 () {
        clear();
        buttons[1].style("background-color","#FF1493");
        answer1Step1.remove();
        answer2Step1.remove();
        quest3Step1=createP("I've never heard of that one.");
        quest3Step1.style("top","220px");
        quest3Step1.style("right","50px");
        quest3Step1.style("position","absolute");
        quest3Step1.style("font-size","24px");
        quest3Step1.style("font-family","coordinates");
        quest3Step1.style("font-weight","lighter");
    }
    
    function overButtonTrans1Step1 () {
        background(img_03Kl);
    }
    
    function overButton2Step1 () {
        background(img_06gr);
        buttons[2].style("background-color","#7FFFD4");
        answer1Step1=createP("Really?");
        answer1Step1.style("position","absolute");
        answer1Step1.style("top","220px");
        answer1Step1.style("right","50px");
        answer2Step1=createP("Are you sure you don't know?");
        answer2Step1.style("position","absolute");
        answer2Step1.style("top","270px");
        answer2Step1.style("right","50px");
        quest3Step1.remove();
    }
    
    function outButton2Step1 () {
        clear();
        buttons[2].style("background-color","#FF1493");
        answer1Step1.remove();
        answer2Step1.remove();
        quest3Step1=createP("I've never heard of that one.");
        quest3Step1.style("top","220px");
        quest3Step1.style("right","50px");
        quest3Step1.style("position","absolute");
        quest3Step1.style("font-size","24px");
        quest3Step1.style("font-family","coordinates");
        quest3Step1.style("font-weight","lighter");
    }
    
    function overButtonTrans2Step1 () {
        background(img_06gr);
    }


////

function createQuestStep2() {
    // quest1.hide(); 
    quest1Step2=createP("Your face is like a secret code.");
    quest1Step2.style("top","8px");
    quest1Step2.style("right","50px");
    quest1Step2.style("position","absolute");
    quest1Step2.style("font-size","24px");
    quest1Step2.style("font-family","coordinates");
    quest1Step2.style("font-weight","lighter");    
    quest2Step2=createP("Try it");
    quest2Step2.style("top","48px");
    quest2Step2.style("right","50px");
    quest2Step2.style("position","absolute");
    quest2Step2.style("font-size","14px");
    quest2Step2.style("font-family","coordinates");
    quest2Step2.style("font-weight","lighter");
    quest3Step2=createP("I've never heard of that one.");
    quest3Step2.style("top","220px");
    quest3Step2.style("right","50px");
    quest3Step2.style("position","absolute");
    quest3Step2.style("font-size","24px");
    quest3Step2.style("font-family","coordinates");
    quest3Step2.style("font-weight","lighter"); 
}

function createButtonsStep2 () {
    buttons[0] = createButton("Yes");
    buttons[1] = createButton("No");
    buttons[2] = createButton("Maybe");
    buttons[0].position(width*0.7,height*0.1);
    buttons[1].position(width*0.8,height*0.1);
    buttons[2].position(width*0.9,height*0.1);
    // let bw=concat(",1000,px");
    for (let button of buttons) {
    button.style("background-color","#FF1493");
    button.style("min-width","100px");
    button.style("min-height","100px");
    button.style("border-radius","100px");
    button.style("color","#dcdcdc");
    button.style("font-size","20px");
    button.style("font-family","coordinates");
    button.style("border","none");
}
}

function overButton0Step2 () {
    background(img_06Kl);
    buttons[0].style("background-color","#7FFFD4");
    answer1Step2=createP("Excellent choice.");
    answer1Step2.style("position","absolute");
    answer1Step2.style("top","220px");
    answer1Step2.style("right","50px");
    answer2Step2=createP("Exposure is good for the soul.");
    answer2Step2.style("position","absolute");
    answer2Step2.style("top","270px");
    answer2Step2.style("right","50px");
    quest3Step2.remove();
}

function outButton0Step2 () {
    clear();
    buttons[0].style("background-color","#FF1493");
    answer1Step2.remove();
    answer2Step2.remove();
    quest3Step2=createP("I've never heard of that one.");
    quest3Step2.style("top","220px");
    quest3Step2.style("right","50px");
    quest3Step2.style("position","absolute");
    quest3Step2.style("font-size","24px");
    quest3Step2.style("font-family","coordinates");
    quest3Step2.style("font-weight","lighter");
}


function overButton1Step2 () {
    background(img_07);
    buttons[1].style("background-color","#7FFFD4");
    answer1Step2=createP("You reveal more then you think.");
    answer1Step2.style("position","absolute");
    answer1Step2.style("top","220px");
    answer1Step2.style("right","50px");
    answer2Step2=createP("");
    answer2Step2.style("position","absolute");
    answer2Step2.style("top","270px");
    answer2Step2.style("right","50px");
    quest3Step2.remove();
}

function outButton1Step2 () {
    clear();
    buttons[1].style("background-color","#FF1493");
    answer1Step2.remove();
    answer2Step2.remove();
    quest3Step2=createP("I've never heard of that one.");
    quest3Step2.style("top","220px");
    quest3Step2.style("right","50px");
    quest3Step2.style("position","absolute");
    quest3Step2.style("font-size","24px");
    quest3Step2.style("font-family","coordinates");
    quest3Step2.style("font-weight","lighter");
}


function overButton2Step2 () {
    background(img_07g);
    buttons[2].style("background-color","#7FFFD4");
    answer1Step2=createP("Really?");
    answer1Step2.style("position","absolute");
    answer1Step2.style("top","220px");
    answer1Step2.style("right","50px");
    answer2Step2=createP("Are you sure you don't know?");
    answer2Step2.style("position","absolute");
    answer2Step2.style("top","270px");
    answer2Step2.style("right","50px");
    quest3Step2.remove();
}

function outButton2Step2 () {
    clear();
    buttons[2].style("background-color","#FF1493");
    answer1Step2.remove();
    answer2Step2.remove();
    quest3Step2=createP("I've never heard of that one.");
    quest3Step2.style("top","220px");
    quest3Step2.style("right","50px");
    quest3Step2.style("position","absolute");
    quest3Step2.style("font-size","24px");
    quest3Step2.style("font-family","coordinates");
    quest3Step2.style("font-weight","lighter");
}
