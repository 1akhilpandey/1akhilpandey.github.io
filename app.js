const supabaseUrl = 'https://gssduqgpqlpvxetfppih.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdzc2R1cWdwcWxwdnhldGZwcGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5NjYxNzcsImV4cCI6MjA1NjU0MjE3N30.1BbWNBR2buvoFSZQQFKTEo3igGltmiv7Q65yk75X9wY'; 
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey, { db: { schema: 'public' } });

// DOM Elements
const screens = {
  home: document.getElementById('home-screen'),
  quiz: document.getElementById('quiz-screen'),
  results: document.getElementById('results-screen'),
  insights: document.getElementById('insights-screen'),
  leaderboard: document.getElementById('leaderboard-screen')
};

// Global State
const state = {
  userName: '',
  currentQuestionIndex: 0,
  selectedQuestions: [],
  userAnswers: [],
  startTime: null,
  endTime: null,
  quizCompleted: false,
  attemptId: null,
  totalQuestions: 20, // Default number of questions
};

// Navigation functions
function showScreen(screenId) {
  // Hide all screens
  Object.values(screens).forEach(screen => {
    screen.classList.add('hidden');
  });
  
  // Show the requested screen
  screens[screenId].classList.remove('hidden');
  screens[screenId].classList.add('animate-fadeIn');
  
  // Special logic for specific screens
  if (screenId === 'quiz' && state.currentQuestionIndex === 0 && !state.startTime) {
    // Starting the quiz
    startQuiz();
  } else if (screenId === 'results' && !state.quizCompleted) {
    // Finishing the quiz
    finishQuiz();
  } else if (screenId === 'leaderboard') {
    loadLeaderboard();
  }
}

// Quiz Functions
function startQuiz() {
  // Get user name
  state.userName = document.getElementById('user-name').value.trim();
  if (!state.userName) {
    state.userName = 'Anonymous User';
  }
  
  // Reset quiz state
  state.currentQuestionIndex = 0;
  state.userAnswers = [];
  state.quizCompleted = false;
  
  // Get randomized questions
  state.selectedQuestions = getRandomizedQuestions(state.totalQuestions);
  
  // Record start time
  state.startTime = new Date();
  
  // Create sidebar navigation
  createSidebarNavigation();
  
  // Update quiz progress
  updateQuizProgress();
  
  // Display first question
  displayCurrentQuestion();
  
  // Start timer
  startTimer();
}

function createSidebarNavigation() {
  const sectionsNav = document.getElementById('sections-navigation');
  sectionsNav.innerHTML = '';
  
  // Group questions by section
  const sectionMap = {};
  
  state.selectedQuestions.forEach((question, index) => {
    if (!sectionMap[question.sectionId]) {
      sectionMap[question.sectionId] = {
        title: question.sectionTitle,
        questions: []
      };
    }
    
    sectionMap[question.sectionId].questions.push({
      index: index,
      id: question.id
    });
  });
  
  // Create section and question links
  Object.entries(sectionMap).forEach(([sectionId, section]) => {
    const sectionItem = document.createElement('div');
    sectionItem.className = 'section-item';
    
    const sectionTitle = document.createElement('div');
    sectionTitle.className = 'section-title';
    sectionTitle.textContent = section.title;
    
    const questionLinks = document.createElement('div');
    questionLinks.className = 'question-links';
    
    section.questions.forEach(question => {
      const questionLink = document.createElement('span');
      questionLink.className = 'question-link';
      questionLink.textContent = question.index + 1;
      questionLink.dataset.index = question.index;
      
      questionLink.addEventListener('click', () => {
        navigateToQuestion(parseInt(question.index));
      });
      
      questionLinks.appendChild(questionLink);
    });
    
    sectionItem.appendChild(sectionTitle);
    sectionItem.appendChild(questionLinks);
    sectionsNav.appendChild(sectionItem);
  });
}

