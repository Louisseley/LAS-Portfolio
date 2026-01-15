import React from "react";
const trivia = [
  {
    question: "What is your full name?",
    answer: "I am Louisse Angelo Sapaula",
  },
  {
    question: "How old are you?",
    answer: "I am twenty-two(22) years old",
  },
  {
    question: "When is your birthday?",
    answer: "My birthday is on November 7, 2003",
  },
  {
    question: "What is your gender?",
    answer: "My gender is Male",
  },
  {
    question: "What is your civil status?",
    answer: "I am Single",
  },
  {
    question: "Where are you originally from?",
    answer: "I am from Bulakan, Bulacan",
  },
  {
    question: "What course or degree did you take?",
    answer: "I took a Bachelor of Science in Computer Engineering",
  },
  {
    question: "What school or university did you attend?",
    answer: "I graduated from Bulacan State University - Meneses Campus",
  },
  {
    question: "What are your hobbies?",
    answer: "My hobbies are playing basketball and mobile games.",
  },
  {
    question: "What motivates you the most?",
    answer:
      "My mother and uncle motivates me the most because I want them to have easier life.",
  },
  {
    question: "What is your favorite food?",
    answer: "My favorite food is Nilagang Baka and Sinigang sa Bayabas.",
  },
  {
    question: "What is one fun fact about you?",
    answer:
      "Sometimes I stutter when I speak, that's why my friends call me 'bulol'",
  },
  {
    question: "What is something people don't know about you  ?",
    answer:
      "I love to sleep",
  },
];
const Trivia = () => {
  return (
    <section id="trivia" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
          w-200 h-200 bg-primary/5
           rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        <div
          className="text-center max-w-3xl 
           mx-auto mb-16"
        >
          <h2
            className="text-4xl md:text-5xl 
             font-bold mt-4 mb-2 animate-fade-in 
             animation-delay-100 text-secondary-foreground"
          >
            Personal Trivia
          </h2>
          <span
            className="text-foreground/50
             text-sm font-medium tracking-wider 
             uppercase animate-fade-in"
          >
            A Quick Glimpse into Who I Am.
          </span>
        </div>

        <div className="flex flex-row items-center justify-center w-full gap-10 animate-marquee">
          {trivia.map((trv, idx) => (
            <div
              key={idx}
              className="w-60 h-60 md:w-86 md:h-60 shrink-0 glass p-1 rounded-3xl md:p-4 glow-border items-center animate-fade-in transition-all animation-delay-200"
            >
              <div className="rounded-xl flex flex-col justify-center items-center bg-primary/50 p-4 h-full w-full text-center">
                <h3 className="text-xl font-semibold mb-2 text-primary ">
                  {trv.question}
                </h3>
                <p className="text-foreground text-sm">{trv.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trivia;
