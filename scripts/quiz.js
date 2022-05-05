const questions = [
    {
        id: 1,
        question: "What is 2 + 2 = ?",
        options: ["5", "6", "4", "3"],
        answerIndex: 2
    },
    {
        id: 2,
        question: "What is 10 - 2 = ?",
        options: ["5", "7", "4", "None of the above."],
        answerIndex: 3
    },
    {
        id: 3,
        question: "What is 12 + 2 = ?",
        options: ["14", "16", "44", "32"],
        answerIndex: 0
    },
    {
        id: 4,
        question: "What is 22 * 2 = ?",
        options: ["25", "16", "44", "34"],
        answerIndex: 2
    },
    {
        id: 5,
        question: "What is 9 / 3 = ?",
        options: ["0", "2", "2.5", "3"],
        answerIndex: 3
    },
    {
        id: 6,
        question: "What is 0 * 2 = ?",
        options: ["1", "0.5", "0", "2"],
        answerIndex: 2
    },
    {
        id: 7,
        question: "What is 26 - 2 = ?",
        options: ["34", "25", "23", "24"],
        answerIndex: 3
    },
    {
        id: 8,
        question: "What is 64 / 2 = ?",
        options: ["31", "32", "22", "43"],
        answerIndex: 1
    },
    {
        id: 9,
        question: "What is 24 * 2 = ?",
        options: ["48", "64", "41", "46"],
        answerIndex: 0
    },
    {
        id: 10,
        question: "What is 32 + 2 = ?",
        options: ["32", "16", "34", "35"],
        answerIndex: 2
    }
]

$(document).ready(function () {

    let count = 0;
    let currentScore = 0;
    let totalScore = 50;
    let userResponse = [];
    let final = [];
    let id;
    let option;
    let response;

    $('.currentScore').text(currentScore);
    $('.totalScore').text(totalScore);

    $('.top').on('click', ()=>{
        window.scrollTo(0, 0);
    })

    questions.map((data) => {

        return $('.questions-list').append(`
        <div class="question mb-3">
            <div class="flex space-between align-center mb-2">
                <h5 class="mr-1"><span class="fw-600">Q.${ data.id }</span> ${ data.question } </h5>
                <div>
                    <h5 class="fw-600 mark"></h5>
                </div>
            </div>
                    
            <div class="options-list">
                <div id = ${ data.id } option="0" class="option mb-1 p-2"><h5>a. ${ data.options[0] }</h5></div>
                <div id = ${ data.id } option="1" class="option mb-1 p-2"><h5>b. ${ data.options[1] }</h5></div>
                <div id = ${ data.id } option="2" class="option mb-1 p-2"><h5>c. ${ data.options[2] }</h5></div>
                <div id = ${ data.id } option="3" class="option p-2"><h5>d. ${ data.options[3] }</h5></div>
            </div>
        </div>
            
        `)
    });

    const userResponseUpdate = (id, option) =>{

       if(userResponse.length > 0){

            let exist = userResponse.find((element) => element.id === id);

            if(exist){
                exist.option = option;
            }
            else{
                userResponse.push( {id, option} );
            }
        }
        else{
           userResponse.push( {id, option} );
        }
    } 

    $('.options-list .option').on('click', function(){
        
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        id = $(this).attr('id');
        option = $(this).attr('option');

        userResponseUpdate(id, option);
    });

    $('.submit').on('click', function(){

        count = 0;
        currentScore = 0; 
        final = [];
        
        questions.map((data) => {
            response = userResponse.find((element) => element.id == data.id)

            if(response){

                final.push({
                    id: data.id,
                    question: data.question,
                    options: data.options,
                    answerIndex: data.answerIndex,
                    userOption: response.option
                })

            }else{

                final.push({
                    id: data.id,
                    question: data.question,
                    options: data.options,
                    answerIndex: data.answerIndex,
                    userOption: null
                })
            }
        })

        $('.questions-list').empty();
        window.scrollTo(0, 0);

        final.map((data) => {

            return $('.questions-list').append(`
            <div class="question mb-3">
                <div class="flex space-between align-center mb-2">
                    <h5 class="mr-1"><span class="fw-600">Q.${ data.id }</span> ${ data.question } </h5>
                    <div class="flex align-center">
                        <h6 class="text-red mr-2">${ !data.userOption ? "Not Attempted" : "" }</h6>
                        <h5 class="fw-600 ${data.userOption == data.answerIndex ? 'correct-mark' : 'incorrect-mark'}">${ data.userOption == data.answerIndex ? '+5' : '+0' }</h5>
                    </div>
                </div>
                        
                <div class="options-list">
                    <div id = ${ data.id } option="0" class="mb-1 p-2 ${data.answerIndex == "0" ? 'correct-option' : ''} ${data.userOption == "0" && data.answerIndex != "0" ? 'incorrect-option' : ''}"><h5>a. ${ data.options[0] }</h5></div>
                    <div id = ${ data.id } option="1" class="mb-1 p-2 ${data.answerIndex == "1" ? 'correct-option' : ''} ${data.userOption == "1"  && data.answerIndex != "1"? 'incorrect-option' : ''}"><h5>b. ${ data.options[1] }</h5></div>
                    <div id = ${ data.id } option="2" class="mb-1 p-2 ${data.answerIndex == "2" ? 'correct-option' : ''} ${data.userOption == "2" && data.answerIndex != "2"? 'incorrect-option' : ''}"><h5>c. ${ data.options[2] }</h5></div>
                    <div id = ${ data.id } option="3" class="p-2 ${data.answerIndex == "3" ? 'correct-option' : ''} ${data.userOption == "3" && data.answerIndex != "3"? 'incorrect-option' : ''}"><h5>d. ${ data.options[3] }</h5></div>
                </div>
            </div>
                
            `)
        });

        final.map((data) => {

            if(data.answerIndex == data.userOption){
                count++;
            }
        })

        currentScore = count * 5;
        $('.currentScore').text(currentScore);

    })
});