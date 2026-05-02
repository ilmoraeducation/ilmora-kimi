import { useState } from 'react';
import { Link } from 'react-router';
import {
  LayoutDashboard, Users, FileText, BookOpen, BarChart3, Receipt, ArrowLeft,
  ChevronRight, Search, Plus, Download, Filter, TrendingUp, TrendingDown
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const students = [
    { id: 'STU-001', name: 'Ahmed Khan', email: 'ahmed@email.com', program: 'MBA', university: 'Arni', status: 'Active', intake: 'Jan 2025' },
    { id: 'STU-002', name: 'Fatima Ali', email: 'fatima@email.com', program: 'M.Ed', university: 'RNTU', status: 'Pending', intake: 'Mar 2025' },
    { id: 'STU-003', name: 'Ravi Kumar', email: 'ravi@email.com', program: 'MA', university: 'RGU', status: 'Active', intake: 'Jan 2025' },
    { id: 'STU-004', name: 'Priya Sharma', email: 'priya@email.com', program: 'MSW', university: 'Arni', status: 'Graduated', intake: 'Jul 2024' },
  ];

  const leads = [
    { id: 'LEAD-001', name: 'Omar Hassan', source: 'WhatsApp', status: 'Hot', program: 'MBA', date: '2025-04-28' },
    { id: 'LEAD-002', name: 'Aisha Patel', source: 'Instagram', status: 'Warm', program: 'M.Ed', date: '2025-04-27' },
    { id: 'LEAD-003', name: 'Vikram Singh', source: 'Referral', status: 'Cold', program: 'PhD', date: '2025-04-25' },
  ];

  const courses = [
    { id: 'CRS-001', name: 'MBA (General)', university: 'Arni University', duration: '2 Years', fee: '₹1,50,000', intake: 'Jan, Jul' },
    { id: 'CRS-002', name: 'M.Ed', university: 'RNTU', duration: '2 Years', fee: '₹1,20,000', intake: 'Mar, Sep' },
    { id: 'CRS-003', name: 'MA English', university: 'RGU', duration: '2 Years', fee: '₹90,000', intake: 'Jan, Jul' },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Total Students', value: '2,480', change: '+12%', up: true, icon: Users },
          { label: 'Active Leads', value: '156', change: '+8%', up: true, icon: FileText },
          { label: 'Revenue (Month)', value: 'AED 450K', change: '+23%', up: true, icon: Receipt },
          { label: 'Pending Docs', value: '34', change: '-5%', up: false, icon: FileText },
        ].map((stat) => (
          <div key={stat.label} className="glass p-5">
            <div className="flex items-center justify-between mb-3">
              <stat.icon size={20} className="text-[#C9A84C]" />
              <span className={`text-xs flex items-center gap-1 ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
                {stat.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-[#EDEFF5]">{stat.value}</p>
            <p className="text-xs text-[#AAB0C5] mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass p-6">
          <h3 className="text-lg font-semibold text-[#EDEFF5] mb-4">Recent Students</h3>
          <div className="space-y-3">
            {students.slice(0, 4).map((s) => (
              <div key={s.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <div>
                  <p className="text-sm font-medium text-[#EDEFF5]">{s.name}</p>
                  <p className="text-xs text-[#AAB0C5]">{s.program} • {s.university}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  s.status === 'Active' ? 'bg-green-500/10 text-green-400' :
                  s.status === 'Pending' ? 'bg-[#C9A84C]/10 text-[#C9A84C]' :
                  'bg-[#00E5FF]/10 text-[#00E5FF]'
                }`}>{s.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-6">
          <h3 className="text-lg font-semibold text-[#EDEFF5] mb-4">Lead Sources</h3>
          <div className="space-y-4">
            {[
              { source: 'WhatsApp', count: 68, color: '#00E5FF' },
              { source: 'Instagram', count: 45, color: '#C9A84C' },
              { source: 'Referral', count: 28, color: '#EDEFF5' },
              { source: 'Website', count: 15, color: '#AAB0C5' },
            ].map((item) => (
              <div key={item.source}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#EDEFF5]">{item.source}</span>
                  <span className="text-[#AAB0C5]">{item.count}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${(item.count / 68) * 100}%`, background: item.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTable = (data: any[], columns: string[], renderRow: (item: any) => React.ReactNode) => (
    <div className="glass p-6 overflow-x-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#AAB0C5]" />
          <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-[#EDEFF5] outline-none focus:border-[#C9A84C]" />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 text-sm text-[#AAB0C5] hover:bg-white/10">
            <Filter size={14} /> Filter
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#C9A84C]/10 text-sm text-[#C9A84C] hover:bg-[#C9A84C]/20">
            <Plus size={14} /> Add
          </button>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            {columns.map((col) => (
              <th key={col} className="text-left text-xs text-[#AAB0C5] uppercase tracking-wider py-3 px-4">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
              {renderRow(item)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderStudents = () => renderTable(
    students, ['ID', 'Name', 'Program', 'University', 'Status', 'Intake'],
    (s) => (
      <>
        <td className="py-3 px-4 text-sm text-[#AAB0C5]">{s.id}</td>
        <td className="py-3 px-4 text-sm text-[#EDEFF5]">{s.name}</td>
        <td className="py-3 px-4 text-sm text-[#AAB0C5]">{s.program}</td>
        <td className="py-3 px-4 text-sm text-[#AAB0C5]">{s.university}</td>
        <td className="py-3 px-4">
          <span className={`text-xs px-2 py-1 rounded-full ${
            s.status === 'Active' ? 'bg-green-500/10 text-green-400' :
            s.status === 'Pending' ? 'bg-[#C9A84C]/10 text-[#C9A84C]' :
            'bg-[#00E5FF]/10 text-[#00E5FF]'
          }`}>{s.status}</span>
        </td>
        <td className="py-3 px-4 text-sm text-[#AAB0C5]">{s.intake}</td>
      </>
    )
  );

  const renderLeads = () => renderTable(
    leads, ['ID', 'Name', 'Source', 'Program', 'Status', 'Date'],
    (l) => (
      <>
        <td className="py-3 px-4 text-sm text-[#AAB0C5]">{l.id}</td>
        <td className="py-3 px-4 text-sm text-[#EDEFF5]">{l.name}</td>
        <td className="py-3 px-4 text-sm text-[#AAB0C5]">{l.source}</td>
        <td className="py-3 px-4 text-sm text-[#AAB0C5]">{l.program}</td>
        <td className="py-3 px-4">
          <span className={`text-xs px-2 py-1 rounded-full ${
            l.status === 'Hot' ? 'bg-red-500/10 text-red-400' :
            l.status === 'Warm' ? 'bg-[#C9A84C]/10 text-[#C9A84C]' :
            'bg-[#00E5FF]/10 text-[#00E5FF]'
          }`}>{l.status}</span>
        </td>
        <td className="py-3 px-4 text-sm text-[#AAB0C5]">{l.date}</td>
      </>
    )
  );

  const renderCourses = () => renderTable(
    courses, ['ID', 'Name', 'University', 'Duration', 'Fee', 'Intake'],
    (c) => (
      <>
        <td className="py-3 px-4 text-sm text-[#AAB0C5]">{c.id}</td>
        <td className="py-3 px-4 text-sm text-[#EDEFF5]">{c.name}</td>
        <td className="py-3 px-4 text-sm text-[#AAB0C5]">{c.university}</td>
        <td className="py-3 px-4 text-sm text-[#AAB0C5]">{c.duration}</td>
        <td className="py-3 px-4 text-sm text-[#C9A84C]">{c.fee}</td>
        <td className="py-3 px-4 text-sm text-[#AAB0C5]">{c.intake}</td>
      </>
    )
  );

  const renderInvoice = () => {
    const [student, setStudent] = useState('');
    const [amount, setAmount] = useState('');
    const [paid, setPaid] = useState('');

    const generateInvoice = () => {
      const total = parseFloat(amount) || 0;
      const paidAmt = parseFloat(paid) || 0;
      const remaining = total - paidAmt;
      const date = new Date().toLocaleDateString();

      return (
        <div className="glass p-6 mt-6 border border-[#C9A84C]/20">
          <div className="flex items-center justify-between mb-6">
            <img src="/images/ilmora-logo-white.png" alt="ILMORA" className="h-8 w-auto" />
            <div className="text-right">
              <p className="text-sm font-bold text-[#EDEFF5]">INVOICE</p>
              <p className="text-xs text-[#AAB0C5]">{date}</p>
            </div>
          </div>
          <div className="space-y-2 mb-6">
            <p className="text-sm text-[#EDEFF5]"><strong>Student:</strong> {student || '—'}</p>
            <p className="text-sm text-[#AAB0C5]"><strong>Total Amount:</strong> AED {amount || '0'}</p>
            <p className="text-sm text-[#C9A84C]"><strong>Paid:</strong> AED {paid || '0'}</p>
            <p className="text-sm text-[#00E5FF]"><strong>Remaining:</strong> AED {remaining}</p>
          </div>
          <button className="btn-gold text-xs flex items-center gap-2">
            <Download size={14} /> Download PDF
          </button>
        </div>
      );
    };

    return (
      <div className="space-y-6">
        <div className="glass p-6">
          <h3 className="text-lg font-semibold text-[#EDEFF5] mb-6">Invoice Generator</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-[#AAB0C5] uppercase mb-2 block">Student Name</label>
              <input type="text" value={student} onChange={(e) => setStudent(e.target.value)} className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] outline-none focus:border-[#C9A84C]" />
            </div>
            <div>
              <label className="text-xs text-[#AAB0C5] uppercase mb-2 block">Total Amount (AED)</label>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] outline-none focus:border-[#C9A84C]" />
            </div>
            <div>
              <label className="text-xs text-[#AAB0C5] uppercase mb-2 block">Paid Amount (AED)</label>
              <input type="number" value={paid} onChange={(e) => setPaid(e.target.value)} className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] outline-none focus:border-[#C9A84C]" />
            </div>
            <div>
              <label className="text-xs text-[#AAB0C5] uppercase mb-2 block">Date</label>
              <input type="date" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] outline-none focus:border-[#C9A84C]" />
            </div>
          </div>
          <button className="btn-gold text-xs" onClick={() => {}}>Generate Invoice</button>
          {generateInvoice()}
        </div>
      </div>
    );
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'leads', label: 'Leads', icon: FileText },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'invoice', label: 'Invoices', icon: Receipt },
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
            <span className="text-sm text-[#AAB0C5] hidden sm:inline">Admin Panel</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center text-xs font-bold text-[#0A0F2C]">
            AD
          </div>
        </div>
      </header>

      <div className="section-padding py-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 shrink-0">
            <nav className="glass p-4 space-y-1 sticky top-24">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                    activeTab === tab.id ? 'bg-[#C9A84C]/10 text-[#C9A84C]' : 'text-[#AAB0C5] hover:bg-white/5 hover:text-[#EDEFF5]'
                  }`}
                >
                  <tab.icon size={18} />
                  <span>{tab.label}</span>
                  <ChevronRight size={14} className="ml-auto opacity-50" />
                </button>
              ))}
            </nav>
          </aside>

          <main className="flex-1">
            <h1 className="headline-lg text-[#EDEFF5] mb-8">Admin Dashboard</h1>
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'students' && renderStudents()}
            {activeTab === 'leads' && renderLeads()}
            {activeTab === 'courses' && renderCourses()}
            {activeTab === 'analytics' && (
              <div className="glass p-6 text-center">
                <BarChart3 size={48} className="text-[#C9A84C] mx-auto mb-4" />
                <p className="text-[#EDEFF5]">Analytics Dashboard</p>
                <p className="text-sm text-[#AAB0C5] mt-2">Detailed analytics coming soon with charts and reports.</p>
              </div>
            )}
            {activeTab === 'invoice' && renderInvoice()}
          </main>
        </div>
      </div>
    </div>
  );
}