function displayCurrentQuestion() {
  const question = state.selectedQuestions[state.currentQuestionIndex];
  const questionNumber = state.currentQuestionIndex + 1;
  const totalQuestions = state.selectedQuestions.length;
  
  // Update question number
  document.getElementById('question-number').textContent = `Question ${questionNumber}/${totalQuestions}`;
  
  // Update progress bar
  const progressPercentage = (questionNumber / totalQuestions) * 100;
  document.getElementById('progress-indicator').style.width = `${progressPercentage}%`;
  
  // Update question text
  document.getElementById('question-text').textContent = question.text;
  
  // Create options
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    optionElement.textContent = option;
    optionElement.dataset.optionIndex = index;
    
    // Check if user has already answered this question
    if (state.userAnswers[state.currentQuestionIndex] !== undefined) {
      if (state.userAnswers[state.currentQuestionIndex] === index) {
        optionElement.classList.add('selected');
      }
      
      // If we're showing feedback, add correct/incorrect classes
      if (index === question.correctAnswer) {
        optionElement.classList.add('correct');
      } else if (state.userAnswers[state.currentQuestionIndex] === index) {
        optionElement.classList.add('incorrect');
      }
    }
    
    optionElement.addEventListener('click', () => selectOption(index));
    optionsContainer.appendChild(optionElement);
  });
  
  // Update sidebar navigation
  updateSidebarNavigation();
  
  // Update navigation buttons
  updateNavigationButtons();
}

function updateSidebarNavigation() {
  // Find all question links in the sidebar
  const questionLinks = document.querySelectorAll('.question-link');
  
  // Remove all classes except 'question-link'
  questionLinks.forEach(link => {
    link.className = 'question-link';
    
    // Add appropriate classes
    const index = parseInt(link.dataset.index);
    
    // If this is the current question
    if (index === state.currentQuestionIndex) {
      link.classList.add('current');
    }
    
    // If the question has been answered
    if (state.userAnswers[index] !== undefined) {
      link.classList.add('answered');
      
      // If the answer was correct or incorrect
      if (state.userAnswers[index] === state.selectedQuestions[index].correctAnswer) {
        link.classList.add('correct');
      } else {
        link.classList.add('incorrect');
      }
    }
  });
}

function updateNavigationButtons() {
  const prevButton = document.getElementById('prev-question-btn');
  const nextButton = document.getElementById('next-question-btn');
  
  // Enable/disable prev button based on current question
  prevButton.disabled = state.currentQuestionIndex === 0;
  
  // Enable/disable next button based on current question
  nextButton.disabled = state.currentQuestionIndex === state.selectedQuestions.length - 1;
}

function navigateToQuestion(index) {
  if (index >= 0 && index < state.selectedQuestions.length) {
    state.currentQuestionIndex = index;
    displayCurrentQuestion();
  }
}

function selectOption(optionIndex) {
  // Save user's answer
  state.userAnswers[state.currentQuestionIndex] = optionIndex;
  
  // Get current question
  const question = state.selectedQuestions[state.currentQuestionIndex];
  
  // Show feedback
  const optionsContainer = document.getElementById('options-container');
  const options = optionsContainer.querySelectorAll('.option');
  
  // First, remove any existing selections
  options.forEach(option => {
    option.classList.remove('selected', 'correct', 'incorrect');
  });
  
  // Add selected class to the chosen option
  options[optionIndex].classList.add('selected');
  
  // Show correct/incorrect feedback
  const isCorrect = optionIndex === question.correctAnswer;
  
  if (isCorrect) {
    options[optionIndex].classList.add('correct');
    showFeedbackToast('Correct!', 'correct');
  } else {
    options[optionIndex].classList.add('incorrect');
    options[question.correctAnswer].classList.add('correct');
    showFeedbackToast('Incorrect! The correct answer is shown.', 'incorrect');
  }
  
  // Update sidebar navigation
  updateSidebarNavigation();
}

