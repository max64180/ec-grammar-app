// ==================== BADGE SYSTEM MODULE ====================
// Add this file as: <script src="grammar-badges.js"></script>
// After grammar-app.js in your HTML

// Badge definitions
const BADGES = {
    'primo-successo': {
        id: 'primo-successo',
        name: 'Primo Successo',
        emoji: '🥇',
        level: 'gold',
        description: 'Hai completato il tuo primo esercizio!'
    },
    'in-crescita': {
        id: 'in-crescita',
        name: 'In Crescita',
        emoji: '📚',
        level: 'silver',
        description: 'Hai completato 5 esercizi!'
    },
    'esperto': {
        id: 'esperto',
        name: 'Esperto',
        emoji: '🎓',
        level: 'gold',
        description: 'Hai completato tutti gli esercizi di un argomento!'
    },
    'cecchino': {
        id: 'cecchino',
        name: 'Cecchino',
        emoji: '🎯',
        level: 'silver',
        description: '10 risposte corrette consecutive!'
    },
    'perfezionista': {
        id: 'perfezionista',
        name: 'Perfezionista',
        emoji: '💯',
        level: 'gold',
        description: 'Completa un esercizio con 100% corretto!'
    },
    'studioso': {
        id: 'studioso',
        name: 'Studioso',
        emoji: '📖',
        level: 'bronze',
        description: 'Completa 20 esercizi totali!'
    },
    'resiliente': {
        id: 'resiliente',
        name: 'Resiliente',
        emoji: '📈',
        level: 'silver',
        description: 'Ripeti un esercizio e migliora il punteggio!'
    },
    'lettore': {
        id: 'lettore',
        name: 'Lettore',
        emoji: '💡',
        level: 'bronze',
        description: 'Leggi la teoria di tutti gli argomenti!'
    },
    'maratoneta': {
        id: 'maratoneta',
        name: 'Maratoneta',
        emoji: '💪',
        level: 'gold',
        description: 'Rispondi a 100 domande in totale!'
    },
    'maestro': {
        id: 'maestro',
        name: 'Maestro',
        emoji: '💎',
        level: 'diamond',
        description: 'Completa TUTTI gli esercizi dell\'app!'
    },
    'serie-perfetta': {
        id: 'serie-perfetta',
        name: 'Serie Perfetta',
        emoji: '⭐',
        level: 'gold',
        description: '3 esercizi di fila senza errori!'
    },
    'determinato': {
        id: 'determinato',
        name: 'Determinato',
        emoji: '🔄',
        level: 'bronze',
        description: 'Ripeti lo stesso esercizio 3 volte!'
    }
};

