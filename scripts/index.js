let quizTopics = [
    {
        topic: "Mathematics",
        img: "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, iusto?"
    },
    {
        topic: "Science",
        img: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, iusto?"
    },
    {
        topic: "Social Science",
        img: "https://media.istockphoto.com/photos/heads-of-two-people-with-colourful-shapes-of-abstract-brain-picture-id882484258?b=1&k=20&m=882484258&s=170667a&w=0&h=PF75lI3aUcEwmhmCJiui-S4hGGsDHH1iqS8l2owv7S8=",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, iusto?"
    },
    {
        topic: "Computer Science",
        img: "https://media.istockphoto.com/photos/global-connection-picture-id1335295270?b=1&k=20&m=1335295270&s=170667a&w=0&h=PNF6QH5FyD_XvDbn4nHtIVKdmmlN86fCHTgwvkZYvHA=",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, iusto?"
    },
    {
        topic: "Arts",
        img: "https://media.istockphoto.com/photos/rear-view-of-a-guy-in-his-30s-looking-at-an-art-exhibition-picture-id1294597310?b=1&k=20&m=1294597310&s=170667a&w=0&h=K8dzSofgCzzgH9kWOx-VkWJFqjAO9gkD444i2Xy_bnY=",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, iusto?"
    },
    {
        topic: "Vocabulary",
        img: "https://media.istockphoto.com/photos/magnifying-with-wooden-alphabets-around-on-yellow-background-picture-id1200976833?b=1&k=20&m=1200976833&s=170667a&w=0&h=3EOsiFNF6Uj4c0aTluptjWS5KswnsN9b3XUJ6VNLkAo=",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, iusto?"
    }
]

$(document).ready(function(){
    
    quizTopics.map((data) => {

        return $('.quiz-topics-list').append(`
            <div class="quiz-topic border-radius-md">
                <img src=${ data.img } alt=${ data.topic }>
                <div class="mb-2 text-center text-red">
                    <h4>${ data.topic }</h4>
                </div>
                <div class="mb-1 p-2 quiz-topic-content">
                    <p >${data.description}</p>
                </div>
                <div class="p-3 take-quiz text-center">
                    <a href="/quiz.html" target="_blank">Take Quiz!</a>
                </div>
            </div>
        `)
    })
});