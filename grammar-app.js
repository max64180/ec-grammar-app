// ==================== ANSWER NORMALIZATION ====================
// Global normalize function used by all answer-checking routines.
// Converts slash separators (had/never, had / never) and punctuation to spaces,
// collapses multiple spaces, trims and lowercases — so any reasonable formatting
// of a correct answer is accepted.
function normalizeAnswer(text) {
    return text
        .toLowerCase()
        .replace(/[/\\|,;:.!?'"()\[\]{}\-_`~#@$%^&*+=]/g, ' ') // punctuation & slashes → space
        .replace(/\s+/g, ' ')                                     // collapse multiple spaces
        .trim();
}
// ==============================================================

// Application state
let appState = {
    currentTopic: null,
    currentExerciseIndex: null,
    currentQuestionIndex: 0,
    exerciseScore: 0,
    userAnswers: [],
    completedExercises: JSON.parse(localStorage.getItem('completedExercises') || '{}'),
    reviewItems: JSON.parse(localStorage.getItem('reviewItems') || '[]'),
    totalScore: parseInt(localStorage.getItem('totalScore') || '0'),
    exerciseProgress: JSON.parse(localStorage.getItem('exerciseProgress') || '{}'), // New: track individual question answers
    badges: JSON.parse(localStorage.getItem('badges') || '{}'), // Badge system
    badgeNotificationQueue: [], // Badges to show
    consecutiveCorrect: 0 // Track consecutive correct answers
};

// Get exercise progress key
function getExerciseKey(topicKey, exerciseIndex) {
    return `${topicKey}-${exerciseIndex}`;
}

// Get saved answers for current exercise
function getSavedAnswers() {
    const key = getExerciseKey(appState.currentTopic, appState.currentExerciseIndex);
    return appState.exerciseProgress[key] || {};
}

// Get exercise type display name
function getExerciseTypeName(type) {
    const typeNames = {
        'fill-blank': 'Completa gli spazi',
        'multiple-choice': 'Domande a risposta multipla',
        'translation': 'Traduzioni',
        'cloze-test': 'Testo con spazi (Cloze Test)',
        'key-word-transformation': 'Trasformazioni con parola chiave'
    };
    return typeNames[type] || type;
}

// Save answer for a question
function saveQuestionAnswer(questionIndex, userAnswer, isCorrect) {
    const key = getExerciseKey(appState.currentTopic, appState.currentExerciseIndex);
    if (!appState.exerciseProgress[key]) {
        appState.exerciseProgress[key] = {};
    }
    appState.exerciseProgress[key][questionIndex] = {
        userAnswer,
        isCorrect,
        timestamp: Date.now()
    };
    localStorage.setItem('exerciseProgress', JSON.stringify(appState.exerciseProgress));
}

// ==================== BADGE SYSTEM ====================

// Initialize badge if not exists
function initBadge(badgeId) {
    if (!appState.badges[badgeId]) {
        appState.badges[badgeId] = {
            unlocked: false,
            unlockedAt: null,
            progress: null
        };
    }
}

// Unlock a badge
function unlockBadge(badgeId) {
    initBadge(badgeId);
    
    if (appState.badges[badgeId].unlocked) {
        return false; // Already unlocked
    }
    
    appState.badges[badgeId].unlocked = true;
    appState.badges[badgeId].unlockedAt = new Date().toISOString();
    localStorage.setItem('badges', JSON.stringify(appState.badges));
    
    // Add to notification queue
    appState.badgeNotificationQueue.push(badgeId);
    
    return true;
}

// Check and unlock badges
function checkAndUnlockBadges(eventType = 'general') {
    const newBadges = [];
    
    Object.values(BADGES).forEach(badge => {
        initBadge(badge.id);
        
        if (!appState.badges[badge.id].unlocked && badge.checkCondition()) {
            if (unlockBadge(badge.id)) {
                newBadges.push(badge);
            }
        }
    });
    
    // Show unlock animations
    if (newBadges.length > 0) {
        showBadgeUnlockNotifications(newBadges);
    }
}

// Show badge unlock notification
function showBadgeUnlockNotifications(badges) {
    badges.forEach((badge, index) => {
        setTimeout(() => {
            showBadgeUnlockModal(badge);
        }, index * 800); // Stagger if multiple badges
    });
}

// Show badge unlock modal
function showBadgeUnlockModal(badge) {
    const overlay = document.createElement('div');
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
            ${renderBadge(badge, 'unlocked', true)}
        </div>
        <p style="color: #666; line-height: 1.6; margin-bottom: 30px; font-size: 1.1em;">
            <strong style="color: #333; font-size: 1.2em;">${badge.name}</strong><br>
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
        ">
            FANTASTICO! 🎉
        </button>
    `;
    
    overlay.className = 'badge-modal-overlay';
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Add confetti
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: absolute;
                width: 10px;
                height: 10px;
                background: ${['#FFD700', '#FF6B35', '#667eea', '#F7931E', '#C41E3A'][Math.floor(Math.random() * 5)]};
                animation: confettiFall 3s ease-out forwards;
                left: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 0.5}s;
            `;
            overlay.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }, i * 20);
    }
    
    // Close on overlay click
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    };
}

// Render a single badge (for display)
function renderBadge(badge, state = 'unlocked', large = false) {
    const size = large ? 100 : 80;
    const levelClass = badge.level || 'bronze';
    const lockedClass = state === 'locked' ? 'locked' : '';
    
    return `
        <div class="badge-mixed ${levelClass} ${lockedClass}" style="display: inline-block;">
            <div class="badge-container-mixed" style="width: ${size}px; height: ${size + 20}px;">
                <div class="badge-ribbon"></div>
                <div class="badge-medal">
                    <div class="badge-outer-ring"></div>
                    <div class="badge-inner-circle">
                        <span class="badge-emoji" style="font-size: ${large ? '3em' : '2.5em'};">${state === 'locked' ? '🔒' : badge.emoji}</span>
                    </div>
                    ${state === 'unlocked' ? '<div class="badge-shine"></div>' : ''}
                </div>
                ${state === 'unlocked' ? '<div class="badge-stars"><span class="star">✨</span><span class="star">✨</span></div>' : ''}
            </div>
            <div class="badge-name" style="font-size: ${large ? '1.2em' : '0.9em'};">${state === 'locked' ? '???' : badge.name}</div>
            <div class="badge-level" style="font-size: ${large ? '1em' : '0.8em'};">${state === 'locked' ? 'Bloccato' : getLevelName(badge.level)}</div>
        </div>
    `;
}

// Get level display name
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

// Get total badges count
function getTotalBadgesCount() {
    return Object.keys(BADGES).length;
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadTopics();
    updateDashboard();
    updateReviewSection();
});

// Show section
function showSection(sectionName) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(sectionName).classList.add('active');
    
    // Update active nav button
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        if (btn.textContent.includes('Dashboard') && sectionName === 'dashboard') {
            btn.classList.add('active');
        } else if (btn.textContent.includes('Teoria') && sectionName === 'theory') {
            btn.classList.add('active');
        } else if (btn.textContent.includes('Esercizi') && sectionName === 'topics') {
            btn.classList.add('active');
        } else if (btn.textContent.includes('Ripasso') && sectionName === 'review') {
            btn.classList.add('active');
        }
    });
    
    if (sectionName === 'dashboard') updateDashboard();
    if (sectionName === 'review') updateReviewSection();
    if (sectionName === 'theory') loadTheoryNav();
    if (sectionName === 'topics') loadTopics();
}

// ============ TOPICS GRID HELPERS ============

// Calculate topic stats helper
function calculateTopicStats(topicKey) {
    const topic = grammarData[topicKey];
    let totalQuestions = 0;
    let answeredQuestions = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    
    topic.exercises.forEach((exercise, exerciseIdx) => {
        totalQuestions += exercise.questions.length;
        
        const exerciseKey = getExerciseKey(topicKey, exerciseIdx);
        const savedAnswers = appState.exerciseProgress[exerciseKey] || {};
        
        Object.values(savedAnswers).forEach(answer => {
            if (answer.isCorrect) correctAnswers++;
            else incorrectAnswers++;
        });
        
        answeredQuestions += Object.keys(savedAnswers).length;
        
        if (isExerciseCompleted(topicKey, exerciseIdx)) {
            const questionsInExercise = exercise.questions.length;
            const alreadyCounted = Object.keys(savedAnswers).length;
            if (alreadyCounted < questionsInExercise) {
                answeredQuestions += (questionsInExercise - alreadyCounted);
            }
        }
    });
    
    return {
        totalQuestions,
        answeredQuestions,
        correctAnswers,
        incorrectAnswers,
        totalAnswered: correctAnswers + incorrectAnswers
    };
}

// Get topic last access timestamp
function getTopicLastAccess(topicKey) {
    const topic = grammarData[topicKey];
    let lastAccess = 0;
    
    topic.exercises.forEach((exercise, exerciseIdx) => {
        const exerciseKey = getExerciseKey(topicKey, exerciseIdx);
        const savedAnswers = appState.exerciseProgress[exerciseKey] || {};
        
        Object.values(savedAnswers).forEach(answer => {
            if (answer.timestamp) {
                const ts = new Date(answer.timestamp).getTime();
                if (ts > lastAccess) lastAccess = ts;
            }
        });
    });
    
    return lastAccess || 0;
}

// Show topic detail view
function showTopicDetail(topicKey) {
    const grid = document.getElementById('topicsGrid');
    const topic = grammarData[topicKey];
    const progress = calculateTopicProgress(topicKey);
    const stats = calculateTopicStats(topicKey);
    
    let exercisesHTML = topic.exercises.map((ex, idx) => {
        const exType = getExerciseTypeName(ex.type);
        const completed = isExerciseCompleted(topicKey, idx);
        const icon = completed ? '✓' : '○';
        const btnText = completed ? 'Rivedi' : 'Inizia';
        const btnClass = completed ? 'exercise-btn completed' : 'exercise-btn';
        
        return `
            <div class="exercise-list-item ${completed ? 'completed' : ''}">
                <div class="exercise-info">
                    <div class="exercise-title-row">
                        <span class="exercise-completion-icon">${icon}</span>
                        <strong>${exType}</strong>
                    </div>
                    <div class="exercise-meta">
                        ${ex.questions.length} domande • Difficoltà: ${'⭐'.repeat(ex.difficulty)}
                    </div>
                </div>
                <button class="${btnClass}" onclick="startExercise('${topicKey}', ${idx})">${btnText}</button>
            </div>
        `;
    }).join('');
    
    grid.innerHTML = `
        <div class="topic-detail-container">
            <div class="topic-detail-header">
                <div>
                    <h2 style="color: #667eea; margin: 0 0 10px 0;">${topic.title}</h2>
                    <p style="color: #666; margin: 0;">${topic.description}</p>
                </div>
                <button class="back-to-topics-btn" onclick="loadTopics()">← Torna</button>
            </div>
            
            <button class="submit-btn" style="width: 100%; margin-bottom: 20px; background: #17a2b8;" onclick="showTheoryFromTopic('${topicKey}')">
                📖 Studia la Teoria
            </button>
            
            <h3 style="color: #333; margin: 20px 0 15px 0;">Esercizi Disponibili</h3>
            ${exercisesHTML}
            
            <div style="margin-top: 25px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
                <h4 style="color: #667eea; margin-top: 0;">Progresso Argomento</h4>
                <div class="progress-bar" style="margin: 10px 0;">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-top: 15px;">
                    <div><strong>Completamento:</strong> ${progress}%</div>
                    <div><strong>Domande:</strong> ${stats.answeredQuestions}/${stats.totalQuestions}</div>
                    ${stats.totalAnswered > 0 ? `<div><strong>Accuratezza:</strong> ${Math.round((stats.correctAnswers / stats.totalAnswered) * 100)}%</div>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Load topics grid
// Debounce timer for search
let searchDebounceTimer = null;

function triggerTopicsReload() {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
        loadTopics();
    }, 500); // Wait 500ms after last keystroke
}

