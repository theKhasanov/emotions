import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function EmotionalControlPresentation() {
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showQuote, setShowQuote] = useState(false);
  const [progress, setProgress] = useState(0);

  const quiz = [
    {
      question: "Stressli vaziyatda birinchi nima qilish kerak?",
      answers: ["Baqirish", "Chuqur nafas olish", "Telefon sindirish"],
      correct: "Chuqur nafas olish",
    },
    {
      question: "Hissiyotlarni boshqarish nimaga yordam beradi?",
      answers: ["Janjalni kamaytiradi", "Stressni oshiradi", "Uyquni buzadi"],
      correct: "Janjalni kamaytiradi",
    },
    {
      question: "Stressni kamaytirishning foydali usuli qaysi?",
      answers: ["Sport", "Jahl qilish", "Bahslashish"],
      correct: "Sport",
    },
    {
      question: "Jahlingiz chiqqanda nima qilish foydali?",
      answers: ["Darhol javob qaytarish", "Tinchlanish", "Baqirish"],
      correct: "Tinchlanish",
    },
    {
      question: "Qaysi odat ruhiy holatni yaxshilaydi?",
      answers: ["Uyqusizlik", "Sport va dam olish", "Ko‘p stress"],
      correct: "Sport va dam olish",
    },
    {
      question: "Muammoni hal qilish uchun nima kerak?",
      answers: ["Sovuqqonlik", "Jahl", "Qo‘rquv"],
      correct: "Sovuqqonlik",
    },
  ];

  const slides = [
    {
      title: "Qiyin vaziyatlarda hissiyotlarni boshqarish",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop",
      text:
        "Qiyin vaziyatlarda hissiyotlarni boshqarish insonning ruhiy holati va kundalik hayotida muhim rol o‘ynaydi. O‘zini nazorat qila olgan inson muammolarni ancha oson hal qiladi.",
    },
    {
      title: "Hissiyot nima?",
      image:
        "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=1600&auto=format&fit=crop",
      text:
        "Hissiyot — insonning ichki kechinmalari va his-tuyg‘ularidir. Quvonch, qo‘rquv, xavotir, jahldorlik yoki hayajon hissiyotlarga misol bo‘la oladi. Hissiyotlar insonning xulq-atvoriga va qarorlariga kuchli ta’sir qiladi. Shu sababli ularni boshqarishni o‘rganish muhimdir.",
    },
    {
      title: "Nega hissiyotlarni boshqarish muhim?",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop",
      points: [
        "Stress va xavotirni kamaytiradi",
        "Insonlar bilan yaxshi munosabat o‘rnatishga yordam beradi",
        "To‘g‘ri qaror qabul qilishni osonlashtiradi",
        "Janjal va tushunmovchiliklarni kamaytiradi",
      ],
      extra:
        "Hissiyotlarini boshqara oladigan inson odatda vaziyatga sovuqqon yondashadi va boshqalarga ham ijobiy ta’sir ko‘rsatadi.",
    },
    {
      title: "Qiyin vaziyatlarda nima qilish kerak?",
      image:
        "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1600&auto=format&fit=crop",
      points: [
        "Chuqur nafas olish",
        "Shoshilmaslik va biroz kutish",
        "Muammoni tahlil qilish",
        "Yaqin inson bilan suhbatlashish",
      ],
      extra:
        "Agar inson darhol hissiyotga berilib ketmasa, u vaziyatni yaxshiroq tushunadi va xatolarni kamaytiradi.",
    },
    {
      title: "Stressni kamaytirish usullari",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
      points: [
        "Sport bilan shug‘ullanish",
        "Musiqa tinglash",
        "Toza havoda sayr qilish",
        "Yetarli dam olish va uyqu",
      ],
      extra:
        "Sog‘lom hayot tarzi inson ruhiy holatiga ham ijobiy ta’sir ko‘rsatadi. Sport va dam olish stressni kamaytiradi. Inson o‘ziga vaqt ajratsa, hissiy jihatdan ham o‘zini yaxshi his qiladi.",
    },
    {
      title: "Oilaviy va do‘stlar yordami",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600&auto=format&fit=crop",
      text:
        "Qiyin vaziyatlarda inson yolg‘iz qolmasligi kerak. Oila a’zolari yoki yaqin do‘stlar bilan suhbatlashish ruhiy bosimni kamaytiradi. Ba’zan oddiy suhbat ham insonni tinchlantirishi va unga motivatsiya berishi mumkin.",
    },
    {
      title: "Ijobiy fikrlash",
      image:
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1600&auto=format&fit=crop",
      text:
        "Har qanday qiyin vaziyat vaqtinchalik bo‘lishi mumkin. Inson muammolarga faqat salbiy tomondan emas, balki ijobiy tomondan ham qarashni o‘rganishi kerak. Ijobiy fikrlash insonning o‘ziga bo‘lgan ishonchini oshiradi va ruhiy holatini yaxshilaydi.",
    },
    {
      title: "Xulosa",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1600&auto=format&fit=crop",
      text:
        "Hayot davomida har bir inson turli qiyinchiliklarga duch keladi. Muhimi, bunday vaziyatlarda hissiyotlarni nazorat qila bilishdir. Tinchlik, sabr va oqilona fikrlash insonni har qanday muammodan chiqishga yordam beradi.",
    },
  ];

  useEffect(() => {
    const answered = Object.keys(selectedAnswers).length;
    setProgress((answered / quiz.length) * 100);
  }, [selectedAnswers]);

  const quotes = [
    "Sabr — eng katta kuch.",
    "Har bir muammo vaqtinchalik.",
    "Tinch fikr yaxshi qaror olib keladi.",
    "O‘zingizni boshqarsangiz, hayotni ham boshqarasiz.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const handleAnswer = (questionIndex, answer, correct) => {
    if (selectedAnswers[questionIndex]) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));

    if (answer === correct) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#1e3a8a,_#0f172a_45%,_#020617_100%)] p-6 font-sans overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setShowQuote(!showQuote)}
            className="bg-white/10 border border-white/20 backdrop-blur-md px-6 py-3 rounded-2xl text-white hover:bg-white/20 transition-all hover:scale-105"
          >
            Motivatsion fikr
          </button>

          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-2xl text-white hover:scale-105 transition-all shadow-2xl"
          >
            Quizga o‘tish
          </button>
        </div>

        {showQuote && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-6 text-center text-2xl text-white mb-8 shadow-2xl"
          >
            “{randomQuote}”
          </motion.div>
        )}

        <div className="w-full h-5 bg-white/10 rounded-full overflow-hidden mb-10 border border-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
            Qiyin vaziyatlarda hissiyotlarni boshqarish
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-9">
            Hissiyotlarni boshqarish insonning ruhiy salomatligi va kundalik hayotidagi muvaffaqiyati uchun muhim hisoblanadi.
          </p>
        </motion.div>

        <div className="space-y-10">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[35px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.45)] hover:scale-[1.01] transition-all duration-500"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[420px] object-cover object-center"
              />

              <div className="p-10 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {index + 1}. {slide.title}
                </h2>

                {slide.text && (
                  <p className="text-lg md:text-xl text-slate-100 leading-9">
                    {slide.text}
                  </p>
                )}

                {slide.points && (
                  <div className="grid md:grid-cols-2 gap-5 mt-6">
                    {slide.points.map((point, i) => (
                      <div
                        key={i}
                        className="bg-white/10 border border-white/10 rounded-3xl p-6 shadow-xl text-slate-100 font-medium text-lg backdrop-blur-md hover:bg-white/15 transition-all"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                )}

                {slide.extra && (
                  <p className="text-slate-200 mt-8 leading-9 text-lg md:text-xl">
                    {slide.extra}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 mt-14 rounded-[35px] shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
            Mini Quiz
          </h2>

          <div className="space-y-8">
            {quiz.map((q, index) => (
              <div key={index} className="border-b pb-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-5">
                  {index + 1}. {q.question}
                </h3>

                <div className="grid gap-3">
                  {q.answers.map((answer, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(index, answer, q.correct)}
                      className={`rounded-2xl p-4 text-left text-lg font-medium transition-all duration-300 border-2 ${selectedAnswers[index]
                          ? answer === q.correct
                            ? 'bg-green-200 border-green-500 text-green-900'
                            : selectedAnswers[index] === answer
                            ? 'bg-red-200 border-red-500 text-red-900'
                            : 'bg-gray-100 border-gray-200'
                          : 'bg-white/10 hover:bg-white/20 text-white border-white/10'
                        }`}
                    >
                      {answer}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setFinished(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-105 text-white px-10 py-5 rounded-3xl text-xl font-semibold shadow-2xl transition-all duration-300"
            >
              Natijani ko‘rish
            </button>

            {finished && (
              <div className="mt-8 text-4xl font-bold text-white">
                Sizning natijangiz: {score} / {quiz.length}
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[35px] p-10 mt-16 mb-14 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-10">
            Bugungi kayfiyatingiz qanday?
          </h2>

          <div className="flex flex-wrap justify-center gap-5">
            {[
              '😊 Xursand',
              '😌 Tinch',
              '😟 Xavotirli',
              '😡 Jahldor',
              '😴 Charchagan'
            ].map((mood, index) => (
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                key={index}
                className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-white/20 text-white px-8 py-5 rounded-3xl text-xl shadow-2xl backdrop-blur-md hover:bg-white/20 transition-all"
              >
                {mood}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-14 mb-10"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-5xl font-bold text-cyan-300 mb-3">90%</h3>
            <p className="text-slate-100 text-lg">Insonlar stressli vaziyatlarda hissiyotlarini boshqarish qiyinligini aytishadi.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-5xl font-bold text-indigo-300 mb-3">7-8 soat</h3>
            <p className="text-slate-100 text-lg">Sifatli uyqu ruhiy holatni yaxshilashga yordam beradi.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-5xl font-bold text-blue-300 mb-3">15 min</h3>
            <p className="text-slate-100 text-lg">Kunlik sayr qilish stressni sezilarli kamaytiradi.</p>
          </div>
        </motion.div>

        <div className="text-center py-10">
          <p className="text-3xl text-white font-semibold tracking-wide">
            Rahmat e’tiboringiz uchun!
          </p>
        </div>
      </div>
    </div>
  );
}
