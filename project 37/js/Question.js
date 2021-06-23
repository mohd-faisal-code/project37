
class Question {

    constructor(){
        this.title = createElement('h1');
        this.input1 = createInput("Enter Your Name Here");
        this.input2 = createInput('Enter Correct Option No');
        this.button = createButton('Submit');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.button.hide();
        this.input2.hide();
    }
     
display(){
this.title.html("MY QUIZ GAME");
this.title.position(450,0);

this.question.html("What starts and end with letter 'e' and only contains one letter");
this.question.position(100,100);

this.option1.html("1.Everyone");
this.option1.position(100,120);

this.option2.html("2.Envelope");
this.option2.position(100,140);

this.option3.html("3.Estimate");
this.option3.position(100,160);

this.option4.html("4.Example");
this.option4.position(100,180);

this.input1.position(100,250);

this.input2.position(300,250);

this.button.position(450,300);

this.button.mousePressed(()=>{
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    contestant.name = this.input1.value();
    contestant.answer = this.input2.value();
    contestantCount+=1;
    contestant.index = contestantCount;
    contestant.update();
    contestant.updateCount(contestantCount);     
})
}
}