function moveToNextQuestion() {
  if (state.currentQuestionIndex < state.selectedQuestions.length - 1) {
    // Move to next question
    state.currentQuestionIndex++;
    displayCurrentQuestion();
  }
}

function moveToPreviousQuestion() {
  if (state.currentQuestionIndex > 0) {
    // Move to previous question
    state.currentQuestionIndex--;
    displayCurrentQuestion();
  }
}

function updateQuizProgress() {
  const questionNumber = state.currentQuestionIndex + 1;
  const totalQuestions = state.selectedQuestions.length;
  
  // Update question number text
  document.getElementById('question-number').textContent = `Question ${questionNumber}/${totalQuestions}`;
  
  // Update progress bar
  const progressPercentage = (questionNumber / totalQuestions) * 100;
  document.getElementById('progress-indicator').style.width = `${progressPercentage}%`;
}

function startTimer() {
  const timerElement = document.getElementById('quiz-timer');
  const startTime = new Date();
  
  // Update timer every second
  const timerInterval = setInterval(() => {
    const currentTime = new Date();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Stop timer if quiz is completed
    if (state.quizCompleted) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

async function finishQuiz() {
  // Record end time
  state.endTime = new Date();
  state.quizCompleted = true;
  
  // Calculate score and time taken
  const numCorrect = state.userAnswers.filter((answer, index) => 
    answer === state.selectedQuestions[index].correctAnswer
  ).length;
  
  const score = numCorrect;
  const totalQuestions = state.selectedQuestions.length;
  const scorePercentage = Math.round((numCorrect / totalQuestions) * 100);
  
  const timeTakenMs = state.endTime - state.startTime;
  const timeTakenSeconds = Math.floor(timeTakenMs / 1000);
  const minutes = Math.floor(timeTakenSeconds / 60);
  const seconds = timeTakenSeconds % 60;
  const timeTakenFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  // Update results screen
  document.getElementById('score-value').textContent = `${scorePercentage}%`;
  document.getElementById('total-questions').textContent = totalQuestions;
  document.getElementById('correct-answers').textContent = numCorrect;
  document.getElementById('time-taken').textContent = timeTakenFormatted;
  
  // Save results to Supabase
  try {
    // 1. Save the quiz attempt
    const { data: attemptData, error: attemptError } = await supabase
      .from('quiz_attempts')
      .insert([{
        user_name: state.userName,
        score: numCorrect,
        total_questions: totalQuestions,
        time_taken: timeTakenSeconds,
        finish_timestamp: new Date().toISOString()
      }])
      .select();
    
    if (attemptError) throw attemptError;
    
    // Save attempt ID for reference
    state.attemptId = attemptData[0].id;
    
    // 2. Save individual question responses
    const questionResponses = state.selectedQuestions.map((question, index) => {
      return {
        attempt_id: state.attemptId,
        question_id: question.id.toString(),
        question_text: question.text,
        user_answer: question.options[state.userAnswers[index]],
        correct_answer: question.options[question.correctAnswer],
        is_correct: state.userAnswers[index] === question.correctAnswer
      };
    });
    
    const { error: responsesError } = await supabase
      .from('question_responses')
      .insert(questionResponses);
    
    if (responsesError) throw responsesError;
    
    console.log('Quiz results saved successfully');
  } catch (error) {
    console.error('Error saving quiz results:', error);
    showFeedbackToast('Error saving results. Try again later.', 'incorrect');
  }
}

// Insights Page Functions
async function loadInsights() {
  if (!state.attemptId) {
    showFeedbackToast('No quiz data available', 'incorrect');
    return;
  }
  
  try {
    // Get attempt details from Supabase
    const { data: attemptData, error: attemptError } = await supabase
      .from('quiz_attempts')
      .select('*')
      .eq('id', state.attemptId)
      .single();
    
    if (attemptError) throw attemptError;
    
    // Get question responses
    const { data: responseData, error: responseError } = await supabase
      .from('question_responses')
      .select('*')
      .eq('attempt_id', state.attemptId)
      .order('id');
    
    if (responseError) throw responseError;
    
    // Group by section for chart display
    const sectionPerformance = {};
    
    responseData.forEach(response => {
      const question = state.selectedQuestions.find(q => q.id.toString() === response.question_id);
      if (question && question.sectionTitle) {
        if (!sectionPerformance[question.sectionTitle]) {
          sectionPerformance[question.sectionTitle] = {
            total: 0,
            correct: 0
          };
        }
        
        sectionPerformance[question.sectionTitle].total++;
        if (response.is_correct) {
          sectionPerformance[question.sectionTitle].correct++;
        }
      }
    });
    
    // Create performance chart
    createPerformanceChart(sectionPerformance);
    
    // Create question review items
    const reviewContainer = document.getElementById('question-review-container');
    reviewContainer.innerHTML = '';
    
    responseData.forEach((response) => {
      const reviewItem = document.createElement('div');
      reviewItem.className = 'review-item';
      
      const questionElement = document.createElement('div');
      questionElement.className = 'review-question';
      questionElement.textContent = response.question_text;
      
      const answerElement = document.createElement('div');
      answerElement.className = `review-answer ${response.is_correct ? 'correct' : 'incorrect'}`;
      
      const answerLabel = document.createElement('span');
      answerLabel.className = 'answer-label';
      answerLabel.textContent = 'Your answer: ';
      
      const answerValue = document.createElement('span');
      answerValue.className = 'answer-value';
      answerValue.textContent = response.user_answer;
      
      answerElement.appendChild(answerLabel);
      answerElement.appendChild(answerValue);
      
      if (!response.is_correct) {
        const correctAnswer = document.createElement('div');
        correctAnswer.className = 'correct-answer';
        correctAnswer.textContent = `Correct answer: ${response.correct_answer}`;
        answerElement.appendChild(correctAnswer);
      }
      
      reviewItem.appendChild(questionElement);
      reviewItem.appendChild(answerElement);
      reviewContainer.appendChild(reviewItem);
    });
  } catch (error) {
    console.error('Error loading insights:', error);
    showFeedbackToast('Error loading insights', 'incorrect');
  }
}

function createPerformanceChart(sectionPerformance) {
  const canvas = document.getElementById('performance-chart');
  const ctx = canvas.getContext('2d');
  
  // Clear existing chart
  if (window.performanceChart) {
    window.performanceChart.destroy();
  }
  
  const labels = Object.keys(sectionPerformance);
  const percentages = labels.map(section => {
    const { correct, total } = sectionPerformance[section];
    return (correct / total) * 100;
  });
  
  window.performanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Percentage Correct',
        data: percentages,
        backgroundColor: 'rgba(52, 152, 219, 0.6)',
        borderColor: 'rgba(52, 152, 219, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Percentage (%)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Topic Area'
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Performance by Topic Area',
          font: {
            size: 16
          }
        }
      }
    }
  });
}

