const grammarData = {
    "present-perfect": {
        "title": "Present Perfect vs Past Simple",
        "description": "Impara a distinguere i tempi verbali",
        "exercises": [
            {
                "type": "fill-blank",
                "difficulty": 3,
                "questions": [
                    {
                        "text": "I ___ (watch) a movie last night.",
                        "answer": "watched",
                        "explanation": "Si usa il Past Simple perché 'last night' è un tempo completamente terminato."
                    },
                    {
                        "text": "I ___ (see) that movie before.",
                        "answer": "have seen",
                        "explanation": "Si usa il Present Perfect perché non specifichiamo quando, è un'esperienza di vita."
                    },
                    {
                        "text": "She ___ (lose) her keys and now she can't enter.",
                        "answer": "has lost",
                        "explanation": "Present Perfect perché l'azione passata ha un risultato presente (non può entrare ora)."
                    },
                    {
                        "text": "Leonardo da Vinci ___ (paint) the Mona Lisa.",
                        "answer": "painted",
                        "explanation": "Past Simple perché è un evento storico concluso, l'autore non è più in vita."
                    },
                    {
                        "text": "I ___ (run) for an hour, that's why I'm tired.",
                        "answer": "have been running",
                        "explanation": "Present Perfect Continuous perché sottolinea la durata dell'azione e giustifica lo stato presente (stanchezza)."
                    },
                    {
                        "text": "They ___ (arrive) at 3 PM yesterday.",
                        "answer": "arrived",
                        "explanation": "Past Simple perché c'è un orario preciso nel passato ('at 3 PM yesterday')."
                    },
                    {
                        "text": "We ___ (live) here since 2010.",
                        "answer": "have lived",
                        "explanation": "Present Perfect perché l'azione iniziata nel passato continua ancora nel presente (usiamo 'since')."
                    },
                    {
                        "text": "She ___ (wait) for two hours when I arrived.",
                        "answer": "had been waiting",
                        "explanation": "Past Perfect Continuous perché l'azione era in corso prima di un altro momento nel passato."
                    },
                    {
                        "text": "I ___ never ___ (eat) sushi before last week.",
                        "answer": "had never eaten",
                        "explanation": "Past Perfect perché parliamo di un'esperienza mancante fino a un momento specifico del passato."
                    },
                    {
                        "text": "He ___ (work) here for 5 years and then he quit.",
                        "answer": "worked",
                        "explanation": "Past Simple perché l'azione è completamente conclusa nel passato (poi si è licenziato)."
                    },
                    {
                        "text": "I ___ (just/finish) my homework.",
                        "answer": "have just finished",
                        "explanation": "Present Perfect con 'just' per azioni appena completate con rilevanza presente."
                    },
                    {
                        "text": "When ___ you ___ (buy) your car?",
                        "answer": "did you buy",
                        "explanation": "Past Simple perché la domanda con 'when' richiede un tempo specifico."
                    },
                    {
                        "text": "___ you ever ___ (visit) Paris?",
                        "answer": "Have you ever visited",
                        "explanation": "Present Perfect con 'ever' per chiedere di esperienze di vita senza tempo specifico."
                    },
                    {
                        "text": "She ___ (study) English for three hours now.",
                        "answer": "has been studying",
                        "explanation": "Present Perfect Continuous per enfatizzare la durata di un'azione ancora in corso."
                    },
                    {
                        "text": "I ___ (meet) him at the party last Saturday.",
                        "answer": "met",
                        "explanation": "Past Simple perché 'last Saturday' è un tempo completamente concluso."
                    },
                    {
                        "text": "They ___ (not/call) me yet.",
                        "answer": "haven't called",
                        "explanation": "Present Perfect con 'yet' per azioni attese ma non ancora avvenute."
                    },
                    {
                        "text": "We ___ (be) friends since childhood.",
                        "answer": "have been",
                        "explanation": "Present Perfect perché l'amicizia iniziata nel passato continua nel presente."
                    },
                    {
                        "text": "I ___ (see) her three times this week.",
                        "answer": "have seen",
                        "explanation": "Present Perfect perché 'this week' è un periodo ancora aperto (non finito)."
                    },
                    {
                        "text": "He ___ (break) his leg last month.",
                        "answer": "broke",
                        "explanation": "Past Simple perché 'last month' è un periodo completamente terminato."
                    },
                    {
                        "text": "How long ___ you ___ (know) each other?",
                        "answer": "have you known",
                        "explanation": "Present Perfect con 'How long' per chiedere la durata di uno stato che continua."
                    }
                ]
            },
            {
                "type": "multiple-choice",
                "difficulty": 2,
                "questions": [
                    {
                        "text": "Which sentence is correct?",
                        "options": [
                            "I have saw him yesterday.",
                            "I have seen him yesterday.",
                            "I seeing him yesterday.",
                            "I saw him yesterday."
                        ],
                        "answer": 3,
                        "explanation": "'Yesterday' è un tempo concluso, quindi si usa il Past Simple. 'Have seen' non può essere usato con marcatori temporali specifici del passato."
                    },
                    {
                        "text": "Choose the correct form: She ___ her passport and can't travel now.",
                        "options": [
                            "lost",
                            "has lost",
                            "is losing",
                            "was losing"
                        ],
                        "answer": 1,
                        "explanation": "Present Perfect perché l'azione passata (perdere il passaporto) ha una conseguenza presente (non può viaggiare ora)."
                    },
                    {
                        "text": "I ___ in this company for 10 years before I resigned.",
                        "options": [
                            "have worked",
                            "worked",
                            "am working",
                            "work"
                        ],
                        "answer": 1,
                        "explanation": "Past Simple perché l'azione è completamente conclusa nel passato (prima di dimettersi)."
                    },
                    {
                        "text": "Which is the correct question?",
                        "options": [
                            "When have you arrived?",
                            "When you arrived?",
                            "When did you arrive?",
                            "When you have arrived?"
                        ],
                        "answer": 2,
                        "explanation": "Con 'when' si usa il Past Simple perché chiediamo un momento specifico nel passato."
                    },
                    {
                        "text": "___ you ever ___ to New York?",
                        "options": [
                            "Have / been",
                            "Did / go",
                            "Are / going",
                            "Do / go"
                        ],
                        "answer": 0,
                        "explanation": "Present Perfect con 'ever' per chiedere esperienze di vita senza tempo specifico."
                    },
                    {
                        "text": "I'm exhausted because I ___ all day.",
                        "options": [
                            "worked",
                            "work",
                            "am working",
                            "have been working"
                        ],
                        "answer": 3,
                        "explanation": "Present Perfect Continuous per spiegare uno stato presente (esaustione) attraverso un'azione prolungata."
                    },
                    {
                        "text": "Shakespeare ___ many famous plays.",
                        "options": [
                            "is writing",
                            "wrote",
                            "writes",
                            "has written"
                        ],
                        "answer": 1,
                        "explanation": "Past Simple perché parliamo di una persona non più in vita e di eventi storici conclusi."
                    },
                    {
                        "text": "They ___ three cups of coffee this morning.",
                        "options": [
                            "drink",
                            "drank",
                            "have drunk",
                            "are drinking"
                        ],
                        "answer": 1,
                        "explanation": "Se la mattina è conclusa: Past Simple. Se è ancora mattina: Present Perfect. In genere si presume conclusa."
                    },
                    {
                        "text": "I ___ him since we were children.",
                        "options": [
                            "know",
                            "have known",
                            "am knowing",
                            "knew"
                        ],
                        "answer": 1,
                        "explanation": "Present Perfect con 'since' per una situazione iniziata nel passato che continua nel presente."
                    },
                    {
                        "text": "She ___ her homework an hour ago.",
                        "options": [
                            "finishes",
                            "finished",
                            "has finished",
                            "is finishing"
                        ],
                        "answer": 1,
                        "explanation": "Past Simple perché 'an hour ago' è un marcatore temporale specifico e concluso."
                    },
                    {
                        "text": "We ___ to move house next year.",
                        "options": [
                            "decided",
                            "are deciding",
                            "decide",
                            "have decided"
                        ],
                        "answer": 3,
                        "explanation": "Present Perfect perché la decisione è stata presa nel passato ma è rilevante ora (influenza il futuro)."
                    },
                    {
                        "text": "I ___ never ___ such a beautiful sunset.",
                        "options": [
                            "do / see",
                            "did / see",
                            "am / seeing",
                            "have / seen"
                        ],
                        "answer": 3,
                        "explanation": "Present Perfect con 'never' per esprimere esperienze di vita fino ad ora."
                    },
                    {
                        "text": "When I was young, I ___ football every day.",
                        "options": [
                            "have played",
                            "played",
                            "play",
                            "am playing"
                        ],
                        "answer": 1,
                        "explanation": "Past Simple per azioni abituali in un periodo del passato ormai concluso."
                    },
                    {
                        "text": "How many times ___ you ___ that movie?",
                        "options": [
                            "are / watching",
                            "have / watched",
                            "did / watch",
                            "do / watch"
                        ],
                        "answer": 1,
                        "explanation": "Present Perfect perché chiediamo il totale delle volte fino ad ora, senza tempo specifico."
                    },
                    {
                        "text": "I ___ my keys. Have you seen them?",
                        "options": [
                            "am losing",
                            "have lost",
                            "lose",
                            "lost"
                        ],
                        "answer": 1,
                        "explanation": "Present Perfect perché l'azione passata ha una conseguenza presente (cerco le chiavi ora)."
                    },
                    {
                        "text": "They ___ married in 2015.",
                        "options": [
                            "got",
                            "have got",
                            "are getting",
                            "get"
                        ],
                        "answer": 0,
                        "explanation": "Past Simple perché c'è una data specifica (2015) che indica un tempo concluso."
                    },
                    {
                        "text": "I ___ him for years but I don't know where he is now.",
                        "options": [
                            "am not seeing",
                            "haven't seen",
                            "don't see",
                            "didn't see"
                        ],
                        "answer": 1,
                        "explanation": "Present Perfect negativo con 'for years' per un'assenza che continua fino ad ora."
                    },
                    {
                        "text": "She ___ in the garden when it started raining.",
                        "options": [
                            "was working",
                            "has worked",
                            "worked",
                            "works"
                        ],
                        "answer": 0,
                        "explanation": "Past Continuous perché l'azione era in corso quando è successo qualcos'altro."
                    },
                    {
                        "text": "I ___ this book three times already.",
                        "options": [
                            "am reading",
                            "have read",
                            "was reading",
                            "read"
                        ],
                        "answer": 1,
                        "explanation": "Present Perfect con 'already' per azioni completate in un periodo che include il presente."
                    },
                    {
                        "text": "Last summer we ___ to Greece.",
                        "options": [
                            "go",
                            "went",
                            "have been",
                            "are going"
                        ],
                        "answer": 1,
                        "explanation": "Past Simple perché 'last summer' è un periodo specifico e completamente concluso."
                    }
                ]
            },
            {
                "type": "translation",
                "difficulty": 4,
                "questions": [
                    {
                        "text": "Ho visto quel film la settimana scorsa.",
                        "answer": "I saw that film last week",
                        "alternatives": [
                            "I watched that film last week",
                            "I saw that movie last week"
                        ],
                        "explanation": "Past Simple perché 'la settimana scorsa' (last week) è un tempo concluso. 'Saw' o 'watched' sono entrambi corretti."
                    },
                    {
                        "text": "Non ho mai mangiato cibo giapponese.",
                        "answer": "I have never eaten Japanese food",
                        "alternatives": [
                            "I've never eaten Japanese food"
                        ],
                        "explanation": "Present Perfect con 'never' per esprimere un'esperienza mai fatta fino ad ora."
                    },
                    {
                        "text": "Vivo qui dal 2010.",
                        "answer": "I have lived here since 2010",
                        "alternatives": [
                            "I've lived here since 2010",
                            "I have been living here since 2010"
                        ],
                        "explanation": "Present Perfect con 'since' per un'azione iniziata nel passato che continua nel presente."
                    },
                    {
                        "text": "Lei ha perso il suo telefono e ora non può chiamare.",
                        "answer": "She has lost her phone and now she can't call",
                        "alternatives": [
                            "She's lost her phone and now she can't call",
                            "She has lost her phone and now she cannot call"
                        ],
                        "explanation": "Present Perfect perché l'azione passata (perdere il telefono) ha una conseguenza presente (non può chiamare)."
                    },
                    {
                        "text": "Sto correndo da un'ora.",
                        "answer": "I have been running for an hour",
                        "alternatives": [
                            "I've been running for an hour",
                            "I have been running for one hour"
                        ],
                        "explanation": "Present Perfect Continuous per sottolineare la durata dell'azione ancora in corso."
                    },
                    {
                        "text": "Quando sei arrivato?",
                        "answer": "When did you arrive",
                        "alternatives": [
                            "When did you get here"
                        ],
                        "explanation": "Past Simple perché 'quando' (when) richiede un tempo specifico nel passato."
                    },
                    {
                        "text": "Hanno appena finito i compiti.",
                        "answer": "They have just finished their homework",
                        "alternatives": [
                            "They've just finished their homework",
                            "They have just finished the homework"
                        ],
                        "explanation": "Present Perfect con 'just' per azioni appena completate con rilevanza presente."
                    },
                    {
                        "text": "Hai mai visitato Londra?",
                        "answer": "Have you ever visited London",
                        "alternatives": [
                            "Have you ever been to London"
                        ],
                        "explanation": "Present Perfect con 'ever' per chiedere di esperienze di vita senza specificare quando."
                    },
                    {
                        "text": "Lavoravo lì prima di traferirmi qui.",
                        "answer": "I worked there before I moved here",
                        "alternatives": [
                            "I used to work there before I moved here"
                        ],
                        "explanation": "Past Simple perché entrambe le azioni sono concluse nel passato."
                    },
                    {
                        "text": "Non l'ho ancora chiamata.",
                        "answer": "I haven't called her yet",
                        "alternatives": [
                            "I have not called her yet",
                            "I haven't phoned her yet"
                        ],
                        "explanation": "Present Perfect con 'yet' per azioni attese ma non ancora compiute."
                    }
                ]
            },
            {
                "type": "cloze-test",
                "difficulty": 4,
                "context": "Dear Sarah,\n\nI hope you're well! I'm writing to tell you about my recent experiences. I (1) ......... in London for three months now, and I absolutely love it! When I first (2) ......... here in September, I (3) ......... very nervous because I (4) ......... never ......... abroad before.\n\nSince then, so much (5) .........! I (6) ......... a great job at a marketing company, and I (7) ......... there for two months already. My colleagues are fantastic – yesterday we (8) ......... out for dinner to celebrate a successful project.\n\nI (9) ......... also ......... some amazing places around the city. Last weekend, I (10) ......... the British Museum, and I (11) ......... to the theatre twice this month. I can't believe how much I (12) ......... in such a short time!\n\nHow about you? (13) ......... you ......... any news lately?\n\nWrite back soon!\nEmma",
                "questions": [
                    {
                        "blank_number": 1,
                        "options": [
                            "A) have been living",
                            "B) lived",
                            "C) was living",
                            "D) am living"
                        ],
                        "answer": 0,
                        "explanation": "Present Perfect Continuous perché l'azione iniziata nel passato ('three months ago') continua ancora nel presente."
                    },
                    {
                        "blank_number": 2,
                        "options": [
                            "A) have arrived",
                            "B) was arriving",
                            "C) arrived",
                            "D) arrive"
                        ],
                        "answer": 2,
                        "explanation": "Past Simple perché c'è un momento specifico nel passato ('in September')."
                    },
                    {
                        "blank_number": 3,
                        "options": [
                            "A) have been",
                            "B) am",
                            "C) was",
                            "D) had been"
                        ],
                        "answer": 2,
                        "explanation": "Past Simple perché si riferisce a uno stato in un momento specifico del passato (quando è arrivata)."
                    },
                    {
                        "blank_number": 4,
                        "options": [
                            "A) have / lived",
                            "B) had / lived",
                            "C) did / live",
                            "D) was / living"
                        ],
                        "answer": 1,
                        "explanation": "Past Perfect perché l'azione (mai vissuto all'estero) è precedente a un altro momento nel passato (l'arrivo a Londra)."
                    },
                    {
                        "blank_number": 5,
                        "options": [
                            "A) happened",
                            "B) has happened",
                            "C) is happening",
                            "D) happens"
                        ],
                        "answer": 1,
                        "explanation": "Present Perfect perché 'since then' indica un periodo che parte dal passato e arriva fino ad ora."
                    },
                    {
                        "blank_number": 6,
                        "options": [
                            "A) have found",
                            "B) found",
                            "C) am finding",
                            "D) find"
                        ],
                        "answer": 0,
                        "explanation": "Present Perfect perché l'azione di trovare il lavoro è avvenuta nel periodo 'since then' e ha rilevanza presente."
                    },
                    {
                        "blank_number": 7,
                        "options": [
                            "A) worked",
                            "B) work",
                            "C) have been working",
                            "D) am working"
                        ],
                        "answer": 2,
                        "explanation": "Present Perfect Continuous perché sottolinea la durata ('for two months already') di un'azione ancora in corso."
                    },
                    {
                        "blank_number": 8,
                        "options": [
                            "A) have gone",
                            "B) went",
                            "C) go",
                            "D) were going"
                        ],
                        "answer": 1,
                        "explanation": "Past Simple perché 'yesterday' è un tempo specifico e completamente concluso."
                    },
                    {
                        "blank_number": 9,
                        "options": [
                            "A) visited",
                            "B) visit",
                            "C) have / visited",
                            "D) was visiting"
                        ],
                        "answer": 2,
                        "explanation": "Present Perfect perché si parla di esperienze accumulate nel periodo 'since then', senza specificare quando esattamente."
                    },
                    {
                        "blank_number": 10,
                        "options": [
                            "A) have visited",
                            "B) visited",
                            "C) was visiting",
                            "D) visit"
                        ],
                        "answer": 1,
                        "explanation": "Past Simple perché c'è un momento specifico ('last weekend')."
                    },
                    {
                        "blank_number": 11,
                        "options": [
                            "A) went",
                            "B) go",
                            "C) have been",
                            "D) was going"
                        ],
                        "answer": 2,
                        "explanation": "Present Perfect perché 'this month' è un periodo ancora aperto (non ancora concluso)."
                    },
                    {
                        "blank_number": 12,
                        "options": [
                            "A) have experienced",
                            "B) experienced",
                            "C) am experiencing",
                            "D) experience"
                        ],
                        "answer": 0,
                        "explanation": "Present Perfect perché si riferisce alle esperienze accumulate in un periodo che va dal passato ad ora."
                    },
                    {
                        "blank_number": 13,
                        "options": [
                            "A) Did / have",
                            "B) Do / have",
                            "C) Have / had",
                            "D) Are / having"
                        ],
                        "answer": 2,
                        "explanation": "Present Perfect perché 'lately' (ultimamente) si usa per chiedere di eventi recenti senza tempo specifico."
                    }
                ]
            },
            {
                "type": "key-word-transformation",
                "difficulty": 5,
                "questions": [
                    {
                        "first_sentence": "I started working here two years ago.",
                        "keyword": "for",
                        "second_sentence_start": "I",
                        "second_sentence_end": "two years.",
                        "answer": "have been working here for",
                        "alternatives": ["have worked here for"],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione da Past Simple con tempo definito (two years ago) a Present Perfect/Continuous con 'for' per indicare durata."
                    },
                    {
                        "first_sentence": "This is my first visit to Paris.",
                        "keyword": "never",
                        "second_sentence_start": "I",
                        "second_sentence_end": "Paris before.",
                        "answer": "have never been to",
                        "alternatives": ["have never visited"],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione da forma affermativa a Present Perfect negativo con 'never' per indicare esperienza mai avvenuta."
                    },
                    {
                        "first_sentence": "When did you buy your car?",
                        "keyword": "long",
                        "second_sentence_start": "How",
                        "second_sentence_end": "your car?",
                        "answer": "long have you had",
                        "alternatives": ["long have you owned"],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione da domanda con 'when' (Past Simple) a domanda con 'How long' (Present Perfect) per chiedere durata."
                    },
                    {
                        "first_sentence": "The last time I saw him was in 2020.",
                        "keyword": "since",
                        "second_sentence_start": "I",
                        "second_sentence_end": "2020.",
                        "answer": "haven't seen him since",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione da Past Simple affermativo a Present Perfect negativo con 'since' per indicare periodo di tempo."
                    },
                    {
                        "first_sentence": "She moved to London three months ago and she still lives there.",
                        "keyword": "living",
                        "second_sentence_start": "She",
                        "second_sentence_end": "three months.",
                        "answer": "has been living there for",
                        "alternatives": ["has been living in London for"],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione che unisce due frasi usando Present Perfect Continuous per indicare azione iniziata nel passato e ancora in corso."
                    },
                    {
                        "first_sentence": "I haven't eaten sushi before.",
                        "keyword": "first",
                        "second_sentence_start": "This is the",
                        "second_sentence_end": "sushi.",
                        "answer": "first time I have eaten",
                        "alternatives": ["first time I've eaten"],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione da Present Perfect negativo alla struttura 'This is the first time' + Present Perfect."
                    },
                    {
                        "first_sentence": "They got married five years ago.",
                        "keyword": "been",
                        "second_sentence_start": "They",
                        "second_sentence_end": "five years.",
                        "answer": "have been married for",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione da Past Simple a Present Perfect per indicare uno stato che continua dal passato al presente."
                    },
                    {
                        "first_sentence": "It's two months since I last spoke to her.",
                        "keyword": "for",
                        "second_sentence_start": "I",
                        "second_sentence_end": "two months.",
                        "answer": "haven't spoken to her for",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione dalla struttura 'It's ... since' a Present Perfect negativo con 'for'."
                    },
                    {
                        "first_sentence": "He started learning Spanish when he was ten and he still learns it now.",
                        "keyword": "since",
                        "second_sentence_start": "He",
                        "second_sentence_end": "he was ten.",
                        "answer": "has been learning Spanish since",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione usando Present Perfect Continuous con 'since' per azione iniziata in un momento specifico del passato e ancora in corso."
                    },
                    {
                        "first_sentence": "The meeting finished an hour ago.",
                        "keyword": "over",
                        "second_sentence_start": "The meeting",
                        "second_sentence_end": "an hour.",
                        "answer": "has been over for",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione da Past Simple a Present Perfect per indicare uno stato che è vero da un certo periodo di tempo."
                    }
                ]
            }
        ]
    },
    "modals": {
        "title": "Modal Verbs: Obligation & Prohibition",
        "description": "Must, Have to, Mustn't e Don't have to",
        "exercises": [
            {
                "type": "fill-blank",
                "difficulty": 2,
                "questions": [
                    {
                        "text": "I ___ call my mum. I haven't spoken to her in days.",
                        "answer": "must",
                        "explanation": "Must perché è un obbligo sentito internamente (sento io il bisogno di chiamarla)."
                    },
                    {
                        "text": "You ___ park here. It's illegal.",
                        "answer": "mustn't",
                        "explanation": "Mustn't indica proibizione assoluta (è vietato)."
                    },
                    {
                        "text": "I ___ work on Saturdays because my boss told me.",
                        "answer": "have to",
                        "explanation": "Have to perché è un obbligo esterno imposto dal capo."
                    },
                    {
                        "text": "You ___ come if you're tired. It's optional.",
                        "answer": "don't have to",
                        "explanation": "Don't have to indica assenza di obbligo (sei libero di scegliere)."
                    },
                    {
                        "text": "Passengers ___ fasten their seatbelts.",
                        "answer": "must",
                        "explanation": "Must per regole ufficiali e impersonali (regolamento dell'aereo)."
                    },
                    {
                        "text": "You ___ tell anyone. It's a secret.",
                        "answer": "mustn't",
                        "explanation": "Mustn't per proibizione forte (è assolutamente vietato rivelare il segreto)."
                    },
                    {
                        "text": "___ you ___ wear a uniform at work?",
                        "answer": "Do / have to",
                        "explanation": "Do you have to per chiedere di un obbligo esterno (è richiesto dall'azienda?)."
                    },
                    {
                        "text": "I ___ get up early tomorrow. It's Sunday!",
                        "answer": "don't have to",
                        "explanation": "Don't have to perché non c'è obbligo (ma posso svegliarmi presto se voglio)."
                    },
                    {
                        "text": "Students ___ use their phones during the exam.",
                        "answer": "mustn't",
                        "explanation": "Mustn't per una proibizione assoluta (regola d'esame)."
                    },
                    {
                        "text": "I really ___ study more for the test.",
                        "answer": "must",
                        "explanation": "Must per un obbligo sentito personalmente (so che è necessario)."
                    },
                    {
                        "text": "You ___ buy tickets in advance. We can get them at the door.",
                        "answer": "don't have to",
                        "explanation": "Don't have to perché non è necessario (anche se possiamo farlo)."
                    },
                    {
                        "text": "We ___ be late for the meeting. The boss is strict.",
                        "answer": "mustn't",
                        "explanation": "Mustn't per indicare che arrivare tardi avrebbe conseguenze negative."
                    },
                    {
                        "text": "She ___ take medication every day. Doctor's orders.",
                        "answer": "has to",
                        "explanation": "Has to per obbligo esterno imposto dal dottore."
                    },
                    {
                        "text": "You ___ smoke in the hospital.",
                        "answer": "mustn't",
                        "explanation": "Mustn't per proibizione assoluta (regola dell'ospedale)."
                    },
                    {
                        "text": "I ___ finish this report by Friday. My manager needs it.",
                        "answer": "have to",
                        "explanation": "Have to per obbligo esterno (richiesta del manager)."
                    },
                    {
                        "text": "You ___ shout. I can hear you perfectly.",
                        "answer": "don't have to",
                        "explanation": "Don't have to perché non è necessario gridare."
                    },
                    {
                        "text": "Children ___ play with matches.",
                        "answer": "mustn't",
                        "explanation": "Mustn't per proibizione forte (è pericoloso)."
                    },
                    {
                        "text": "___ I ___ bring anything to the party?",
                        "answer": "Do / have to",
                        "explanation": "Do I have to per chiedere se c'è un obbligo esterno."
                    },
                    {
                        "text": "I ___ remember to send that email. It's important.",
                        "answer": "must",
                        "explanation": "Must per un promemoria personale importante."
                    },
                    {
                        "text": "You ___ wear formal clothes. It's a casual event.",
                        "answer": "don't have to",
                        "explanation": "Don't have to perché non c'è obbligo di vestirsi formalmente."
                    }
                ]
            },
            {
                "type": "multiple-choice",
                "difficulty": 2,
                "questions": [
                    {
                        "text": "Which sentence means 'It's forbidden'?",
                        "options": [
                            "You don't have to do it.",
                            "You mustn't do it.",
                            "You have to do it.",
                            "You must do it."
                        ],
                        "answer": 1,
                        "explanation": "Mustn't esprime proibizione (è vietato). Don't have to significa che non è obbligatorio ma puoi farlo."
                    },
                    {
                        "text": "I ___ go to the dentist. I have an appointment.",
                        "options": [
                            "mustn't",
                            "don't have to",
                            "have to",
                            "must"
                        ],
                        "answer": 2,
                        "explanation": "Have to per un obbligo esterno (appuntamento fissato)."
                    },
                    {
                        "text": "You ___ forget her birthday. She'll be upset.",
                        "options": [
                            "must",
                            "have to",
                            "don't have to",
                            "mustn't"
                        ],
                        "answer": 3,
                        "explanation": "Mustn't perché dimenticare avrebbe conseguenze negative."
                    },
                    {
                        "text": "Which is correct?",
                        "options": [
                            "I must studying.",
                            "I must study.",
                            "I have must study.",
                            "I must to study."
                        ],
                        "answer": 1,
                        "explanation": "Must è seguito dal verbo base (infinito senza to)."
                    },
                    {
                        "text": "We ___ hurry. We have plenty of time.",
                        "options": [
                            "must",
                            "mustn't",
                            "have to",
                            "don't have to"
                        ],
                        "answer": 3,
                        "explanation": "Don't have to perché non c'è necessità di sbrigarsi."
                    },
                    {
                        "text": "Visitors ___ feed the animals in the zoo.",
                        "options": [
                            "have to",
                            "must",
                            "mustn't",
                            "don't have to"
                        ],
                        "answer": 2,
                        "explanation": "Mustn't perché è una proibizione (regola dello zoo)."
                    },
                    {
                        "text": "I ___ wear glasses because I can't see well.",
                        "options": [
                            "have to",
                            "mustn't",
                            "must",
                            "don't have to"
                        ],
                        "answer": 0,
                        "explanation": "Have to per una necessità esterna (problema di vista)."
                    },
                    {
                        "text": "You ___ be 18 to enter this club.",
                        "options": [
                            "don't have to",
                            "have to",
                            "must",
                            "mustn't"
                        ],
                        "answer": 1,
                        "explanation": "Have to / must per un requisito obbligatorio (regola del club). Entrambi sono corretti qui."
                    },
                    {
                        "text": "She ___ cook tonight. We're going to a restaurant.",
                        "options": [
                            "must",
                            "doesn't have to",
                            "has to",
                            "mustn't"
                        ],
                        "answer": 1,
                        "explanation": "Doesn't have to perché non c'è necessità di cucinare."
                    },
                    {
                        "text": "You ___ touch that! It's hot!",
                        "options": [
                            "don't have to",
                            "must",
                            "have to",
                            "mustn't"
                        ],
                        "answer": 3,
                        "explanation": "Mustn't per proibizione urgente (c'è pericolo)."
                    },
                    {
                        "text": "___ we ___ book a table in advance?",
                        "options": [
                            "Have / must",
                            "Do / have to",
                            "Must / to",
                            "Do / must"
                        ],
                        "answer": 1,
                        "explanation": "Do we have to per chiedere se c'è un obbligo/necessità."
                    },
                    {
                        "text": "I ___ stop eating sugar. The doctor said so.",
                        "options": [
                            "don't have to",
                            "have to",
                            "mustn't",
                            "must"
                        ],
                        "answer": 1,
                        "explanation": "Have to per obbligo esterno (ordine del dottore)."
                    },
                    {
                        "text": "You ___ pay now. You can pay later.",
                        "options": [
                            "must",
                            "don't have to",
                            "have to",
                            "mustn't"
                        ],
                        "answer": 1,
                        "explanation": "Don't have to perché non è necessario pagare subito."
                    },
                    {
                        "text": "Employees ___ be at work by 9 AM.",
                        "options": [
                            "have to",
                            "must",
                            "don't have to",
                            "mustn't"
                        ],
                        "answer": 0,
                        "explanation": "Have to / must per obbligo lavorativo (regola aziendale)."
                    },
                    {
                        "text": "You ___ drive so fast. It's dangerous.",
                        "options": [
                            "mustn't",
                            "don't have to",
                            "must",
                            "have to"
                        ],
                        "answer": 0,
                        "explanation": "Mustn't perché guidare troppo veloce è pericoloso (proibizione)."
                    },
                    {
                        "text": "I ___ go to the gym, but I want to stay fit.",
                        "options": [
                            "don't have to",
                            "must",
                            "have to",
                            "mustn't"
                        ],
                        "answer": 0,
                        "explanation": "Don't have to perché non è obbligatorio, ma scelgo di farlo."
                    },
                    {
                        "text": "You ___ use a dictionary in the test.",
                        "options": [
                            "mustn't",
                            "must",
                            "don't have to",
                            "have to"
                        ],
                        "answer": 0,
                        "explanation": "Mustn't per proibizione (regola del test)."
                    },
                    {
                        "text": "I really ___ lose weight. I feel unhealthy.",
                        "options": [
                            "must",
                            "have to",
                            "don't have to",
                            "mustn't"
                        ],
                        "answer": 0,
                        "explanation": "Must per un obbligo sentito personalmente."
                    },
                    {
                        "text": "You ___ take an umbrella. It might rain.",
                        "options": [
                            "should",
                            "mustn't",
                            "have to",
                            "must"
                        ],
                        "answer": 0,
                        "explanation": "Should per un consiglio (non un obbligo assoluto come must/have to)."
                    },
                    {
                        "text": "We ___ make noise. The baby is sleeping.",
                        "options": [
                            "have to",
                            "mustn't",
                            "must",
                            "don't have to"
                        ],
                        "answer": 1,
                        "explanation": "Mustn't perché fare rumore disturberebbe il bambino (proibizione)."
                    }
                ]
            },
            {
                "type": "translation",
                "difficulty": 3,
                "questions": [
                    {
                        "text": "Devo chiamare mia madre.",
                        "answer": "I must call my mum",
                        "alternatives": [
                            "I must call my mother",
                            "I have to call my mum"
                        ],
                        "explanation": "Must per obbligo sentito personalmente. Have to sarebbe anche accettabile."
                    },
                    {
                        "text": "Non devi parcheggiare qui. È vietato.",
                        "answer": "You mustn't park here",
                        "alternatives": [
                            "You must not park here"
                        ],
                        "explanation": "Mustn't per proibizione assoluta."
                    },
                    {
                        "text": "Devo lavorare il sabato.",
                        "answer": "I have to work on Saturdays",
                        "alternatives": [
                            "I have to work on Saturday",
                            "I must work on Saturdays"
                        ],
                        "explanation": "Have to per obbligo esterno (contratto di lavoro)."
                    },
                    {
                        "text": "Non devi venire se sei stanco.",
                        "answer": "You don't have to come if you're tired",
                        "alternatives": [
                            "You don't have to come if you are tired"
                        ],
                        "explanation": "Don't have to per assenza di obbligo (sei libero di scegliere)."
                    },
                    {
                        "text": "Non devi dirlo a nessuno.",
                        "answer": "You mustn't tell anyone",
                        "alternatives": [
                            "You must not tell anyone"
                        ],
                        "explanation": "Mustn't per proibizione (è un segreto)."
                    },
                    {
                        "text": "Devi indossare una cravatta?",
                        "answer": "Do you have to wear a tie",
                        "alternatives": [
                            "Must you wear a tie"
                        ],
                        "explanation": "Do you have to per chiedere di un obbligo esterno."
                    },
                    {
                        "text": "Non devo svegliarmi presto domani.",
                        "answer": "I don't have to get up early tomorrow",
                        "alternatives": [
                            "I don't have to wake up early tomorrow"
                        ],
                        "explanation": "Don't have to perché non c'è obbligo (è festa/weekend)."
                    },
                    {
                        "text": "I passeggeri devono allacciare le cinture.",
                        "answer": "Passengers must fasten their seatbelts",
                        "alternatives": [
                            "Passengers have to fasten their seatbelts",
                            "Passengers must fasten seatbelts"
                        ],
                        "explanation": "Must per regole ufficiali impersonali."
                    },
                    {
                        "text": "Non devi fumare qui.",
                        "answer": "You mustn't smoke here",
                        "alternatives": [
                            "You must not smoke here"
                        ],
                        "explanation": "Mustn't per proibizione."
                    },
                    {
                        "text": "Devo davvero studiare di più.",
                        "answer": "I really must study more",
                        "alternatives": [
                            "I must really study more",
                            "I really have to study more"
                        ],
                        "explanation": "Must per obbligo sentito personalmente (necessità interna)."
                    }
                ]
            },
            {
                "type": "cloze-test",
                "difficulty": 4,
                "context": "Dear Team,\n\nI'm writing to clarify the office rules for everyone. First of all, you (1) ......... arrive at 9 AM sharp – this is company policy and everyone (2) ......... follow it. However, you (3) ......... stay after 6 PM if you've finished your work – it's completely optional.\n\nRegarding the dress code: you (4) ......... wear formal clothes on client meeting days, but on regular days you (5) ......... wear a suit if you prefer something more casual. Just remember that you (6) ......... wear shorts or flip-flops – that's strictly forbidden.\n\nAbout breaks: you (7) ......... take a lunch break, it's mandatory. You (8) ......... eat at your desk during this time – please use the cafeteria. However, you (9) ......... take coffee breaks whenever you need them.\n\nParking: if you drive to work, you (10) ......... register your car with reception. You absolutely (11) ......... park in the visitor spaces – they're reserved. But you (12) ......... worry about finding a spot, we have plenty of employee parking.\n\nFinally, you (13) ......... attend the monthly team meeting – it's required for everyone.\n\nBest regards,\nManagement",
                "questions": [
                    {
                        "blank_number": 1,
                        "options": [
                            "A) don't have to",
                            "B) mustn't",
                            "C) must",
                            "D) should"
                        ],
                        "answer": 2,
                        "explanation": "Must perché è una regola aziendale ufficiale (obbligo impersonale)."
                    },
                    {
                        "blank_number": 2,
                        "options": [
                            "A) doesn't have to",
                            "B) must",
                            "C) mustn't",
                            "D) might"
                        ],
                        "answer": 1,
                        "explanation": "Must perché è una policy che tutti devono seguire."
                    },
                    {
                        "blank_number": 3,
                        "options": [
                            "A) must",
                            "B) mustn't",
                            "C) have to",
                            "D) don't have to"
                        ],
                        "answer": 3,
                        "explanation": "Don't have to perché è opzionale (assenza di obbligo)."
                    },
                    {
                        "blank_number": 4,
                        "options": [
                            "A) don't have to",
                            "B) mustn't",
                            "C) must",
                            "D) shouldn't"
                        ],
                        "answer": 2,
                        "explanation": "Must/have to per un obbligo nei giorni di incontro con i clienti."
                    },
                    {
                        "blank_number": 5,
                        "options": [
                            "A) must",
                            "B) have to",
                            "C) mustn't",
                            "D) don't have to"
                        ],
                        "answer": 3,
                        "explanation": "Don't have to perché la giacca è opzionale nei giorni normali."
                    },
                    {
                        "blank_number": 6,
                        "options": [
                            "A) don't have to",
                            "B) have to",
                            "C) mustn't",
                            "D) must"
                        ],
                        "answer": 2,
                        "explanation": "Mustn't perché è strettamente proibito."
                    },
                    {
                        "blank_number": 7,
                        "options": [
                            "A) don't have to",
                            "B) mustn't",
                            "C) must",
                            "D) might"
                        ],
                        "answer": 2,
                        "explanation": "Must perché la pausa pranzo è obbligatoria."
                    },
                    {
                        "blank_number": 8,
                        "options": [
                            "A) must",
                            "B) have to",
                            "C) don't have to",
                            "D) mustn't"
                        ],
                        "answer": 3,
                        "explanation": "Mustn't perché è vietato mangiare alla scrivania durante la pausa."
                    },
                    {
                        "blank_number": 9,
                        "options": [
                            "A) mustn't",
                            "B) must",
                            "C) have to",
                            "D) don't have to"
                        ],
                        "answer": 3,
                        "explanation": "Don't have to perché non serve chiedere permesso (assenza di obbligo)."
                    },
                    {
                        "blank_number": 10,
                        "options": [
                            "A) don't have to",
                            "B) mustn't",
                            "C) must",
                            "D) shouldn't"
                        ],
                        "answer": 2,
                        "explanation": "Must perché è obbligatorio registrare l'auto."
                    },
                    {
                        "blank_number": 11,
                        "options": [
                            "A) don't have to",
                            "B) have to",
                            "C) must",
                            "D) mustn't"
                        ],
                        "answer": 3,
                        "explanation": "Mustn't perché è assolutamente vietato parcheggiare negli spazi visitatori."
                    },
                    {
                        "blank_number": 12,
                        "options": [
                            "A) must",
                            "B) have to",
                            "C) mustn't",
                            "D) don't have to"
                        ],
                        "answer": 3,
                        "explanation": "Don't have to perché non è necessario preoccuparsi (ce ne sono molti)."
                    },
                    {
                        "blank_number": 13,
                        "options": [
                            "A) don't have to",
                            "B) mustn't",
                            "C) must",
                            "D) might"
                        ],
                        "answer": 2,
                        "explanation": "Must perché è richiesto per tutti."
                    }
                ]
            },
            {
                "type": "key-word-transformation",
                "difficulty": 5,
                "questions": [
                    {
                        "first_sentence": "It's forbidden to smoke in this building.",
                        "keyword": "mustn't",
                        "second_sentence_start": "You",
                        "second_sentence_end": "in this building.",
                        "answer": "mustn't smoke",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione di 'forbidden' in 'mustn't' per esprimere proibizione."
                    },
                    {
                        "first_sentence": "It's not necessary for you to bring food.",
                        "keyword": "have",
                        "second_sentence_start": "You",
                        "second_sentence_end": "bring food.",
                        "answer": "don't have to",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione di 'not necessary' in 'don't have to' per assenza di obbligo."
                    },
                    {
                        "first_sentence": "Is it necessary for students to wear uniforms?",
                        "keyword": "have",
                        "second_sentence_start": "Do",
                        "second_sentence_end": "wear uniforms?",
                        "answer": "students have to",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione di 'necessary' in 'have to' per obbligo esterno."
                    },
                    {
                        "first_sentence": "I advise you to see a doctor.",
                        "keyword": "should",
                        "second_sentence_start": "You",
                        "second_sentence_end": "see a doctor.",
                        "answer": "should",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione di 'advise' in 'should' per dare un consiglio."
                    },
                    {
                        "first_sentence": "Talking during the exam is not allowed.",
                        "keyword": "mustn't",
                        "second_sentence_start": "You",
                        "second_sentence_end": "during the exam.",
                        "answer": "mustn't talk",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione di 'not allowed' in 'mustn't' per proibizione."
                    },
                    {
                        "first_sentence": "It's compulsory to pay taxes.",
                        "keyword": "must",
                        "second_sentence_start": "You",
                        "second_sentence_end": "pay taxes.",
                        "answer": "must",
                        "alternatives": ["have to"],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione di 'compulsory' in 'must' per obbligo."
                    },
                    {
                        "first_sentence": "It isn't necessary to book in advance.",
                        "keyword": "have",
                        "second_sentence_start": "You",
                        "second_sentence_end": "book in advance.",
                        "answer": "don't have to",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione di 'isn't necessary' in 'don't have to'."
                    },
                    {
                        "first_sentence": "My boss says I have to attend the meeting.",
                        "keyword": "must",
                        "second_sentence_start": "I",
                        "second_sentence_end": "attend the meeting.",
                        "answer": "must",
                        "alternatives": ["have to"],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione mantenendo l'obbligo con 'must' o 'have to'."
                    },
                    {
                        "first_sentence": "Photography is prohibited in the museum.",
                        "keyword": "mustn't",
                        "second_sentence_start": "You",
                        "second_sentence_end": "in the museum.",
                        "answer": "mustn't take photographs",
                        "alternatives": ["mustn't take photos"],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione di 'prohibited' in 'mustn't' con il verbo appropriato."
                    },
                    {
                        "first_sentence": "I really need to finish this report tonight.",
                        "keyword": "must",
                        "second_sentence_start": "I",
                        "second_sentence_end": "this report tonight.",
                        "answer": "must finish",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Trasformazione di 'really need to' in 'must' per necessità interna."
                    }
                ]
            }
        ]
    },
    "future": {
        "title": "The Future System",
        "description": "Present Simple, Present Continuous, Going to, Will",
        "exercises": [
            {
                "type": "fill-blank",
                "difficulty": 3,
                "questions": [
                    {
                        "text": "The film ___ (start) at 9 PM.",
                        "answer": "starts",
                        "explanation": "Present Simple per orari fissi e programmati ufficialmente."
                    },
                    {
                        "text": "I ___ (fly) to New York on Monday. I have the ticket.",
                        "answer": "am flying",
                        "explanation": "Present Continuous per arrangiamenti già organizzati (ho il biglietto)."
                    },
                    {
                        "text": "Watch out! You ___ (drop) that glass!",
                        "answer": "are going to drop",
                        "explanation": "Be going to per previsioni basate su evidenza visibile (vedo che sta per cadere)."
                    },
                    {
                        "text": "I think it ___ (be) a great party.",
                        "answer": "will be",
                        "explanation": "Will per previsioni/opinioni personali (I think)."
                    },
                    {
                        "text": "Wait! I ___ (help) you with those bags!",
                        "answer": "will help",
                        "explanation": "Will per decisioni spontanee prese al momento."
                    },
                    {
                        "text": "I ___ (study) medicine next year.",
                        "answer": "am going to study",
                        "explanation": "Be going to per intenzioni decise ma non ancora organizzate nei dettagli."
                    },
                    {
                        "text": "What time ___ the train ___ (leave)?",
                        "answer": "does / leave",
                        "explanation": "Present Simple per orari di trasporti pubblici."
                    },
                    {
                        "text": "We ___ (have) dinner with Mark tonight. We arranged it yesterday.",
                        "answer": "are having",
                        "explanation": "Present Continuous per piani già organizzati con altre persone."
                    },
                    {
                        "text": "Look at those clouds! It ___ (rain).",
                        "answer": "is going to rain",
                        "explanation": "Be going to per previsioni basate su evidenza presente (le nuvole)."
                    },
                    {
                        "text": "I promise I ___ (call) you tomorrow.",
                        "answer": "will call",
                        "explanation": "Will per promesse e offerte."
                    },
                    {
                        "text": "The concert ___ (begin) at 8 PM sharp.",
                        "answer": "begins",
                        "explanation": "Present Simple per eventi programmati con orario fisso."
                    },
                    {
                        "text": "I ___ (meet) Sarah at the airport. She arrives at 3.",
                        "answer": "am meeting",
                        "explanation": "Present Continuous per appuntamenti fissi già organizzati."
                    },
                    {
                        "text": "She's very talented. I'm sure she ___ (become) famous.",
                        "answer": "will become",
                        "explanation": "Will per previsioni basate su opinioni (I'm sure)."
                    },
                    {
                        "text": "I ___ (not/go) to the party. I've decided.",
                        "answer": "am not going",
                        "explanation": "Be going to per intenzioni/decisioni già prese."
                    },
                    {
                        "text": "A: The phone is ringing. B: I ___ (get) it!",
                        "answer": "will get",
                        "explanation": "Will per decisioni spontanee immediate."
                    },
                    {
                        "text": "Next summer we ___ (travel) around Europe. We've booked everything.",
                        "answer": "are travelling",
                        "explanation": "Present Continuous per piani completamente organizzati."
                    },
                    {
                        "text": "When ___ the shop ___ (open) tomorrow?",
                        "answer": "does / open",
                        "explanation": "Present Simple per orari di apertura ufficiali."
                    },
                    {
                        "text": "Don't worry, I ___ (not/tell) anyone your secret.",
                        "answer": "won't tell",
                        "explanation": "Will per promesse spontanee."
                    },
                    {
                        "text": "Be careful! You ___ (fall)!",
                        "answer": "are going to fall",
                        "explanation": "Be going to per previsioni immediate basate su evidenza."
                    },
                    {
                        "text": "I ___ (see) the dentist next Tuesday at 10 AM.",
                        "answer": "am seeing",
                        "explanation": "Present Continuous per appuntamenti fissati."
                    }
                ]
            },
            {
                "type": "multiple-choice",
                "difficulty": 2,
                "questions": [
                    {
                        "text": "Which sentence expresses a spontaneous decision?",
                        "options": [
                            "I'm going to help you.",
                            "I will help you.",
                            "I'm helping you.",
                            "I help you."
                        ],
                        "answer": 1,
                        "explanation": "Will si usa per decisioni spontanee prese mentre si parla."
                    },
                    {
                        "text": "The train ___ at 6 PM every day.",
                        "options": [
                            "will leave",
                            "leaves",
                            "is leaving",
                            "is going to leave"
                        ],
                        "answer": 1,
                        "explanation": "Present Simple per orari fissi di trasporti."
                    },
                    {
                        "text": "Look at that car! It ___ crash!",
                        "options": [
                            "is",
                            "going to",
                            "is going to",
                            "will"
                        ],
                        "answer": 2,
                        "explanation": "Be going to per previsioni basate su evidenza immediata."
                    },
                    {
                        "text": "I ___ my parents this weekend. We arranged it.",
                        "options": [
                            "will visit",
                            "visit",
                            "am going to visit",
                            "am visiting"
                        ],
                        "answer": 3,
                        "explanation": "Present Continuous per piani già organizzati."
                    },
                    {
                        "text": "I think Manchester ___ win the match.",
                        "options": [
                            "is going to",
                            "does",
                            "will",
                            "is"
                        ],
                        "answer": 2,
                        "explanation": "Will per opinioni e previsioni personali (I think)."
                    },
                    {
                        "text": "What time ___ the film ___?",
                        "options": [
                            "is / going to start",
                            "will / start",
                            "does / start",
                            "is / starting"
                        ],
                        "answer": 2,
                        "explanation": "Present Simple per orari di cinema."
                    },
                    {
                        "text": "We've decided. We ___ buy a new house.",
                        "options": [
                            "are going to",
                            "will",
                            "are",
                            "do"
                        ],
                        "answer": 0,
                        "explanation": "Be going to per intenzioni già decise."
                    },
                    {
                        "text": "A: I'm cold. B: I ___ close the window.",
                        "options": [
                            "will",
                            "am going to",
                            "am",
                            "do"
                        ],
                        "answer": 0,
                        "explanation": "Will per decisioni immediate spontanee."
                    },
                    {
                        "text": "She ___ have a baby in June. She's pregnant.",
                        "options": [
                            "is",
                            "will",
                            "does",
                            "is going to"
                        ],
                        "answer": 3,
                        "explanation": "Be going to per eventi futuri certi basati su evidenza presente."
                    },
                    {
                        "text": "I ___ fly to Paris next Monday. Here's my boarding pass.",
                        "options": [
                            "will",
                            "fly",
                            "am going to",
                            "am flying to"
                        ],
                        "answer": 3,
                        "explanation": "Present Continuous per arrangiamenti completamente organizzati (ho il biglietto)."
                    },
                    {
                        "text": "Perhaps it ___ snow tomorrow.",
                        "options": [
                            "is going to",
                            "does",
                            "will",
                            "is"
                        ],
                        "answer": 2,
                        "explanation": "Will per previsioni incerte (perhaps = forse)."
                    },
                    {
                        "text": "When ___ the class ___?",
                        "options": [
                            "will / finish",
                            "does / finish",
                            "is / going to finish",
                            "is / finishing"
                        ],
                        "answer": 1,
                        "explanation": "Present Simple per orari scolastici fissi."
                    },
                    {
                        "text": "I ___ be a doctor when I grow up.",
                        "options": [
                            "am going to",
                            "will",
                            "am",
                            "do"
                        ],
                        "answer": 0,
                        "explanation": "Be going to per intenzioni e piani futuri."
                    },
                    {
                        "text": "Don't worry. I promise I ___ be late.",
                        "options": [
                            "won't",
                            "am not",
                            "am not going to",
                            "don't"
                        ],
                        "answer": 0,
                        "explanation": "Will per promesse."
                    },
                    {
                        "text": "She looks pale. I think she ___ faint.",
                        "options": [
                            "does",
                            "is going to",
                            "will",
                            "is"
                        ],
                        "answer": 1,
                        "explanation": "Be going to per previsioni basate su evidenza visibile."
                    },
                    {
                        "text": "We ___ dinner with John tonight. We booked the restaurant.",
                        "options": [
                            "are having",
                            "will have",
                            "are going to have",
                            "have"
                        ],
                        "answer": 0,
                        "explanation": "Present Continuous per piani organizzati (prenotazione fatta)."
                    },
                    {
                        "text": "The bus ___ in 5 minutes. Hurry!",
                        "options": [
                            "will leave",
                            "leaves",
                            "is leaving",
                            "is going to leave"
                        ],
                        "answer": 1,
                        "explanation": "Present Simple per orari di trasporto."
                    },
                    {
                        "text": "I ___ learn Spanish. I've enrolled in a course.",
                        "options": [
                            "am",
                            "will",
                            "do",
                            "am going to"
                        ],
                        "answer": 3,
                        "explanation": "Be going to per intenzioni con preparativi iniziati."
                    },
                    {
                        "text": "A: Can you help me? B: Sorry, I ___. I'm busy.",
                        "options": [
                            "am not going to",
                            "don't",
                            "won't",
                            "can't"
                        ],
                        "answer": 3,
                        "explanation": "Can't per impossibilità (sono occupato = non posso)."
                    },
                    {
                        "text": "She ___ 18 next month.",
                        "options": [
                            "is being",
                            "is going to be",
                            "is",
                            "will be"
                        ],
                        "answer": 3,
                        "explanation": "Will be per eventi futuri certi (compleanni)."
                    }
                ]
            },
            {
                "type": "translation",
                "difficulty": 4,
                "questions": [
                    {
                        "text": "Il film inizia alle 9.",
                        "answer": "The film starts at 9",
                        "alternatives": [
                            "The movie starts at 9",
                            "The film begins at 9"
                        ],
                        "explanation": "Present Simple per orari fissi programmati."
                    },
                    {
                        "text": "Sto volando a New York lunedì.",
                        "answer": "I am flying to New York on Monday",
                        "alternatives": [
                            "I'm flying to New York on Monday"
                        ],
                        "explanation": "Present Continuous per arrangiamenti già organizzati."
                    },
                    {
                        "text": "Attento! Stai per far cadere quel bicchiere!",
                        "answer": "Watch out! You are going to drop that glass",
                        "alternatives": [
                            "Be careful! You are going to drop that glass",
                            "Watch out! You're going to drop that glass"
                        ],
                        "explanation": "Be going to per previsioni basate su evidenza immediata."
                    },
                    {
                        "text": "Penso che sarà una grande festa.",
                        "answer": "I think it will be a great party",
                        "alternatives": [
                            "I think it'll be a great party"
                        ],
                        "explanation": "Will per opinioni e previsioni (I think)."
                    },
                    {
                        "text": "Aspetta! Ti aiuterò con quelle borse!",
                        "answer": "Wait! I will help you with those bags",
                        "alternatives": [
                            "Wait! I'll help you with those bags"
                        ],
                        "explanation": "Will per decisioni spontanee immediate."
                    },
                    {
                        "text": "Studierò medicina il prossimo anno.",
                        "answer": "I am going to study medicine next year",
                        "alternatives": [
                            "I'm going to study medicine next year"
                        ],
                        "explanation": "Be going to per intenzioni decise ma non ancora organizzate."
                    },
                    {
                        "text": "A che ora parte il treno?",
                        "answer": "What time does the train leave",
                        "alternatives": [
                            "What time does the train depart"
                        ],
                        "explanation": "Present Simple per orari di trasporti pubblici."
                    },
                    {
                        "text": "Ceniamo con Mark stasera.",
                        "answer": "We are having dinner with Mark tonight",
                        "alternatives": [
                            "We're having dinner with Mark tonight"
                        ],
                        "explanation": "Present Continuous per piani già organizzati."
                    },
                    {
                        "text": "Guarda quelle nuvole! Sta per piovere.",
                        "answer": "Look at those clouds! It is going to rain",
                        "alternatives": [
                            "Look at those clouds! It's going to rain"
                        ],
                        "explanation": "Be going to per previsioni basate su evidenza visibile."
                    },
                    {
                        "text": "Prometto che ti chiamerò domani.",
                        "answer": "I promise I will call you tomorrow",
                        "alternatives": [
                            "I promise I'll call you tomorrow",
                            "I promise I will phone you tomorrow"
                        ],
                        "explanation": "Will per promesse."
                    }
                ]
            },
            {
                "type": "cloze-test",
                "difficulty": 4,
                "context": "Hi Emma!\n\nI'm so excited about next week! Our flight to Barcelona (1) ......... at 7:30 AM on Monday – I've checked the airport website. I (2) ......... there early to avoid any problems. I (3) ......... a taxi right now to book it for 5 AM.\n\nWhen we (4) ......... in Barcelona, we (5) ......... our hotel first. I (6) ......... the reservation online last night, so everything is ready. Then I think we (7) ......... lunch somewhere nice – what do you think?\n\nLook at the weather forecast! It says it (8) ......... sunny all week. Perfect! On Tuesday, we (9) ......... a tour of the Gothic Quarter – I (10) ......... the tickets yesterday. The tour (11) ......... at 10 AM.\n\nI'm not sure about Wednesday yet. Maybe we (12) ......... to the beach, or we could visit some museums. We (13) ......... decide when we're there!\n\nSee you Monday!\nSarah",
                "questions": [
                    {
                        "blank_number": 1,
                        "options": [
                            "A) will leave",
                            "B) is going to leave",
                            "C) leaves",
                            "D) is leaving"
                        ],
                        "answer": 2,
                        "explanation": "Present Simple per orari ufficiali di voli (timetable)."
                    },
                    {
                        "blank_number": 2,
                        "options": [
                            "A) will get",
                            "B) get",
                            "C) am going to get",
                            "D) am getting"
                        ],
                        "answer": 2,
                        "explanation": "Be going to per intenzione già decisa."
                    },
                    {
                        "blank_number": 3,
                        "options": [
                            "A) will call",
                            "B) am calling",
                            "C) call",
                            "D) am going to call"
                        ],
                        "answer": 0,
                        "explanation": "Will per decisione spontanea presa al momento di scrivere."
                    },
                    {
                        "blank_number": 4,
                        "options": [
                            "A) will arrive",
                            "B) are going to arrive",
                            "C) arrive",
                            "D) are arriving"
                        ],
                        "answer": 2,
                        "explanation": "Present Simple in clausole temporali dopo 'when'."
                    },
                    {
                        "blank_number": 5,
                        "options": [
                            "A) will check into",
                            "B) check into",
                            "C) are checking into",
                            "D) are going to check into"
                        ],
                        "answer": 0,
                        "explanation": "Will per piani non ancora organizzati nel dettaglio."
                    },
                    {
                        "blank_number": 6,
                        "options": [
                            "A) will make",
                            "B) am making",
                            "C) made",
                            "D) am going to make"
                        ],
                        "answer": 2,
                        "explanation": "Past Simple perché l'azione è già avvenuta (last night)."
                    },
                    {
                        "blank_number": 7,
                        "options": [
                            "A) have",
                            "B) are having",
                            "C) will have",
                            "D) are going to have"
                        ],
                        "answer": 2,
                        "explanation": "Will per suggerimento/opinione ('I think')."
                    },
                    {
                        "blank_number": 8,
                        "options": [
                            "A) is",
                            "B) will be",
                            "C) is going to be",
                            "D) is being"
                        ],
                        "answer": 2,
                        "explanation": "Be going to per previsione basata su evidenza presente (il meteo)."
                    },
                    {
                        "blank_number": 9,
                        "options": [
                            "A) will do",
                            "B) do",
                            "C) are doing",
                            "D) are going to do"
                        ],
                        "answer": 2,
                        "explanation": "Present Continuous per arrangement organizzato (biglietti prenotati)."
                    },
                    {
                        "blank_number": 10,
                        "options": [
                            "A) will book",
                            "B) am booking",
                            "C) booked",
                            "D) am going to book"
                        ],
                        "answer": 2,
                        "explanation": "Past Simple perché l'azione è già stata completata (yesterday)."
                    },
                    {
                        "blank_number": 11,
                        "options": [
                            "A) will start",
                            "B) is going to start",
                            "C) starts",
                            "D) is starting"
                        ],
                        "answer": 2,
                        "explanation": "Present Simple per orario fisso del tour."
                    },
                    {
                        "blank_number": 12,
                        "options": [
                            "A) will go",
                            "B) go",
                            "C) are going",
                            "D) are going to go"
                        ],
                        "answer": 0,
                        "explanation": "Will per possibilità non ancora decisa ('maybe')."
                    },
                    {
                        "blank_number": 13,
                        "options": [
                            "A) are deciding",
                            "B) decide",
                            "C) will decide",
                            "D) are going to decide"
                        ],
                        "answer": 2,
                        "explanation": "Will per decisione che verrà presa in futuro."
                    }
                ]
            },
            {
                "type": "key-word-transformation",
                "difficulty": 5,
                "questions": [
                    {
                        "first_sentence": "The train departs at 6 PM.",
                        "keyword": "leave",
                        "second_sentence_start": "The train",
                        "second_sentence_end": "at 6 PM.",
                        "answer": "leaves",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Present Simple per orari di trasporti pubblici."
                    },
                    {
                        "first_sentence": "We have arranged to meet Tom at 8 PM.",
                        "keyword": "meeting",
                        "second_sentence_start": "We",
                        "second_sentence_end": "Tom at 8 PM.",
                        "answer": "are meeting",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Present Continuous per arrangement già organizzato."
                    },
                    {
                        "first_sentence": "I intend to buy a new car next month.",
                        "keyword": "going",
                        "second_sentence_start": "I",
                        "second_sentence_end": "buy a new car next month.",
                        "answer": "am going to",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Be going to per intenzione decisa."
                    },
                    {
                        "first_sentence": "I've just decided to call her.",
                        "keyword": "will",
                        "second_sentence_start": "I",
                        "second_sentence_end": "call her.",
                        "answer": "will",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Will per decisione spontanea appena presa."
                    },
                    {
                        "first_sentence": "Look at those dark clouds! I think it's going to rain.",
                        "keyword": "looks",
                        "second_sentence_start": "It",
                        "second_sentence_end": "it's going to rain.",
                        "answer": "looks like",
                        "alternatives": ["looks as if"],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Espressione alternativa per previsione basata su evidenza."
                    },
                    {
                        "first_sentence": "The match begins at 3 o'clock.",
                        "keyword": "start",
                        "second_sentence_start": "The match",
                        "second_sentence_end": "at 3 o'clock.",
                        "answer": "starts",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Present Simple per eventi programmati con orario fisso."
                    },
                    {
                        "first_sentence": "She has booked the tickets for Friday's concert.",
                        "keyword": "going",
                        "second_sentence_start": "She",
                        "second_sentence_end": "to the concert on Friday.",
                        "answer": "is going",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Present Continuous per arrangement già organizzato (biglietti prenotati)."
                    },
                    {
                        "first_sentence": "I've made up my mind to study abroad.",
                        "keyword": "going",
                        "second_sentence_start": "I",
                        "second_sentence_end": "study abroad.",
                        "answer": "am going to",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Be going to per intenzione/decisione già presa."
                    },
                    {
                        "first_sentence": "Perhaps I'll visit you next week.",
                        "keyword": "might",
                        "second_sentence_start": "I",
                        "second_sentence_end": "visit you next week.",
                        "answer": "might",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Might per possibilità futura incerta (perhaps = might)."
                    },
                    {
                        "first_sentence": "The shop closes at 6 PM every day.",
                        "keyword": "shut",
                        "second_sentence_start": "The shop",
                        "second_sentence_end": "at 6 PM every day.",
                        "answer": "shuts",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Present Simple per orari regolari e fissi."
                    }
                ]
            }
        ]
    },
    "conditionals": {
        "title": "Conditionals",
        "description": "Zero, First e Second Conditional",
        "exercises": [
            {
                "type": "fill-blank",
                "difficulty": 3,
                "questions": [
                    {
                        "text": "If you ___ (touch) fire, you ___ (get) burnt.",
                        "answer": "touch / get",
                        "explanation": "Zero Conditional (Present Simple + Present Simple) per verità universali e certezze scientifiche."
                    },
                    {
                        "text": "If I ___ (have) time, I ___ (call) you.",
                        "answer": "have / will call",
                        "explanation": "First Conditional (Present Simple + Will) per situazioni future probabili."
                    },
                    {
                        "text": "If I ___ (win) the lottery, I ___ (buy) a castle.",
                        "answer": "won / would buy",
                        "explanation": "Second Conditional (Past Simple + Would) per situazioni ipotetiche improbabili."
                    },
                    {
                        "text": "If it ___ (rain), the grass ___ (get) wet.",
                        "answer": "rains / gets",
                        "explanation": "Zero Conditional per fatti sempre veri (leggi naturali)."
                    },
                    {
                        "text": "If you ___ (not/hurry), you ___ (miss) the bus.",
                        "answer": "don't hurry / will miss",
                        "explanation": "First Conditional per conseguenze future probabili di azioni presenti."
                    },
                    {
                        "text": "If I ___ (be) you, I ___ (not/do) that.",
                        "answer": "were / wouldn't do",
                        "explanation": "Second Conditional con 'were' (non 'was') per dare consigli ipotetici."
                    },
                    {
                        "text": "Water ___ (freeze) if the temperature ___ (drop) below zero.",
                        "answer": "freezes / drops",
                        "explanation": "Zero Conditional per leggi fisiche (sempre vero)."
                    },
                    {
                        "text": "If she ___ (study) hard, she ___ (pass) the exam.",
                        "answer": "studies / will pass",
                        "explanation": "First Conditional per risultati futuri probabili basati su condizioni presenti."
                    },
                    {
                        "text": "If we ___ (have) more money, we ___ (travel) more.",
                        "answer": "had / would travel",
                        "explanation": "Second Conditional per situazioni immaginarie (non abbiamo molti soldi ora)."
                    },
                    {
                        "text": "If you ___ (heat) ice, it ___ (melt).",
                        "answer": "heat / melts",
                        "explanation": "Zero Conditional per processi fisici certi."
                    },
                    {
                        "text": "If they ___ (invite) me, I ___ (go) to the party.",
                        "answer": "invite / will go",
                        "explanation": "First Conditional per situazioni future possibili."
                    },
                    {
                        "text": "If I ___ (can) fly, I ___ (visit) every country.",
                        "answer": "could / would visit",
                        "explanation": "Second Conditional per fantasie impossibili."
                    },
                    {
                        "text": "If you ___ (mix) blue and yellow, you ___ (get) green.",
                        "answer": "mix / get",
                        "explanation": "Zero Conditional per fatti universali (colori)."
                    },
                    {
                        "text": "If it ___ (snow) tomorrow, we ___ (build) a snowman.",
                        "answer": "snows / will build",
                        "explanation": "First Conditional per piani futuri dipendenti da una condizione probabile."
                    },
                    {
                        "text": "If I ___ (live) in Italy, I ___ (eat) pasta every day.",
                        "answer": "lived / would eat",
                        "explanation": "Second Conditional per situazioni immaginarie (non vivo in Italia)."
                    },
                    {
                        "text": "If you ___ (press) that button, the machine ___ (start).",
                        "answer": "press / starts",
                        "explanation": "Zero Conditional per istruzioni e funzionamenti certi."
                    },
                    {
                        "text": "If we ___ (leave) now, we ___ (arrive) on time.",
                        "answer": "leave / will arrive",
                        "explanation": "First Conditional per conseguenze future basate su azioni immediate."
                    },
                    {
                        "text": "If she ___ (be) taller, she ___ (play) basketball.",
                        "answer": "were / would play",
                        "explanation": "Second Conditional per situazioni controfattuali (non è alta)."
                    },
                    {
                        "text": "If plants ___ (not/get) water, they ___ (die).",
                        "answer": "don't get / die",
                        "explanation": "Zero Conditional per verità biologiche."
                    },
                    {
                        "text": "If he ___ (apologize), I ___ (forgive) him.",
                        "answer": "apologizes / will forgive",
                        "explanation": "First Conditional per situazioni future possibili e le loro conseguenze."
                    }
                ]
            },
            {
                "type": "multiple-choice",
                "difficulty": 2,
                "questions": [
                    {
                        "text": "If you ___ water to 100°C, it ___.",
                        "options": [
                            "heat / boils",
                            "heat / will boil",
                            "would heat / boiled",
                            "will heat / boils"
                        ],
                        "answer": 0,
                        "explanation": "Zero Conditional (Present + Present) per fatti scientifici sempre veri."
                    },
                    {
                        "text": "If it ___ tomorrow, we ___ to the beach.",
                        "options": [
                            "would rain / won't go",
                            "rained / wouldn't go",
                            "rains / won't go",
                            "will rain / don't go"
                        ],
                        "answer": 2,
                        "explanation": "First Conditional (Present Simple + Will) per situazioni future probabili."
                    },
                    {
                        "text": "If I ___ a millionaire, I ___ a yacht.",
                        "options": [
                            "am / will buy",
                            "will be / would buy",
                            "was / will buy",
                            "were / would buy"
                        ],
                        "answer": 3,
                        "explanation": "Second Conditional (Past + Would) con 'were' per situazioni ipotetiche."
                    },
                    {
                        "text": "Which is the correct Zero Conditional structure?",
                        "options": [
                            "If + Past Simple, Would + Base Form",
                            "If + Present Simple, Present Simple",
                            "If + Past Perfect, Would Have + Past Participle",
                            "If + Present Simple, Will + Base Form"
                        ],
                        "answer": 1,
                        "explanation": "Zero Conditional usa Present Simple in entrambe le parti per verità universali."
                    },
                    {
                        "text": "If I ___ you, I ___ harder.",
                        "options": [
                            "am / will study",
                            "were / would study",
                            "am / would study",
                            "was / will study"
                        ],
                        "answer": 1,
                        "explanation": "Second Conditional con 'were' (non 'was') per dare consigli."
                    },
                    {
                        "text": "If she ___ early, she ___ the sunrise.",
                        "options": [
                            "will wake up / sees",
                            "would wake up / saw",
                            "woke up / would see",
                            "wakes up / will see"
                        ],
                        "answer": 3,
                        "explanation": "First Conditional per situazioni future possibili."
                    },
                    {
                        "text": "Plants die if they ___ water.",
                        "options": [
                            "didn't get",
                            "won't get",
                            "wouldn't get",
                            "don't get"
                        ],
                        "answer": 3,
                        "explanation": "Zero Conditional (Present Simple) per verità biologiche."
                    },
                    {
                        "text": "If we ___ more time, we ___ the museum.",
                        "options": [
                            "had / would visit",
                            "would have / visited",
                            "will have / visit",
                            "have / will visit"
                        ],
                        "answer": 0,
                        "explanation": "Second Conditional per situazioni immaginarie (non abbiamo tempo)."
                    },
                    {
                        "text": "If you ___ that button, the alarm ___.",
                        "options": [
                            "press / goes off",
                            "will press / goes off",
                            "press / will go off",
                            "would press / went off"
                        ],
                        "answer": 0,
                        "explanation": "Zero Conditional per istruzioni e funzionamenti certi."
                    },
                    {
                        "text": "I ___ if I ___ the lottery.",
                        "options": [
                            "travel / will win",
                            "would travel / won",
                            "will travel / win",
                            "traveled / would win"
                        ],
                        "answer": 1,
                        "explanation": "Second Conditional per situazioni molto improbabili."
                    },
                    {
                        "text": "If it ___, we ___ the game.",
                        "options": [
                            "would rain / cancelled",
                            "will rain / cancel",
                            "rains / will cancel",
                            "rained / would cancel"
                        ],
                        "answer": 2,
                        "explanation": "First Conditional per decisioni future basate su condizioni probabili."
                    },
                    {
                        "text": "If I ___ speak Chinese, I ___ to China.",
                        "options": [
                            "could / will move",
                            "could / would move",
                            "can / will move",
                            "can / would move"
                        ],
                        "answer": 1,
                        "explanation": "Second Conditional con 'could' per abilità ipotetiche."
                    },
                    {
                        "text": "Water ___ into ice if it ___.",
                        "options": [
                            "turns / freezes",
                            "would turn / froze",
                            "turns / will freeze",
                            "will turn / freezes"
                        ],
                        "answer": 0,
                        "explanation": "Zero Conditional per processi fisici certi."
                    },
                    {
                        "text": "If they ___ us, we ___ them.",
                        "options": [
                            "help / will help",
                            "helped / would help",
                            "will help / help",
                            "would help / helped"
                        ],
                        "answer": 0,
                        "explanation": "First Conditional per azioni reciproche future."
                    },
                    {
                        "text": "If she ___ famous, she ___ very happy.",
                        "options": [
                            "will be / is",
                            "is / will be",
                            "were / would be",
                            "was / will be"
                        ],
                        "answer": 2,
                        "explanation": "Second Conditional con 'were' per situazioni immaginarie."
                    },
                    {
                        "text": "If you ___ the instructions, you ___ mistakes.",
                        "options": [
                            "would follow / didn't make",
                            "followed / wouldn't make",
                            "will follow / don't make",
                            "follow / won't make"
                        ],
                        "answer": 3,
                        "explanation": "First Conditional per consigli con risultati futuri."
                    },
                    {
                        "text": "If I ___ invisible, I ___ everywhere for free.",
                        "options": [
                            "will be / go",
                            "was / will go",
                            "were / would go",
                            "am / will go"
                        ],
                        "answer": 2,
                        "explanation": "Second Conditional per fantasie impossibili."
                    },
                    {
                        "text": "If you ___ sugar in water, it ___.",
                        "options": [
                            "would put / dissolved",
                            "will put / dissolves",
                            "put / will dissolve",
                            "put / dissolves"
                        ],
                        "answer": 3,
                        "explanation": "Zero Conditional per processi chimici certi."
                    },
                    {
                        "text": "If we ___ a car, we ___ there faster.",
                        "options": [
                            "had / would get",
                            "would have / got",
                            "will have / get",
                            "have / will get"
                        ],
                        "answer": 0,
                        "explanation": "Second Conditional per situazioni immaginarie (non abbiamo una macchina)."
                    },
                    {
                        "text": "If he ___ harder, he ___ the test.",
                        "options": [
                            "studies / will pass",
                            "would study / passed",
                            "studied / would pass",
                            "will study / passes"
                        ],
                        "answer": 0,
                        "explanation": "First Conditional per conseguenze future probabili."
                    }
                ]
            },
            {
                "type": "translation",
                "difficulty": 4,
                "questions": [
                    {
                        "text": "Se tocchi il fuoco, ti scotti.",
                        "answer": "If you touch fire, you get burnt",
                        "alternatives": [
                            "If you touch fire you get burned",
                            "If you touch the fire, you get burnt"
                        ],
                        "explanation": "Zero Conditional per verità universali (sempre vero)."
                    },
                    {
                        "text": "Se ho tempo, ti chiamerò.",
                        "answer": "If I have time, I will call you",
                        "alternatives": [
                            "If I have time I'll call you",
                            "If I have time, I will phone you"
                        ],
                        "explanation": "First Conditional per situazioni future probabili."
                    },
                    {
                        "text": "Se vincessi la lotteria, comprerei un castello.",
                        "answer": "If I won the lottery, I would buy a castle",
                        "alternatives": [
                            "If I won the lottery I'd buy a castle"
                        ],
                        "explanation": "Second Conditional per situazioni ipotetiche molto improbabili."
                    },
                    {
                        "text": "Se piove, l'erba si bagna.",
                        "answer": "If it rains, the grass gets wet",
                        "alternatives": [
                            "If it rains the grass gets wet"
                        ],
                        "explanation": "Zero Conditional per fatti naturali sempre veri."
                    },
                    {
                        "text": "Se non ti sbrighi, perderai l'autobus.",
                        "answer": "If you don't hurry, you will miss the bus",
                        "alternatives": [
                            "If you don't hurry you'll miss the bus",
                            "If you do not hurry, you will miss the bus"
                        ],
                        "explanation": "First Conditional per conseguenze future probabili."
                    },
                    {
                        "text": "Se fossi in te, non lo farei.",
                        "answer": "If I were you, I wouldn't do that",
                        "alternatives": [
                            "If I were you I wouldn't do that",
                            "If I were you, I would not do that"
                        ],
                        "explanation": "Second Conditional con 'were' (non 'was') per dare consigli."
                    },
                    {
                        "text": "L'acqua gela se la temperatura scende sotto zero.",
                        "answer": "Water freezes if the temperature drops below zero",
                        "alternatives": [
                            "Water freezes if the temperature goes below zero"
                        ],
                        "explanation": "Zero Conditional per leggi fisiche."
                    },
                    {
                        "text": "Se studia molto, passerà l'esame.",
                        "answer": "If she studies hard, she will pass the exam",
                        "alternatives": [
                            "If she studies hard she'll pass the exam",
                            "If she studies a lot, she will pass the exam"
                        ],
                        "explanation": "First Conditional per risultati futuri basati su condizioni presenti."
                    },
                    {
                        "text": "Se avessimo più soldi, viaggeremmo di più.",
                        "answer": "If we had more money, we would travel more",
                        "alternatives": [
                            "If we had more money we'd travel more"
                        ],
                        "explanation": "Second Conditional per situazioni immaginarie (non abbiamo molti soldi)."
                    },
                    {
                        "text": "Se riscaldi il ghiaccio, si scioglie.",
                        "answer": "If you heat ice, it melts",
                        "alternatives": [
                            "If you heat ice it melts"
                        ],
                        "explanation": "Zero Conditional per processi fisici certi."
                    }
                ]
            },
            {
                "type": "cloze-test",
                "difficulty": 4,
                "context": "Dear Students,\n\nHere are some important facts about our science course:\n\nGeneral Scientific Facts:\nIf you (1) ......... water to 100°C, it always (2) .........  This is a universal truth. Similarly, if plants (3) ......... water, they (4) ......... . These are facts that never change.\n\nCourse Requirements:\nIf you (5) ......... to pass this course, you (6) ......... submit all assignments on time. If you (7) ......... any problems, please (8) ......... me immediately. I (9) ......... happy to help if you (10) ......... any questions.\n\nHypothetical Situations:\nImagine if you (11) ......... a scientist. What (12) ......... you (13) ......... ? If I (14) ......... you, I (15) ......... focus on renewable energy. It's not a reality now, but it's interesting to think about!\n\nRemember: study hard and you'll do great!\n\nProfessor Smith",
                "questions": [
                    {
                        "blank_number": 1,
                        "options": [
                            "A) will heat",
                            "B) heat",
                            "C) would heat",
                            "D) heated"
                        ],
                        "answer": 1,
                        "explanation": "Zero Conditional: Present Simple nella if-clause per fatti sempre veri."
                    },
                    {
                        "blank_number": 2,
                        "options": [
                            "A) will boil",
                            "B) boils",
                            "C) would boil",
                            "D) boiled"
                        ],
                        "answer": 1,
                        "explanation": "Zero Conditional: Present Simple nella main clause per risultati certi."
                    },
                    {
                        "blank_number": 3,
                        "options": [
                            "A) won't get",
                            "B) don't get",
                            "C) wouldn't get",
                            "D) didn't get"
                        ],
                        "answer": 1,
                        "explanation": "Zero Conditional: Present Simple negativo per fatti universali."
                    },
                    {
                        "blank_number": 4,
                        "options": [
                            "A) will die",
                            "B) die",
                            "C) would die",
                            "D) died"
                        ],
                        "answer": 1,
                        "explanation": "Zero Conditional: risultato certo e sempre uguale."
                    },
                    {
                        "blank_number": 5,
                        "options": [
                            "A) wanted",
                            "B) want",
                            "C) will want",
                            "D) would want"
                        ],
                        "answer": 1,
                        "explanation": "First Conditional: Present Simple nella if-clause per condizione reale/probabile."
                    },
                    {
                        "blank_number": 6,
                        "options": [
                            "A) must",
                            "B) had to",
                            "C) would have to",
                            "D) have to"
                        ],
                        "answer": 0,
                        "explanation": "First Conditional: must/will nella main clause per conseguenze future."
                    },
                    {
                        "blank_number": 7,
                        "options": [
                            "A) will have",
                            "B) have",
                            "C) would have",
                            "D) had"
                        ],
                        "answer": 1,
                        "explanation": "First Conditional: Present Simple nella if-clause."
                    },
                    {
                        "blank_number": 8,
                        "options": [
                            "A) contacted",
                            "B) will contact",
                            "C) contact",
                            "D) would contact"
                        ],
                        "answer": 2,
                        "explanation": "First Conditional: imperativo o Present Simple nella main clause."
                    },
                    {
                        "blank_number": 9,
                        "options": [
                            "A) am",
                            "B) will be",
                            "C) would be",
                            "D) was"
                        ],
                        "answer": 1,
                        "explanation": "First Conditional: will nella main clause per azioni future."
                    },
                    {
                        "blank_number": 10,
                        "options": [
                            "A) will have",
                            "B) have",
                            "C) would have",
                            "D) had"
                        ],
                        "answer": 1,
                        "explanation": "First Conditional: Present Simple nella if-clause."
                    },
                    {
                        "blank_number": 11,
                        "options": [
                            "A) are",
                            "B) will be",
                            "C) were",
                            "D) would be"
                        ],
                        "answer": 2,
                        "explanation": "Second Conditional: Past Simple (were) nella if-clause per situazioni ipotetiche."
                    },
                    {
                        "blank_number": 12,
                        "options": [
                            "A) will",
                            "B) do",
                            "C) would",
                            "D) did"
                        ],
                        "answer": 2,
                        "explanation": "Second Conditional: would nella main clause per risultati immaginari."
                    },
                    {
                        "blank_number": 13,
                        "options": [
                            "A) study",
                            "B) studied",
                            "C) will study",
                            "D) would study"
                        ],
                        "answer": 0,
                        "explanation": "Second Conditional: base form del verbo dopo would."
                    },
                    {
                        "blank_number": 14,
                        "options": [
                            "A) am",
                            "B) will be",
                            "C) were",
                            "D) would be"
                        ],
                        "answer": 2,
                        "explanation": "Second Conditional: 'were' (non 'was') per dare consigli con 'If I were you'."
                    },
                    {
                        "blank_number": 15,
                        "options": [
                            "A) will focus",
                            "B) focus",
                            "C) would focus",
                            "D) focused"
                        ],
                        "answer": 2,
                        "explanation": "Second Conditional: would + base form nella main clause."
                    }
                ]
            },
            {
                "type": "key-word-transformation",
                "difficulty": 5,
                "questions": [
                    {
                        "first_sentence": "I don't have a car, so I can't drive to work.",
                        "keyword": "would",
                        "second_sentence_start": "If I",
                        "second_sentence_end": "to work.",
                        "answer": "had a car I would drive",
                        "alternatives": ["had a car I could drive"],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Second Conditional per situazione ipotetica (non ho la macchina)."
                    },
                    {
                        "first_sentence": "Study hard or you will fail the exam.",
                        "keyword": "unless",
                        "second_sentence_start": "You will fail the exam",
                        "second_sentence_end": "hard.",
                        "answer": "unless you study",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Unless = if not. First Conditional per condizione reale."
                    },
                    {
                        "first_sentence": "I'm not rich, so I can't buy a yacht.",
                        "keyword": "if",
                        "second_sentence_start": "I",
                        "second_sentence_end": "rich, I could buy a yacht.",
                        "answer": "would buy a yacht if I were",
                        "alternatives": ["could buy a yacht if I were"],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Second Conditional per situazione irreale presente."
                    },
                    {
                        "first_sentence": "When you heat metal, it expands.",
                        "keyword": "if",
                        "second_sentence_start": "Metal expands",
                        "second_sentence_end": "it.",
                        "answer": "if you heat",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Zero Conditional per fatto scientifico sempre vero."
                    },
                    {
                        "first_sentence": "Perhaps it will rain, so take an umbrella.",
                        "keyword": "case",
                        "second_sentence_start": "Take an umbrella",
                        "second_sentence_end": "rains.",
                        "answer": "in case it",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "In case = per precauzione contro possibilità futura."
                    },
                    {
                        "first_sentence": "I don't know her number, so I can't call her.",
                        "keyword": "knew",
                        "second_sentence_start": "If I",
                        "second_sentence_end": "her number, I could call her.",
                        "answer": "knew",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Second Conditional per situazione ipotetica presente."
                    },
                    {
                        "first_sentence": "Press this button and the machine will start.",
                        "keyword": "if",
                        "second_sentence_start": "The machine will start",
                        "second_sentence_end": "this button.",
                        "answer": "if you press",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "First Conditional per azione futura probabile."
                    },
                    {
                        "first_sentence": "She doesn't speak Spanish, so she can't work in Madrid.",
                        "keyword": "could",
                        "second_sentence_start": "If she",
                        "second_sentence_end": "Spanish, she could work in Madrid.",
                        "answer": "spoke",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Second Conditional per situazione ipotetica."
                    },
                    {
                        "first_sentence": "Ice melts when the temperature rises above zero.",
                        "keyword": "if",
                        "second_sentence_start": "Ice",
                        "second_sentence_end": "the temperature rises above zero.",
                        "answer": "melts if",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Zero Conditional per fatto naturale sempre vero."
                    },
                    {
                        "first_sentence": "Without your help, I wouldn't succeed.",
                        "keyword": "if",
                        "second_sentence_start": "I wouldn't succeed",
                        "second_sentence_end": "help me.",
                        "answer": "if you didn't",
                        "alternatives": ["if you wouldn't", "unless you"],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Second Conditional: 'without' = 'if... not'."
                    }
                ]
            }
        ]
    },
    "relative-clauses": {
        "title": "Relative Clauses",
        "description": "Who, Which, That, Whose - Defining e Non-Defining",
        "exercises": [
            {
                "type": "fill-blank",
                "difficulty": 3,
                "questions": [
                    {
                        "text": "The person ___ called me was a salesman.",
                        "answer": "who",
                        "alternatives": [
                            "that"
                        ],
                        "explanation": "Who (o that) per persone in defining clauses. Entrambi sono corretti."
                    },
                    {
                        "text": "Mr. Jones, ___ is my neighbour, is 80 years old.",
                        "answer": "who",
                        "explanation": "Who (non that!) per persone in non-defining clauses (tra virgole)."
                    },
                    {
                        "text": "The car ___ she bought is electric.",
                        "answer": "which",
                        "alternatives": [
                            "that"
                        ],
                        "explanation": "Which o that per cose in defining clauses."
                    },
                    {
                        "text": "This hotel, ___ I found online, is very cheap.",
                        "answer": "which",
                        "explanation": "Which (non that!) per cose in non-defining clauses (informazione extra tra virgole)."
                    },
                    {
                        "text": "I met a man ___ dog was giant.",
                        "answer": "whose",
                        "explanation": "Whose per esprimere possesso (il cane dell'uomo)."
                    },
                    {
                        "text": "The girl ___ phone is ringing should answer.",
                        "answer": "whose",
                        "explanation": "Whose per possesso (il telefono della ragazza)."
                    },
                    {
                        "text": "The book ___ I'm reading is fascinating.",
                        "answer": "which",
                        "alternatives": [
                            "that"
                        ],
                        "explanation": "Which o that per cose. Il pronome può anche essere omesso (The book I'm reading)."
                    },
                    {
                        "text": "People ___ exercise regularly live longer.",
                        "answer": "who",
                        "alternatives": [
                            "that"
                        ],
                        "explanation": "Who o that per persone in defining clauses generali."
                    },
                    {
                        "text": "My brother, ___ lives in London, is a doctor.",
                        "answer": "who",
                        "explanation": "Who (non that!) in non-defining clause (informazione extra su mio fratello)."
                    },
                    {
                        "text": "The restaurant ___ we went to was excellent.",
                        "answer": "which",
                        "alternatives": [
                            "that"
                        ],
                        "explanation": "Which o that per luoghi. Si può anche omettere (The restaurant we went to)."
                    },
                    {
                        "text": "The woman ___ house burnt down is homeless now.",
                        "answer": "whose",
                        "explanation": "Whose per possesso (la casa della donna)."
                    },
                    {
                        "text": "I need someone ___ can help me with this.",
                        "answer": "who",
                        "alternatives": [
                            "that"
                        ],
                        "explanation": "Who o that per persone quando il pronome è soggetto."
                    },
                    {
                        "text": "Paris, ___ is the capital of France, is beautiful.",
                        "answer": "which",
                        "explanation": "Which (non that!) in non-defining clause con informazione già nota."
                    },
                    {
                        "text": "The laptop ___ screen is broken needs repair.",
                        "answer": "whose",
                        "explanation": "Whose per possesso (lo schermo del laptop)."
                    },
                    {
                        "text": "A dictionary is a book ___ gives definitions of words.",
                        "answer": "which",
                        "alternatives": [
                            "that"
                        ],
                        "explanation": "Which o that per definire cosa sia un dizionario."
                    },
                    {
                        "text": "The teacher ___ taught me French retired last year.",
                        "answer": "who",
                        "alternatives": [
                            "that"
                        ],
                        "explanation": "Who o that per persone (il professore che mi ha insegnato)."
                    },
                    {
                        "text": "My phone, ___ I bought last month, is already broken.",
                        "answer": "which",
                        "explanation": "Which (non that!) in non-defining clause (informazione extra sul telefono)."
                    },
                    {
                        "text": "The student ___ essay was best won a prize.",
                        "answer": "whose",
                        "explanation": "Whose per possesso (il tema dello studente)."
                    },
                    {
                        "text": "I know a place ___ we can eat cheaply.",
                        "answer": "where",
                        "alternatives": [
                            "which",
                            "that"
                        ],
                        "explanation": "Where per luoghi, oppure which/that (in cui/dove)."
                    },
                    {
                        "text": "The man ___ you met yesterday is my uncle.",
                        "answer": "who",
                        "alternatives": [
                            "that",
                            "whom"
                        ],
                        "explanation": "Who, that o whom (formale) per persone oggetto della frase."
                    }
                ]
            },
            {
                "type": "multiple-choice",
                "difficulty": 2,
                "questions": [
                    {
                        "text": "The person ___ lives next door is very noisy.",
                        "options": [
                            "where",
                            "which",
                            "whose",
                            "who"
                        ],
                        "answer": 3,
                        "explanation": "Who per persone in defining clauses."
                    },
                    {
                        "text": "Which sentence is correct?",
                        "options": [
                            "The car, who I bought, is red.",
                            "The car, whose I bought, is red.",
                            "The car, that I bought, is red.",
                            "The car, which I bought, is red."
                        ],
                        "answer": 3,
                        "explanation": "Which (non that) in non-defining clauses tra virgole."
                    },
                    {
                        "text": "I met a woman ___ husband is a pilot.",
                        "options": [
                            "which",
                            "whose",
                            "that",
                            "who"
                        ],
                        "answer": 1,
                        "explanation": "Whose per esprimere possesso (il marito della donna)."
                    },
                    {
                        "text": "Rome, ___ is the capital of Italy, is ancient.",
                        "options": [
                            "whose",
                            "which",
                            "that",
                            "who"
                        ],
                        "answer": 1,
                        "explanation": "Which (non that!) per non-defining clauses con informazioni già note."
                    },
                    {
                        "text": "The book ___ you lent me was great.",
                        "options": [
                            "whose",
                            "which",
                            "who",
                            "where"
                        ],
                        "answer": 1,
                        "explanation": "Which (o that) per cose. Si può anche omettere il pronome."
                    },
                    {
                        "text": "Choose the correct defining clause:",
                        "options": [
                            "My sister, whose lives in Rome, is a teacher.",
                            "My sister who lives in Rome is a teacher.",
                            "My sister, who lives in Rome, is a teacher.",
                            "My sister, that lives in Rome, is a teacher."
                        ],
                        "answer": 1,
                        "explanation": "Defining clause senza virgole specifica quale sorella (quella che vive a Roma)."
                    },
                    {
                        "text": "The dog ___ tail is wagging is friendly.",
                        "options": [
                            "that",
                            "which",
                            "whose",
                            "who"
                        ],
                        "answer": 2,
                        "explanation": "Whose per possesso (la coda del cane)."
                    },
                    {
                        "text": "I love cities ___ have good public transport.",
                        "options": [
                            "which",
                            "where",
                            "whose",
                            "who"
                        ],
                        "answer": 0,
                        "explanation": "Which (o that) per cose/luoghi come soggetto."
                    },
                    {
                        "text": "Shakespeare, ___ wrote Hamlet, was English.",
                        "options": [
                            "who",
                            "whose",
                            "which",
                            "that"
                        ],
                        "answer": 0,
                        "explanation": "Who (non that) in non-defining clause per persone."
                    },
                    {
                        "text": "The house ___ I grew up in was small.",
                        "options": [
                            "whose",
                            "where",
                            "which",
                            "who"
                        ],
                        "answer": 2,
                        "explanation": "Which (o that, o omissibile) per luoghi quando c'è una preposizione."
                    },
                    {
                        "text": "Which is a non-defining clause?",
                        "options": [
                            "The man who called is my boss.",
                            "The man called is my boss.",
                            "The man that called is my boss.",
                            "My boss, who called earlier, wants to see you."
                        ],
                        "answer": 3,
                        "explanation": "Non-defining clause ha virgole e aggiunge info extra (già sappiamo chi è il capo)."
                    },
                    {
                        "text": "The artist ___ paintings are expensive is famous.",
                        "options": [
                            "which",
                            "who",
                            "whose",
                            "that"
                        ],
                        "answer": 2,
                        "explanation": "Whose per possesso (i quadri dell'artista)."
                    },
                    {
                        "text": "This is the place ___ we first met.",
                        "options": [
                            "who",
                            "whose",
                            "which",
                            "where"
                        ],
                        "answer": 3,
                        "explanation": "Where per luoghi (il posto dove ci siamo incontrati)."
                    },
                    {
                        "text": "The film, ___ I saw last night, was boring.",
                        "options": [
                            "whose",
                            "which",
                            "who",
                            "that"
                        ],
                        "answer": 1,
                        "explanation": "Which (non that) per non-defining clause tra virgole."
                    },
                    {
                        "text": "People ___ smoke risk serious health problems.",
                        "options": [
                            "where",
                            "whose",
                            "which",
                            "who"
                        ],
                        "answer": 3,
                        "explanation": "Who (o that) per persone in defining clause generale."
                    },
                    {
                        "text": "The scientist ___ theory changed physics won a Nobel.",
                        "options": [
                            "that",
                            "who",
                            "whose",
                            "which"
                        ],
                        "answer": 2,
                        "explanation": "Whose per possesso (la teoria dello scienziato)."
                    },
                    {
                        "text": "Can we omit the relative pronoun here? 'The man ___ I saw...'",
                        "options": [
                            "Only in questions",
                            "Only if we use 'that'",
                            "Yes, because it's the object",
                            "No, never"
                        ],
                        "answer": 2,
                        "explanation": "Si può omettere quando è oggetto (The man I saw = The man who/that I saw)."
                    },
                    {
                        "text": "The children, ___ were playing outside, were very loud.",
                        "options": [
                            "that",
                            "who",
                            "whose",
                            "which"
                        ],
                        "answer": 1,
                        "explanation": "Who (non that) in non-defining clause tra virgole."
                    },
                    {
                        "text": "The company ___ I work for is international.",
                        "options": [
                            "which",
                            "who",
                            "whose",
                            "where"
                        ],
                        "answer": 0,
                        "explanation": "Which (o that, o omissibile) per compagnie/organizzazioni."
                    },
                    {
                        "text": "My grandmother, ___ is 90, still drives.",
                        "options": [
                            "which",
                            "who",
                            "whose",
                            "that"
                        ],
                        "answer": 1,
                        "explanation": "Who (non that) in non-defining clause per persone."
                    }
                ]
            },
            {
                "type": "translation",
                "difficulty": 4,
                "questions": [
                    {
                        "text": "La persona che mi ha chiamato era un venditore.",
                        "answer": "The person who called me was a salesman",
                        "alternatives": [
                            "The person that called me was a salesman"
                        ],
                        "explanation": "Who o that per persone in defining clauses."
                    },
                    {
                        "text": "Il signor Jones, che è il mio vicino, ha 80 anni.",
                        "answer": "Mr Jones, who is my neighbour, is 80 years old",
                        "alternatives": [
                            "Mr Jones, who is my neighbor, is 80 years old"
                        ],
                        "explanation": "Who (non that) in non-defining clause tra virgole."
                    },
                    {
                        "text": "La macchina che ha comprato è elettrica.",
                        "answer": "The car which she bought is electric",
                        "alternatives": [
                            "The car that she bought is electric",
                            "The car she bought is electric"
                        ],
                        "explanation": "Which, that, o omissibile per cose in defining clauses."
                    },
                    {
                        "text": "Questo hotel, che ho trovato online, è molto economico.",
                        "answer": "This hotel, which I found online, is very cheap",
                        "alternatives": [],
                        "explanation": "Which (non that) in non-defining clause tra virgole."
                    },
                    {
                        "text": "Ho incontrato un uomo il cui cane era gigante.",
                        "answer": "I met a man whose dog was giant",
                        "alternatives": [
                            "I met a man whose dog was huge"
                        ],
                        "explanation": "Whose per possesso (il cane dell'uomo)."
                    },
                    {
                        "text": "La ragazza il cui telefono sta squillando dovrebbe rispondere.",
                        "answer": "The girl whose phone is ringing should answer",
                        "alternatives": [],
                        "explanation": "Whose per possesso (il telefono della ragazza)."
                    },
                    {
                        "text": "Le persone che fanno esercizio regolarmente vivono più a lungo.",
                        "answer": "People who exercise regularly live longer",
                        "alternatives": [
                            "People that exercise regularly live longer"
                        ],
                        "explanation": "Who o that per persone in defining clauses generali."
                    },
                    {
                        "text": "Mio fratello, che vive a Londra, è un dottore.",
                        "answer": "My brother, who lives in London, is a doctor",
                        "alternatives": [],
                        "explanation": "Who (non that) in non-defining clause."
                    },
                    {
                        "text": "Parigi, che è la capitale della Francia, è bellissima.",
                        "answer": "Paris, which is the capital of France, is beautiful",
                        "alternatives": [],
                        "explanation": "Which (non that) in non-defining clause con informazione nota."
                    },
                    {
                        "text": "Il portatile il cui schermo è rotto ha bisogno di riparazione.",
                        "answer": "The laptop whose screen is broken needs repair",
                        "alternatives": [],
                        "explanation": "Whose per possesso (lo schermo del portatile)."
                    }
                ]
            },
            {
                "type": "cloze-test",
                "difficulty": 4,
                "context": "A Day in London\n\nYesterday I visited the British Museum, (1) ......... is one of the most famous museums in the world. The building, (2) ......... was designed in the 19th century, is absolutely magnificent.\n\nI met a guide (3) ......... showed me around. She was a woman (4) ......... knowledge of ancient Egypt was incredible. She showed me an artifact (5) ......... dates back to 3000 BC. The room (6) ......... we saw it was full of tourists.\n\nLater, I had lunch at a café (7) ......... my friend had recommended. The waitress, (8) ......... name I can't remember, was very friendly. She served me a dish (9) ......... I'd never tried before.\n\nIn the afternoon, I went to Camden Market. I bought a vintage jacket from a seller (10) ......... had amazing taste. The jacket, (11) ......... cost only £20, looks fantastic!\n\nI also met a street musician (12) ......... was playing the violin. The music (13) ......... he played was beautiful. It was a day (14) ......... I'll never forget!",
                "questions": [
                    {
                        "blank_number": 1,
                        "options": [
                            "A) who",
                            "B) which",
                            "C) that",
                            "D) whose"
                        ],
                        "answer": 1,
                        "explanation": "Which per cose in non-defining clause (tra virgole)."
                    },
                    {
                        "blank_number": 2,
                        "options": [
                            "A) who",
                            "B) which",
                            "C) that",
                            "D) whose"
                        ],
                        "answer": 1,
                        "explanation": "Which per cose in non-defining clause (informazione extra)."
                    },
                    {
                        "blank_number": 3,
                        "options": [
                            "A) which",
                            "B) whose",
                            "C) who",
                            "D) whom"
                        ],
                        "answer": 2,
                        "explanation": "Who per persone in defining clause (specifica quale guida)."
                    },
                    {
                        "blank_number": 4,
                        "options": [
                            "A) who",
                            "B) which",
                            "C) whose",
                            "D) that"
                        ],
                        "answer": 2,
                        "explanation": "Whose per possesso (la conoscenza della donna)."
                    },
                    {
                        "blank_number": 5,
                        "options": [
                            "A) who",
                            "B) which",
                            "C) whose",
                            "D) where"
                        ],
                        "answer": 1,
                        "explanation": "Which/that per cose in defining clause (quale artefatto)."
                    },
                    {
                        "blank_number": 6,
                        "options": [
                            "A) which",
                            "B) where",
                            "C) who",
                            "D) whose"
                        ],
                        "answer": 1,
                        "explanation": "Where per luoghi (in quale stanza)."
                    },
                    {
                        "blank_number": 7,
                        "options": [
                            "A) who",
                            "B) which",
                            "C) that",
                            "D) where"
                        ],
                        "answer": 2,
                        "explanation": "That per cose in defining clause (quale café). That è il jolly."
                    },
                    {
                        "blank_number": 8,
                        "options": [
                            "A) who",
                            "B) which",
                            "C) whose",
                            "D) that"
                        ],
                        "answer": 2,
                        "explanation": "Whose per possesso (il nome della cameriera)."
                    },
                    {
                        "blank_number": 9,
                        "options": [
                            "A) who",
                            "B) which",
                            "C) whose",
                            "D) where"
                        ],
                        "answer": 1,
                        "explanation": "Which/that per cose in defining clause (quale piatto)."
                    },
                    {
                        "blank_number": 10,
                        "options": [
                            "A) which",
                            "B) whose",
                            "C) who",
                            "D) whom"
                        ],
                        "answer": 2,
                        "explanation": "Who per persone in defining clause (quale venditore)."
                    },
                    {
                        "blank_number": 11,
                        "options": [
                            "A) who",
                            "B) which",
                            "C) that",
                            "D) whose"
                        ],
                        "answer": 1,
                        "explanation": "Which per cose in non-defining clause (informazione extra sulla giacca)."
                    },
                    {
                        "blank_number": 12,
                        "options": [
                            "A) which",
                            "B) whose",
                            "C) who",
                            "D) whom"
                        ],
                        "answer": 2,
                        "explanation": "Who per persone in defining clause (quale musicista)."
                    },
                    {
                        "blank_number": 13,
                        "options": [
                            "A) who",
                            "B) which",
                            "C) whose",
                            "D) where"
                        ],
                        "answer": 1,
                        "explanation": "Which/that per cose (quale musica)."
                    },
                    {
                        "blank_number": 14,
                        "options": [
                            "A) who",
                            "B) which",
                            "C) that",
                            "D) when"
                        ],
                        "answer": 2,
                        "explanation": "That per defining clause con tempo (quale giorno). That è il jolly."
                    }
                ]
            },
            {
                "type": "key-word-transformation",
                "difficulty": 5,
                "questions": [
                    {
                        "first_sentence": "The man is my teacher. He is talking to Sarah.",
                        "keyword": "who",
                        "second_sentence_start": "The man",
                        "second_sentence_end": "is my teacher.",
                        "answer": "who is talking to Sarah",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Defining relative clause con 'who' per unire due frasi su una persona."
                    },
                    {
                        "first_sentence": "I bought a car. Its engine is very powerful.",
                        "keyword": "whose",
                        "second_sentence_start": "I bought a car",
                        "second_sentence_end": "very powerful.",
                        "answer": "whose engine is",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Whose per sostituire l'aggettivo possessivo (its)."
                    },
                    {
                        "first_sentence": "That's the hotel. We stayed there last summer.",
                        "keyword": "where",
                        "second_sentence_start": "That's the hotel",
                        "second_sentence_end": "last summer.",
                        "answer": "where we stayed",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Where per sostituire 'there' (luogo)."
                    },
                    {
                        "first_sentence": "The book is on the table. I bought it yesterday.",
                        "keyword": "which",
                        "second_sentence_start": "The book",
                        "second_sentence_end": "is on the table.",
                        "answer": "which I bought yesterday",
                        "alternatives": ["that I bought yesterday"],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Defining relative clause con which/that per cose."
                    },
                    {
                        "first_sentence": "Mr. Jones is 80 years old. He is my neighbour.",
                        "keyword": "who",
                        "second_sentence_start": "Mr. Jones,",
                        "second_sentence_end": ", is 80 years old.",
                        "answer": "who is my neighbour",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Non-defining clause (extra info) - NON si può usare 'that'."
                    },
                    {
                        "first_sentence": "The woman lives next door. Her son is a doctor.",
                        "keyword": "whose",
                        "second_sentence_start": "The woman",
                        "second_sentence_end": "lives next door.",
                        "answer": "whose son is a doctor",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Whose per esprimere possesso (il figlio della donna)."
                    },
                    {
                        "first_sentence": "This is the restaurant. I told you about it.",
                        "keyword": "that",
                        "second_sentence_start": "This is the restaurant",
                        "second_sentence_end": "you about.",
                        "answer": "that I told",
                        "alternatives": ["which I told"],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Defining clause con that/which come oggetto."
                    },
                    {
                        "first_sentence": "The girl won the competition. She studies at our school.",
                        "keyword": "who",
                        "second_sentence_start": "The girl",
                        "second_sentence_end": "studies at our school.",
                        "answer": "who won the competition",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Defining relative clause per identificare quale ragazza."
                    },
                    {
                        "first_sentence": "The house is very old. Its roof needs repair.",
                        "keyword": "whose",
                        "second_sentence_start": "The house",
                        "second_sentence_end": "is very old.",
                        "answer": "whose roof needs repair",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "Whose per possesso (il tetto della casa)."
                    },
                    {
                        "first_sentence": "1985 is the year. I was born then.",
                        "keyword": "when",
                        "second_sentence_start": "1985 is the year",
                        "second_sentence_end": "I was born.",
                        "answer": "when",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 5,
                        "explanation": "When per sostituire 'then' (tempo)."
                    }
                ]
            }
        ]
    },
    "past-perfect": {
        "title": "Past Perfect Simple & Continuous",
        "description": "Il passato del passato: azioni avvenute prima di un altro momento nel passato",
        "exercises": [
            {
                "type": "fill-blank",
                "difficulty": 3,
                "questions": [
                    {
                        "text": "By the time we arrived at the airport, the plane ___ (already / take off).",
                        "answer": "had already taken off",
                        "explanation": "'By the time' richiede il Past Perfect. 'Already' conferma che l'azione era completata prima dell'arrivo."
                    },
                    {
                        "text": "She was tired because she ___ (work) in the garden all morning.",
                        "answer": "had been working",
                        "explanation": "Past Perfect Continuous: enfatizza la durata dell'azione (tutta la mattina) che giustifica la stanchezza."
                    },
                    {
                        "text": "The manager ___ (wait) for the report since Monday morning when I finally sent it.",
                        "answer": "had been waiting",
                        "explanation": "Past Perfect Continuous: azione di durata (since Monday morning) in corso prima di un evento. 'Since' + verbo di azione → Continuous."
                    },
                    {
                        "text": "The students ___ (study) for three hours before the power cut.",
                        "answer": "had been studying",
                        "explanation": "Past Perfect Continuous: durata (three hours) dell'azione in corso prima dell'evento (power cut)."
                    },
                    {
                        "text": "It was the first time he ___ (ever / travel) business class.",
                        "answer": "had ever travelled",
                        "explanation": "'It was the first time' richiede obbligatoriamente il Past Perfect Simple."
                    },
                    {
                        "text": "That was the most spectacular sunset I ___ (ever / see).",
                        "answer": "had ever seen",
                        "explanation": "Superlativo + 'ever' → Past Perfect Simple."
                    },
                    {
                        "text": "His hands were covered in paint because he ___ (decorate) the living room.",
                        "answer": "had been decorating",
                        "explanation": "Past Perfect Continuous: l'azione in corso (decorare) giustifica lo stato fisico (mani piene di vernice)."
                    },
                    {
                        "text": "She told me she ___ (never / try) Japanese food before.",
                        "answer": "had never tried",
                        "explanation": "Discorso indiretto al passato: 'I have never tried' → 'she had never tried'."
                    },
                    {
                        "text": "She ___ (know) about the problem since the beginning, but she hadn't said anything.",
                        "answer": "had known",
                        "explanation": "'Know' è verbo di stato → Past Perfect Simple con 'since'. I verbi di stato non si usano mai al Continuous."
                    },
                    {
                        "text": "The athlete ___ (train) intensively for six months before the competition.",
                        "answer": "had been training",
                        "explanation": "Past Perfect Continuous: 'train' è verbo di azione. Durata (six months) prima di un evento (competition)."
                    },
                    {
                        "text": "___ you ever ___ (visit) that island before last summer?",
                        "answer": "Had you ever visited",
                        "explanation": "Forma interrogativa del Past Perfect Simple. 'Before last summer' indica un momento di riferimento nel passato."
                    },
                    {
                        "text": "He explained that he ___ (not / finish) the report yet.",
                        "answer": "had not finished",
                        "explanation": "Discorso indiretto + 'yet' → Past Perfect Simple negativo."
                    },
                    {
                        "text": "When I called her, she ___ (cry) — her eyes were still red.",
                        "answer": "had been crying",
                        "explanation": "Past Perfect Continuous: l'azione (piangere) era in corso e giustifica lo stato fisico (occhi rossi)."
                    },
                    {
                        "text": "The team ___ (not / score) a single goal before the second half.",
                        "answer": "had not scored",
                        "explanation": "Past Perfect Simple negativo: azione non completata prima di un momento di riferimento (second half)."
                    },
                    {
                        "text": "By the time the rescue team reached the hikers, they ___ (walk) for twelve hours.",
                        "answer": "had been walking",
                        "explanation": "Past Perfect Continuous: durata (twelve hours) dell'azione in corso prima dell'evento (rescue team)."
                    },
                    {
                        "text": "She asked me where I ___ (buy) that jacket.",
                        "answer": "had bought",
                        "explanation": "Discorso indiretto al passato: 'Where did you buy it?' → 'She asked where I had bought it'."
                    },
                    {
                        "text": "The restaurant ___ (already / close) when we got there at midnight.",
                        "answer": "had already closed",
                        "explanation": "'Close' è un verbo di azione puntuale → Past Perfect Simple. 'Already' conferma l'anteriorità."
                    },
                    {
                        "text": "My sister ___ (own) that car for a year when it broke down.",
                        "answer": "had owned",
                        "explanation": "'Own' è verbo di stato → Past Perfect Simple, anche con 'for'."
                    },
                    {
                        "text": "The doctor noticed that the patient ___ (not / sleep) properly for weeks.",
                        "answer": "had not been sleeping",
                        "explanation": "Past Perfect Continuous negativo: durata (weeks) dell'azione mancata. Attenzione: la negazione del Continuous è accettata qui perché esprime durata, non il tipico 'not' puntuale."
                    },
                    {
                        "text": "Before she became a chef, she ___ (never / cook) professionally.",
                        "answer": "had never cooked",
                        "explanation": "'Never' + Past Perfect Simple: esperienza mai vissuta fino a un momento nel passato."
                    }
                ]
            },
            {
                "type": "multiple-choice",
                "difficulty": 2,
                "questions": [
                    {
                        "text": "When I got to the party, almost everyone ___.",
                        "options": [
                            "has already left",
                            "already left",
                            "had already left",
                            "had already been leaving"
                        ],
                        "answer": 2,
                        "explanation": "Past Perfect Simple: azione completata prima del mio arrivo. 'Leave' è un verbo puntuale, non si usa il Continuous."
                    },
                    {
                        "text": "They ___ for a solution since last Tuesday when the whole system crashed.",
                        "options": [
                            "searched",
                            "had been searching",
                            "had searched",
                            "were searching"
                        ],
                        "answer": 1,
                        "explanation": "Past Perfect Continuous: 'since last Tuesday' indica un punto di partenza nel passato; 'search' è verbo di azione → si usa il Continuous per enfatizzare il processo in corso."
                    },
                    {
                        "text": "It was the second time she ___ that mistake.",
                        "options": [
                            "made",
                            "has made",
                            "had been making",
                            "had made"
                        ],
                        "answer": 3,
                        "explanation": "'It was the second time' richiede obbligatoriamente il Past Perfect Simple."
                    },
                    {
                        "text": "He told us he ___ that film three times already.",
                        "options": [
                            "saw",
                            "has seen",
                            "had seen",
                            "had been seeing"
                        ],
                        "answer": 2,
                        "explanation": "Discorso indiretto al passato + 'already': Past Perfect Simple."
                    },
                    {
                        "text": "The children's clothes were dirty because they ___ in the garden.",
                        "options": [
                            "played",
                            "had been playing",
                            "had played",
                            "have been playing"
                        ],
                        "answer": 1,
                        "explanation": "Past Perfect Continuous: l'azione in corso (giocare) giustifica lo stato (vestiti sporchi). Enfasi sulla durata."
                    },
                    {
                        "text": "That was the best pasta I ___ ever ___.",
                        "options": [
                            "have / eaten",
                            "had / eaten",
                            "had / been eating",
                            "was / eating"
                        ],
                        "answer": 1,
                        "explanation": "Superlativo + 'ever' → Past Perfect Simple: 'had ever eaten'."
                    },
                    {
                        "text": "By the time the meeting started, we ___ for over an hour.",
                        "options": [
                            "waited",
                            "had waited",
                            "had been waiting",
                            "have been waiting"
                        ],
                        "answer": 2,
                        "explanation": "Past Perfect Continuous: durata dell'attesa (over an hour) prima dell'evento (meeting started). 'By the time' è parola spia."
                    },
                    {
                        "text": "He ___ that she was lying since the very beginning of the conversation.",
                        "options": [
                            "had been knowing",
                            "knew",
                            "had known",
                            "was knowing"
                        ],
                        "answer": 2,
                        "explanation": "'Know' è verbo di stato → Past Perfect Simple con 'since'. Le opzioni A e D sono sbagliate perché 'know' non si usa mai al Continuous. La B (Past Simple) non esprime l'anteriorità rispetto alla conversazione."
                    },
                    {
                        "text": "She mentioned she ___ ever ___ to Asia before that trip.",
                        "options": [
                            "has / been",
                            "hadn't / been",
                            "hadn't / being",
                            "wasn't / been"
                        ],
                        "answer": 1,
                        "explanation": "Discorso indiretto negativo: 'I have never been' → 'she hadn't ever been' (= she had never been)."
                    },
                    {
                        "text": "When the firemen arrived, the fire ___ for two hours.",
                        "options": [
                            "burned",
                            "had been burning",
                            "had burned",
                            "was burning"
                        ],
                        "answer": 1,
                        "explanation": "Past Perfect Continuous: durata dell'incendio in corso (two hours) prima dell'arrivo dei pompieri."
                    },
                    {
                        "text": "Before he became a pilot, he ___ of flying before.",
                        "options": [
                            "had never thought",
                            "never thought",
                            "had never been thinking",
                            "has never thought"
                        ],
                        "answer": 0,
                        "explanation": "Past Perfect Simple negativo: 'think' è un verbo di stato/azione mentale, non si usa il Continuous."
                    },
                    {
                        "text": "She asked me if I ___ the new Italian restaurant.",
                        "options": [
                            "tried",
                            "have tried",
                            "had tried",
                            "had been trying"
                        ],
                        "answer": 2,
                        "explanation": "Discorso indiretto: 'Have you tried...?' → 'She asked if I had tried...' Past Perfect Simple."
                    },
                    {
                        "text": "The programmer's eyes were sore because he ___ at the screen all day.",
                        "options": [
                            "stared",
                            "had stared",
                            "had been staring",
                            "was staring"
                        ],
                        "answer": 2,
                        "explanation": "Past Perfect Continuous: l'azione in corso (fissare lo schermo) giustifica lo stato fisico (occhi stanchi)."
                    },
                    {
                        "text": "It was the first time I ___ such an unusual flavour.",
                        "options": [
                            "tasted",
                            "had been tasting",
                            "have tasted",
                            "had tasted"
                        ],
                        "answer": 3,
                        "explanation": "'It was the first time' → sempre Past Perfect Simple."
                    },
                    {
                        "text": "The coach was disappointed because the team ___ a single match in three months.",
                        "options": [
                            "didn't win",
                            "hadn't won",
                            "hadn't been winning",
                            "hasn't won"
                        ],
                        "answer": 1,
                        "explanation": "Past Perfect Simple negativo: risultato (zero vittorie). Con 'not' si usa il Simple, non il Continuous."
                    },
                    {
                        "text": "___ you ___ that novel before the exam?",
                        "options": [
                            "Did / finish",
                            "Had / finished",
                            "Had / been finishing",
                            "Have / finished"
                        ],
                        "answer": 1,
                        "explanation": "Forma interrogativa del Past Perfect Simple. 'Finish' è un verbo puntuale, non si usa il Continuous."
                    },
                    {
                        "text": "The explorers were exhausted. They ___ through the jungle for days.",
                        "options": [
                            "trekked",
                            "had trekked",
                            "had been trekking",
                            "were trekking"
                        ],
                        "answer": 2,
                        "explanation": "Past Perfect Continuous: durata dell'azione in corso (days) che giustifica la stanchezza."
                    },
                    {
                        "text": "He explained that the project ___ three weeks before the deadline.",
                        "options": [
                            "finished",
                            "had been finishing",
                            "had finished",
                            "has finished"
                        ],
                        "answer": 2,
                        "explanation": "Discorso indiretto: Past Perfect Simple. 'Finish' è azione puntuale e completata."
                    },
                    {
                        "text": "The lake was beautiful — it was the most breathtaking view I ___ ever ___.",
                        "options": [
                            "had / seen",
                            "have / seen",
                            "had / been seeing",
                            "was / seen"
                        ],
                        "answer": 0,
                        "explanation": "Superlativo + 'ever' → Past Perfect Simple: 'had ever seen'."
                    },
                    {
                        "text": "She ___ in that company for five years before she got promoted.",
                        "options": [
                            "worked",
                            "had been working",
                            "has been working",
                            "was working"
                        ],
                        "answer": 1,
                        "explanation": "Past Perfect Continuous: durata dell'azione in corso (five years) prima di un evento nel passato (promotion). 'Work' è verbo di azione."
                    }
                ]
            },
            {
                "type": "translation",
                "difficulty": 4,
                "questions": [
                    {
                        "text": "Quando sono arrivato alla stazione, il treno era già partito.",
                        "answer": "When I arrived at the station, the train had already left.",
                        "alternatives": [
                            "By the time I arrived at the station, the train had already left.",
                            "When I got to the station, the train had already departed."
                        ],
                        "explanation": "Past Perfect Simple: 'leave' è verbo di azione puntuale. Sequenza: treno parte → io arrivo."
                    },
                    {
                        "text": "Lavorava in quella startup da marzo quando l'azienda chiuse improvvisamente.",
                        "answer": "She had been working at that startup since March when the company suddenly closed.",
                        "alternatives": [
                            "He had been working at that startup since March when the company suddenly closed.",
                            "She had been working at that startup since March when the company closed."
                        ],
                        "explanation": "Past Perfect Continuous: 'work' è verbo di azione + 'since March' indica il punto di partenza → Continuous. Nota: in italiano 'da' + mese = 'since' in inglese."
                    },
                    {
                        "text": "Era il posto più bello in cui avessi mai mangiato.",
                        "answer": "It was the most beautiful place I had ever eaten.",
                        "alternatives": [
                            "It was the nicest place I had ever eaten at.",
                            "That was the most beautiful restaurant I had ever eaten in."
                        ],
                        "explanation": "Superlativo + 'ever' → Past Perfect Simple."
                    },
                    {
                        "text": "Mi disse che aveva già spedito il pacco.",
                        "answer": "She told me she had already sent the parcel.",
                        "alternatives": [
                            "He told me he had already sent the package.",
                            "She said she had already sent the parcel."
                        ],
                        "explanation": "Discorso indiretto al passato + 'already': Past Perfect Simple."
                    },
                    {
                        "text": "Era la prima volta che guidava su un'autostrada.",
                        "answer": "It was the first time she had driven on a motorway.",
                        "alternatives": [
                            "It was the first time he had driven on a motorway.",
                            "It was the first time she had ever driven on a motorway."
                        ],
                        "explanation": "'It was the first time' → Past Perfect Simple obbligatorio."
                    },
                    {
                        "text": "I suoi occhi erano rossi perché aveva pianto per ore.",
                        "answer": "His eyes were red because he had been crying for hours.",
                        "alternatives": [
                            "Her eyes were red because she had been crying for hours."
                        ],
                        "explanation": "Past Perfect Continuous: l'azione in corso (piangere per ore) giustifica lo stato fisico."
                    },
                    {
                        "text": "Conoscevano quel segreto da anni quando decisero finalmente di parlarne.",
                        "answer": "They had known that secret for years when they finally decided to talk about it.",
                        "alternatives": [
                            "They had known that secret for years when they finally decided to speak about it."
                        ],
                        "explanation": "'Know' è verbo di stato → Past Perfect Simple. Attenzione: in italiano 'da anni' si traduce con 'for years' (durata generica), non 'since years'. 'Since' si usa solo con un punto preciso nel tempo (since 2010, since Monday)."
                    },
                    {
                        "text": "Chiese dove avessi comprato quella ricetta.",
                        "answer": "She asked me where I had found that recipe.",
                        "alternatives": [
                            "He asked where I had got that recipe.",
                            "She wanted to know where I had bought that recipe."
                        ],
                        "explanation": "Discorso indiretto: 'Where did you find it?' → Past Perfect Simple nel reported speech."
                    },
                    {
                        "text": "Non avevano ancora deciso il menu quando gli ospiti arrivarono.",
                        "answer": "They hadn't decided the menu yet when the guests arrived.",
                        "alternatives": [
                            "They had not yet decided the menu when the guests arrived.",
                            "They hadn't yet decided on the menu when the guests arrived."
                        ],
                        "explanation": "Past Perfect Simple negativo + 'yet': 'decide' è verbo puntuale. Con 'not' si usa sempre il Simple."
                    },
                    {
                        "text": "Quando il professore entrò, gli studenti stavano litigando da venti minuti.",
                        "answer": "When the teacher walked in, the students had been arguing for twenty minutes.",
                        "alternatives": [
                            "When the professor came in, the students had been arguing for twenty minutes."
                        ],
                        "explanation": "Past Perfect Continuous: durata dell'azione in corso (twenty minutes) prima dell'evento (professore entra)."
                    }
                ]
            },
            {
                "type": "cloze-test",
                "difficulty": 4,
                "context": "A Cooking Competition\n\nLast autumn, I entered a regional cooking competition for the first time. I was extremely nervous because I (1) .......... never taken part in a public event like that before. For weeks before the competition, I (2) .......... practising new recipes every evening to make sure I was well prepared. On the morning of the big day, I arrived at the venue early, but most of the other competitors (3) .......... already arrived and were setting up their workstations.\n\nI chose to prepare a complex fish dish that I (4) .......... perfecting for months. The judges walked around quietly, observing everyone as they cooked. By midday, I (5) .......... working non-stop for four hours and I was starting to feel the pressure. I realised that I (6) .......... forgotten to bring one of my key ingredients from home, which was a disaster.\n\nLuckily, a kind competitor next to me lent me what I needed. She explained that she (7) .......... a similar problem in a previous competition, so she always brought extras. By the time the judges announced the results, all the competitors (8) .......... their dishes and were standing quietly.\n\nThe head judge said it was the most creative menu she (9) .......... ever seen in fifteen years of judging. I couldn't believe it — I (10) .......... expecting such praise. She also mentioned that the winning dish (11) .......... using a technique that was rare in amateur competitions. One of the other judges added that I clearly (12) .......... a great deal before the event. When they called my name as the winner, I burst into tears. It was the first time I (13) .......... a competition of any kind.",
                "questions": [
                    {
                        "blank_number": 1,
                        "options": [
                            "A) have",
                            "B) had",
                            "C) hadn't",
                            "D) was"
                        ],
                        "answer": 1,
                        "explanation": "Past Perfect Simple: 'had never taken part before' — esperienza mai avuta fino a quel momento. 'Never' richiede il Simple."
                    },
                    {
                        "blank_number": 2,
                        "options": [
                            "A) had been",
                            "B) have been",
                            "C) was",
                            "D) had"
                        ],
                        "answer": 0,
                        "explanation": "Past Perfect Continuous: durata dell'azione (for weeks) prima dell'evento (competition). 'Practise' è verbo di azione."
                    },
                    {
                        "blank_number": 3,
                        "options": [
                            "A) have",
                            "B) were",
                            "C) had",
                            "D) would"
                        ],
                        "answer": 2,
                        "explanation": "Past Perfect Simple: 'had already arrived' — azione completata prima del mio arrivo. 'Arrive' è verbo puntuale."
                    },
                    {
                        "blank_number": 4,
                        "options": [
                            "A) was",
                            "B) had been",
                            "C) have been",
                            "D) had"
                        ],
                        "answer": 1,
                        "explanation": "Past Perfect Continuous: 'perfecting' è azione in corso per mesi prima della competizione. Enfatizza il processo."
                    },
                    {
                        "blank_number": 5,
                        "options": [
                            "A) was",
                            "B) have been",
                            "C) had been",
                            "D) had"
                        ],
                        "answer": 2,
                        "explanation": "Past Perfect Continuous: durata (four hours) dell'azione in corso prima di un momento nel passato."
                    },
                    {
                        "blank_number": 6,
                        "options": [
                            "A) forgot",
                            "B) have forgotten",
                            "C) had been forgetting",
                            "D) had"
                        ],
                        "answer": 3,
                        "explanation": "Past Perfect Simple: 'had forgotten' — azione puntuale completata prima della realizzazione. 'Forget' è verbo puntuale."
                    },
                    {
                        "blank_number": 7,
                        "options": [
                            "A) had",
                            "B) has had",
                            "C) was having",
                            "D) had been having"
                        ],
                        "answer": 0,
                        "explanation": "Discorso indiretto al passato: 'she had had a similar problem' — Past Perfect Simple. 'Have a problem' è espressione stativa."
                    },
                    {
                        "blank_number": 8,
                        "options": [
                            "A) finished",
                            "B) had finished",
                            "C) had been finishing",
                            "D) were finishing"
                        ],
                        "answer": 1,
                        "explanation": "Past Perfect Simple: 'had finished' — azione completata prima dell'annuncio. 'Finish' è verbo puntuale."
                    },
                    {
                        "blank_number": 9,
                        "options": [
                            "A) has",
                            "B) had been",
                            "C) had",
                            "D) was"
                        ],
                        "answer": 2,
                        "explanation": "Superlativo + 'ever' → Past Perfect Simple: 'the most creative menu she had ever seen'."
                    },
                    {
                        "blank_number": 10,
                        "options": [
                            "A) hadn't been",
                            "B) wasn't",
                            "C) haven't been",
                            "D) hadn't"
                        ],
                        "answer": 0,
                        "explanation": "Past Perfect Continuous negativo: 'hadn't been expecting' — processo non in corso. La negazione del Continuous è accettata qui perché si tratta di un'aspettativa in corso."
                    },
                    {
                        "blank_number": 11,
                        "options": [
                            "A) was",
                            "B) had",
                            "C) had been",
                            "D) had been using"
                        ],
                        "answer": 3,
                        "explanation": "Past Perfect Continuous: 'had been using a technique' — processo in corso durante la competizione."
                    },
                    {
                        "blank_number": 12,
                        "options": [
                            "A) practised",
                            "B) had been practising",
                            "C) had practised",
                            "D) was practising"
                        ],
                        "answer": 1,
                        "explanation": "Past Perfect Continuous: durata dell'allenamento prima della competizione. Enfasi sul processo di preparazione."
                    },
                    {
                        "blank_number": 13,
                        "options": [
                            "A) won",
                            "B) had been winning",
                            "C) have won",
                            "D) had won"
                        ],
                        "answer": 3,
                        "explanation": "'It was the first time' → Past Perfect Simple obbligatorio: 'it was the first time I had won'."
                    }
                ]
            },
            {
                "type": "key-word-transformation",
                "difficulty": 5,
                "questions": [
                    {
                        "first_sentence": "The concert had already started when we entered the venue.",
                        "keyword": "BY",
                        "second_sentence_start": "By the time we entered the venue,",
                        "second_sentence_end": ".",
                        "answer": "the concert had already started",
                        "alternatives": ["the concert had already begun"],
                        "min_words": 4,
                        "max_words": 5,
                        "explanation": "'By the time' sostituisce 'when' per indicare che un'azione era già avvenuta prima di un'altra."
                    },
                    {
                        "first_sentence": "She started studying at 7 PM and the guests arrived at 9 PM.",
                        "keyword": "BEEN",
                        "second_sentence_start": "She had been",
                        "second_sentence_end": "when the guests arrived.",
                        "answer": "studying for two hours",
                        "alternatives": ["studying for 2 hours"],
                        "min_words": 3,
                        "max_words": 4,
                        "explanation": "Past Perfect Continuous con 'been': enfatizza la durata (two hours) dell'azione in corso prima dell'evento."
                    },
                    {
                        "first_sentence": "That was the most challenging hike I had ever done.",
                        "keyword": "NEVER",
                        "second_sentence_start": "I had",
                        "second_sentence_end": "such a challenging hike before.",
                        "answer": "never done",
                        "alternatives": ["never attempted", "never completed"],
                        "min_words": 2,
                        "max_words": 3,
                        "explanation": "Superlativo → Past Perfect Simple con 'never': 'the most...ever' ↔ 'had never...before'."
                    },
                    {
                        "first_sentence": "'I have already booked the restaurant,' she said.",
                        "keyword": "TOLD",
                        "second_sentence_start": "She told",
                        "second_sentence_end": "the restaurant.",
                        "answer": "us she had already booked",
                        "alternatives": ["me she had already booked", "him she had already booked"],
                        "min_words": 4,
                        "max_words": 5,
                        "explanation": "Discorso indiretto: Present Perfect → Past Perfect Simple. 'I have booked' → 'she had booked'."
                    },
                    {
                        "first_sentence": "It was my first experience of cooking in a professional kitchen.",
                        "keyword": "FIRST",
                        "second_sentence_start": "It was the first time",
                        "second_sentence_end": "in a professional kitchen.",
                        "answer": "I had cooked",
                        "alternatives": ["I had ever cooked"],
                        "min_words": 2,
                        "max_words": 3,
                        "explanation": "'It was the first time' richiede Past Perfect Simple."
                    },
                    {
                        "first_sentence": "He started working at 6 AM. The boss arrived at 10 AM.",
                        "keyword": "HAD",
                        "second_sentence_start": "By the time the boss arrived, he",
                        "second_sentence_end": "for four hours.",
                        "answer": "had been working",
                        "alternatives": [],
                        "min_words": 3,
                        "max_words": 3,
                        "explanation": "Past Perfect Continuous: durata dell'azione in corso (four hours) prima dell'arrivo del capo."
                    },
                    {
                        "first_sentence": "They bought their flat in 2010 and sold it in 2022.",
                        "keyword": "FOR",
                        "second_sentence_start": "They had owned their flat",
                        "second_sentence_end": "when they sold it.",
                        "answer": "for twelve years",
                        "alternatives": ["for 12 years"],
                        "min_words": 3,
                        "max_words": 3,
                        "explanation": "'Own' è verbo di stato → Past Perfect Simple con 'for'. Durata = 2022 - 2010 = 12 anni."
                    },
                    {
                        "first_sentence": "The journalist asked: 'Have you ever interviewed a politician before?'",
                        "keyword": "EVER",
                        "second_sentence_start": "The journalist asked if",
                        "second_sentence_end": "a politician before.",
                        "answer": "I had ever interviewed",
                        "alternatives": ["she had ever interviewed", "he had ever interviewed"],
                        "min_words": 3,
                        "max_words": 4,
                        "explanation": "Discorso indiretto: 'Have you ever...?' → 'if I had ever...' Past Perfect Simple."
                    },
                    {
                        "first_sentence": "She joined the gym in January and ran her first marathon in June.",
                        "keyword": "SINCE",
                        "second_sentence_start": "She had been training",
                        "second_sentence_end": "when she ran her first marathon.",
                        "answer": "since January",
                        "alternatives": [],
                        "min_words": 2,
                        "max_words": 2,
                        "explanation": "Past Perfect Continuous con 'since': verbo di azione (train) + punto di partenza (January)."
                    },
                    {
                        "first_sentence": "The flight had been delayed, so the passengers were exhausted when they finally boarded.",
                        "keyword": "ALREADY",
                        "second_sentence_start": "The passengers had",
                        "second_sentence_end": "hours before they finally boarded.",
                        "answer": "already been waiting for",
                        "alternatives": ["already waited for"],
                        "min_words": 3,
                        "max_words": 4,
                        "explanation": "Past Perfect Continuous con 'already been': durata dell'attesa prima dell'imbarco. 'Already' sottolinea che l'attesa era già in corso."
                    }
                ]
            }
        ]
    }
};