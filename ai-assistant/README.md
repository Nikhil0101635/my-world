# Advanced AI Assistant 🤖

A modern, feature-rich AI assistant built with Next.js, React, TypeScript, and Tailwind CSS.

## ✨ Features

### 🎯 Core Capabilities
- **Intelligent Chat Interface** - Natural conversation with AI
- **Code Generation** - Write, debug, and explain code in multiple languages
- **Data Analysis** - Statistical analysis and insights
- **Creative Writing** - Stories, articles, and content creation
- **Problem Solving** - Math, logic, and reasoning assistance
- **General Knowledge** - Answer questions on any topic

### 🎨 User Interface
- **Beautiful Modern Design** - Clean, responsive interface
- **Dark/Light Theme** - Toggle between themes
- **Syntax Highlighting** - Code blocks with proper formatting
- **Markdown Support** - Rich text rendering
- **Message History** - Persistent conversation tracking
- **Timestamps** - Track when messages were sent

### 🔧 Advanced Features
- **Voice Input** - Speech-to-text capability (browser-dependent)
- **Settings Panel** - Customize AI model, temperature, and max tokens
- **Quick Actions** - Code, Document, and Image buttons
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Real-time Updates** - Instant message delivery
- **Loading Indicators** - Visual feedback during processing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd ai-assistant
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ai-assistant/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # AI chat API endpoint
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Main chat interface
│   └── globals.css               # Global styles
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── next.config.ts                # Next.js config
└── postcss.config.mjs            # PostCSS config
```

## 🎨 Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React Markdown** - Markdown rendering
- **React Syntax Highlighter** - Code syntax highlighting
- **Lucide React** - Beautiful icons

## 🔌 API Integration

The current implementation uses a simulated AI backend. To integrate with real AI services:

### OpenAI Integration
```typescript
// In app/api/chat/route.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [{ role: "user", content: message }],
});
```

### Google Gemini Integration
```typescript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
```

### Anthropic Claude Integration
```typescript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});
```

## ⚙️ Configuration

### Environment Variables
Create a `.env.local` file:

```env
OPENAI_API_KEY=your_openai_api_key
GEMINI_API_KEY=your_gemini_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
```

### Customization

#### Change Theme Colors
Edit `app/page.tsx` and modify the gradient classes:
```tsx
className="bg-gradient-to-br from-blue-500 to-purple-600"
```

#### Adjust AI Parameters
In the settings panel, users can control:
- **Model Selection** - Choose different AI models
- **Temperature** - Control randomness (0.0 - 1.0)
- **Max Tokens** - Limit response length

## 🎯 Usage Examples

### Code Generation
```
User: "Write a Python function to calculate fibonacci numbers"
AI: [Provides complete Python code with explanation]
```

### Data Analysis
```
User: "Explain data analysis capabilities"
AI: [Lists statistical analysis, visualization, and ML features]
```

### Creative Writing
```
User: "Write a short story about AI"
AI: [Generates creative narrative]
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features

1. **New API Endpoint**: Create in `app/api/[name]/route.ts`
2. **New Component**: Add to `app/components/`
3. **New Page**: Create in `app/[route]/page.tsx`

## 🔒 Security Notes

- Never commit API keys to version control
- Use environment variables for sensitive data
- Implement rate limiting for production
- Add authentication for multi-user scenarios
- Sanitize user inputs before processing

## 📱 Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

**Voice Input** requires browsers with Web Speech API support.

## 🐛 Troubleshooting

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Change port in package.json
"dev": "next dev -p 3001"
```

### Styling Issues
```bash
# Rebuild Tailwind
npm run build
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues and questions, please open an issue on the repository.

## 🎉 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- React team for the powerful UI library
- All open-source contributors

---

**Built with ❤️ using Next.js and React**

Start chatting with your AI assistant today! 🚀