// Leaderboard Functions
async function loadLeaderboard(timeFilter = 'all-time') {
  try {
    // Direct fetch with proper headers instead of using Supabase client
    // This approach sometimes works better with GitHub Pages
    const apiUrl = `${supabaseUrl}/rest/v1/quiz_attempts`;
    
    // Build query parameters
    let queryParams = new URLSearchParams({
      select: '*',
      order: 'score.desc,time_taken.asc',
      limit: '50'
    });
    
    // Apply time filtering if needed
    if (timeFilter === 'weekly') {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      queryParams.append('created_at', `gte.${weekAgo.toISOString()}`);
    } else if (timeFilter === 'daily') {
      const dayAgo = new Date();
      dayAgo.setDate(dayAgo.getDate() - 1);
      queryParams.append('created_at', `gte.${dayAgo.toISOString()}`);
    }
    
    const response = await fetch(`${apiUrl}?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Accept-Profile': 'public',
        'Prefer': 'return=representation'
      }
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Update leaderboard table
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = '';
    
    data.forEach((attempt, index) => {
      const row = document.createElement('tr');
      
      // Highlight the current user's attempt
      if (state.attemptId && attempt.id === state.attemptId) {
        row.classList.add('highlight');
      }
      
      // Calculate percentage score
      const scorePercentage = Math.round((attempt.score / attempt.total_questions) * 100);
      
      // Format time taken
      const minutes = Math.floor(attempt.time_taken / 60);
      const seconds = attempt.time_taken % 60;
      const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      
      // Format date
      const date = new Date(attempt.created_at);
      const dateFormatted = date.toLocaleDateString();
      
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${attempt.user_name}</td>
        <td>${scorePercentage}% (${attempt.score}/${attempt.total_questions})</td>
        <td>${timeFormatted}</td>
        <td>${dateFormatted}</td>
      `;
      
      leaderboardBody.appendChild(row);
    });
    
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
      button.classList.remove('active');
      if (button.dataset.filter === timeFilter) {
        button.classList.add('active');
      }
    });
  } catch (error) {
    console.error('Error loading leaderboard:', error);
    showFeedbackToast('Error loading leaderboard. Check console for details.', 'incorrect');
  }
}

