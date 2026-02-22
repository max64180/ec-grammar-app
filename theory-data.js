// Theory content for each grammar topic
const theoryData = {
    "present-perfect": {
        title: "Present Perfect vs Past Simple",
        subtitle: "Il segreto per non confonderli è guardare il 'tempo' della frase, non l'azione",
        sections: [
            {
                title: "Past Simple: Il tempo è 'chiuso'",
                color: "#dc3545",
                content: "Si usa quando l'azione è avvenuta in un momento preciso del passato che è completamente terminato. C'è un muro tra il passato e il presente.",
                why: "Per raccontare eventi storici, aneddoti o azioni con date/orari precisi.",
                examples: [
                    {
                        text: "I watched a movie last night.",
                        explanation: "La notte scorsa è finita"
                    },
                    {
                        text: "Leonardo da Vinci painted the Mona Lisa.",
                        explanation: "L'autore non è più in vita, il tempo è concluso"
                    }
                ]
            },
            {
                title: "Present Perfect Simple: Il tempo è 'aperto'",
                color: "#28a745",
                content: "Si usa quando il tempo non è specificato o l'azione ha ancora un legame fortissimo con il presente (un risultato o un'esperienza).",
                why: "Per parlare di esperienze di vita ('Ho fatto...') o azioni passate che spiegano una situazione attuale.",
                examples: [
                    {
                        text: "I have seen that movie.",
                        explanation: "Non dico quando, mi interessa il fatto che lo conosca ora"
                    },
                    {
                        text: "I have lost my passport!",
                        explanation: "L'ho perso nel passato, ma il problema è che ora non posso viaggiare"
                    }
                ]
            },
            {
                title: "Present Perfect Continuous: Focus sullo 'sforzo'",
                color: "#17a2b8",
                content: "Si forma con have/has + been + -ing. Si usa per sottolineare quanto tempo è durato un processo.",
                why: "Per giustificare uno stato presente (es. essere stanchi) o enfatizzare la continuità.",
                examples: [
                    {
                        text: "I have been running for an hour.",
                        explanation: "Sottolineo la durata dell'allenamento"
                    },
                    {
                        text: "She has been waiting since 8 AM.",
                        explanation: "Enfatizza l'attesa snervante"
                    }
                ]
            }
        ]
    },
    "modals": {
        title: "Modal Verbs: Obligation & Prohibition",
        subtitle: "Must, Have to, Mustn't e Don't have to",
        sections: [
            {
                title: "Must vs Have to: Entrambi indicano 'dovere'",
                color: "#667eea",
                content: "La sfumatura cambia",
                subsections: [
                    {
                        subtitle: "Must - Obbligo 'sentito' o interno",
                        content: "Chi parla decide che è necessario. Si usa anche per regole scritte impersonali.",
                        examples: [
                            {
                                text: "I must call my mum.",
                                explanation: "Sento io il bisogno di farlo"
                            },
                            {
                                text: "Passengers must fasten seatbelts.",
                                explanation: "Regola ufficiale"
                            }
                        ]
                    },
                    {
                        subtitle: "Have to - Obbligo 'subito' o esterno",
                        content: "C'è una circostanza o un'altra persona che ti costringe.",
                        examples: [
                            {
                                text: "I have to work on Saturdays.",
                                explanation: "È il mio contratto che lo impone"
                            },
                            {
                                text: "Do you have to wear a tie?",
                                explanation: "Te lo chiede l'azienda?"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Mustn't vs Don't have to: La grande differenza",
                color: "#dc3545",
                content: "Qui molti cadono in errore!",
                subsections: [
                    {
                        subtitle: "Mustn't - Proibizione",
                        content: "È vietato, non farlo o ci sono conseguenze.",
                        examples: [
                            {
                                text: "You mustn't park here.",
                                explanation: "È vietato, rischi la multa"
                            },
                            {
                                text: "You mustn't tell anyone.",
                                explanation: "È un segreto assoluto"
                            }
                        ]
                    },
                    {
                        subtitle: "Don't have to - Assenza di obbligo",
                        content: "Sei libero di scegliere, non è necessario ma puoi farlo.",
                        examples: [
                            {
                                text: "You don't have to come if you're tired.",
                                explanation: "Non sei obbligato, ma se vuoi puoi venire"
                            },
                            {
                                text: "Tomorrow is Sunday, I don't have to get up early.",
                                explanation: "Posso dormire, ma se voglio svegliarmi presto posso"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "future": {
        title: "The Future System: Il futuro multiplo",
        subtitle: "In inglese il futuro esprime l'atteggiamento di chi parla verso l'evento",
        sections: [
            {
                title: "1. Present Simple (Orari)",
                color: "#6c757d",
                content: "Si usa per eventi che non dipendono da noi ma da orari ufficiali.",
                examples: [
                    {
                        text: "The film starts at 9 PM.",
                        explanation: "Orario programmato del cinema"
                    },
                    {
                        text: "What time does the train leave?",
                        explanation: "Orario dei trasporti pubblici"
                    }
                ]
            },
            {
                title: "2. Present Continuous (Arrangements)",
                color: "#28a745",
                content: "È il futuro più 'sicuro'. Si usa quando hai già organizzato tutto con altre persone (hai preso appuntamento, comprato i biglietti).",
                examples: [
                    {
                        text: "I am flying to New York on Monday.",
                        explanation: "Ho il biglietto in mano"
                    },
                    {
                        text: "We are having dinner with Mark tonight.",
                        explanation: "Ci siamo messi d'accordo"
                    }
                ]
            },
            {
                title: "3. Be going to (Intenzioni & Evidenza)",
                color: "#ffc107",
                content: "Esprime intenzioni o previsioni basate su evidenza.",
                subsections: [
                    {
                        subtitle: "Intenzioni",
                        content: "Ho deciso di fare qualcosa ma non ho ancora organizzato i dettagli.",
                        examples: [
                            {
                                text: "I am going to study medicine.",
                                explanation: "Intenzione decisa ma non ancora organizzata"
                            }
                        ]
                    },
                    {
                        subtitle: "Evidenza",
                        content: "Vedo qualcosa che mi fa capire cosa sta per succedere.",
                        examples: [
                            {
                                text: "Watch out! You are going to drop that glass!",
                                explanation: "Vedo che sta per cadere"
                            }
                        ]
                    }
                ]
            },
            {
                title: "4. Will (Spontaneity & Predictions)",
                color: "#17a2b8",
                content: "Esprime decisioni spontanee e previsioni.",
                subsections: [
                    {
                        subtitle: "Decisioni istantanee",
                        content: "Prese mentre si parla.",
                        examples: [
                            {
                                text: "Wait, I will help you with those bags!",
                                explanation: "Decisione presa sul momento"
                            }
                        ]
                    },
                    {
                        subtitle: "Previsioni/Opinioni",
                        content: "Ciò che penso accadrà.",
                        examples: [
                            {
                                text: "I think it will be a great party.",
                                explanation: "Opinione personale sul futuro"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "conditionals": {
        title: "Conditionals: Il mondo delle ipotesi",
        subtitle: "Zero, First e Second Conditional",
        sections: [
            {
                title: "Zero Conditional (Certezze)",
                color: "#6c757d",
                content: "If + Present Simple, Present Simple. Se accade A, accade sempre B.",
                formula: "If + Present Simple, Present Simple",
                examples: [
                    {
                        text: "If you touch fire, you get burnt.",
                        explanation: "Verità universale - sempre vero"
                    },
                    {
                        text: "If it rains, the grass gets wet.",
                        explanation: "Fatto naturale - certezza"
                    }
                ]
            },
            {
                title: "First Conditional (Possibilità)",
                color: "#28a745",
                content: "If + Present Simple, Will + Base Form. Se accade A (probabile), succederà B.",
                formula: "If + Present Simple, Will + Base Form",
                examples: [
                    {
                        text: "If I have time, I will call you.",
                        explanation: "Situazione futura probabile"
                    },
                    {
                        text: "If you don't hurry, you will miss the bus.",
                        explanation: "Conseguenza futura probabile"
                    }
                ]
            },
            {
                title: "Second Conditional (Immaginazione)",
                color: "#17a2b8",
                content: "If + Past Simple, Would + Base Form. Situazioni ipotetiche o sogni.",
                formula: "If + Past Simple, Would + Base Form",
                examples: [
                    {
                        text: "If I won the lottery, I would buy a castle.",
                        explanation: "Situazione ipotetica improbabile"
                    },
                    {
                        text: "If I were you, I wouldn't do that.",
                        explanation: "Nota: si usa 'were' per dare consigli"
                    }
                ]
            }
        ]
    },
    "past-perfect": {
        title: "Past Perfect Simple & Continuous",
        subtitle: "Il 'passato del passato': per raccontare cosa era già successo prima di un momento nel passato",
        sections: [
            {
                title: "Past Perfect Simple: L'azione era già finita",
                color: "#8e44ad",
                content: "Si usa per un'azione completata PRIMA di un altro momento o evento nel passato. È il 'passato del passato': si forma con had + participio passato per tutti i soggetti.",
                formula: "had + past participle (per tutti i soggetti)",
                why: "Per chiarire la sequenza degli eventi: quale azione è avvenuta prima. Parole spia: before, after, when, already, just, by the time, never…before, yet.",
                examples: [
                    {
                        text: "When I arrived at the cinema, the film had already started.",
                        explanation: "Il film era iniziato PRIMA del mio arrivo. Sequenza: film inizia → io arrivo."
                    },
                    {
                        text: "She was exhausted because she had worked all night.",
                        explanation: "Il lavoro tutta la notte è causa dello stato presente (stanchezza)."
                    },
                    {
                        text: "By the time the ambulance arrived, the patient had recovered.",
                        explanation: "'By the time' è una parola spia classica del Past Perfect."
                    }
                ],
                subsections: [
                    {
                        subtitle: "Casi speciali: 'It was the first/second time' e superlativi",
                        content: "Il Past Perfect Simple si usa obbligatoriamente con 'it was the first/second/... time' e dopo i superlativi.",
                        examples: [
                            {
                                text: "It was the first time she had ever travelled alone.",
                                explanation: "Dopo 'it was the first time' → sempre Past Perfect"
                            },
                            {
                                text: "That was the most delicious meal I had ever tasted.",
                                explanation: "Dopo un superlativo + 'ever' → Past Perfect"
                            }
                        ]
                    },
                    {
                        subtitle: "Nel discorso indiretto",
                        content: "Quando riportiamo al passato ciò che qualcuno ha detto (con said, told, asked, explained, wanted to know), il Present Perfect e il Past Simple diventano Past Perfect.",
                        examples: [
                            {
                                text: "She said she had never visited Rome before.",
                                explanation: "'I have never visited Rome' → discorso indiretto al passato"
                            },
                            {
                                text: "He told me he had already sent the email.",
                                explanation: "'I have already sent the email' → diventa Past Perfect"
                            }
                        ]
                    }
                ],
                note: "PAROLE SPIA del Past Perfect Simple: already, just, never, yet, before, after, when, by the time, it was the first/second time, the best/worst...ever."
            },
            {
                title: "Past Perfect Continuous: L'azione era in corso",
                color: "#2980b9",
                content: "Si usa per un'azione che era in corso per un certo periodo PRIMA di un momento o evento nel passato. Enfatizza la durata e spesso giustifica uno stato fisico o emotivo passato. È il 'passato' del Present Perfect Continuous.",
                formula: "had + been + verbo-ing (per tutti i soggetti)",
                why: "Per sottolineare quanto a lungo qualcosa stava succedendo prima di un evento passato. Risponde alla domanda 'How long had you been doing it?'",
                examples: [
                    {
                        text: "She was exhausted because she had been running for two hours.",
                        explanation: "Enfatizza la durata della corsa che spiega la stanchezza."
                    },
                    {
                        text: "When the chef arrived, the kitchen staff had been preparing the dishes for hours.",
                        explanation: "Azione in corso (preparazione) prima di un evento (arrivo dello chef)."
                    },
                    {
                        text: "His eyes were red because he had been crying.",
                        explanation: "L'azione in corso (piangere) giustifica lo stato fisico (occhi rossi)."
                    }
                ],
                note: "ATTENZIONE — Il Past Perfect Continuous NON si usa: con verbi di stato (be, have, own, belong, want, know, understand, like); con verbi di azione puntuale/completata (leave, arrive, start, finish, stop, break, meet, decide); con just, already, ever, never, yet, once, twice, 'it was the first time'; nelle frasi negative (usa il Simple: She hadn't written any letters, NON She hadn't been writing); con espressioni di quantità/risultato (I had made five phone calls, NON I had been making)."
            },
            {
                title: "Simple vs Continuous: Come scegliere",
                color: "#16a085",
                content: "La differenza è la stessa che esiste tra Present Perfect Simple e Present Perfect Continuous. Chiediti: voglio sottolineare COSA era già successo (risultato/fatto compiuto) oppure PER QUANTO TEMPO stava succedendo (durata/processo)?",
                why: "Scegli il Simple per risultati e azioni complete. Scegli il Continuous per enfatizzare la durata di un'azione in corso. Con i verbi di stato usa sempre il Simple.",
                examples: [
                    {
                        text: "When the director arrived, the actors had learned their lines. (Simple)",
                        explanation: "Il risultato è già ottenuto: le battute sono state imparate. Azione completa."
                    },
                    {
                        text: "When the director arrived, the actors had been learning their lines for hours. (Continuous)",
                        explanation: "Enfasi sulla durata del processo di apprendimento, ancora in corso."
                    },
                    {
                        text: "He had lived in that city for ten years when he decided to move. (Simple — stato)",
                        explanation: "'Live' è verbo di stato: si usa sempre il Simple, mai il Continuous."
                    }
                ]
            },
            {
                title: "For e Since con il Past Perfect",
                color: "#e67e22",
                content: "Quando usiamo for o since per indicare da quanto tempo qualcosa stava succedendo nel passato, la scelta tra Simple e Continuous dipende dal tipo di verbo.",
                why: "Con verbi di STATO (be, have, know, own...) + for/since → Past Perfect Simple. Con verbi di AZIONE (work, study, try, live...) + for/since → Past Perfect Continuous.",
                examples: [
                    {
                        text: "They had owned that restaurant for fifteen years when they sold it.",
                        explanation: "'Own' è verbo di stato → Past Perfect Simple con 'for'."
                    },
                    {
                        text: "She had been studying medicine for three years when she changed faculty.",
                        explanation: "'Study' è verbo di azione → Past Perfect Continuous con 'for'."
                    },
                    {
                        text: "The team had been training since January when the coach resigned.",
                        explanation: "'Train' è verbo di azione → Past Perfect Continuous con 'since'."
                    }
                ],
                note: "Trucco rapido: se puoi sostituire il verbo con 'be' senza cambiare il significato fondamentale (stato = condizione), usa il Simple. Se descrive un'attività in corso, usa il Continuous."
            }
        ]
    },
    "relative-clauses": {
        title: "Relative Clauses: Chi, cosa e di chi",
        subtitle: "Servono a unire due informazioni evitando ripetizioni",
        sections: [
            {
                title: "Defining Clauses (Essenziali)",
                color: "#667eea",
                content: "Senza questa parte, la frase non ha senso. Non si usano virgole e si può usare THAT come jolly.",
                examples: [
                    {
                        text: "The person who called me was a salesman.",
                        explanation: "Oppure: The person that called me was a salesman."
                    },
                    {
                        text: "The car which she bought is electric.",
                        explanation: "Oppure: The car that she bought is electric."
                    }
                ]
            },
            {
                title: "Non-Defining Clauses (Extra)",
                color: "#28a745",
                content: "Aggiungono solo un dettaglio in più su qualcosa che già conosciamo. Si mettono tra virgole e NON accettano mai 'that'.",
                examples: [
                    {
                        text: "Mr. Jones, who is my neighbour, is 80 years old.",
                        explanation: "Sappiamo chi è Mr. Jones, che sia il vicino è un extra"
                    },
                    {
                        text: "This hotel, which I found online, is very cheap.",
                        explanation: "L'hotel è il soggetto principale, il resto è un'aggiunta"
                    }
                ]
            },
            {
                title: "Whose: Il pronome del possesso",
                color: "#ffc107",
                content: "Sostituisce l'aggettivo possessivo (his, her, their).",
                examples: [
                    {
                        text: "I met a man whose dog was giant.",
                        explanation: "Il cane dell'uomo"
                    },
                    {
                        text: "The girl whose phone is ringing should answer.",
                        explanation: "Il telefono della ragazza"
                    }
                ],
                note: "WHOSE crea un legame di possesso tra due elementi della frase, evitando ripetizioni e rendendo il discorso più fluido ed elegante."
            }
        ]
    },
    "all-mixed": {
        title: "ALL - Mixed Practice",
        subtitle: "Ripasso rapido di tutti gli argomenti: ogni flashcard ti ricorda la regola chiave, le parole spia e la trappola più comune",
        sections: [
            {
                title: "Present Perfect vs Past Simple",
                color: "#e74c3c",
                content: "Usa il Present Perfect (have/has + past participle) per esperienze senza un tempo preciso, azioni con effetto sul presente o eventi recenti. Usa il Past Simple per azioni avvenute in un momento definito e concluso nel passato.",
                examples: [
                    {
                        text: "I have visited Japan. / I visited Japan in 2019.",
                        explanation: "Present Perfect = esperienza di vita (nessun tempo). Past Simple = momento preciso."
                    },
                    {
                        text: "She has just finished the report. / She finished the report at 5 pm.",
                        explanation: "just + Present Perfect per azioni appena compiute. Past Simple con orario preciso."
                    }
                ],
                note: "⚠️ Trappola comune: 'yesterday', 'last week', 'in 2020', 'ago' → sempre Past Simple. 'already', 'just', 'yet', 'ever', 'never', 'since', 'for' (con effetto presente) → Present Perfect.",
                keywords: "already, just, yet, ever, never, since, for, recently, so far, this week"
            },
            {
                title: "Modal Verbs",
                color: "#8e44ad",
                content: "I modali esprimono: obbligo (must/have to), divieto (mustn't), mancanza di obbligo (don't have to), consiglio (should), possibilità (can/could/might), deduzione (must/can't). Dopo un modale segue sempre l'infinito senza 'to'.",
                examples: [
                    {
                        text: "You must wear a seatbelt. / You don't have to wear a tie.",
                        explanation: "must = obbligo. don't have to = non è necessario (ma puoi farlo)."
                    },
                    {
                        text: "She must be tired. / He can't be at home — I just saw him.",
                        explanation: "must = deduzione positiva. can't = deduzione negativa (impossibilità)."
                    }
                ],
                note: "⚠️ Trappola comune: 'mustn't' ≠ 'don't have to'. Mustn't = è proibito. Don't have to = non è necessario. Non confonderli!",
                keywords: "must, mustn't, have to, don't have to, should, shouldn't, can, could, might"
            },
            {
                title: "Future Forms",
                color: "#27ae60",
                content: "Quattro modi principali per parlare del futuro: will (previsioni spontanee, decisioni al momento), going to (piani già decisi, previsioni con prove evidenti), Present Continuous (appuntamenti/arrangiamenti futuri), Present Simple (orari e programmi fissi).",
                examples: [
                    {
                        text: "I'll call you later. / I'm going to call the doctor — I've been feeling ill.",
                        explanation: "will = decisione spontanea. going to = decisione già presa con motivo."
                    },
                    {
                        text: "The train leaves at 8:15. / We're meeting them at 7.",
                        explanation: "Present Simple per orari fissi. Present Continuous per arrangiamenti personali."
                    }
                ],
                note: "⚠️ Trappola comune: NON usare 'will' per piani già decisi in precedenza (usa going to). NON usare going to per orari di treni/aerei (usa Present Simple).",
                keywords: "will, going to, arranged, scheduled, timetable, tomorrow, next week, soon"
            },
            {
                title: "Conditionals",
                color: "#e67e22",
                content: "Zero Conditional (if + Present, Present): verità universali. First Conditional (if + Present, will): situazioni reali/probabili nel futuro. Second Conditional (if + Past Simple, would): situazioni ipotetiche o irreali nel presente/futuro.",
                examples: [
                    {
                        text: "If you heat water to 100°C, it boils.",
                        explanation: "Zero Conditional: fatto scientifico sempre vero."
                    },
                    {
                        text: "If I had more time, I would learn the guitar.",
                        explanation: "Second Conditional: situazione ipotetica (non ho tempo in realtà)."
                    }
                ],
                note: "⚠️ Trappola comune: nel Second Conditional, dopo 'if' si usa 'were' per tutti i soggetti ('If I were you...'). Non usare 'would' nella if-clause.",
                keywords: "if, unless, would, could, might, were, provided that, as long as"
            },
            {
                title: "Relative Clauses",
                color: "#2980b9",
                content: "Defining relative clauses (senza virgole): identificano esattamente la persona/cosa. Non-defining (con virgole): aggiungono informazioni extra. Pronomi: who (persone), which (cose), that (persone/cose in defining), whose (possesso), where (luoghi), when (tempo).",
                examples: [
                    {
                        text: "The woman who called you is my sister. (defining)",
                        explanation: "Senza virgole: identifica quale donna. 'That' può sostituire 'who'."
                    },
                    {
                        text: "My sister, who lives in Rome, is a doctor. (non-defining)",
                        explanation: "Con virgole: aggiunge info extra. 'That' NON può sostituire 'who' qui."
                    }
                ],
                note: "⚠️ Trappola comune: nelle non-defining clauses NON si usa 'that'. Il pronome relativo NON può essere omesso nelle non-defining clauses.",
                keywords: "who, which, that, whose, where, when, whom, virgole"
            },
            {
                title: "Past Perfect",
                color: "#16a085",
                content: "Past Perfect Simple (had + past participle): azione completata prima di un altro momento nel passato. Past Perfect Continuous (had been + -ing): azione in corso fino a un momento nel passato, con enfasi sulla durata. Con verbi di stato usa sempre il Simple.",
                examples: [
                    {
                        text: "By the time she arrived, he had already left.",
                        explanation: "Past Perfect Simple: la partenza è avvenuta prima dell'arrivo."
                    },
                    {
                        text: "She was exhausted because she had been running for two hours.",
                        explanation: "Past Perfect Continuous: azione in corso che giustifica uno stato presente (stanchezza)."
                    }
                ],
                note: "⚠️ Trappola comune: i verbi di stato (know, want, own, understand, like...) non vanno mai al Continuous. 'She had known him for years' ✓ — 'She had been knowing him' ✗.",
                keywords: "had, already, just, never, before, after, by the time, when, since, for, because"
            }
        ]
    }
};