// Initialize badge system on page load
(function initBadgeSystem() {
    // Add badges to appState if not exists
    if (!appState.badges) {
        appState.badges = JSON.parse(localStorage.getItem('badges') || '{}');
    }
    if (!appState.consecutiveCorrect) {
        appState.consecutiveCorrect = 0;
    }
    
    // Add CSS if not already added
    if (!document.getElementById('badge-styles')) {
        const style = document.createElement('style');
        style.id = 'badge-styles';
        style.textContent = `
            /* Badge System Styles */
            .badges-section {
                background: white;
                border-radius: 12px;
                padding: 25px;
                margin-bottom: 30px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            .badges-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }
            .badges-title {
                font-size: 1.5em;
                color: #667eea;
                font-weight: bold;
                margin: 0;
            }
            .badges-count {
                background: #667eea;
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-weight: bold;
                font-size: 0.9em;
            }
            .badges-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
                gap: 20px;
                margin-bottom: 20px;
            }
            .badge-card {
                text-align: center;
                padding: 15px 10px;
                border-radius: 12px;
                background: #f8f9fa;
                border: 2px solid #e0e0e0;
                transition: all 0.3s ease;
                cursor: pointer;
            }
            .badge-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 25px rgba(0,0,0,0.15);
                border-color: #667eea;
            }
            .badge-mixed {
                text-align: center;
            }
            .badge-container-mixed {
                width: 80px;
                height: 100px;
                position: relative;
                margin: 0 auto 10px;
            }
            .badge-ribbon {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 35px;
                height: 50px;
                background: linear-gradient(180deg, #C41E3A, #8B0000);
                clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                z-index: 1;
            }
            .badge-medal {
                position: absolute;
                top: 25px;
                left: 50%;
                transform: translateX(-50%);
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2;
            }
            .badge-outer-ring {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 3px solid #FFD700;
                box-shadow: 0 0 10px rgba(255, 215, 0, 0.5), inset 0 2px 5px rgba(0, 0, 0, 0.2);
            }
            .badge-mixed.silver .badge-outer-ring {
                border-color: #C0C0C0;
                box-shadow: 0 0 10px rgba(192, 192, 192, 0.5), inset 0 2px 5px rgba(0, 0, 0, 0.2);
            }
            .badge-mixed.bronze .badge-outer-ring {
                border-color: #CD7F32;
                box-shadow: 0 0 10px rgba(205, 127, 50, 0.5), inset 0 2px 5px rgba(0, 0, 0, 0.2);
            }
            .badge-mixed.diamond .badge-outer-ring {
                border-color: #B9F2FF;
                box-shadow: 0 0 15px rgba(185, 242, 255, 0.8), inset 0 2px 5px rgba(0, 0, 0, 0.2);
            }
            .badge-mixed.locked .badge-outer-ring {
                border-color: #666;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            }
            .badge-inner-circle {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: inset 0 -3px 8px rgba(0, 0, 0, 0.3), inset 0 3px 8px rgba(255, 255, 255, 0.6);
                z-index: 1;
                position: relative;
            }
            .badge-mixed.silver .badge-inner-circle {
                background: linear-gradient(135deg, #E8E8E8, #A0A0A0);
            }
            .badge-mixed.bronze .badge-inner-circle {
                background: linear-gradient(135deg, #CD7F32, #8B4513);
            }
            .badge-mixed.diamond .badge-inner-circle {
                background: linear-gradient(135deg, #E0F7FF, #89CFF0);
            }
            .badge-mixed.locked .badge-inner-circle {
                background: linear-gradient(135deg, #555, #333);
                box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
            }
            .badge-emoji {
                font-size: 2em;
                filter: drop-shadow(0 2px 3px rgba(0,0,0,0.3));
            }
            .badge-mixed.locked .badge-emoji {
                filter: grayscale(100%) brightness(0.7);
            }
            .badge-shine {
                position: absolute;
                top: 5px;
                left: 8px;
                width: 15px;
                height: 15px;
                background: radial-gradient(circle, rgba(255,255,255,0.8), transparent);
                border-radius: 50%;
                animation: shine 2s ease-in-out infinite;
                z-index: 2;
            }
            @keyframes shine {
                0%, 100% { opacity: 0.3; transform: scale(1); }
                50% { opacity: 0.8; transform: scale(1.2); }
            }
            .badge-stars {
                position: absolute;
                top: 0;
                width: 100%;
                display: flex;
                justify-content: space-around;
                z-index: 3;
            }
            .star {
                font-size: 0.9em;
                animation: starTwinkle 1.5s ease-in-out infinite;
            }
            .star:nth-child(2) {
                animation-delay: 0.5s;
            }
            @keyframes starTwinkle {
                0%, 100% { opacity: 0.3; transform: scale(0.8); }
                50% { opacity: 1; transform: scale(1.2); }
            }
            .badge-name {
                font-weight: bold;
                color: #333;
                margin-bottom: 5px;
                font-size: 0.85em;
            }
            .badge-level {
                font-size: 0.75em;
                color: #888;
            }
            .badge-mixed:not(.locked):hover .badge-medal {
                animation: badgeBounce 0.5s ease;
            }
            @keyframes badgeBounce {
                0%, 100% { transform: translateX(-50%) translateY(0); }
                50% { transform: translateX(-50%) translateY(-8px); }
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes bounceIn {
                0% { transform: scale(0.3); opacity: 0; }
                50% { transform: scale(1.05); }
                70% { transform: scale(0.9); }
                100% { transform: scale(1); opacity: 1; }
            }
            @keyframes confettiFall {
                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
})();

// Initialize badge if not exists
function initBadge(badgeId) {
    if (!appState.badges[badgeId]) {
        appState.badges[badgeId] = {
            unlocked: false,
            unlockedAt: null
        };
    }
}

// Unlock a badge
function unlockBadge(badgeId) {
    initBadge(badgeId);
    
    if (appState.badges[badgeId].unlocked) {
        return false;
    }
    
    appState.badges[badgeId].unlocked = true;
    appState.badges[badgeId].unlockedAt = new Date().toISOString();
    localStorage.setItem('badges', JSON.stringify(appState.badges));
    
    return true;
}

// Check and unlock badges
function checkAndUnlockBadges() {
    const newBadges = [];
    
    const completedCount = Object.keys(appState.completedExercises).length;
    const stats = JSON.parse(localStorage.getItem('answerStats') || '{"correct": 0, "incorrect": 0}');
    const totalAnswers = stats.correct + stats.incorrect;
    
    // Primo Successo
    if (completedCount >= 1 && !appState.badges['primo-successo']?.unlocked) {
        if (unlockBadge('primo-successo')) newBadges.push(BADGES['primo-successo']);
    }
    
    // In Crescita
    if (completedCount >= 5 && !appState.badges['in-crescita']?.unlocked) {
        if (unlockBadge('in-crescita')) newBadges.push(BADGES['in-crescita']);
    }
    
    // Studioso
    if (completedCount >= 20 && !appState.badges['studioso']?.unlocked) {
        if (unlockBadge('studioso')) newBadges.push(BADGES['studioso']);
    }
    
    // Maratoneta
    if (totalAnswers >= 100 && !appState.badges['maratoneta']?.unlocked) {
        if (unlockBadge('maratoneta')) newBadges.push(BADGES['maratoneta']);
    }
    
    // Esperto
    for (const [key, topic] of Object.entries(grammarData)) {
        const allCompleted = topic.exercises.every((_, idx) => {
            return appState.completedExercises[`${key}-${idx}`] === true;
        });
        if (allCompleted && !appState.badges['esperto']?.unlocked) {
            if (unlockBadge('esperto')) newBadges.push(BADGES['esperto']);
            break;
        }
    }
    
    // Maestro
    let totalExercises = 0;
    for (const topic of Object.values(grammarData)) {
        totalExercises += topic.exercises.length;
    }
    if (completedCount >= totalExercises && !appState.badges['maestro']?.unlocked) {
        if (unlockBadge('maestro')) newBadges.push(BADGES['maestro']);
    }
    
    // Lettore
    const theoriesRead = JSON.parse(localStorage.getItem('theoriesRead') || '[]');
    if (theoriesRead.length >= Object.keys(grammarData).length && !appState.badges['lettore']?.unlocked) {
        if (unlockBadge('lettore')) newBadges.push(BADGES['lettore']);
    }
    
    if (newBadges.length > 0) {
        setTimeout(() => showBadgeUnlockNotifications(newBadges), 500);
    }
}

// Check special badges
function checkSpecialBadges(isCorrect, exerciseCompleted = false) {
    const newBadges = [];
    
    // Cecchino
    if (isCorrect !== null) {
        if (isCorrect) {
            appState.consecutiveCorrect++;
            if (appState.consecutiveCorrect >= 10 && !appState.badges['cecchino']?.unlocked) {
                if (unlockBadge('cecchino')) newBadges.push(BADGES['cecchino']);
            }
        } else {
            appState.consecutiveCorrect = 0;
        }
    }
    
    // Perfezionista & Serie Perfetta
    if (exerciseCompleted) {
        const savedAnswers = getSavedAnswers();
        const allCorrect = Object.values(savedAnswers).every(a => a.isCorrect);
        
        if (allCorrect && Object.keys(savedAnswers).length > 0) {
            if (!appState.badges['perfezionista']?.unlocked) {
                if (unlockBadge('perfezionista')) newBadges.push(BADGES['perfezionista']);
            }
        }
        
        const perfectStreak = JSON.parse(localStorage.getItem('perfectStreak') || '[]');
        perfectStreak.push(allCorrect);
        if (perfectStreak.length > 3) perfectStreak.shift();
        localStorage.setItem('perfectStreak', JSON.stringify(perfectStreak));
        
        if (perfectStreak.length === 3 && perfectStreak.every(p => p === true)) {
            if (!appState.badges['serie-perfetta']?.unlocked) {
                if (unlockBadge('serie-perfetta')) newBadges.push(BADGES['serie-perfetta']);
            }
        }
    }
    
    if (newBadges.length > 0) {
        setTimeout(() => showBadgeUnlockNotifications(newBadges), 500);
    }
}

// Show unlock notifications
function showBadgeUnlockNotifications(badges) {
    badges.forEach((badge, index) => {
        setTimeout(() => showBadgeUnlockModal(badge), index * 800);
    });
}

// Show unlock modal
function showBadgeUnlockModal(badge) {
    const overlay = document.createElement('div');
    overlay.className = 'badge-modal-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        border-radius: 20px;
        padding: 50px;
        text-align: center;
        max-width: 500px;
        position: relative;
        animation: bounceIn 0.6s ease;
    `;
    
    modal.innerHTML = `
        <h2 style="color: #667eea; font-size: 2em; margin-bottom: 20px;">✨ NUOVO BADGE SBLOCCATO! ✨</h2>
        <div style="margin: 30px 0;">
            ${renderBadgeHTML(badge, 'unlocked', true)}
        </div>
        <p style="color: #666; line-height: 1.6; margin-bottom: 30px; font-size: 1.1em;">
            <strong style="color: #333; font-size: 1.2em;">${badge.name}</strong><br><br>
            ${badge.description}
        </p>
        <button onclick="this.closest('.badge-modal-overlay').remove()" style="
            background: #667eea;
            color: white;
            border: none;
            padding: 15px 40px;
            border-radius: 50px;
            font-size: 1.1em;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
        " onmouseover="this.style.background='#5568d3'" onmouseout="this.style.background='#667eea'">
            FANTASTICO! 🎉
        </button>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Confetti
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            const colors = ['#FFD700', '#FF6B35', '#667eea', '#F7931E', '#C41E3A'];
            confetti.style.cssText = `
                position: absolute;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: 0;
                animation: confettiFall 3s ease-out forwards;
                animation-delay: ${Math.random() * 0.5}s;
            `;
            overlay.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3500);
        }, i * 20);
    }
    
    overlay.onclick = (e) => {
        if (e.target === overlay) overlay.remove();
    };
}

// Render badge HTML
function renderBadgeHTML(badge, state = 'unlocked', large = false) {
    const size = large ? 100 : 80;
    const levelClass = badge.level || 'bronze';
    const lockedClass = state === 'locked' ? 'locked' : '';
    const emoji = state === 'locked' ? '🔒' : badge.emoji;
    const name = state === 'locked' ? '???' : badge.name;
    const levelName = state === 'locked' ? 'Bloccato' : getLevelName(badge.level);
    
    return `
        <div class="badge-card" style="display: inline-block; border: none; padding: 10px;">
            <div class="badge-mixed ${levelClass} ${lockedClass}">
                <div class="badge-container-mixed" style="width: ${size}px; height: ${size + 20}px;">
                    <div class="badge-ribbon"></div>
                    <div class="badge-medal">
                        <div class="badge-outer-ring"></div>
                        <div class="badge-inner-circle">
                            <span class="badge-emoji" style="font-size: ${large ? '3em' : '2.5em'};">${emoji}</span>
                        </div>
                        ${state === 'unlocked' ? '<div class="badge-shine"></div>' : ''}
                    </div>
                    ${state === 'unlocked' ? '<div class="badge-stars"><span class="star">✨</span><span class="star">✨</span></div>' : ''}
                </div>
                <div class="badge-name" style="font-size: ${large ? '1.2em' : '0.9em'};">${name}</div>
                <div class="badge-level" style="font-size: ${large ? '1em' : '0.8em'};">${levelName}</div>
            </div>
        </div>
    `;
}

// Get level name
function getLevelName(level) {
    const names = {
        'bronze': 'Bronzo',
        'silver': 'Argento',
        'gold': 'Oro',
        'diamond': 'Diamante'
    };
    return names[level] || level;
}

// Get unlocked badges count
function getUnlockedBadgesCount() {
    return Object.values(appState.badges).filter(b => b.unlocked).length;
}

// Render badges section HTML
function renderBadgesSection() {
    let html = `
        <div class="badges-section">
            <div class="badges-header">
                <h2 class="badges-title">🏆 I Tuoi Badge</h2>
                <span class="badges-count">${getUnlockedBadgesCount()}/${Object.keys(BADGES).length}</span>
            </div>
            <div class="badges-grid">
    `;
    
    Object.values(BADGES).forEach(badge => {
        initBadge(badge.id);
        const state = appState.badges[badge.id].unlocked ? 'unlocked' : 'locked';
        html += renderBadgeHTML(badge, state, false);
    });
    
    html += `
            </div>
            ${getUnlockedBadgesCount() < Object.keys(BADGES).length ? `
                <p style="text-align: center; color: #888; margin-top: 15px; font-size: 0.9em;">
                    Continua a studiare per sbloccare altri badge! 🎯
                </p>
            ` : `
                <p style="text-align: center; color: #28a745; margin-top: 15px; font-size: 1.1em; font-weight: bold;">
                    🎉 Hai sbloccato tutti i badge! Sei un Maestro! 🎉
                </p>
            `}
        </div>
    `;
    
    return html;
}

console.log('✅ Badge System loaded successfully!');
