class Quiz{
    constructor(){
        
    }
    getState(){
        var gamestateref=database.ref("gameState")
            gamestateref.on("value",(data)=>{
                gamestate=data.val()
            })
            
    }
    updateState(state){
        database.ref('/').update({
           gameState:state 
        })

    }
    async start(){
        if(gamestate===0){
            contestant=new Contestant()
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question=new Question();
            question.display();
        }


    }

    play(){
        question.hide();
        background("Yellow");
        fill(0);
        textSize(30);
        text("Result ofthe Quiz",450,50);
        text("---------------------------",430,65);
        Contestant.getPlayerInfo();
        if(allContestants !== undefined){
            var display_Answers = 230;
            fill("blue");
            textSize(20);
            text("Note: Contestant who answered correct are highlighted in green color",300,250);

            for(var plr in allContestants){
                var correctAns ="2";
                if (correctAns === allContestants[plr].answer)
                    fill("Green")
                else
                    fill("red");
                    
                display_Answers+=30;
                textSize(20);
                text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)    
            }
        }
    }
}

