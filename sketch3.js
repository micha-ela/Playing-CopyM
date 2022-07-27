let buttons = [];
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

// function preload() {
//   img = loadImage('test.png');
// }


function setup () {
canvas = createCanvas (windowWidth*0.96, windowHeight);
canvas.position(0,0);
frameRate(1);
}

function draw (){
    setTimeout(Step1,1);
    // setTimeout(removeElements(),5000);
    setTimeout(Step2,5010);
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

function Step1 () {
    removeElements();
    noLoop();
    createQuestStep1() ;
    createButtonsStep1();
    buttons[0].mouseOver(overButton0Step1);
    buttons[0].mouseOut(outButton0Step1);
    buttons[1].mouseOver(overButton1Step1);
    buttons[1].mouseOut(outButton1Step1);
    buttons[2].mouseOver(overButton2Step1);
    buttons[2].mouseOut(outButton2Step1);
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
        quest1Step1.style("top","8px");
        quest1Step1.style("right","50px");
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
        quest3Step1.style("top","220px");
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
    
    function overButton0Step1 () {
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
    
    
    function overButton1Step1 () {
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
    
    
    function overButton2Step1 () {
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
