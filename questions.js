// Quiz questions organized by sections
const quizSections = [
  {
    id: "fundamentals-markets",
    title: "Fundamentals & Markets",
    questions: [
      {
        id: 1,
        text: "Which of the following is NOT a function of a derivatives exchange?",
        options: [
          "Standardizing contracts",
          "Acting as a counterparty to all trades",
          "Providing direct loans to market participants",
          "Implementing rules to maintain market integrity"
        ],
        correctAnswer: 2 // Index of the correct answer (0-based)
      },
      {
        id: 2,
        text: "The OTC derivatives market is characterized by:",
        options: [
          "Exchange-traded standardized contracts",
          "Centralized trading locations",
          "Customized contracts between parties",
          "Elimination of counterparty risk"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        text: "A long position in a forward contract obligates the holder to:",
        options: [
          "Buy the underlying asset at the delivery date",
          "Sell the underlying asset at the delivery date",
          "Pay the premium at contract initiation",
          "Exchange the difference in cash at maturity"
        ],
        correctAnswer: 0
      },
      {
        id: 4,
        text: "Which of the following best describes basis risk?",
        options: [
          "The risk that the spot price will change",
          "The risk that the futures price will change",
          "The risk that the basis will change unexpectedly",
          "The risk of default by the clearinghouse"
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        text: "The initial margin in futures trading is:",
        options: [
          "The maximum amount a trader can lose in one day",
          "A good faith deposit to ensure contract performance",
          "The daily price movement limit",
          "The commission paid to the broker"
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        text: "In a normal market (contango), futures prices are typically:",
        options: [
          "Lower than spot prices",
          "Equal to spot prices",
          "Higher than spot prices",
          "Unrelated to spot prices"
        ],
        correctAnswer: 2
      },
      {
        id: 7,
        text: "Which of the following is an example of a cross hedge?",
        options: [
          "Hedging a position in IBM stock with IBM options",
          "Hedging a position in jet fuel with crude oil futures",
          "Hedging a position in gold with gold futures",
          "Hedging a position in Treasury bonds with Treasury bond futures"
        ],
        correctAnswer: 1
      },
      {
        id: 8,
        text: "The convergence property of futures contracts refers to:",
        options: [
          "The tendency of futures prices to equal spot prices at expiration",
          "The tendency of different futures contracts to have the same price",
          "The tendency of futures prices to follow a mean-reverting process",
          "The tendency of futures prices to converge to their fair value"
        ],
        correctAnswer: 0
      },
      {
        id: 9,
        text: "According to the cost-of-carry model, the theoretical futures price equals:",
        options: [
          "Spot price + Storage cost",
          "Spot price + Storage cost - Convenience yield",
          "Spot price × e^(r×T)",
          "Spot price × e^((r+s-y)×T) where r is risk-free rate, s is storage cost, and y is convenience yield"
        ],
        correctAnswer: 3
      },
      {
        id: 10,
        text: "Which type of trader is most likely to be concerned with the basis?",
        options: [
          "Speculators",
          "Hedgers",
          "Arbitrageurs",
          "Market makers"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "options-basics",
    title: "Options Basics",
    questions: [
      {
        id: 11,
        text: "Which of the following is NOT a listed option position?",
        options: [
          "Long call",
          "Short call",
          "Long butterfly",
          "Long underlying"
        ],
        correctAnswer: 3
      },
      {
        id: 12,
        text: "European options differ from American options in that:",
        options: [
          "European options can only be traded in Europe",
          "European options can only be exercised at expiration",
          "European options have lower premiums",
          "European options are only available on stock indices"
        ],
        correctAnswer: 1
      },
      {
        id: 13,
        text: "The intrinsic value of a call option is:",
        options: [
          "Max(0, S - X)",
          "Max(0, X - S)",
          "S - X",
          "X - S"
        ],
        correctAnswer: 0
      },
      {
        id: 14,
        text: "Time value of an option refers to:",
        options: [
          "The value of the option that exceeds its intrinsic value",
          "The value of the option at expiration",
          "The present value of the strike price",
          "The time remaining until expiration measured in years"
        ],
        correctAnswer: 0
      },
      {
        id: 15,
        text: "When an investor writes a naked call, the potential loss is:",
        options: [
          "Limited to the premium received",
          "Limited to the strike price",
          "Potentially unlimited",
          "Equal to the strike price minus the premium received"
        ],
        correctAnswer: 2
      },
      {
        id: 16,
        text: "Which of the following option positions has unlimited downside risk?",
        options: [
          "Long call",
          "Long put",
          "Short put",
          "Bull spread"
        ],
        correctAnswer: 2
      },
      {
        id: 17,
        text: "The put-call parity relationship states that:",
        options: [
          "c + X·e^(-rT) = p + S",
          "c + p = S + X·e^(-rT)",
          "c - p = S - X·e^(-rT)",
          "c · p = S · X·e^(-rT)"
        ],
        correctAnswer: 2
      },
      {
        id: 18,
        text: "The option premium consists of:",
        options: [
          "Intrinsic value only",
          "Time value only",
          "Intrinsic value plus time value",
          "Intrinsic value minus time value"
        ],
        correctAnswer: 2
      },
      {
        id: 19,
        text: "If a call option is deep in-the-money, its delta is closest to:",
        options: [
          "0",
          "0.5",
          "1",
          "-1"
        ],
        correctAnswer: 2
      },
      {
        id: 20,
        text: "A protective put strategy involves:",
        options: [
          "Buying a stock and selling a put",
          "Selling a stock and buying a put",
          "Buying a stock and buying a put",
          "Selling a stock and selling a put"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "futures-forwards",
    title: "Futures and Forwards",
    questions: [
      {
        id: 31,
        text: "Which of the following statements about forward contracts is FALSE?",
        options: [
          "Forward contracts are traded over-the-counter",
          "Forward contracts are marked-to-market daily",
          "Forward contracts can be customized",
          "Forward contracts typically have more counterparty risk than futures"
        ],
        correctAnswer: 1
      },
      {
        id: 32,
        text: "The relationship between forward and futures prices in a world of deterministic interest rates is:",
        options: [
          "Forward prices are always higher than futures prices",
          "Futures prices are always higher than forward prices",
          "Forward and futures prices are identical",
          "The relationship depends on the correlation between the asset price and interest rates"
        ],
        correctAnswer: 2
      },
      {
        id: 33,
        text: "Which of the following best describes backwardation in futures markets?",
        options: [
          "Futures prices are below spot prices",
          "Futures prices are above spot prices",
          "Futures prices equal spot prices",
          "Futures prices equal forward prices"
        ],
        correctAnswer: 0
      },
      {
        id: 34,
        text: "The main difference between futures and forwards is:",
        options: [
          "Futures have standardized contract terms while forwards are customized",
          "Futures involve physical delivery while forwards are cash settled",
          "Futures are regulated while forwards are unregulated",
          "Futures are traded by speculators while forwards are traded by hedgers"
        ],
        correctAnswer: 0
      },
      {
        id: 35,
        text: "The primary function of daily settlement (marking-to-market) in futures markets is to:",
        options: [
          "Increase market volatility",
          "Reduce counterparty risk",
          "Increase transaction costs",
          "Reduce market liquidity"
        ],
        correctAnswer: 1
      },
      {
        id: 36,
        text: "A perfect hedge using futures contracts requires:",
        options: [
          "The basis to remain constant",
          "The futures price to remain constant",
          "The spot price to remain constant",
          "Interest rates to remain constant"
        ],
        correctAnswer: 0
      },
      {
        id: 37,
        text: "The optimal hedge ratio in a minimum variance hedge is:",
        options: [
          "Always equal to 1.0",
          "The ratio of the standard deviation of spot price changes to futures price changes",
          "The correlation between spot and futures price changes multiplied by the ratio of their standard deviations",
          "The beta of the spot price relative to the futures price"
        ],
        correctAnswer: 2
      },
      {
        id: 38,
        text: "When the convenience yield exceeds the cost of carry, the futures market is likely to be in:",
        options: [
          "Contango",
          "Backwardation",
          "Equilibrium",
          "Arbitrage"
        ],
        correctAnswer: 1
      },
      {
        id: 39,
        text: "A short hedge is appropriate when:",
        options: [
          "A trader already owns an asset and wants to protect against price decreases",
          "A trader plans to purchase an asset in the future and wants to lock in the purchase price",
          "A trader wants to speculate on price increases",
          "A trader wants to increase exposure to an asset"
        ],
        correctAnswer: 0
      },
      {
        id: 40,
        text: "The basis in a futures hedge is defined as:",
        options: [
          "Spot price minus futures price",
          "Futures price minus spot price",
          "Difference between initial and final futures prices",
          "Difference between futures price and fair value"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "stochastic-calculus",
    title: "Stochastic Calculus",
    questions: [
      {
        id: 41,
        text: "A stochastic process X(t) is said to follow a Markov process if:",
        options: [
          "The future value depends only on the current value, not on past values",
          "The future value depends only on past values, not on the current value",
          "The future value depends on both current and past values",
          "The future value is completely independent of current and past values"
        ],
        correctAnswer: 0
      },
      {
        id: 42,
        text: "The standard Wiener process Z(t) has the following property:",
        options: [
          "Z(t) - Z(s) is normally distributed with mean 0 and variance t-s for t > s",
          "Z(t) - Z(s) is normally distributed with mean t-s and variance 0 for t > s",
          "Z(t) - Z(s) is lognormally distributed with mean 0 and variance t-s for t > s",
          "Z(t) - Z(s) is lognormally distributed with mean t-s and variance 0 for t > s"
        ],
        correctAnswer: 0
      },
      {
        id: 43,
        text: "In Itô's lemma, if a variable x follows the process dx = a(x,t)dt + b(x,t)dz, then a function G(x,t) follows the process:",
        options: [
          "dG = (∂G/∂x)dx + (∂G/∂t)dt",
          "dG = [(∂G/∂x)a + (∂G/∂t) + (1/2)(∂²G/∂x²)b²]dt + (∂G/∂x)bdz",
          "dG = [(∂G/∂x)a + (∂G/∂t)]dt + (∂G/∂x)bdz",
          "dG = [(∂G/∂x)a + (∂G/∂t) + (1/2)(∂²G/∂x²)]dt + bdz"
        ],
        correctAnswer: 1
      },
      {
        id: 44,
        text: "The geometric Brownian motion model for stock prices assumes that:",
        options: [
          "Stock prices are normally distributed",
          "Stock returns are normally distributed",
          "The logarithm of stock prices follows arithmetic Brownian motion",
          "Stock prices follow a mean-reverting process"
        ],
        correctAnswer: 2
      },
      {
        id: 45,
        text: "If a stock price follows geometric Brownian motion with drift μ and volatility σ, then the probability distribution of the stock price at time T is:",
        options: [
          "Normal with mean S₀eᵘᵀ and variance S₀²e²ᵘᵀ(e^(σ²T) - 1)",
          "Lognormal with parameters (ln(S₀) + (μ - σ²/2)T, σ√T)",
          "Normal with mean S₀ + μT and variance σ²T",
          "Lognormal with parameters (S₀eᵘᵀ, σ²T)"
        ],
        correctAnswer: 1
      },
      {
        id: 46,
        text: "The risk-neutral valuation principle states that:",
        options: [
          "All investors are risk-neutral",
          "Options can be valued assuming investors are risk-neutral",
          "Option prices are independent of risk preferences",
          "Option prices should be calculated using the actual expected return on the stock"
        ],
        correctAnswer: 1
      },
      {
        id: 47,
        text: "In the risk-neutral world, the expected return on all securities is:",
        options: [
          "The risk-free rate",
          "The market risk premium",
          "The security's beta times the market risk premium",
          "The security's actual expected return"
        ],
        correctAnswer: 0
      },
      {
        id: 48,
        text: "A mean-reverting process is characterized by:",
        options: [
          "A tendency for the variable to move away from a long-run average",
          "A tendency for the variable to move toward a long-run average",
          "Constant expected returns",
          "Constant volatility"
        ],
        correctAnswer: 1
      },
      {
        id: 49,
        text: "Itô's lemma is necessary for option pricing because:",
        options: [
          "Stock prices follow a lognormal distribution",
          "Option payoffs are non-linear functions of stock prices",
          "Interest rates are stochastic",
          "Options can be exercised early"
        ],
        correctAnswer: 1
      },
      {
        id: 50,
        text: "The Ornstein-Uhlenbeck process is commonly used to model:",
        options: [
          "Stock prices",
          "Interest rates",
          "Exchange rates",
          "Option prices"
        ],
        correctAnswer: 1
      },
      {
        id: 51,
        text: "In a risk-neutral world, if S follows dS = μSdt + σSdz, then μ equals:",
        options: [
          "The expected return on the stock",
          "The risk-free rate",
          "The risk-free rate minus the dividend yield",
          "The volatility of the stock"
        ],
        correctAnswer: 1
      },
      {
        id: 52,
        text: "The quadratic variation of a standard Wiener process over an interval [0,T] is:",
        options: [
          "0",
          "T",
          "√T",
          "T²"
        ],
        correctAnswer: 1
      },
      {
        id: 53,
        text: "If a stock pays a continuous dividend yield q and follows geometric Brownian motion, its risk-neutral process is:",
        options: [
          "dS = rSdt + σSdz",
          "dS = (r - q)Sdt + σSdz",
          "dS = (r + q)Sdt + σSdz",
          "dS = qSdt + σSdz"
        ],
        correctAnswer: 1
      },
      {
        id: 54,
        text: "Which of the following processes has the Markov property?",
        options: [
          "Moving average process",
          "Geometric Brownian motion",
          "Autoregressive process of order 2 or higher",
          "Process with path-dependent volatility"
        ],
        correctAnswer: 1
      },
      {
        id: 55,
        text: "The correlation between increments dz₁ and dz₂ of two Wiener processes is expressed as:",
        options: [
          "dz₁dz₂ = ρdt",
          "dz₁dz₂ = ρ",
          "dz₁dz₂ = ρdz₁dz₂",
          "dz₁dz₂ = ρ(dz₁ + dz₂)"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "sdes-pdes-bsm",
    title: "SDEs/PDEs/BSM",
    questions: [
      {
        id: 56,
        text: "The Black-Scholes partial differential equation for an option with price V is:",
        options: [
          "∂V/∂t + (1/2)σ²S²∂²V/∂S² + rS∂V/∂S - rV = 0",
          "∂V/∂t + (1/2)σ²S²∂²V/∂S² + rS∂V/∂S + rV = 0",
          "∂V/∂t + (1/2)σ²S²∂²V/∂S² + μS∂V/∂S - rV = 0",
          "∂V/∂t + σ²S²∂²V/∂S² + rS∂V/∂S - rV = 0"
        ],
        correctAnswer: 0
      },
      {
        id: 57,
        text: "The Black-Scholes formula for a European call option price is:",
        options: [
          "C = SN(d₁) - Xe^(-rT)N(d₂)",
          "C = SN(d₁) + Xe^(-rT)N(d₂)",
          "C = S - Xe^(-rT)",
          "C = S - X"
        ],
        correctAnswer: 0
      },
      {
        id: 58,
        text: "In the Black-Scholes formula, d₁ equals:",
        options: [
          "[ln(S/X) + (r + σ²/2)T]/(σ√T)",
          "[ln(S/X) + (r - σ²/2)T]/(σ√T)",
          "[ln(S/X) + rT]/(σ√T)",
          "[ln(S/X) - rT]/(σ√T)"
        ],
        correctAnswer: 0
      },
      {
        id: 59,
        text: "According to the Black-Scholes model, which of the following does NOT affect European option prices?",
        options: [
          "Expected return on the underlying asset",
          "Volatility of the underlying asset",
          "Risk-free interest rate",
          "Time to expiration"
        ],
        correctAnswer: 0
      },
      {
        id: 60,
        text: "The relationship between European put and call prices with the same strike and expiration is given by:",
        options: [
          "C - P = S - Xe^(-rT)",
          "C + P = S + Xe^(-rT)",
          "C - P = S + Xe^(-rT)",
          "C + P = S - Xe^(-rT)"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "greeks",
    title: "Greeks",
    questions: [
      {
        id: 86,
        text: "Delta of a call option is:",
        options: [
          "The rate of change of the option price with respect to the underlying asset price",
          "The rate of change of the option price with respect to volatility",
          "The rate of change of the option price with respect to time",
          "The rate of change of the option price with respect to interest rates"
        ],
        correctAnswer: 0
      },
      {
        id: 87,
        text: "The delta of a European call option in the Black-Scholes model is:",
        options: [
          "N(d₁)",
          "N(d₂)",
          "-N(-d₁)",
          "-N(-d₂)"
        ],
        correctAnswer: 0
      },
      {
        id: 88,
        text: "The delta of a European put option in the Black-Scholes model is:",
        options: [
          "N(d₁) - 1",
          "N(d₂) - 1",
          "N(-d₁)",
          "N(-d₂)"
        ],
        correctAnswer: 0
      },
      {
        id: 89,
        text: "Gamma measures:",
        options: [
          "The rate of change of delta with respect to the underlying asset price",
          "The rate of change of the option price with respect to volatility",
          "The rate of change of the option price with respect to time",
          "The rate of change of delta with respect to time"
        ],
        correctAnswer: 0
      },
      {
        id: 90,
        text: "The gamma of both European call and put options with the same strike and expiration is:",
        options: [
          "N'(d₁)/(Sσ√T)",
          "N'(d₂)/(Sσ√T)",
          "N'(d₁)/(S²σ√T)",
          "N'(d₂)/(S²σ√T)"
        ],
        correctAnswer: 0
      },
      {
        id: 91,
        text: "Vega measures:",
        options: [
          "The rate of change of the option price with respect to the underlying asset price",
          "The rate of change of the option price with respect to volatility",
          "The rate of change of the option price with respect to time",
          "The rate of change of the option price with respect to interest rates"
        ],
        correctAnswer: 1
      },
      {
        id: 92,
        text: "The vega of both European call and put options with the same strike and expiration is:",
        options: [
          "SN'(d₁)√T",
          "SN'(d₂)√T",
          "XN'(d₁)√T",
          "XN'(d₂)√T"
        ],
        correctAnswer: 0
      },
      {
        id: 93,
        text: "Theta measures:",
        options: [
          "The rate of change of the option price with respect to the underlying asset price",
          "The rate of change of the option price with respect to volatility",
          "The rate of change of the option price with respect to time",
          "The rate of change of the option price with respect to interest rates"
        ],
        correctAnswer: 2
      },
      {
        id: 94,
        text: "For most options, theta is typically:",
        options: [
          "Positive",
          "Negative",
          "Zero",
          "Equal to delta"
        ],
        correctAnswer: 1
      },
      {
        id: 95,
        text: "Rho measures:",
        options: [
          "The rate of change of the option price with respect to the underlying asset price",
          "The rate of change of the option price with respect to volatility",
          "The rate of change of the option price with respect to time",
          "The rate of change of the option price with respect to interest rates"
        ],
        correctAnswer: 3
      }
    ]
  },
  {
    id: "numerical-procedures",
    title: "Numerical Procedures",
    questions: [
      {
        id: 111,
        text: "The binomial tree model for option pricing:",
        options: [
          "Assumes that the stock price follows a discrete multiplicative process",
          "Produces exact option prices regardless of the number of steps",
          "Can only be used for European options",
          "Is less flexible than the Black-Scholes model"
        ],
        correctAnswer: 0
      },
      {
        id: 112,
        text: "In the binomial model, as the number of time steps approaches infinity:",
        options: [
          "The price converges to the exact Black-Scholes price",
          "The price converges to the intrinsic value",
          "The price approaches zero",
          "The price becomes more dependent on the choice of u and d parameters"
        ],
        correctAnswer: 0
      },
      {
        id: 113,
        text: "The risk-neutral probability p in the binomial model is given by:",
        options: [
          "p = (e^(rΔt) - d)/(u - d)",
          "p = (u - e^(rΔt))/(u - d)",
          "p = (e^(rΔt) - u)/(d - u)",
          "p = 0.5"
        ],
        correctAnswer: 0
      },
      {
        id: 114,
        text: "In the Cox-Ross-Rubinstein binomial model, the up and down factors are related to volatility by:",
        options: [
          "u = e^(σ√Δt) and d = e^(-σ√Δt)",
          "u = e^(σΔt) and d = e^(-σΔt)",
          "u = 1 + σ√Δt and d = 1 - σ√Δt",
          "u = 1 + σΔt and d = 1 - σΔt"
        ],
        correctAnswer: 0
      },
      {
        id: 115,
        text: "The control variate technique in Monte Carlo simulation:",
        options: [
          "Increases the number of random paths generated",
          "Reduces the variance of the estimate",
          "Eliminates the need for random number generation",
          "Always produces the exact option price"
        ],
        correctAnswer: 1
      },
      {
        id: 116,
        text: "Antithetic variates in Monte Carlo simulation:",
        options: [
          "Involve using the opposite of each random number generated",
          "Require twice as many random numbers as standard Monte Carlo",
          "Always double the precision of the estimate",
          "Cannot be combined with other variance reduction techniques"
        ],
        correctAnswer: 0
      },
      {
        id: 117,
        text: "The convergence rate of the standard Monte Carlo method is proportional to:",
        options: [
          "1/√N where N is the number of simulations",
          "1/N where N is the number of simulations",
          "log(N) where N is the number of simulations",
          "N where N is the number of simulations"
        ],
        correctAnswer: 0
      },
      {
        id: 118,
        text: "The finite difference method for solving the Black-Scholes PDE involves:",
        options: [
          "Approximating derivatives with differences",
          "Simulating stock price paths",
          "Building a binomial tree",
          "Implementing a closed-form solution"
        ],
        correctAnswer: 0
      },
      {
        id: 119,
        text: "The explicit finite difference method:",
        options: [
          "Is unconditionally stable",
          "Requires solving a system of linear equations at each time step",
          "Expresses option values at one time level explicitly in terms of known option values at the next time level",
          "Is only suitable for European options"
        ],
        correctAnswer: 2
      },
      {
        id: 120,
        text: "The implicit finite difference method:",
        options: [
          "Is unconditionally stable",
          "Does not require solving a system of linear equations",
          "Is computationally less intensive than the explicit method",
          "Can only be used for simple boundary conditions"
        ],
        correctAnswer: 0
      }
    ]
  }
];

// Utility function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to get a randomized set of questions for the quiz
function getRandomizedQuestions(totalQuestions = 20) {
  // First, shuffle the sections
  const shuffledSections = shuffleArray([...quizSections]);
  
  // Determine how many questions to select from each section
  const questionsPerSection = Math.max(1, Math.floor(totalQuestions / shuffledSections.length));
  
  // Select questions from each section and combine them
  let selectedQuestions = [];
  
  for (const section of shuffledSections) {
    // Shuffle the questions within this section
    const shuffledQuestions = shuffleArray([...section.questions]);
    
    // Take a subset of questions from this section
    const questionsFromSection = shuffledQuestions.slice(0, questionsPerSection);
    
    // Add section info to each question for tracking
    questionsFromSection.forEach(q => {
      q.sectionId = section.id;
      q.sectionTitle = section.title;
    });
    
    // Add to our selected questions
    selectedQuestions = selectedQuestions.concat(questionsFromSection);
  }
  
  // If we don't have enough questions yet, add more randomly
  if (selectedQuestions.length < totalQuestions) {
    // Flatten all questions from all sections
    const allQuestions = shuffledSections.flatMap(section => {
      return section.questions.map(q => ({
        ...q,
        sectionId: section.id,
        sectionTitle: section.title
      }));
    });
    
    // Filter out questions we've already selected
    const remainingQuestions = allQuestions.filter(q => 
      !selectedQuestions.some(sq => sq.id === q.id)
    );
    
    // Shuffle and take what we need
    const additionalQuestions = shuffleArray(remainingQuestions)
      .slice(0, totalQuestions - selectedQuestions.length);
    
    // Add to our selected questions
    selectedQuestions = selectedQuestions.concat(additionalQuestions);
  }
  
  // Shuffle the final set of questions
  return shuffleArray(selectedQuestions).slice(0, totalQuestions);
}