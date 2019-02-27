// NOTE - You must have a level with the name "start".  This is used as the first level in the game.
var game = {
    music: "06 Nightvision.m4a",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You enter a maze. (riddles from gotoquiz.com and puzzle.dse.nl)",
            choices: [
                {
                    text: "Go left",
                    nextLevel: "leftStart",
                },

                {
                    text: "Go forward",
                    nextLevel: "forwardOne",
                },
                
                {
                    text: "Go right",
                    nextLevel: "deadEnd",
                }
            ]
        },
        
        //going left at start
        
        leftStart: {
            message: "Where to?",
            choices: [
                {
                    text: "Go forward",
                    nextLevel: "deadEnd",
                },
                
                {
                    text: "Go right",
                    nextLevel: "riddleOne",
                },
            ]
        },
        
        riddleOne: {
            message: "Imagine you're in a dark room that is perfectly empty with nothing in it. There are no windows or doors. What is the easiest way to escape?",
            choices: [
                {
                    text: "Die",
                    nextLevel: "gameOver",
                },
                
                {
                    text: "Stop imagining you're in that room",
                    nextLevel: "passOne",
                },
                
                {
                    text: "Wait",
                    nextLevel: "gameOver",
                },
            ]
        },
        
        gameOver: {
            message: "You failed the riddle",
            choices: [
                {
                    text: "Give Up",
                    nextLevel: "start",
                },
                
            ]
        },
        
        passOne: {
            message: "Where to?",
            choices: [
                {
                    text: "Go forward",
                    nextLevel: "riddleTwo",
                },
                
                {
                    text: "Go right",
                    nextLevel: "deadEnd",
                },
                
            ]
        },
        
        riddleTwo: {
            message: "This has beautiful marble-white walls and beautiful gold. Many thieves, like yourself, want the gold. The thing has no doors or windows. However, it breaks easily to reveal the gold. It is a what?",
            choices: [
                {
                    text: "Ball",
                    nextLevel: "gameOver",
                },
                
                {
                    text: "Egg",
                    nextLevel: "riddleThree",
                },
                
                {
                    text: "Old palace",
                    nextLevel: "gameOver",
                },
                
            ]
        },
        
        riddleThree: {
            message: "A man is standing in front of a painting of a man, and he tells us the following: \"Brothers and sisters have I none, but this man's father is my father's son\". Who is on the painting?",
            choices: [
                {
                    text: "His father",
                    nextLevel: "gameOver",
                },
                
                {
                    text: "Himself",
                    nextLevel: "gameOver",
                },
                
                {
                    text: "His son",
                    nextLevel: "end",
                },
                
            ]
        },
        
         end: {
            message: "You made it out",
            choices: [
                
            ]
        },
        
        //going forward at start
        
         forwardStart: {
            message: "Where to?",
            choices: [
                {
                    text: "Go left",
                    nextLevel: "deadEnd",
                },

                {
                    text: "Go forward",
                    nextLevel: "forwardOne",
                },
                
            ]
        },
        
        forwardOne: {
            message: "Where to?",
            choices: [
                {
                    text: "Go left",
                    nextLevel: "deadEnd",
                },

                {
                    text: "Go forward",
                    nextLevel: "deadEnd",
                },
                
            ]
        },
        
        
        deadEnd: {
            message: "You've reached a dead end",
            choices: [
                {
                    text: "Give Up",
                    nextLevel: "start",
                },
                
            ]
        },
    }
};
