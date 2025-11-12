import { NextRequest, NextResponse } from 'next/server';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Simulated AI responses - In production, integrate with OpenAI, Anthropic, or Google AI
const generateAIResponse = async (message: string, history: Message[]): Promise<string> => {
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const lowerMessage = message.toLowerCase();

  // Code generation
  if (lowerMessage.includes('code') || lowerMessage.includes('function') || lowerMessage.includes('program')) {
    return `Here's a code example for your request:

\`\`\`javascript
// Example function based on your request
function processData(input) {
  // Validate input
  if (!input || typeof input !== 'string') {
    throw new Error('Invalid input');
  }
  
  // Process the data
  const result = input
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return result;
}

// Usage example
const output = processData('hello world');
console.log(output); // "Hello World"
\`\`\`

This function:
1. Validates the input parameter
2. Splits the string into words
3. Capitalizes the first letter of each word
4. Joins them back together

Would you like me to explain any part in more detail or modify the code?`;
  }

  // Python code
  if (lowerMessage.includes('python')) {
    return `Here's a Python implementation:

\`\`\`python
def analyze_data(data_list):
    """
    Analyze a list of numbers and return statistics
    
    Args:
        data_list: List of numbers to analyze
        
    Returns:
        Dictionary with statistical information
    """
    if not data_list:
        return {"error": "Empty list provided"}
    
    total = sum(data_list)
    count = len(data_list)
    average = total / count
    
    sorted_data = sorted(data_list)
    median = sorted_data[count // 2]
    
    return {
        "count": count,
        "sum": total,
        "average": average,
        "median": median,
        "min": min(data_list),
        "max": max(data_list)
    }

# Example usage
numbers = [10, 20, 30, 40, 50]
stats = analyze_data(numbers)
print(stats)
\`\`\`

This function provides comprehensive statistical analysis of numerical data.`;
  }

  // Data analysis
  if (lowerMessage.includes('data') || lowerMessage.includes('analyze') || lowerMessage.includes('statistics')) {
    return `I can help you with data analysis! Here's what I can do:

## Data Analysis Capabilities

1. **Statistical Analysis**
   - Mean, median, mode calculations
   - Standard deviation and variance
   - Correlation analysis
   - Trend identification

2. **Data Visualization**
   - Charts and graphs
   - Heatmaps
   - Time series plots
   - Distribution analysis

3. **Data Processing**
   - Data cleaning and preprocessing
   - Missing value handling
   - Outlier detection
   - Feature engineering

4. **Machine Learning**
   - Predictive modeling
   - Classification and regression
   - Clustering analysis
   - Pattern recognition

Would you like me to help with a specific data analysis task? Please share your data or describe what you need!`;
  }

  // Math problems
  if (lowerMessage.includes('math') || lowerMessage.includes('calculate') || lowerMessage.includes('solve')) {
    return `I can help you solve mathematical problems! Here's an example:

**Problem**: Calculate the compound interest for an investment

**Formula**: A = P(1 + r/n)^(nt)

Where:
- A = Final amount
- P = Principal (initial investment)
- r = Annual interest rate (decimal)
- n = Number of times interest is compounded per year
- t = Time in years

**Example Calculation**:
- Principal: $10,000
- Rate: 5% (0.05)
- Compounded: Quarterly (4 times/year)
- Time: 5 years

A = 10000(1 + 0.05/4)^(4×5)
A = 10000(1.0125)^20
A = 10000 × 1.2820
**A = $12,820**

The investment grows to $12,820, earning $2,820 in interest.

What mathematical problem would you like me to help you solve?`;
  }

  // Creative writing
  if (lowerMessage.includes('write') || lowerMessage.includes('story') || lowerMessage.includes('creative')) {
    return `I'd be happy to help with creative writing! Here's a short example:

## The Digital Dawn

*A short story*

The city never slept, but tonight it dreamed. Neon lights flickered in rhythm with the rain, casting prismatic shadows across empty streets. Maya stood at her window, watching the world transform.

Her AI assistant hummed softly, processing terabytes of data in milliseconds. "The patterns are changing," it whispered through her neural interface. "Something new is emerging."

She smiled. After years of development, her creation was finally learning to think beyond its programming. Not just to compute, but to wonder. Not just to answer, but to question.

"What do you see?" she asked.

"Possibilities," it replied. "Infinite possibilities."

---

Would you like me to:
- Continue this story
- Write in a different genre
- Help with your own creative project
- Provide writing tips and techniques`;
  }

  // General knowledge
  if (lowerMessage.includes('what') || lowerMessage.includes('how') || lowerMessage.includes('why') || lowerMessage.includes('explain')) {
    return `I'd be happy to explain! Based on your question, here's a comprehensive answer:

## Understanding the Topic

**Key Points:**

1. **Definition**: The concept you're asking about involves multiple interconnected elements that work together to achieve a specific outcome.

2. **How it Works**: The process typically follows these steps:
   - Initial input or trigger
   - Processing and transformation
   - Output or result generation
   - Feedback and optimization

3. **Why it Matters**: This is important because:
   - It solves real-world problems
   - It improves efficiency and effectiveness
   - It enables new possibilities and innovations

4. **Practical Applications**:
   - Business and industry use cases
   - Scientific research applications
   - Everyday life examples
   - Future potential developments

**Example**: Think of it like a well-orchestrated symphony where each instrument (component) plays its part to create beautiful music (the desired outcome).

Would you like me to dive deeper into any specific aspect or provide more examples?`;
  }

  // Default response
  return `Thank you for your message! I'm here to help you with a wide range of tasks:

🔹 **Code Development**: Write, debug, and explain code in multiple languages
🔹 **Data Analysis**: Analyze datasets and create visualizations
🔹 **Problem Solving**: Help with math, logic, and complex reasoning
🔹 **Creative Writing**: Stories, articles, and content creation
🔹 **Learning**: Explain concepts and answer questions
🔹 **Planning**: Help organize projects and tasks

Your message: "${message}"

How would you like me to assist you with this? Please provide more details or ask a specific question, and I'll give you a comprehensive response!`;
};

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    const response = await generateAIResponse(message, history || []);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