// Utility Functions
function showFeedbackToast(message, type = '') {
  const toast = document.getElementById('feedback-toast');
  const messageElement = document.getElementById('feedback-message');
  
  messageElement.textContent = message;
  
  // Add appropriate styling
  toast.className = 'feedback-toast';
  if (type) {
    toast.classList.add(type);
  }
  
  // Show the toast
  toast.classList.add('show');
  
  // Hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Home screen
  document.getElementById('start-quiz-btn').addEventListener('click', () => {
    if (document.getElementById('user-name').value.trim()) {
      showScreen('quiz');
    } else {
      showFeedbackToast('Please enter your name', 'incorrect');
    }
  });
  
  document.getElementById('view-leaderboard-btn').addEventListener('click', () => {
    showScreen('leaderboard');
  });
  
  // Quiz navigation
  document.getElementById('next-question-btn').addEventListener('click', () => {
    moveToNextQuestion();
  });
  
  document.getElementById('prev-question-btn').addEventListener('click', () => {
    moveToPreviousQuestion();
  });
  
  document.getElementById('end-quiz-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to end the quiz? Your progress will be saved.')) {
      showScreen('results');
    }
  });
  
  // Results screen
  document.getElementById('view-insights-btn').addEventListener('click', () => {
    showScreen('insights');
    loadInsights();
  });
  
  document.getElementById('view-leaderboard-from-results-btn').addEventListener('click', () => {
    showScreen('leaderboard');
  });
  
  document.getElementById('retake-quiz-btn').addEventListener('click', () => {
    showScreen('quiz');
  });
  
  // Insights screen
  document.getElementById('back-to-results-btn').addEventListener('click', () => {
    showScreen('results');
  });
  
  // Leaderboard screen
  document.getElementById('back-to-home-btn').addEventListener('click', () => {
    showScreen('home');
  });
  
  // Leaderboard filters
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      loadLeaderboard(button.dataset.filter);
    });
  });
  
  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (screens.quiz.classList.contains('hidden')) {
      return; // Only handle keyboard when quiz is active
    }
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      // Next question
      moveToNextQuestion();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      // Previous question
      moveToPreviousQuestion();
    } else if (e.key >= '1' && e.key <= '4') {
      // Select option by number (1-4)
      const optionIndex = parseInt(e.key) - 1;
      if (optionIndex >= 0 && optionIndex < 4) {
        selectOption(optionIndex);
      }
    }
  });
  
  // Allow pressing Enter on name input to start quiz
  document.getElementById('user-name').addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      showScreen('quiz');
    }
  });
  
  // Initialize to home screen
  showScreen('home');
});