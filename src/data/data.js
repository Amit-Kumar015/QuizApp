const quizData = [
    {
        category: "Science",
        questions: [
            { ques: "What is the chemical symbol for water?", option1: "H2O", option2: "O2", option3: "CO2", option4: "HO2", correct: "option1" },
            { ques: "What planet is known as the Red Planet?", option1: "Earth", option2: "Mars", option3: "Jupiter", option4: "Venus", correct: "option2" },
            { ques: "What gas do plants absorb from the atmosphere?", option1: "Oxygen", option2: "Nitrogen", option3: "Carbon Dioxide", option4: "Methane", correct: "option3" },
            { ques: "How many bones are in the human body?", option1: "206", option2: "201", option3: "208", option4: "210", correct: "option1" },
            { ques: "What is the powerhouse of the cell?", option1: "Ribosome", option2: "Mitochondria", option3: "Nucleus", option4: "Cytoplasm", correct: "option2" },
            { ques: "What is the hardest natural substance on Earth?", option1: "Diamond", option2: "Gold", option3: "Platinum", option4: "Iron", correct: "option1" },
            { ques: "What is the speed of light?", option1: "300,000 km/s", option2: "150,000 km/s", option3: "200,000 km/s", option4: "250,000 km/s", correct: "option1" },
            { ques: "What is the main gas found in the air we breathe?", option1: "Oxygen", option2: "Nitrogen", option3: "Carbon Dioxide", option4: "Helium", correct: "option2" },
            { ques: "What is the boiling point of water in Celsius?", option1: "100°C", option2: "90°C", option3: "80°C", option4: "120°C", correct: "option1" },
            { ques: "What is the most abundant element in the universe?", option1: "Hydrogen", option2: "Helium", option3: "Oxygen", option4: "Carbon", correct: "option1" },
        ]
    },
    {
        category: "Mathematics",
        questions: [
            { ques: "What is 2 + 2?", option1: "3", option2: "4", option3: "5", option4: "6", correct: "option2" },
            { ques: "What is the square root of 16?", option1: "3", option2: "4", option3: "5", option4: "6", correct: "option2" },
            { ques: "What is 12 * 12?", option1: "144", option2: "121", option3: "142", option4: "150", correct: "option1" },
            { ques: "What is 50% of 200?", option1: "50", option2: "100", option3: "150", option4: "200", correct: "option2" },
            { ques: "What is the value of π (pi) approximately?", option1: "3.14", option2: "3.15", option3: "3.16", option4: "3.17", correct: "option1" },
            { ques: "What is 7 + 3 * 2?", option1: "13", option2: "20", option3: "17", option4: "19", correct: "option3" },
            { ques: "What is 15% of 300?", option1: "30", option2: "45", option3: "60", option4: "75", correct: "option2" },
            { ques: "What is 9 squared?", option1: "80", option2: "81", option3: "72", option4: "90", correct: "option2" },
            { ques: "What is the sum of angles in a triangle?", option1: "90°", option2: "360°", option3: "180°", option4: "270°", correct: "option3" },
            { ques: "What is 1000 divided by 10?", option1: "100", option2: "110", option3: "90", option4: "10", correct: "option1" },
        ]
    },
    {
        category: "History",
        questions: [
            { ques: "Who was the first President of the USA?", option1: "George Washington", option2: "Abraham Lincoln", option3: "Thomas Jefferson", option4: "John Adams", correct: "option1" },
            { ques: "What year did World War II end?", option1: "1945", option2: "1944", option3: "1946", option4: "1943", correct: "option1" },
            { ques: "Who discovered America?", option1: "Christopher Columbus", option2: "Vasco da Gama", option3: "James Cook", option4: "Marco Polo", correct: "option1" },
            { ques: "When did the Roman Empire fall?", option1: "476 AD", option2: "500 AD", option3: "450 AD", option4: "400 AD", correct: "option1" },
            { ques: "What year did the Titanic sink?", option1: "1911", option2: "1912", option3: "1913", option4: "1914", correct: "option2" },
            { ques: "Who was known as the Iron Lady?", option1: "Margaret Thatcher", option2: "Angela Merkel", option3: "Queen Elizabeth I", option4: "Indira Gandhi", correct: "option1" },
            { ques: "When was the Declaration of Independence signed?", option1: "1775", option2: "1776", option3: "1777", option4: "1778", correct: "option2" },
            { ques: "Who was the first emperor of China?", option1: "Qin Shi Huang", option2: "Liu Bang", option3: "Tang Taizong", option4: "Kublai Khan", correct: "option1" },
            { ques: "When did the Cold War start?", option1: "1947", option2: "1950", option3: "1945", option4: "1949", correct: "option1" },
            { ques: "Who led India to independence?", option1: "Mahatma Gandhi", option2: "Jawaharlal Nehru", option3: "Subhas Chandra Bose", option4: "Sardar Patel", correct: "option1" },
        ]
    },
    {
        category: "Geography",
        questions: [
            { ques: "What is the largest continent?", option1: "Asia", option2: "Africa", option3: "Europe", option4: "Antarctica", correct: "option1" },
            { ques: "Which is the longest river in the world?", option1: "Amazon", option2: "Nile", option3: "Yangtze", option4: "Mississippi", correct: "option2" },
            { ques: "What is the smallest country in the world?", option1: "Monaco", option2: "Vatican City", option3: "San Marino", option4: "Liechtenstein", correct: "option2" },
            { ques: "What is the capital of Australia?", option1: "Sydney", option2: "Melbourne", option3: "Canberra", option4: "Brisbane", correct: "option3" },
            { ques: "Which desert is the largest in the world?", option1: "Sahara", option2: "Gobi", option3: "Arctic", option4: "Kalahari", correct: "option1" },
            { ques: "What is the largest ocean in the world?", option1: "Atlantic Ocean", option2: "Pacific Ocean", option3: "Indian Ocean", option4: "Arctic Ocean", correct: "option2" },
            { ques: "Which country has the most population?", option1: "USA", option2: "India", option3: "China", option4: "Russia", correct: "option3" },
            { ques: "Which mountain is the tallest in the world?", option1: "K2", option2: "Mount Everest", option3: "Kanchenjunga", option4: "Lhotse", correct: "option2" },
            { ques: "What is the capital of Canada?", option1: "Toronto", option2: "Ottawa", option3: "Vancouver", option4: "Montreal", correct: "option2" },
            { ques: "What is the largest island in the world?", option1: "Greenland", option2: "New Guinea", option3: "Borneo", option4: "Madagascar", correct: "option1" },
        ]
    },
    {
        category: "Coding",
        questions: [
            { ques: "What does HTML stand for?", option1: "Hyper Trainer Marking Language", option2: "Hyper Text Markup Language", option3: "Hyper Textual Markup Language", option4: "High Text Markup Language", correct: "option2" },
            { ques: "Which programming language is known as the backbone of web development?", option1: "Python", option2: "C++", option3: "JavaScript", option4: "Java", correct: "option3" },
            { ques: "Which company developed the Java programming language?", option1: "Microsoft", option2: "Oracle", option3: "Sun Microsystems", option4: "Google", correct: "option3" },
            { ques: "What symbol is used for single-line comments in JavaScript?", option1: "//", option2: "#", option3: "/*", option4: "<!-- -->", correct: "option1" },
            { ques: "What does CSS stand for?", option1: "Creative Style Sheets", option2: "Cascading Style Sheets", option3: "Colorful Style Sheets", option4: "Computer Style Sheets", correct: "option2" },
            { ques: "Which data structure uses a FIFO (First In, First Out) principle?", option1: "Stack", option2: "Queue", option3: "Linked List", option4: "Heap", correct: "option2" },
            { ques: "What is the output of `console.log(typeof null)` in JavaScript?", option1: "null", option2: "object", option3: "undefined", option4: "string", correct: "option2" },
            { ques: "What is the time complexity of binary search?", option1: "O(n)", option2: "O(n^2)", option3: "O(log n)", option4: "O(1)", correct: "option3" },
            { ques: "Which programming language is primarily used for Artificial Intelligence?", option1: "Python", option2: "C#", option3: "Java", option4: "PHP", correct: "option1" },
            { ques: "What does API stand for?", option1: "Application Programming Interface", option2: "Application Programming Interaction", option3: "Applied Programming Interface", option4: "Automated Programming Interface", correct: "option1" },
        ]
    }
]


export default quizData;