function loadTopics() {
    const grid = document.getElementById('topicsGrid');
    
    // Preserve current search and filter values before reload
    const currentSearch = document.getElementById('topicSearch')?.value || '';
    const currentSort = document.getElementById('topicSortBy')?.value || 'alphabetical';
    const currentFilter = document.getElementById('topicFilter')?.value || 'all';
    const hadFocus = document.activeElement?.id === 'topicSearch'; // Save if input had focus
    
    // Add filters and sorting controls
    let controlsHTML = `
        <div class="filters-container">
            <div class="filters-inner">
                <div class="filter-group">
                    <label>🔍 Cerca:</label>
                    <input type="text" id="topicSearch" value="${currentSearch}" placeholder="Cerca argomento..." oninput="triggerTopicsReload()" />
                </div>
                <div class="filter-group">
                    <label>Ordina per:</label>
                    <select id="topicSortBy" onchange="loadTopics()">
                        <option value="alphabetical" ${currentSort === 'alphabetical' ? 'selected' : ''}>📝 Alfabetico (A-Z)</option>
                        <option value="progress" ${currentSort === 'progress' ? 'selected' : ''}>📊 Progresso</option>
                        <option value="lastAccess" ${currentSort === 'lastAccess' ? 'selected' : ''}>🕐 Ultimo accesso</option>
                        <option value="errors" ${currentSort === 'errors' ? 'selected' : ''}>⚠️ % Errori</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label>Filtra:</label>
                    <select id="topicFilter" onchange="loadTopics()">
                        <option value="all" ${currentFilter === 'all' ? 'selected' : ''}>Tutti</option>
                        <option value="inProgress" ${currentFilter === 'inProgress' ? 'selected' : ''}>In corso</option>
                        <option value="completed" ${currentFilter === 'completed' ? 'selected' : ''}>Completati</option>
                        <option value="notStarted" ${currentFilter === 'notStarted' ? 'selected' : ''}>Non iniziati</option>
                    </select>
                </div>
            </div>
        </div>
    `;
    
    // Prepare topics with metadata
    const topicsArray = Object.entries(grammarData).map(([key, topic]) => {
        const progress = calculateTopicProgress(key);
        const stats = calculateTopicStats(key);
        const lastAccess = getTopicLastAccess(key);
        const errorRate = stats.totalAnswered > 0 ? Math.round((stats.incorrectAnswers / stats.totalAnswered) * 100) : 0;
        
        return { key, topic, progress, stats, lastAccess, errorRate };
    });
    
    // Apply filter (use preserved values)
    const filterValue = currentFilter;
    const searchValue = currentSearch.toLowerCase().trim();
    
    let filteredTopics = topicsArray;
    
    // Apply status filter
    if (filterValue === 'completed') {
        filteredTopics = filteredTopics.filter(t => t.progress === 100);
    } else if (filterValue === 'inProgress') {
        filteredTopics = filteredTopics.filter(t => t.progress > 0 && t.progress < 100);
    } else if (filterValue === 'notStarted') {
        filteredTopics = filteredTopics.filter(t => t.progress === 0);
    }
    
    // Apply search filter (only on title)
    if (searchValue) {
        filteredTopics = filteredTopics.filter(t => {
            return t.topic.title.toLowerCase().includes(searchValue);
        });
    }
    
    // Apply sorting (use preserved value)
    const sortBy = currentSort;
    
    if (sortBy === 'alphabetical') {
        filteredTopics.sort((a, b) => a.topic.title.localeCompare(b.topic.title));
    } else if (sortBy === 'progress') {
        filteredTopics.sort((a, b) => b.progress - a.progress);
    } else if (sortBy === 'lastAccess') {
        filteredTopics.sort((a, b) => b.lastAccess - a.lastAccess);
    } else if (sortBy === 'errors') {
        filteredTopics.sort((a, b) => b.errorRate - a.errorRate);
    }
    
    // Generate compact cards
    let cardsHTML = '<div class="topics-grid-compact">';
    
    filteredTopics.forEach(({ key, topic, progress, stats, errorRate }) => {
        const badgeCount = Object.values(BADGES || {}).filter(badge => 
            appState.badges?.[badge.id]?.unlocked
        ).length;
        
        const isCompleted = progress === 100;
        const completionBadge = isCompleted ? '<div class="completion-badge">✓ COMPLETATO</div>' : '';
        
        cardsHTML += `
            <div class="topic-card-compact ${isCompleted ? 'completed' : ''}" onclick="showTopicDetail('${key}')">
                <h3 class="topic-card-title">${topic.title}</h3>
                <p class="topic-card-description">${topic.description}</p>
                
                ${completionBadge}
                
                <div class="topic-card-stats">
                    <div class="stat-row">
                        <span class="stat-label">Progresso:</span>
                        <span class="stat-value">${progress}%</span>
                    </div>
                    <div class="progress-bar-mini">
                        <div class="progress-fill-mini" style="width: ${progress}%"></div>
                    </div>
                    
                    <div class="stat-row">
                        <span class="stat-label">Domande:</span>
                        <span class="stat-value">${stats.answeredQuestions}/${stats.totalQuestions}</span>
                    </div>
                    
                    ${stats.totalAnswered > 0 ? `
                        <div class="stat-row">
                            <span class="stat-label">Accuratezza:</span>
                            <span class="stat-value ${errorRate > 30 ? 'error-high' : errorRate > 15 ? 'error-medium' : 'error-low'}">
                                ${errorRate}% errori
                            </span>
                        </div>
                    ` : ''}
                    
                    ${badgeCount > 0 ? `
                        <div class="stat-row">
                            <span class="stat-label">Badge:</span>
                            <span class="stat-value">🏆 ${badgeCount}</span>
                        </div>
                    ` : ''}
                </div>
                
                <button class="open-topic-btn" onclick="event.stopPropagation(); showTopicDetail('${key}')">
                    ${progress === 0 ? 'Inizia' : progress === 100 ? 'Rivedi' : 'Continua'}
                </button>
            </div>
        `;
    });
    
    cardsHTML += '</div>';
    
    if (filteredTopics.length === 0) {
        const searchMsg = searchValue ? ` per "${searchValue}"` : '';
        cardsHTML = `<div style="text-align: center; padding: 40px; color: #666;">
            <div style="font-size: 3em; margin-bottom: 20px;">🔍</div>
            <h3 style="color: #667eea;">Nessun argomento trovato</h3>
            <p>Prova a cambiare i filtri o il termine di ricerca${searchMsg}.</p>
        </div>`;
    }
    
    grid.innerHTML = controlsHTML + cardsHTML;
    
    // Restore focus to search input if it had focus before reload
    if (hadFocus) {
        const searchInput = document.getElementById('topicSearch');
        if (searchInput) {
            // Use setTimeout to ensure DOM is ready
            setTimeout(() => {
                searchInput.focus();
                // Set cursor at end of text
                searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
            }, 0);
        }
    }
}

// Check if exercise is completed
function isExerciseCompleted(topicKey, exerciseIndex) {
    return appState.completedExercises[`${topicKey}-${exerciseIndex}`] || false;
}

// Calculate topic progress based on answered questions
function calculateTopicProgress(topicKey) {
    const topic = grammarData[topicKey];
    let totalQuestions = 0;
    let answeredQuestions = 0;
    
    topic.exercises.forEach((exercise, exerciseIdx) => {
        totalQuestions += exercise.questions.length;
        
        // Count answered questions in this exercise
        const key = getExerciseKey(topicKey, exerciseIdx);
        const savedAnswers = appState.exerciseProgress[key] || {};
        answeredQuestions += Object.keys(savedAnswers).length;
        
        // If exercise is completed, all questions are answered
        if (isExerciseCompleted(topicKey, exerciseIdx)) {
            // Make sure we count all questions if completed
            // (in case exerciseProgress was cleared)
            const questionsInExercise = exercise.questions.length;
            const alreadyCounted = Object.keys(savedAnswers).length;
            if (alreadyCounted < questionsInExercise) {
                answeredQuestions += (questionsInExercise - alreadyCounted);
            }
        }
    });
    
    return totalQuestions > 0 ? Math.round((answeredQuestions / totalQuestions) * 100) : 0;
}

// Start exercise
function startExercise(topicKey, exerciseIndex) {
    appState.currentTopic = topicKey;
    appState.currentExerciseIndex = exerciseIndex;
    appState.currentQuestionIndex = 0;
    appState.exerciseScore = 0;
    appState.userAnswers = [];
    
    showExerciseSection();
    renderQuestion();
}

// Show exercise section
function showExerciseSection() {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById('exercise').classList.add('active');
    
    const topic = grammarData[appState.currentTopic];
    const exercise = topic.exercises[appState.currentExerciseIndex];
    
    const exType = getExerciseTypeName(exercise.type);
    
    document.getElementById('exerciseTitle').textContent = `${topic.title} - ${exType}`;
}

