import { useState, useRef } from 'react';
import { Link } from 'react-router';
import {
  ArrowLeft, FileText, Image, Receipt, MessageSquare, Download, Send,
  Wand2, Sparkles, Loader2
} from 'lucide-react';

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState('brochure');

  // Brochure Generator
  const BrochureGenerator = () => {
    const [name, setName] = useState('');
    const [program, setProgram] = useState('MBA');
    const brochureRef = useRef<HTMLDivElement>(null);

    const handleDownload = () => {
      alert('Brochure download would be implemented with html2canvas + jsPDF');
    };

    return (
      <div className="space-y-6">
        <div className="glass p-6">
          <h3 className="text-lg font-semibold text-[#EDEFF5] mb-4">PDF Brochure Generator</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-xs text-[#AAB0C5] uppercase mb-2 block">Student Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] outline-none focus:border-[#C9A84C]" />
            </div>
            <div>
              <label className="text-xs text-[#AAB0C5] uppercase mb-2 block">Program</label>
              <select value={program} onChange={(e) => setProgram(e.target.value)} className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] outline-none focus:border-[#C9A84C]">
                {['MBA', 'MA', 'MSW', 'B.Ed', 'M.Ed', 'BA', 'M.Com', 'PhD'].map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>
          <button onClick={handleDownload} className="btn-gold text-xs flex items-center gap-2">
            <Download size={14} /> Generate & Download
          </button>
        </div>

        <div ref={brochureRef} className="glass p-8 max-w-2xl mx-auto" style={{ background: 'linear-gradient(135deg, #0A0F2C, #121A3A)' }}>
          <div className="text-center mb-8">
            <img src="/images/ilmora-logo-white.png" alt="ILMORA" className="h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#C9A84C]" style={{ fontFamily: 'Space Grotesk' }}>ILMORA EDUCATION</h2>
            <p className="text-sm text-[#AAB0C5]">Your Gateway to Higher Education</p>
          </div>
          <div className="border-t border-white/10 pt-6">
            <h3 className="text-xl font-semibold text-[#EDEFF5] mb-4">Program Brochure</h3>
            <div className="space-y-3">
              <p className="text-sm text-[#AAB0C5]"><strong className="text-[#EDEFF5]">Program:</strong> {program || '—'}</p>
              <p className="text-sm text-[#AAB0C5]"><strong className="text-[#EDEFF5]">Student:</strong> {name || '—'}</p>
              <p className="text-sm text-[#AAB0C5]"><strong className="text-[#EDEFF5]">Duration:</strong> 2 Years</p>
              <p className="text-sm text-[#AAB0C5]"><strong className="text-[#EDEFF5]">Mode:</strong> Online / Hybrid</p>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-white/5">
              <p className="text-sm text-[#AAB0C5]">For more information, contact us:</p>
              <p className="text-sm text-[#C9A84C] mt-1">+971 52 968 2123</p>
              <p className="text-sm text-[#00E5FF]">Ilmoraeducationgroup@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Poster Generator
  const PosterGenerator = () => {
    const [template, setTemplate] = useState(0);
    const [title, setTitle] = useState('ADMISSIONS OPEN');
    const [subtitle, setSubtitle] = useState('MBA, MA, MSW, B.Ed, M.Ed');
    const templates = [
      { bg: '/assets/poster-bg-1.jpg', accent: '#00E5FF' },
      { bg: '/assets/poster-bg-2.jpg', accent: '#C9A84C' },
      { bg: '/assets/poster-bg-3.jpg', accent: '#C9A84C' },
      { bg: '/assets/poster-bg-4.jpg', accent: '#00E5FF' },
    ];

    return (
      <div className="space-y-6">
        <div className="glass p-6">
          <h3 className="text-lg font-semibold text-[#EDEFF5] mb-4">Poster Generator</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-xs text-[#AAB0C5] uppercase mb-2 block">Headline</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] outline-none focus:border-[#C9A84C]" />
            </div>
            <div>
              <label className="text-xs text-[#AAB0C5] uppercase mb-2 block">Subtitle</label>
              <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] outline-none focus:border-[#C9A84C]" />
            </div>
          </div>

          <p className="text-xs text-[#AAB0C5] uppercase mb-3">Select Template</p>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {templates.map((t, i) => (
              <button
                key={i}
                onClick={() => setTemplate(i)}
                className={`relative aspect-[3/4] rounded-xl overflow-hidden border-2 transition-all ${template === i ? 'border-[#C9A84C]' : 'border-transparent'}`}
              >
                <img src={t.bg} alt={`Template ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <button className="btn-gold text-xs flex items-center gap-2">
            <Download size={14} /> Download Poster (PNG)
          </button>
        </div>

        <div className="relative aspect-[3/4] max-w-md mx-auto rounded-xl overflow-hidden">
          <img src={templates[template].bg} alt="Poster template" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center" style={{ background: 'rgba(10,15,44,0.6)' }}>
            <img src="/images/ilmora-logo-white.png" alt="ILMORA" className="h-10 mb-6" />
            <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
              {title}
            </h2>
            <p className="text-lg text-white/80 mb-6" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}>
              {subtitle}
            </p>
            <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: templates[template].accent, color: '#0A0F2C' }}>
              Apply Now
            </div>
            <div className="mt-6 text-xs text-white/60">
              <p>+971 52 968 2123</p>
              <p>Ilmoraeducationgroup@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Invoice Generator
  const InvoiceGenerator = () => {
    const [student, setStudent] = useState('');
    const [total, setTotal] = useState('15000');
    const [paid, setPaid] = useState('5000');
    const remaining = (parseFloat(total) || 0) - (parseFloat(paid) || 0);

    return (
      <div className="space-y-6">
        <div className="glass p-6">
          <h3 className="text-lg font-semibold text-[#EDEFF5] mb-4">Invoice Generator</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-xs text-[#AAB0C5] uppercase mb-2 block">Student Name</label>
              <input type="text" value={student} onChange={(e) => setStudent(e.target.value)} className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] outline-none focus:border-[#C9A84C]" />
            </div>
            <div>
              <label className="text-xs text-[#AAB0C5] uppercase mb-2 block">Total (AED)</label>
              <input type="number" value={total} onChange={(e) => setTotal(e.target.value)} className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] outline-none focus:border-[#C9A84C]" />
            </div>
            <div>
              <label className="text-xs text-[#AAB0C5] uppercase mb-2 block">Paid (AED)</label>
              <input type="number" value={paid} onChange={(e) => setPaid(e.target.value)} className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] outline-none focus:border-[#C9A84C]" />
            </div>
            <div>
              <label className="text-xs text-[#AAB0C5] uppercase mb-2 block">Date</label>
              <input type="date" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] outline-none focus:border-[#C9A84C]" />
            </div>
          </div>
          <button className="btn-gold text-xs flex items-center gap-2">
            <Download size={14} /> Generate Invoice
          </button>
        </div>

        <div className="glass p-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <img src="/images/ilmora-logo-white.png" alt="ILMORA" className="h-10" />
            <div className="text-right">
              <p className="text-lg font-bold text-[#EDEFF5]">INVOICE</p>
              <p className="text-xs text-[#AAB0C5]">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 mb-6">
            <p className="text-sm text-[#EDEFF5] mb-1"><strong>Bill To:</strong> {student || '—'}</p>
            <p className="text-sm text-[#AAB0C5]">ILMORA Education Group</p>
          </div>
          <table className="w-full mb-6">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-xs text-[#AAB0C5] uppercase py-2">Description</th>
                <th className="text-right text-xs text-[#AAB0C5] uppercase py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-3 text-sm text-[#EDEFF5]">University Admission Fee</td>
                <td className="py-3 text-sm text-[#EDEFF5] text-right">AED {total}</td>
              </tr>
            </tbody>
          </table>
          <div className="space-y-2 text-right">
            <p className="text-sm text-[#AAB0C5]">Total: <span className="text-[#EDEFF5] font-semibold">AED {total}</span></p>
            <p className="text-sm text-[#C9A84C]">Paid: <span className="font-semibold">AED {paid}</span></p>
            <p className="text-sm text-[#00E5FF]">Remaining: <span className="font-semibold">AED {remaining}</span></p>
          </div>
        </div>
      </div>
    );
  };

  // AI Chatbot
  const AIChatbot = () => {
    const [messages, setMessages] = useState([
      { role: 'assistant', text: 'Hello! I am ILMORA AI Assistant. How can I help you today with admissions, programs, or documentation?' },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = () => {
      if (!input.trim()) return;
      const userMsg = input.trim();
      setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
      setInput('');
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        const responses: Record<string, string> = {
          mba: 'Our MBA program is offered through Arni University and RNTU. Duration is 2 years, online/hybrid mode. Fees start from AED 15,000. Would you like to apply?',
          admission: 'To start your admission, we need your academic documents, passport copy, and experience certificate. I can connect you with an advisor on WhatsApp!',
          uae: 'We provide complete UAE equivalency support through the Ministry of Education. This includes document attestation, translation, and submission.',
          fee: 'Program fees range from AED 12,000 to AED 25,000 depending on the university and program. We offer installment plans.',
          contact: 'You can reach us at +971 52 968 2123 or WhatsApp. Our email is Ilmoraeducationgroup@gmail.com',
        };
        const lower = userMsg.toLowerCase();
        const response = Object.keys(responses).find((k) => lower.includes(k));
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', text: response ? responses[response] : 'I can help you with program information, admissions process, document requirements, and fee details. What would you like to know?' },
        ]);
      }, 1500);
    };

    return (
      <div className="space-y-6">
        <div className="glass p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-[#00E5FF]/10">
              <Sparkles size={20} className="text-[#00E5FF]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#EDEFF5]">ILMORA AI Assistant</h3>
              <p className="text-xs text-[#AAB0C5]">Powered by advanced AI for instant support</p>
            </div>
          </div>

          <div className="space-y-4 mb-4 max-h-96 overflow-y-auto scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-xl ${
                  msg.role === 'user'
                    ? 'bg-[#C9A84C]/10 text-[#EDEFF5]'
                    : 'bg-white/5 text-[#EDEFF5]'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-2">
                    <Loader2 size={16} className="text-[#00E5FF] animate-spin" />
                    <span className="text-sm text-[#AAB0C5]">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about programs, fees, admissions..."
              className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] outline-none focus:border-[#C9A84C] text-sm"
            />
            <button onClick={handleSend} className="p-3 rounded-xl bg-[#C9A84C] text-[#0A0F2C] hover:bg-[#B8983E] transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {['MBA fees', 'UAE equivalency', 'Document list', 'Contact advisor'].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => { setInput(suggestion); }}
              className="px-3 py-2 rounded-full text-xs bg-white/5 border border-white/10 text-[#AAB0C5] hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const tools = [
    { id: 'brochure', label: 'Brochure', icon: FileText },
    { id: 'poster', label: 'Poster', icon: Image },
    { id: 'invoice', label: 'Invoice', icon: Receipt },
    { id: 'chatbot', label: 'AI Chat', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-[#0A0F2C]">
      <div className="grain-overlay" />
      <header className="glass sticky top-0 z-40 py-4">
        <div className="section-padding flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-[#AAB0C5] hover:text-[#EDEFF5]">
              <ArrowLeft size={18} />
              <span className="text-sm">Back</span>
            </Link>
            <img src="/images/ilmora-logo-white.png" alt="ILMORA" className="h-7 w-auto" />
          </div>
          <div className="flex items-center gap-2">
            <Wand2 size={18} className="text-[#C9A84C]" />
            <span className="text-sm text-[#AAB0C5]">Tools</span>
          </div>
        </div>
      </header>

      <div className="section-padding py-8 max-w-5xl mx-auto">
        <h1 className="headline-lg text-[#EDEFF5] mb-2">ILMORA Tools</h1>
        <p className="text-[#AAB0C5] mb-8">Generate brochures, posters, invoices, and get AI assistance.</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm transition-all ${
                activeTool === tool.id
                  ? 'bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20'
                  : 'bg-white/5 text-[#AAB0C5] border border-white/10 hover:border-white/20'
              }`}
            >
              <tool.icon size={16} />
              {tool.label}
            </button>
          ))}
        </div>

        {activeTool === 'brochure' && <BrochureGenerator />}
        {activeTool === 'poster' && <PosterGenerator />}
        {activeTool === 'invoice' && <InvoiceGenerator />}
        {activeTool === 'chatbot' && <AIChatbot />}
      </div>
    </div>
  );
}