// Render question
function renderQuestion() {
    const topic = grammarData[appState.currentTopic];
    const exercise = topic.exercises[appState.currentExerciseIndex];
    const savedAnswers = getSavedAnswers();
    
    const container = document.getElementById('exerciseContent');
    
    const exType = getExerciseTypeName(exercise.type);
    
    document.getElementById('exerciseTitle').textContent = `${topic.title} - ${exType}`;
    
    // Calculate stats
    let answeredCorrect = 0;
    let answeredIncorrect = 0;
    let unanswered = 0;
    
    exercise.questions.forEach((_, idx) => {
        if (savedAnswers[idx]) {
            if (savedAnswers[idx].isCorrect) answeredCorrect++;
            else answeredIncorrect++;
        } else {
            unanswered++;
        }
    });
    
    const totalQuestions = exercise.questions.length;
    const allAnswered = unanswered === 0;
    
    // Update header
    document.getElementById('exerciseProgressText').textContent = `${answeredCorrect + answeredIncorrect}/${totalQuestions} risposte`;
    document.getElementById('exerciseScore').textContent = `${answeredCorrect * exercise.difficulty} punti`;
    
    // Build sidebar with stats only
    let html = `
        <div class="exercise-sidebar">
            <h3>Progresso Esercizio</h3>
            <div class="stats-inline">
                <div class="stats-inline-item">
                    <div class="stats-inline-number correct">${answeredCorrect}</div>
                    <div class="stats-inline-label">Corrette</div>
                </div>
                <div class="stats-inline-item">
                    <div class="stats-inline-number incorrect">${answeredIncorrect}</div>
                    <div class="stats-inline-label">Sbagliate</div>
                </div>
                <div class="stats-inline-item">
                    <div class="stats-inline-number unanswered">${unanswered}</div>
                    <div class="stats-inline-label">Da fare</div>
                </div>
            </div>
            <button class="complete-exercise-btn" ${!allAnswered ? 'disabled' : ''} onclick="completeExercise()">
                ${allAnswered ? '✅ Completa Esercizio' : '⏳ Completa tutte le domande'}
            </button>
            <button class="submit-btn back-btn" style="width: 100%; margin-top: 10px; background: #ff9800;" onclick="confirmRepeatExercise()">
                🔄 Ripeti Esercizio
            </button>
            <button class="submit-btn" style="width: 100%; margin-top: 10px; background: #17a2b8;" onclick="confirmPrintPDF()">
                🖨️ Stampa PDF
            </button>
            <button class="submit-btn back-btn" style="width: 100%; margin-top: 10px;" onclick="backToTopics()">
                ← Torna agli esercizi
            </button>
        </div>
        
        <div class="exercise-grid">
    `;
    
    // For cloze-test, show compact vertical layout
    if (exercise.type === 'cloze-test') {
        // Create clean text with clickable blanks
        let textContent = exercise.context;
        
        exercise.questions.forEach((q, idx) => {
            const saved = savedAnswers[idx];
            let blankClass = 'cloze-blank-inline';
            let blankText = `(${q.blank_number})`;
            
            if (saved) {
                blankClass += saved.isCorrect ? ' answered-correct' : ' answered-incorrect';
                let answerText = q.options[saved.userAnswer].replace(/^[A-D]\)\s*/, '');
                
                // Check if answer has slash (e.g., "had / lived")
                if (answerText.includes(' / ')) {
                    const parts = answerText.split(' / ');
                    // Find pattern: (number) ......... word .........
                    const pattern = new RegExp(`\\(${q.blank_number}\\)\\s+\\.+\\s*([^.]+?)\\s*\\.+`, 'g');
                    const match = pattern.exec(textContent);
                    
                    if (match) {
                        const middleWord = match[1].trim();
                        const replacement = `<span class="${blankClass}" onclick="selectClozeBlank(${idx})" id="blank-${idx}">${parts[0]}</span> ${middleWord} <span class="${blankClass}" onclick="selectClozeBlank(${idx})">${parts[1]}</span>`;
                        textContent = textContent.replace(match[0], replacement);
                        return; // Skip normal replacement
                    }
                }
                
                blankText = answerText;
            }
            
            const blankHTML = `<span class="${blankClass}" onclick="selectClozeBlank(${idx})" id="blank-${idx}">${blankText}</span>`;
            textContent = textContent.replace(`(${q.blank_number})`, blankHTML);
        });
        
        // Build tabs
        let tabsHTML = '';
        exercise.questions.forEach((q, idx) => {
            const saved = savedAnswers[idx];
            let tabClass = 'cloze-tab';
            if (saved) {
                tabClass += saved.isCorrect ? ' answered-correct' : ' answered-incorrect';
            }
            tabsHTML += `<div class="${tabClass}" onclick="selectClozeBlank(${idx})" id="tab-${idx}">(${q.blank_number})</div>`;
        });
        
        // Build question panels
        let panelsHTML = '';
        exercise.questions.forEach((q, idx) => {
            const saved = savedAnswers[idx];
            
            let optionsHTML = '';
            q.options.forEach((opt, optIdx) => {
                const isSelected = saved && saved.userAnswer === optIdx;
                const disabled = saved ? 'disabled' : '';
                const selectedClass = isSelected ? 'selected' : '';
                optionsHTML += `
                    <button class="cloze-option-btn ${selectedClass}" 
                            onclick="answerClozeQuestion(${idx}, ${optIdx})"
                            ${disabled}>
                        ${opt}
                    </button>
                `;
            });
            
            let feedbackHTML = '';
            if (saved) {
                const feedbackClass = saved.isCorrect ? 'correct' : 'incorrect';
                const correctAnswer = q.options[q.answer].replace(/^[A-D]\)\s*/, '');
                feedbackHTML = `
                    <div class="cloze-feedback-box show ${feedbackClass}">
                        <strong>${saved.isCorrect ? '✓ Corretto!' : '✗ Non corretto'}</strong>
                        <div style="margin-top: 10px; font-size: 0.95em; line-height: 1.6;">${q.explanation}</div>
                        ${!saved.isCorrect ? `<div style="margin-top: 12px; padding: 10px; background: rgba(40, 167, 69, 0.15); border-left: 3px solid #28a745; border-radius: 4px;"><strong>Risposta corretta:</strong> ${correctAnswer}</div>` : ''}
                    </div>
                `;
            }
            
            panelsHTML += `
                <div class="cloze-question-panel" id="panel-${idx}">
                    <div class="cloze-question-title">Spazio (${q.blank_number})</div>
                    <div class="cloze-options-grid">
                        ${optionsHTML}
                    </div>
                    ${feedbackHTML}
                </div>
            `;
        });
        
        html += `
            <div class="cloze-container">
                <div class="cloze-text-section">
                    <h3 style="color: #667eea; margin-bottom: 15px;">📄 Testo Interattivo</h3>
                    <div class="cloze-text-content">${textContent}</div>
                    <div style="margin-top: 15px; padding: 12px; background: white; border-left: 4px solid #667eea; border-radius: 4px; font-size: 0.9em; color: #555;">
                        💡 <strong>Istruzioni:</strong> Clicca sui numeri gialli nel testo o usa i pulsanti sotto per rispondere
                    </div>
                </div>
                <div class="cloze-tabs-section" id="cloze-questions-section">
                    <h4 style="color: #667eea; margin-bottom: 10px;">⬇️ Domande Attive</h4>
                    <div class="cloze-tabs">
                        ${tabsHTML}
                    </div>
                    ${panelsHTML}
                </div>
            </div>
        `;
        
        container.innerHTML = html + '</div>';
        
        // Auto-select first unanswered question and scroll to it
        const firstUnanswered = exercise.questions.findIndex((q, idx) => !savedAnswers[idx]);
        if (firstUnanswered !== -1) {
            setTimeout(() => {
                selectClozeBlank(firstUnanswered);
                document.getElementById('cloze-questions-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
        
        return;
    }
    
    // Render all questions
    exercise.questions.forEach((question, idx) => {
        const saved = savedAnswers[idx];
        let cardClass = 'unanswered';
        let numberClass = '';
        let statusIcon = '';
        
        if (saved) {
            if (saved.isCorrect) {
                cardClass = 'answered-correct';
                numberClass = 'correct';
                statusIcon = '✅';
            } else {
                cardClass = 'answered-incorrect';
                numberClass = 'incorrect';
                statusIcon = '❌';
            }
        }
        
        html += `
            <div class="question-card ${cardClass}" id="question-${idx}">
                <div class="question-number ${numberClass}">${idx + 1}</div>
                ${statusIcon ? `<div class="question-status">${statusIcon}</div>` : ''}
                <div class="question-text">
                    ${question.topic ? `<span style="display:inline-block;background:#e8f4fd;color:#2980b9;border:1px solid #aed6f1;border-radius:12px;padding:2px 10px;font-size:0.78em;font-weight:600;margin-bottom:8px;letter-spacing:0.3px;">${question.topic}</span><br>` : ''}
                    ${exercise.type === 'cloze-test' ? `<strong>Spazio (${question.blank_number}):</strong> Scegli l'opzione corretta` : question.text}
                </div>
                <div class="question-input-section">
        `;
        
        // Render input based on type
        if (exercise.type === 'fill-blank' || exercise.type === 'translation') {
            const savedValue = saved ? saved.userAnswer : '';
            const disabled = saved ? 'disabled' : '';
            html += `
                <input type="text" 
                       class="input-answer" 
                       id="answer-${idx}" 
                       value="${savedValue}"
                       placeholder="Scrivi qui la tua risposta..."
                       ${disabled}>
                <button class="check-answer-btn" 
                        onclick="checkSingleAnswer(${idx})"
                        ${disabled ? 'disabled' : ''}>
                    ${saved ? 'Risposta verificata' : 'Verifica Risposta'}
                </button>
            `;
        } else if (exercise.type === 'multiple-choice') {
            html += '<div class="options">';
            question.options.forEach((opt, optIdx) => {
                const isSelected = saved && saved.userAnswer === optIdx;
                const disabled = saved ? 'disabled' : '';
                const selectedClass = isSelected ? 'selected' : '';
                html += `
                    <button class="option-btn ${selectedClass}" 
                            onclick="selectAndCheckOption(${idx}, ${optIdx})"
                            ${disabled}>
                        ${opt}
                    </button>
                `;
            });
            html += '</div>';
        } else if (exercise.type === 'key-word-transformation') {
            // Special rendering for key word transformation
            html += `
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    ${question.topic ? `<div style="margin-bottom:10px;"><span style="display:inline-block;background:#e8f4fd;color:#2980b9;border:1px solid #aed6f1;border-radius:12px;padding:2px 10px;font-size:0.78em;font-weight:600;letter-spacing:0.3px;">${question.topic}</span></div>` : ''}
                    <div style="margin-bottom: 10px;">
                        <strong>Prima frase:</strong><br>
                        <span style="color: #555;">${question.first_sentence}</span>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <strong>Parola chiave:</strong> 
                        <span style="background: #667eea; color: white; padding: 3px 8px; border-radius: 4px; font-weight: bold;">${question.keyword}</span>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <strong>Completa la seconda frase:</strong><br>
                        <span style="color: #555;">${question.second_sentence_start}</span>
                        <span style="color: #667eea; font-weight: bold;">___________</span>
                        <span style="color: #555;">${question.second_sentence_end}</span>
                    </div>
                    <div style="color: #856404; font-size: 0.9em; margin-top: 10px;">
                        💡 Usa tra ${question.min_words} e ${question.max_words} parole, includendo la parola chiave
                    </div>
                </div>
            `;
            const savedValue = saved ? saved.userAnswer : '';
            const disabled = saved ? 'disabled' : '';
            html += `
                <input type="text" 
                       class="input-answer" 
                       id="answer-${idx}" 
                       value="${savedValue}"
                       placeholder="Scrivi qui la tua risposta..."
                       ${disabled}>
                <button class="check-answer-btn" 
                        onclick="checkSingleAnswer(${idx})"
                        ${disabled ? 'disabled' : ''}>
                    ${saved ? 'Risposta verificata' : 'Verifica Risposta'}
                </button>
            `;
        }
        
        // Show feedback if answered
        if (saved) {
            const feedbackClass = saved.isCorrect ? 'correct' : 'incorrect';
            const feedbackTitle = saved.isCorrect ? '✓ Corretto!' : '✗ Non corretto';
            
            let correctAnswerHTML = '';
            if (!saved.isCorrect) {
                if (exercise.type === 'multiple-choice' || exercise.type === 'cloze-test') {
                    const correctAnswerText = question.options[question.answer];
                    correctAnswerHTML = `<div style="margin-top: 10px; padding: 10px; background: rgba(40, 167, 69, 0.1); border-left: 3px solid #28a745; border-radius: 5px;">
                        <strong>Risposta corretta:</strong> ${correctAnswerText}
                    </div>`;
                } else {
                    correctAnswerHTML = `<div style="margin-top: 10px; padding: 10px; background: rgba(40, 167, 69, 0.1); border-left: 3px solid #28a745; border-radius: 5px;">
                        <strong>Risposta corretta:</strong> ${question.answer}
                    </div>`;
                }
            }
            
            html += `
                <div class="answer-feedback-inline ${feedbackClass}">
                    <strong>${feedbackTitle}</strong>
                    <div style="margin-top: 8px;">${question.explanation}</div>
                    ${correctAnswerHTML}
                </div>
            `;
        }
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    
    container.innerHTML = html;
}

// Check single answer
function checkSingleAnswer(questionIndex) {
    const topic = grammarData[appState.currentTopic];
    const exercise = topic.exercises[appState.currentExerciseIndex];
    const question = exercise.questions[questionIndex];
    
    const userAnswerInput = document.getElementById(`answer-${questionIndex}`);
    const userAnswerRaw = userAnswerInput.value.trim();
    
    if (!userAnswerRaw) {
        alert('Per favore inserisci una risposta!');
        return;
    }
    
    const userAnswer = normalizeAnswer(userAnswerRaw);
    const correctAnswer = normalizeAnswer(question.answer);
    const alternatives = question.alternatives?.map(a => normalizeAnswer(a)) || [];
    const isCorrect = userAnswer === correctAnswer || alternatives.includes(userAnswer);
    
    // Check if this question was already answered
    const savedAnswers = getSavedAnswers();
    const wasAlreadyAnswered = savedAnswers[questionIndex] !== undefined;
    const previousAnswer = wasAlreadyAnswered ? savedAnswers[questionIndex] : null;
    
    // Save answer (original text with punctuation/capitalization)
    saveQuestionAnswer(questionIndex, userAnswerRaw, isCorrect);
    
    // Update answer statistics in real-time (only if it's a new answer or the result changed)
    if (!wasAlreadyAnswered) {
        // First time answering this question
        let answerStats = JSON.parse(localStorage.getItem('answerStats') || '{"correct": 0, "incorrect": 0}');
        if (isCorrect) {
            answerStats.correct++;
        } else {
            answerStats.incorrect++;
        }
        localStorage.setItem('answerStats', JSON.stringify(answerStats));
    } else if (previousAnswer.isCorrect !== isCorrect) {
        // Answer changed from correct to incorrect or vice versa
        let answerStats = JSON.parse(localStorage.getItem('answerStats') || '{"correct": 0, "incorrect": 0}');
        if (isCorrect) {
            answerStats.correct++;
            answerStats.incorrect--;
        } else {
            answerStats.incorrect++;
            answerStats.correct--;
        }
        localStorage.setItem('answerStats', JSON.stringify(answerStats));
    }
    
    // Add to review if incorrect (excluding cloze-test)
    if (!isCorrect && exercise.type !== 'cloze-test') {
        addToReview(appState.currentTopic, appState.currentExerciseIndex, questionIndex, question);
    }
    
    // Check special badges
    if (typeof checkSpecialBadges === 'function') {
        checkSpecialBadges(isCorrect, false);
    }
    
    // Re-render to show feedback
    renderQuestion();
    
    // Update dashboard in real-time
    updateDashboard();
}

// Select and check option (for multiple choice)
function selectAndCheckOption(questionIndex, optionIndex) {
    const topic = grammarData[appState.currentTopic];
    const exercise = topic.exercises[appState.currentExerciseIndex];
    const question = exercise.questions[questionIndex];
    
    const isCorrect = optionIndex === question.answer;
    
    // Check if this question was already answered
    const savedAnswers = getSavedAnswers();
    const wasAlreadyAnswered = savedAnswers[questionIndex] !== undefined;
    const previousAnswer = wasAlreadyAnswered ? savedAnswers[questionIndex] : null;
    
    // Save answer
    saveQuestionAnswer(questionIndex, optionIndex, isCorrect);
    
    // Update answer statistics in real-time (only if it's a new answer or the result changed)
    if (!wasAlreadyAnswered) {
        // First time answering this question
        let answerStats = JSON.parse(localStorage.getItem('answerStats') || '{"correct": 0, "incorrect": 0}');
        if (isCorrect) {
            answerStats.correct++;
        } else {
            answerStats.incorrect++;
        }
        localStorage.setItem('answerStats', JSON.stringify(answerStats));
    } else if (previousAnswer.isCorrect !== isCorrect) {
        // Answer changed from correct to incorrect or vice versa
        let answerStats = JSON.parse(localStorage.getItem('answerStats') || '{"correct": 0, "incorrect": 0}');
        if (isCorrect) {
            answerStats.correct++;
            answerStats.incorrect--;
        } else {
            answerStats.incorrect++;
            answerStats.correct--;
        }
        localStorage.setItem('answerStats', JSON.stringify(answerStats));
    }
    
    // Add to review if incorrect (excluding cloze-test)
    if (!isCorrect && exercise.type !== 'cloze-test') {
        addToReview(appState.currentTopic, appState.currentExerciseIndex, questionIndex, question);
    }
    
    // Check special badges
    if (typeof checkSpecialBadges === 'function') {
        checkSpecialBadges(isCorrect, false);
    }
    
    // Re-render to show feedback
    renderQuestion();
    
    // Update dashboard in real-time
    updateDashboard();
}

// Complete exercise
// Complete exercise (marks as completed but keeps answers)
function completeExercise() {
    const topic = grammarData[appState.currentTopic];
    const exercise = topic.exercises[appState.currentExerciseIndex];
    const savedAnswers = getSavedAnswers();
    
    // Calculate final stats
    let correctCount = 0;
    let incorrectCount = 0;
    
    exercise.questions.forEach((_, idx) => {
        if (savedAnswers[idx] && savedAnswers[idx].isCorrect) {
            correctCount++;
        } else {
            incorrectCount++;
        }
    });
    
    const totalScore = correctCount * exercise.difficulty;
    
    // Mark as completed
    appState.completedExercises[`${appState.currentTopic}-${appState.currentExerciseIndex}`] = true;
    localStorage.setItem('completedExercises', JSON.stringify(appState.completedExercises));
    
    // Update total score
    appState.totalScore += totalScore;
    localStorage.setItem('totalScore', appState.totalScore.toString());
    
    // Note: Answer statistics are already updated in real-time
    // Note: We DON'T delete exerciseProgress - answers remain for PDF/review
    
    // Show summary
    const totalQuestions = exercise.questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    
    const container = document.getElementById('exerciseContent');
    container.innerHTML = `
        <div class="question-container">
            <h2 style="color: #667eea; margin-bottom: 20px;">Esercizio completato! 🎉</h2>
            <div style="font-size: 1.2em; margin: 20px 0;">
                <p>Risposte corrette: <strong>${correctCount}/${totalQuestions}</strong> (${percentage}%)</p>
                <p>Punti guadagnati: <strong>${totalScore}</strong></p>
            </div>
            <div style="margin-top: 30px;">
                <button class="submit-btn" onclick="backToTopics()">← Torna agli esercizi</button>
                <button class="submit-btn next-btn" onclick="showSection('review')">Vai al ripasso</button>
            </div>
        </div>
    `;
    
    // Reload topics to show updated progress
    loadTopics();
    updateDashboard();
    
    // Check for badges
    if (typeof checkSpecialBadges === 'function') {
        checkSpecialBadges(null, true);
    }
    if (typeof checkAndUnlockBadges === 'function') {
        checkAndUnlockBadges();
    }
}

// Confirm repeat exercise
function confirmRepeatExercise() {
    const confirmed = confirm('⚠️ Sei sicuro di voler ripetere questo esercizio?\n\nVerranno cancellate tutte le tue risposte e le statistiche di questo esercizio.\n\nQuesta azione non può essere annullata.');
    
    if (confirmed) {
        repeatExercise();
    }
}

// Repeat exercise (clears answers and stats for THIS exercise only)
function repeatExercise() {
    const topic = grammarData[appState.currentTopic];
    const exercise = topic.exercises[appState.currentExerciseIndex];
    const savedAnswers = getSavedAnswers();
    
    // Calculate how many correct/incorrect to subtract from global stats
    let correctToRemove = 0;
    let incorrectToRemove = 0;
    
    Object.values(savedAnswers).forEach(answer => {
        if (answer.isCorrect) {
            correctToRemove++;
        } else {
            incorrectToRemove++;
        }
    });
    
    // Update global answer statistics
    if (correctToRemove > 0 || incorrectToRemove > 0) {
        let answerStats = JSON.parse(localStorage.getItem('answerStats') || '{"correct": 0, "incorrect": 0}');
        answerStats.correct = Math.max(0, answerStats.correct - correctToRemove);
        answerStats.incorrect = Math.max(0, answerStats.incorrect - incorrectToRemove);
        localStorage.setItem('answerStats', JSON.stringify(answerStats));
    }
    
    // Remove from completed exercises
    const exerciseKey = `${appState.currentTopic}-${appState.currentExerciseIndex}`;
    delete appState.completedExercises[exerciseKey];
    localStorage.setItem('completedExercises', JSON.stringify(appState.completedExercises));
    
    // Clear exercise progress (all answers)
    const progressKey = getExerciseKey(appState.currentTopic, appState.currentExerciseIndex);
    delete appState.exerciseProgress[progressKey];
    localStorage.setItem('exerciseProgress', JSON.stringify(appState.exerciseProgress));
    
    // Remove this exercise's questions from review
    appState.reviewItems = appState.reviewItems.filter(item => 
        !(item.topicKey === appState.currentTopic && item.exerciseIndex === appState.currentExerciseIndex)
    );
    localStorage.setItem('reviewItems', JSON.stringify(appState.reviewItems));
    
    // Restart the exercise fresh
    startExercise(appState.currentTopic, appState.currentExerciseIndex);
    updateDashboard();
}

// Select option (for multiple choice)
let selectedOption = null;
function selectOption(index) {
    selectedOption = index;
    document.querySelectorAll('.option-btn').forEach((btn, idx) => {
        btn.classList.toggle('selected', idx === index);
    });
    document.getElementById('submitBtn').disabled = false;
}

// Check answer
function checkAnswer() {
    const topic = grammarData[appState.currentTopic];
    const exercise = topic.exercises[appState.currentExerciseIndex];
    const question = exercise.questions[appState.currentQuestionIndex];
    
    let userAnswer, isCorrect;
    
    if (exercise.type === 'multiple-choice') {
        userAnswer = selectedOption;
        isCorrect = userAnswer === question.answer;
    } else {
        userAnswer = normalizeAnswer(document.getElementById('userAnswer').value);
        const correctAnswer = normalizeAnswer(question.answer);
        const alternatives = question.alternatives?.map(a => normalizeAnswer(a)) || [];

        isCorrect = userAnswer === correctAnswer || alternatives.includes(userAnswer);
    }

    // Save answer
    appState.userAnswers.push({
        questionIndex: appState.currentQuestionIndex,
        userAnswer,
        isCorrect,
        question: question
    });
    
    // Update score
    if (isCorrect) {
        appState.exerciseScore += exercise.difficulty;
    } else {
        // Add to review if incorrect (excluding cloze-test)
        if (exercise.type !== 'cloze-test') {
            addToReview(appState.currentTopic, appState.currentExerciseIndex, appState.currentQuestionIndex, question);
        }
    }
    
    // Show feedback
    showFeedback(isCorrect, question);
}

// Show feedback
function showFeedback(isCorrect, question) {
    const topic = grammarData[appState.currentTopic];
    const exercise = topic.exercises[appState.currentExerciseIndex];
    
    const feedbackDiv = document.getElementById('feedback');
    const feedbackClass = isCorrect ? 'feedback correct' : 'feedback incorrect';
    const feedbackTitle = isCorrect ? '✓ Corretto!' : '✗ Non corretto';
    
    let correctAnswerHTML = '';
    if (!isCorrect) {
        // For multiple choice, show the actual text of the correct answer
        if (exercise.type === 'multiple-choice') {
            const correctAnswerText = question.options[question.answer];
            correctAnswerHTML = `<div style="margin-top: 15px; padding: 10px; background: rgba(40, 167, 69, 0.1); border-left: 3px solid #28a745; border-radius: 5px;">
                <strong>Risposta corretta:</strong> ${correctAnswerText}
            </div>`;
        } else {
            correctAnswerHTML = `<div style="margin-top: 15px; padding: 10px; background: rgba(40, 167, 69, 0.1); border-left: 3px solid #28a745; border-radius: 5px;">
                <strong>Risposta corretta:</strong> ${question.answer}
            </div>`;
        }
    }
    
    feedbackDiv.innerHTML = `
        <div class="${feedbackClass}">
            <strong>${feedbackTitle}</strong>
            <div style="margin-top: 10px;">${question.explanation}</div>
            ${correctAnswerHTML}
        </div>
    `;
    
    // Show next button
    const isLastQuestion = appState.currentQuestionIndex === exercise.questions.length - 1;
    
    feedbackDiv.innerHTML += isLastQuestion ? 
        `<button class="submit-btn next-btn" onclick="finishExercise()">Termina esercizio</button>` :
        `<button class="submit-btn next-btn" onclick="nextQuestion()">Prossima domanda →</button>`;
    
    // Disable answer input
    const answerInput = document.getElementById('userAnswer');
    if (answerInput) answerInput.disabled = true;
    
    const submitBtn = document.querySelector('.submit-btn:not(.next-btn):not(.back-btn)');
    if (submitBtn) submitBtn.disabled = true;
    
    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
}

// Next question
function nextQuestion() {
    appState.currentQuestionIndex++;
    selectedOption = null;
    renderQuestion();
}

// Add to review
function addToReview(topicKey, exerciseIndex, questionIndex, question) {
    const reviewId = `${topicKey}-${exerciseIndex}-${questionIndex}`;
    
    // Check if already exists
    const exists = appState.reviewItems.some(item => item.id === reviewId);
    if (!exists) {
        const topic = grammarData[topicKey];
        const exercise = topic.exercises[exerciseIndex];
        
        appState.reviewItems.push({
            id: reviewId,
            topicKey,
            exerciseIndex,
            questionIndex,
            topicTitle: topic.title,
            exerciseType: exercise.type === 'fill-blank' ? 'Completa gli spazi' :
                         exercise.type === 'multiple-choice' ? 'Risposta multipla' : 'Traduzione',
            question: question
        });
        
        localStorage.setItem('reviewItems', JSON.stringify(appState.reviewItems));
    }
}

// Update review section
function updateReviewSection() {
    const container = document.getElementById('reviewContent');
    
    if (appState.reviewItems.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div style="font-size: 4em; margin-bottom: 20px;">🎉</div>
                <h3>Ottimo lavoro!</h3>
                <p style="margin-top: 10px;">Non hai esercizi da ripassare. Continua così!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '<p style="margin-bottom: 20px; color: #856404;">Esercizi da rivedere:</p>';
    
    appState.reviewItems.forEach((item, index) => {
        const itemHTML = `
            <div class="review-item">
                <h4>${item.topicTitle} - ${item.exerciseType}</h4>
                <p><strong>Domanda:</strong> ${item.question.text}</p>
                <p style="margin-top: 10px; color: #856404;"><em>💡 Prova a rispondere senza guardare la soluzione!</em></p>
                <button class="submit-btn" style="margin-top: 15px;" onclick="reviewQuestion(${index})">Riprova Esercizio</button>
                <button class="submit-btn back-btn" onclick="removeFromReview('${item.id}')">Rimuovi dal Ripasso</button>
            </div>
        `;
        container.innerHTML += itemHTML;
    });
}

// Review question
function reviewQuestion(index) {
    const item = appState.reviewItems[index];
    
    appState.currentTopic = item.topicKey;
    appState.currentExerciseIndex = item.exerciseIndex;
    appState.currentQuestionIndex = item.questionIndex;
    appState.exerciseScore = 0;
    appState.userAnswers = [];
    appState.isReviewMode = true;
    appState.reviewItemIndex = index;
    
    showExerciseSection();
    renderReviewQuestion();
}

// Render review question
function renderReviewQuestion() {
    const topic = grammarData[appState.currentTopic];
    const exercise = topic.exercises[appState.currentExerciseIndex];
    const question = exercise.questions[appState.currentQuestionIndex];
    
    const container = document.getElementById('exerciseContent');
    document.getElementById('exerciseProgressText').textContent = 'Modalità Ripasso';
    document.getElementById('exerciseScore').textContent = '0 punti';
    
    let questionHTML = `<div class="question-container">
        <div class="question-text">
            ${question.topic ? `<span style="display:inline-block;background:#e8f4fd;color:#2980b9;border:1px solid #aed6f1;border-radius:12px;padding:2px 10px;font-size:0.78em;font-weight:600;margin-bottom:8px;letter-spacing:0.3px;">${question.topic}</span><br>` : ''}
            ${question.text}
        </div>`;
    
    if (exercise.type === 'fill-blank' || exercise.type === 'translation') {
        questionHTML += `
            <input type="text" class="input-answer" id="userAnswer" placeholder="Scrivi qui la tua risposta...">
            <button class="submit-btn" onclick="checkReviewAnswer()">Verifica</button>
        `;
    } else if (exercise.type === 'multiple-choice') {
        questionHTML += '<div class="options">';
        question.options.forEach((opt, idx) => {
            questionHTML += `<button class="option-btn" onclick="selectOption(${idx})">${opt}</button>`;
        });
        questionHTML += '</div><button class="submit-btn" onclick="checkReviewAnswer()" disabled id="submitBtn">Verifica</button>';
    }
    
    questionHTML += '<div id="feedback"></div></div>';
    questionHTML += `<button class="submit-btn back-btn" onclick="showSection('review')">← Torna al ripasso</button>`;
    
    container.innerHTML = questionHTML;
    
    if (exercise.type !== 'multiple-choice') {
        setTimeout(() => document.getElementById('userAnswer')?.focus(), 100);
    }
}

// Check review answer
function checkReviewAnswer() {
    const topic = grammarData[appState.currentTopic];
    const exercise = topic.exercises[appState.currentExerciseIndex];
    const question = exercise.questions[appState.currentQuestionIndex];
    
    let userAnswer, isCorrect;
    
    if (exercise.type === 'multiple-choice') {
        userAnswer = selectedOption;
        isCorrect = userAnswer === question.answer;
    } else {
        userAnswer = normalizeAnswer(document.getElementById('userAnswer').value);
        const correctAnswer = normalizeAnswer(question.answer);
        const alternatives = question.alternatives?.map(a => normalizeAnswer(a)) || [];

        isCorrect = userAnswer === correctAnswer || alternatives.includes(userAnswer);
    }

    // Show feedback
    const feedbackDiv = document.getElementById('feedback');
    const feedbackClass = isCorrect ? 'feedback correct' : 'feedback incorrect';
    const feedbackTitle = isCorrect ? '✓ Perfetto!' : '✗ Riprova';
    
    let correctAnswerHTML = '';
    if (!isCorrect) {
        // For multiple choice, show the actual text of the correct answer
        if (exercise.type === 'multiple-choice') {
            const correctAnswerText = question.options[question.answer];
            correctAnswerHTML = `<div style="margin-top: 15px; padding: 10px; background: rgba(40, 167, 69, 0.1); border-left: 3px solid #28a745; border-radius: 5px;">
                <strong>Risposta corretta:</strong> ${correctAnswerText}
            </div>`;
        } else {
            correctAnswerHTML = `<div style="margin-top: 15px; padding: 10px; background: rgba(40, 167, 69, 0.1); border-left: 3px solid #28a745; border-radius: 5px;">
                <strong>Risposta corretta:</strong> ${question.answer}
            </div>`;
        }
    }
    
    feedbackDiv.innerHTML = `
        <div class="${feedbackClass}">
            <strong>${feedbackTitle}</strong>
            <div style="margin-top: 10px;">${question.explanation}</div>
            ${correctAnswerHTML}
        </div>
    `;
    
    if (isCorrect) {
        // Remove from review
        const item = appState.reviewItems[appState.reviewItemIndex];
        removeFromReview(item.id);
        
        feedbackDiv.innerHTML += `
            <button class="submit-btn next-btn" onclick="showSection('review')">Torna al ripasso</button>
        `;
    } else {
        feedbackDiv.innerHTML += `
            <button class="submit-btn" onclick="renderReviewQuestion()">Riprova</button>
        `;
    }
    
    // Disable inputs
    const answerInput = document.getElementById('userAnswer');
    if (answerInput) answerInput.disabled = true;
    
    const submitBtn = document.querySelector('.submit-btn:not(.next-btn):not(.back-btn)');
    if (submitBtn) submitBtn.disabled = true;
    
    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
}

// Remove from review
function removeFromReview(reviewId) {
    appState.reviewItems = appState.reviewItems.filter(item => item.id !== reviewId);
    localStorage.setItem('reviewItems', JSON.stringify(appState.reviewItems));
    updateReviewSection();
    updateDashboard();
}

// Update dashboard
function updateDashboard() {
    let totalExercises = 0;
    let completedExercises = 0;
    
    for (const topic of Object.values(grammarData)) {
        totalExercises += topic.exercises.length;
    }
    
    for (const key in appState.completedExercises) {
        if (appState.completedExercises[key]) completedExercises++;
    }
    
    const percentage = totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;
    
    // Update main stats
    document.getElementById('totalExercises').textContent = totalExercises;
    document.getElementById('completedExercises').textContent = completedExercises;
    document.getElementById('completionPercentage').textContent = `${percentage}%`;
    document.getElementById('totalProgress').style.width = `${percentage}%`;
    document.getElementById('totalScore').textContent = appState.totalScore;
    document.getElementById('reviewCount').textContent = appState.reviewItems.length;
    
    // Calculate and update accuracy
    const answerStats = JSON.parse(localStorage.getItem('answerStats') || '{"correct": 0, "incorrect": 0}');
    const totalAnswers = answerStats.correct + answerStats.incorrect;
    const accuracy = totalAnswers > 0 ? Math.round((answerStats.correct / totalAnswers) * 100) : 0;
    
    document.getElementById('accuracyPercentage').textContent = `${accuracy}%`;
    
    let accuracyLabel = 'Inizia a fare esercizi';
    if (totalAnswers > 0) {
        if (accuracy >= 85) accuracyLabel = '🟢 Eccellente!';
        else if (accuracy >= 70) accuracyLabel = '🟡 Buono';
        else accuracyLabel = '🔴 Da migliorare';
    }
    document.getElementById('accuracyLabel').textContent = accuracyLabel;
    
    // Update detailed statistics
    updateDetailedStats();
}

// Update detailed statistics
function updateDetailedStats() {
    // Topic progress
    const topicProgressChart = document.getElementById('topicProgressChart');
    let topicProgressHTML = '';
    
    const topicDifficulty = calculateTopicDifficulty();
    
    for (const [key, topic] of Object.entries(grammarData)) {
        const progress = calculateTopicProgress(key);
        
        // Calculate total, answered, correct, and incorrect questions for this topic
        let totalQuestions = 0;
        let answeredQuestions = 0;
        let correctAnswers = 0;
        let incorrectAnswers = 0;
        
        topic.exercises.forEach((exercise, exerciseIdx) => {
            totalQuestions += exercise.questions.length;
            
            // Count answered questions and their correctness
            const exerciseKey = getExerciseKey(key, exerciseIdx);
            const savedAnswers = appState.exerciseProgress[exerciseKey] || {};
            
            Object.values(savedAnswers).forEach(answer => {
                if (answer.isCorrect) {
                    correctAnswers++;
                } else {
                    incorrectAnswers++;
                }
            });
            
            answeredQuestions += Object.keys(savedAnswers).length;
            
            // If completed, count all questions
            if (isExerciseCompleted(key, exerciseIdx)) {
                const questionsInExercise = exercise.questions.length;
                const alreadyCounted = Object.keys(savedAnswers).length;
                if (alreadyCounted < questionsInExercise) {
                    answeredQuestions += (questionsInExercise - alreadyCounted);
                }
            }
        });
        
        // Calculate OK/KO percentages
        const okPercentage = answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0;
        const koPercentage = answeredQuestions > 0 ? Math.round((incorrectAnswers / answeredQuestions) * 100) : 0;
        
        const difficulty = topicDifficulty[key] || { errorRate: 0, label: '' };
        let difficultyBadge = '';
        if (difficulty.label) {
            let badgeClass = 'difficulty-easy';
            if (difficulty.label === 'Meglio Ripassare') badgeClass = 'difficulty-hard';
            else if (difficulty.label === 'Puoi Fare Meglio') badgeClass = 'difficulty-medium';
            difficultyBadge = `<span class="difficulty-badge ${badgeClass}">${difficulty.label}</span>`;
        }
        
        topicProgressHTML += `
            <div class="topic-stat">
                <div class="topic-stat-header">
                    <span class="topic-stat-name">${topic.title}${difficultyBadge}</span>
                    <span class="topic-stat-percentage">${progress}%</span>
                </div>
                <div style="color: #888; font-size: 0.9em; margin: 8px 0;">
                    ${answeredQuestions} di ${totalQuestions} domande risposte
                    ${answeredQuestions > 0 ? `<span style="margin-left: 10px;">• <span style="color: #28a745;">✓ ${okPercentage}%</span> <span style="color: #dc3545;">✗ ${koPercentage}%</span></span>` : ''}
                </div>
                <div class="mini-progress-bar">
                    <div class="mini-progress-fill" style="width: ${progress}%"></div>
                </div>
            </div>
        `;
    }
    
    // Add badges section if badge system is loaded
    if (typeof renderBadgesSection === 'function') {
        topicProgressHTML += renderBadgesSection();
    }
    
    topicProgressChart.innerHTML = topicProgressHTML;
    
    // Detailed statistics
    const answerStats = JSON.parse(localStorage.getItem('answerStats') || '{"correct": 0, "incorrect": 0}');
    const totalAnswers = answerStats.correct + answerStats.incorrect;
    const errorPatterns = calculateErrorPatterns();
    const partialProgress = calculatePartialProgress();
    
    const detailedStats = document.getElementById('detailedStats');
    detailedStats.innerHTML = `
        <div class="detail-stat-row">
            <div class="detail-stat-item">
                <div class="detail-stat-number">${totalAnswers}</div>
                <div class="detail-stat-label">Domande Risposte</div>
            </div>
            <div class="detail-stat-item">
                <div class="detail-stat-number" style="color: #28a745;">${answerStats.correct}</div>
                <div class="detail-stat-label">Risposte Corrette</div>
            </div>
            <div class="detail-stat-item">
                <div class="detail-stat-number" style="color: #dc3545;">${answerStats.incorrect}</div>
                <div class="detail-stat-label">Risposte Sbagliate</div>
            </div>
            <div class="detail-stat-item">
                <div class="detail-stat-number" style="color: #ffc107;">${partialProgress.inProgress}</div>
                <div class="detail-stat-label">Esercizi In Corso</div>
            </div>
        </div>
        ${errorPatterns.mostDifficult ? `
        <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 8px;">
            <strong style="color: #856404;">⚠️ Argomento che richiede più attenzione:</strong>
            <div style="font-size: 1.1em; margin-top: 5px; color: #856404;">${errorPatterns.mostDifficult}</div>
        </div>
        ` : ''}
    `;
}

// Calculate topic difficulty based on error rates
function calculateTopicDifficulty() {
    const topicDifficulty = {};
    
    // Calculate actual error rate per topic from exerciseProgress
    for (const [key, topic] of Object.entries(grammarData)) {
        let correctAnswers = 0;
        let incorrectAnswers = 0;
        
        // Count actual answers from exerciseProgress
        topic.exercises.forEach((exercise, exIdx) => {
            const exerciseKey = getExerciseKey(key, exIdx);
            const savedAnswers = appState.exerciseProgress[exerciseKey] || {};
            
            Object.values(savedAnswers).forEach(answer => {
                if (answer.isCorrect) {
                    correctAnswers++;
                } else {
                    incorrectAnswers++;
                }
            });
        });
        
        const totalAnswers = correctAnswers + incorrectAnswers;
        
        if (totalAnswers > 0) {
            const errorRate = (incorrectAnswers / totalAnswers) * 100;
            
            // New labels: MOLTO BENE - PUOI FARE MEGLIO - MEGLIO RIPASSARE
            let label = 'Molto Bene';
            if (errorRate > 40) label = 'Meglio Ripassare';
            else if (errorRate > 20) label = 'Puoi Fare Meglio';
            
            topicDifficulty[key] = {
                errorRate: Math.round(errorRate),
                correct: correctAnswers,
                incorrect: incorrectAnswers,
                label: label
            };
        }
    }
    
    return topicDifficulty;
}

// Calculate error patterns
function calculateErrorPatterns() {
    const topicErrors = {};
    let maxErrors = 0;
    let mostDifficult = null;
    
    appState.reviewItems.forEach(item => {
        if (!topicErrors[item.topicTitle]) {
            topicErrors[item.topicTitle] = 0;
        }
        topicErrors[item.topicTitle]++;
        
        if (topicErrors[item.topicTitle] > maxErrors) {
            maxErrors = topicErrors[item.topicTitle];
            mostDifficult = item.topicTitle;
        }
    });
    
    return {
        topicErrors,
        mostDifficult,
        maxErrors
    };
}

// Calculate partial progress (exercises in progress)
function calculatePartialProgress() {
    let inProgress = 0;
    
    for (const key in appState.exerciseProgress) {
        // Check if not completed
        if (!appState.completedExercises[key]) {
            const answers = appState.exerciseProgress[key];
            if (Object.keys(answers).length > 0) {
                inProgress++;
            }
        }
    }
    
    return {
        inProgress
    };
}

// Back to topics
function backToTopics() {
    appState.isReviewMode = false;
    showSection('topics');
    loadTopics();
}

// Show reset modal
function requestResetPIN() {
    // Ask for PIN
    const pin = prompt('Inserisci il PIN per resettare i progressi:');
    
    if (pin === '3576') {
        document.getElementById('resetModal').style.display = 'block';
    } else if (pin !== null) {
        // User entered something but it's wrong
        alert('❌ PIN errato! Il reset non è autorizzato.');
    }
    // If pin is null, user cancelled - do nothing
}

// Close reset modal
function closeResetModal() {
    document.getElementById('resetModal').style.display = 'none';
}

// Confirm reset
function confirmReset() {
    // Clear all data
    localStorage.removeItem('completedExercises');
    localStorage.removeItem('reviewItems');
    localStorage.removeItem('totalScore');
    localStorage.removeItem('answerStats');
    localStorage.removeItem('exerciseProgress');
    
    // Reset app state
    appState.completedExercises = {};
    appState.reviewItems = [];
    appState.totalScore = 0;
    appState.exerciseProgress = {};
    appState.currentTopic = null;
    appState.currentExerciseIndex = null;
    appState.currentQuestionIndex = 0;
    appState.exerciseScore = 0;
    appState.userAnswers = [];
    
    // Close modal
    closeResetModal();
    
    // Reload interface
    loadTopics();
    updateDashboard();
    updateReviewSection();
    
    // Show dashboard
    showSection('dashboard');
    
    // Show success message
    alert('✅ Tutti i progressi sono stati cancellati con successo!');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('resetModal');
    if (event.target === modal) {
        closeResetModal();
    }
}

// ============ THEORY FUNCTIONS ============

// Load theory navigation
function loadTheoryNav() {
    const nav = document.getElementById('theoryNav');
    nav.innerHTML = '';
    
    for (const [key, theory] of Object.entries(theoryData)) {
        const btn = document.createElement('button');
        btn.className = 'theory-nav-btn';
        btn.textContent = theory.title;
        btn.onclick = () => showTheory(key);
        nav.appendChild(btn);
    }
    
    // Show first topic by default
    const firstKey = Object.keys(theoryData)[0];
    showTheory(firstKey);
}

// Show theory for a specific topic
function showTheory(topicKey) {
    const theory = theoryData[topicKey];
    const container = document.getElementById('theoryContent');
    
    // Update active button
    document.querySelectorAll('.theory-nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === theory.title) {
            btn.classList.add('active');
        }
    });
    
    let html = `
        <div class="theory-header">
            <h2>${theory.title}</h2>
            <p>${theory.subtitle}</p>
        </div>
    `;
    
    // Render each section
    theory.sections.forEach(section => {
        html += `
            <div class="theory-card" style="border-left-color: ${section.color}">
                <h3 style="color: ${section.color}">${section.title}</h3>
                <div class="content">${section.content}</div>
        `;
        
        // Add formula if exists
        if (section.formula) {
            html += `<div class="theory-formula">${section.formula}</div>`;
        }
        
        // Add "why" if exists
        if (section.why) {
            html += `<div class="why">${section.why}</div>`;
        }
        
        // Add subsections if exist
        if (section.subsections) {
            section.subsections.forEach(sub => {
                html += `
                    <div class="theory-subsection">
                        <h4>${sub.subtitle}</h4>
                        <div class="content">${sub.content}</div>
                `;
                
                if (sub.examples) {
                    html += '<div class="theory-examples">';
                    sub.examples.forEach(ex => {
                        html += `
                            <div class="theory-example">
                                <div class="text">${ex.text}</div>
                                <div class="explanation">${ex.explanation}</div>
                            </div>
                        `;
                    });
                    html += '</div>';
                }
                
                html += '</div>';
            });
        }
        
        // Add examples if exist (and no subsections)
        if (section.examples && !section.subsections) {
            html += '<div class="theory-examples">';
            section.examples.forEach(ex => {
                html += `
                    <div class="theory-example">
                        <div class="text">${ex.text}</div>
                        <div class="explanation">${ex.explanation}</div>
                    </div>
                `;
            });
            html += '</div>';
        }
        
        // Add note if exists
        if (section.note) {
            html += `<div class="theory-note">${section.note}</div>`;
        }
        
        html += '</div>';
    });
    
    // Add button to start exercises
    html += `
        <div style="text-align: center; margin-top: 40px;">
            <button class="start-exercises-btn" onclick="startExercisesFromTheory('${topicKey}')">
                🚀 Inizia gli Esercizi
            </button>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Track theory read
    const theoriesRead = JSON.parse(localStorage.getItem('theoriesRead') || '[]');
    if (!theoriesRead.includes(topicKey)) {
        theoriesRead.push(topicKey);
        localStorage.setItem('theoriesRead', JSON.stringify(theoriesRead));
        // Check for lettore badge
        if (typeof checkAndUnlockBadges === 'function') {
            setTimeout(() => checkAndUnlockBadges(), 500);
        }
    }
}

// Start exercises from theory page
function startExercisesFromTheory(topicKey) {
    showSection('topics');
    // Scroll to the topic
    setTimeout(() => {
        const topicCards = document.querySelectorAll('.topic-card');
        const topics = Object.keys(grammarData);
        const index = topics.indexOf(topicKey);
        if (index >= 0 && topicCards[index]) {
            topicCards[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
            topicCards[index].style.animation = 'pulse 1s ease-in-out 2';
        }
    }, 300);
}

// Show theory from topics section
function showTheoryFromTopic(topicKey) {
    showSection('theory');
    setTimeout(() => {
        showTheory(topicKey);
    }, 100);
}

// Add pulse animation via CSS (injected dynamically)
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3); }
    }
`;
document.head.appendChild(style);

// ============ HAMBURGER MENU ============

function toggleHamburgerMenu() {
    const dropdown = document.getElementById('hamburgerDropdown');
    dropdown.classList.toggle('show');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.querySelector('.hamburger-menu');
    const dropdown = document.getElementById('hamburgerDropdown');
    if (menu && !menu.contains(e.target) && dropdown) {
        dropdown.classList.remove('show');
    }
});

// ============ DATA EXPORT/IMPORT ============

function exportData() {
    toggleHamburgerMenu();
    
    // Collect all data from localStorage
    const exportData = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        data: {
            completedExercises: JSON.parse(localStorage.getItem('completedExercises') || '{}'),
            reviewItems: JSON.parse(localStorage.getItem('reviewItems') || '[]'),
            totalScore: localStorage.getItem('totalScore') || '0',
            answerStats: JSON.parse(localStorage.getItem('answerStats') || '{"correct": 0, "incorrect": 0}'),
            exerciseProgress: JSON.parse(localStorage.getItem('exerciseProgress') || '{}'),
            badges: JSON.parse(localStorage.getItem('badges') || '{}'),
            theoriesRead: JSON.parse(localStorage.getItem('theoriesRead') || '[]'),
            perfectStreak: JSON.parse(localStorage.getItem('perfectStreak') || '[]'),
            exerciseAttempts: JSON.parse(localStorage.getItem('exerciseAttempts') || '{}')
        }
    };
    
    // Create blob and download
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const filename = `grammar-progress-${new Date().toISOString().split('T')[0]}.json`;
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    alert(`✅ Dati esportati!\n\nFile: ${filename}\n\nSalva questo file per importarlo su un altro dispositivo.`);
}

function importData(event) {
    toggleHamburgerMenu();
    
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const importedData = JSON.parse(e.target.result);
            
            // Validate structure
            if (!importedData.version || !importedData.data) {
                throw new Error('File non valido');
            }
            
            // Confirm overwrite
            const confirm = window.confirm(
                '⚠️ ATTENZIONE!\n\n' +
                'Questa azione SOVRASCRIVERÀ tutti i tuoi dati attuali.\n\n' +
                `File da importare: ${file.name}\n` +
                `Data esportazione: ${new Date(importedData.exportDate).toLocaleString('it-IT')}\n\n` +
                'Vuoi continuare?'
            );
            
            if (!confirm) {
                event.target.value = ''; // Reset file input
                return;
            }
            
            // Import all data
            const data = importedData.data;
            localStorage.setItem('completedExercises', JSON.stringify(data.completedExercises || {}));
            localStorage.setItem('reviewItems', JSON.stringify(data.reviewItems || []));
            localStorage.setItem('totalScore', data.totalScore || '0');
            localStorage.setItem('answerStats', JSON.stringify(data.answerStats || {correct: 0, incorrect: 0}));
            localStorage.setItem('exerciseProgress', JSON.stringify(data.exerciseProgress || {}));
            localStorage.setItem('badges', JSON.stringify(data.badges || {}));
            localStorage.setItem('theoriesRead', JSON.stringify(data.theoriesRead || []));
            localStorage.setItem('perfectStreak', JSON.stringify(data.perfectStreak || []));
            localStorage.setItem('exerciseAttempts', JSON.stringify(data.exerciseAttempts || {}));
            
            // Reload app state
            appState.completedExercises = JSON.parse(localStorage.getItem('completedExercises') || '{}');
            appState.reviewItems = JSON.parse(localStorage.getItem('reviewItems') || '[]');
            appState.totalScore = parseInt(localStorage.getItem('totalScore') || '0');
            appState.exerciseProgress = JSON.parse(localStorage.getItem('exerciseProgress') || '{}');
            appState.badges = JSON.parse(localStorage.getItem('badges') || '{}');
            
            alert('✅ Dati importati con successo!\n\nLa pagina verrà ricaricata.');
            
            // Reload page
            location.reload();
            
        } catch (error) {
            alert('❌ Errore nell\'importazione!\n\nIl file non è valido o è corrotto.\n\n' + error.message);
        }
        
        // Reset file input
        event.target.value = '';
    };
    
    reader.readAsText(file);
}

// ============ CLOZE TEST HANDLERS ============

let currentClozeQuestion = null;

function selectClozeBlank(questionIndex) {
    currentClozeQuestion = questionIndex;
    
    // Update tabs
    document.querySelectorAll('.cloze-tab').forEach((tab, idx) => {
        if (idx === questionIndex) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Update blanks in text
    document.querySelectorAll('.cloze-blank-inline').forEach((blank, idx) => {
        if (idx === questionIndex) {
            blank.classList.add('active');
        } else {
            blank.classList.remove('active');
        }
    });
    
    // Show corresponding panel
    document.querySelectorAll('.cloze-question-panel').forEach((panel, idx) => {
        if (idx === questionIndex) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    });
}

function answerClozeQuestion(questionIndex, optionIndex) {
    const topic = grammarData[appState.currentTopic];
    const exercise = topic.exercises[appState.currentExerciseIndex];
    const question = exercise.questions[questionIndex];
    
    const isCorrect = optionIndex === question.answer;
    
    // Check if already answered
    const savedAnswers = getSavedAnswers();
    const wasAlreadyAnswered = savedAnswers[questionIndex] !== undefined;
    const previousAnswer = wasAlreadyAnswered ? savedAnswers[questionIndex] : null;
    
    // Save answer
    saveQuestionAnswer(questionIndex, optionIndex, isCorrect);
    
    // Update statistics
    if (!wasAlreadyAnswered) {
        let answerStats = JSON.parse(localStorage.getItem('answerStats') || '{"correct": 0, "incorrect": 0}');
        if (isCorrect) {
            answerStats.correct++;
        } else {
            answerStats.incorrect++;
        }
        localStorage.setItem('answerStats', JSON.stringify(answerStats));
    } else if (previousAnswer.isCorrect !== isCorrect) {
        let answerStats = JSON.parse(localStorage.getItem('answerStats') || '{"correct": 0, "incorrect": 0}');
        if (isCorrect) {
            answerStats.correct++;
            answerStats.incorrect--;
        } else {
            answerStats.incorrect++;
            answerStats.correct--;
        }
        localStorage.setItem('answerStats', JSON.stringify(answerStats));
    }
    
    // Check special badges (consecutive correct, etc.)
    if (typeof checkSpecialBadges === 'function') {
        checkSpecialBadges(isCorrect, false);
    }
    
    // Store current scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Re-render
    renderQuestion();
    updateDashboard();
    
    // Restore scroll position and keep questions section visible
    setTimeout(() => {
        // Ensure questions section stays in view
        const questionsSection = document.getElementById('cloze-questions-section');
        if (questionsSection) {
            const rect = questionsSection.getBoundingClientRect();
            // If section is not fully visible, scroll to it
            if (rect.top < 0 || rect.bottom > window.innerHeight) {
                questionsSection.scrollIntoView({ behavior: 'auto', block: 'start' });
            }
        }
        
        // Auto-select next unanswered question
        const nextUnanswered = exercise.questions.findIndex((q, idx) => {
            const saved = getSavedAnswers();
            return idx > questionIndex && !saved[idx];
        });
        
        if (nextUnanswered !== -1) {
            selectClozeBlank(nextUnanswered);
        } else {
            // Keep current question selected to show feedback
            selectClozeBlank(questionIndex);
        }
    }, 50);
}

// ============ PDF GENERATION ============

function confirmPrintPDF() {
    // Create custom dialog overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    const dialog = document.createElement('div');
    dialog.style.cssText = `
        background: white;
        border-radius: 12px;
        padding: 30px;
        max-width: 450px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        text-align: center;
    `;
    
    dialog.innerHTML = `
        <h3 style="color: #667eea; margin-bottom: 20px; font-size: 1.3em;">🖨️ Genera PDF</h3>
        <p style="color: #555; margin-bottom: 30px; line-height: 1.6;">
            Vuoi generare il PDF con le tue risposte compilate<br>o un PDF vuoto da completare?
        </p>
        <div style="display: flex; gap: 15px; justify-content: center;">
            <button id="pdf-with-answers" style="
                flex: 1;
                padding: 15px 25px;
                background: #28a745;
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 1em;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.2s;
            ">
                ✅ CON RISPOSTE
            </button>
            <button id="pdf-empty" style="
                flex: 1;
                padding: 15px 25px;
                background: #17a2b8;
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 1em;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.2s;
            ">
                📝 VUOTO
            </button>
        </div>
        <button id="pdf-cancel" style="
            margin-top: 15px;
            padding: 10px 20px;
            background: transparent;
            color: #999;
            border: none;
            cursor: pointer;
            font-size: 0.9em;
        ">
            Annulla
        </button>
    `;
    
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
    
    // Add hover effects
    const withBtn = dialog.querySelector('#pdf-with-answers');
    const emptyBtn = dialog.querySelector('#pdf-empty');
    
    withBtn.onmouseover = () => withBtn.style.background = '#218838';
    withBtn.onmouseout = () => withBtn.style.background = '#28a745';
    emptyBtn.onmouseover = () => emptyBtn.style.background = '#138496';
    emptyBtn.onmouseout = () => emptyBtn.style.background = '#17a2b8';
    
    // Button handlers
    dialog.querySelector('#pdf-with-answers').onclick = () => {
        document.body.removeChild(overlay);
        printExercisePDF(true);
    };
    
    dialog.querySelector('#pdf-empty').onclick = () => {
        document.body.removeChild(overlay);
        printExercisePDF(false);
    };
    
    dialog.querySelector('#pdf-cancel').onclick = () => {
        document.body.removeChild(overlay);
    };
    
    // Close on overlay click
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    };
}

function printExercisePDF(withAnswers = true) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const topic = grammarData[appState.currentTopic];
    const exercise = topic.exercises[appState.currentExerciseIndex];
    const theory = theoryData[appState.currentTopic];
    const savedAnswers = getSavedAnswers();
    
    let yPos = 20;
    const lineHeight = 7;
    const pageHeight = 280;
    const margin = 20;
    const maxWidth = 170;
    
    // Helper function to check if we need a new page
    function checkNewPage(requiredSpace) {
        if (yPos + requiredSpace > pageHeight) {
            doc.addPage();
            yPos = 20;
        }
    }
    
    // Title
    doc.setFontSize(20);
    doc.setTextColor(102, 126, 234);
    doc.text(topic.title, margin, yPos);
    yPos += 12;
    
    // Exercise type
    doc.setFontSize(14);
    doc.setTextColor(100, 100, 100);
    const exType = getExerciseTypeName(exercise.type);
    doc.text(exType, margin, yPos);
    yPos += 12;
    
    // Separator line
    doc.setDrawColor(102, 126, 234);
    doc.setLineWidth(0.5);
    doc.line(margin, yPos, 190, yPos);
    yPos += 10;
    
    // Theory summary section
    if (theory) {
        doc.setFontSize(16);
        doc.setTextColor(102, 126, 234);
        doc.text('Sintesi delle Regole', margin, yPos);
        yPos += 8;
        
        doc.setFontSize(10);
        doc.setTextColor(80, 80, 80);
        
        theory.sections.forEach((section, idx) => {
            checkNewPage(30);
            
            // Section title
            doc.setFontSize(11);
            doc.setFont(undefined, 'bold');
            const sectionTitle = `${idx + 1}. ${section.title}`;
            doc.text(sectionTitle, margin, yPos);
            yPos += 6;
            
            // Section content
            doc.setFontSize(9);
            doc.setFont(undefined, 'normal');
            const contentLines = doc.splitTextToSize(section.content, maxWidth);
            contentLines.forEach(line => {
                checkNewPage(5);
                doc.text(line, margin + 3, yPos);
                yPos += 4;
            });
            yPos += 3;
            
            // Examples (if any and not too many)
            if (section.examples && section.examples.length > 0 && idx < 2) {
                doc.setFontSize(9);
                doc.setFont(undefined, 'italic');
                section.examples.slice(0, 2).forEach(ex => {
                    checkNewPage(8);
                    doc.text(`• ${ex.text}`, margin + 5, yPos);
                    yPos += 4;
                });
                yPos += 2;
            }
        });
        
        yPos += 5;
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, yPos, 190, yPos);
        yPos += 10;
    }
    
    // Questions section
    checkNewPage(20);
    doc.setFontSize(16);
    doc.setTextColor(102, 126, 234);
    doc.text('Esercizi', margin, yPos);
    yPos += 10;
    
    // For cloze-test, show the context first
    if (exercise.type === 'cloze-test') {
        doc.setFontSize(10);
        doc.setTextColor(80, 80, 80);
        doc.setFont(undefined, 'italic');
        doc.text('Leggi il testo e scegli l\'opzione corretta per ogni spazio numerato:', margin, yPos);
        yPos += 8;
        
        // Process context to show answers with numbers (conditionally)
        let contextWithAnswers = exercise.context;
        
        if (withAnswers) {
            exercise.questions.forEach((q, idx) => {
                const saved = savedAnswers[idx];
                if (saved) {
                    let chosenText = q.options[saved.userAnswer].replace(/^[A-D]\)\s*/, '');
                    
                    if (chosenText.includes(' / ')) {
                        const parts = chosenText.split(' / ');
                        const pattern = new RegExp(`\\(${q.blank_number}\\)\\s+\\.+([^.]+?)\\.+`);
                        const match = pattern.exec(contextWithAnswers);
                        
                        if (match) {
                            const middleWord = match[1].trim();
                            // Show answer with number in square brackets
                            const replacement = `[(${q.blank_number}) ${parts[0]}] ${middleWord} [${parts[1]}]`;
                            contextWithAnswers = contextWithAnswers.replace(match[0], replacement);
                        } else {
                            const replacement = `[(${q.blank_number}) ${chosenText}]`;
                            contextWithAnswers = contextWithAnswers.replace(`(${q.blank_number})`, replacement);
                        }
                    } else {
                        const replacement = `[(${q.blank_number}) ${chosenText}]`;
                        contextWithAnswers = contextWithAnswers.replace(`(${q.blank_number})`, replacement);
                    }
                }
            });
        }
        // else: leave (1), (2), (3) as is for empty PDF
        
        // Render normally with proper line breaks
        doc.setFont(undefined, 'normal');
        doc.setTextColor(60, 60, 60);
        const contextLines = doc.splitTextToSize(contextWithAnswers, maxWidth);
        contextLines.forEach(line => {
            checkNewPage(5);
            doc.text(line, margin, yPos);
            yPos += 5;
        });
        
        // Add legend
        yPos += 3;
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text('Le risposte inserite sono mostrate tra [parentesi quadre]', margin, yPos);
        yPos += 10;
        
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, yPos, 190, yPos);
        yPos += 10;
    }
    
    // Render each question
    exercise.questions.forEach((question, idx) => {
        checkNewPage(35);
        
        const saved = savedAnswers[idx];
        
        // Question number
        doc.setFontSize(11);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(50, 50, 50);
        doc.text(`Domanda ${idx + 1}`, margin, yPos);
        yPos += 6;
        
        // Question text
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(60, 60, 60);
        
        let questionText = question.text;
        if (exercise.type === 'cloze-test') {
            questionText = `Spazio (${question.blank_number}): Scegli l'opzione corretta`;
        } else if (exercise.type === 'key-word-transformation') {
            questionText = `Prima frase: ${question.first_sentence}\n\nParola chiave: ${question.keyword}\n\nCompleta: ${question.second_sentence_start} ___________ ${question.second_sentence_end}`;
        }
        
        const questionLines = doc.splitTextToSize(questionText, maxWidth);
        questionLines.forEach(line => {
            checkNewPage(5);
            doc.text(line, margin, yPos);
            yPos += 5;
        });
        yPos += 2;
        
        // User's answer - show only if withAnswers is true
        if (withAnswers && saved) {
            if (exercise.type === 'multiple-choice' || exercise.type === 'cloze-test') {
                // For multiple choice and cloze-test, show all options with the selected one highlighted
                yPos += 2;
                doc.setFontSize(9);
                doc.setTextColor(80, 80, 80);
                doc.setFont(undefined, 'normal');
                doc.text('Opzioni:', margin, yPos);
                yPos += 5;
                
                question.options.forEach((option, optIdx) => {
                    checkNewPage(8);
                    
                    const isSelected = saved.userAnswer === optIdx;
                    const optionLabel = `${String.fromCharCode(65 + optIdx)}) ${option}`;
                    
                    if (isSelected) {
                        // Highlight selected answer in neutral blue/gray
                        doc.setFont(undefined, 'bold');
                        doc.setFillColor(230, 235, 245); // Light blue/gray
                        doc.setTextColor(50, 50, 80); // Dark blue/gray
                        
                        const optionLines = doc.splitTextToSize(optionLabel, maxWidth - 10);
                        const boxHeight = optionLines.length * 5 + 2;
                        
                        doc.roundedRect(margin + 3, yPos - 3, maxWidth - 6, boxHeight, 2, 2, 'F');
                        
                        optionLines.forEach(line => {
                            doc.text(line, margin + 5, yPos);
                            yPos += 5;
                        });
                    } else {
                        // Normal option
                        doc.setFont(undefined, 'normal');
                        doc.setTextColor(100, 100, 100);
                        
                        const optionLines = doc.splitTextToSize(optionLabel, maxWidth - 10);
                        optionLines.forEach(line => {
                            doc.text(line, margin + 5, yPos);
                            yPos += 5;
                        });
                    }
                });
                yPos += 2;
            } else {
                // For fill-blank and translation, show the answer in neutral color
                doc.setFontSize(10);
                doc.setFont(undefined, 'bold');
                
                const answerText = saved.userAnswer;
                
                // Neutral color for all answers
                doc.setFillColor(230, 235, 245); // Light blue/gray
                doc.setTextColor(50, 50, 80); // Dark blue/gray
                
                const answerLines = doc.splitTextToSize(`Risposta: ${answerText}`, maxWidth - 10);
                const boxHeight = answerLines.length * 5 + 2;
                
                checkNewPage(boxHeight + 5);
                doc.roundedRect(margin, yPos - 3, maxWidth, boxHeight, 2, 2, 'F');
                
                doc.setFont(undefined, 'normal');
                answerLines.forEach(line => {
                    doc.text(line, margin + 2, yPos);
                    yPos += 5;
                });
                yPos += 2;
            }
        } else {
            // No answer OR empty PDF requested - show empty format
            if (exercise.type === 'multiple-choice' || exercise.type === 'cloze-test') {
                // For multiple choice and cloze-test, show all options even if not answered yet
                yPos += 2;
                doc.setFontSize(9);
                doc.setTextColor(80, 80, 80);
                doc.setFont(undefined, 'normal');
                doc.text('Opzioni:', margin, yPos);
                yPos += 5;
                
                question.options.forEach((option, optIdx) => {
                    checkNewPage(8);
                    
                    const optionLabel = `${String.fromCharCode(65 + optIdx)}) ${option}`;
                    
                    doc.setFont(undefined, 'normal');
                    doc.setTextColor(100, 100, 100);
                    
                    const optionLines = doc.splitTextToSize(optionLabel, maxWidth - 10);
                    optionLines.forEach(line => {
                        doc.text(line, margin + 5, yPos);
                        yPos += 5;
                    });
                });
                yPos += 2;
            } else {
                // For fill-blank, translation, and key-word-transformation, show empty space
                doc.setFontSize(9);
                doc.setTextColor(150, 150, 150);
                doc.setFont(undefined, 'italic');
                doc.text('Risposta: _______________________________________', margin, yPos);
                yPos += 5;
            }
        }
        
        yPos += 5;
        
        // Separator line between questions
        if (idx < exercise.questions.length - 1) {
            doc.setDrawColor(220, 220, 220);
            doc.setLineWidth(0.3);
            doc.line(margin, yPos, 190, yPos);
            yPos += 5;
        }
    });
    
    // Footer on last page
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text(`English Grammar Practice - Pagina ${i} di ${pageCount}`, margin, 290);
    }
    
    // Generate filename
    const filename = `${topic.title.replace(/[^a-zA-Z0-9]/g, '_')}_${exType.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
    
    // Save PDF
    doc.save(filename);
}
