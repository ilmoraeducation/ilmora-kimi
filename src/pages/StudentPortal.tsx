import { useState } from 'react';
import { Link } from 'react-router';
import {
  LayoutDashboard, FileText, Download, User, Bell, ChevronRight,
  Upload, CheckCircle, Clock, ArrowLeft
} from 'lucide-react';

export default function StudentPortal() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const applications = [
    { id: 'APP-2025-001', university: 'Arni University', program: 'MBA', status: 'In Review', progress: 75, date: '2025-01-15' },
    { id: 'APP-2025-002', university: 'RNTU', program: 'M.Ed', status: 'Documents Pending', progress: 40, date: '2025-02-01' },
  ];

  const documents = [
    { name: 'Passport Copy', status: 'verified', type: 'Identity' },
    { name: 'Academic Transcript', status: 'verified', type: 'Academic' },
    { name: 'Experience Certificate', status: 'pending', type: 'Professional' },
    { name: 'IELTS Score', status: 'missing', type: 'Language' },
  ];

  const certificates = [
    { name: 'Enrollment Certificate', university: 'Arni University', date: '2025-01-20', type: 'Enrollment' },
    { name: 'Fee Receipt', university: 'Arni University', date: '2025-01-18', type: 'Payment' },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Active Applications', value: '2', icon: FileText, color: '#00E5FF' },
          { label: 'Documents Verified', value: '2/4', icon: CheckCircle, color: '#C9A84C' },
          { label: 'Certificates', value: '2', icon: Download, color: '#00E5FF' },
          { label: 'Next Deadline', value: '15 Mar', icon: Clock, color: '#C9A84C' },
        ].map((stat) => (
          <div key={stat.label} className="glass p-5">
            <stat.icon size={20} className="mb-3" style={{ color: stat.color }} />
            <p className="text-2xl font-bold text-[#EDEFF5]">{stat.value}</p>
            <p className="text-xs text-[#AAB0C5] mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="glass p-6">
        <h3 className="text-lg font-semibold text-[#EDEFF5] mb-4">Active Applications</h3>
        <div className="space-y-4">
          {applications.map((app) => (
            <div key={app.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5">
              <div>
                <p className="font-medium text-[#EDEFF5]">{app.program} — {app.university}</p>
                <p className="text-xs text-[#AAB0C5]">{app.id} • Applied {app.date}</p>
              </div>
              <div className="text-right">
                <span className={`text-xs px-2 py-1 rounded-full ${app.status === 'In Review' ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'bg-[#C9A84C]/10 text-[#C9A84C]'}`}>
                  {app.status}
                </span>
                <div className="w-24 h-1.5 rounded-full bg-white/10 mt-2 ml-auto overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#C9A84C] to-[#00E5FF]" style={{ width: `${app.progress}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderApplications = () => (
    <div className="glass p-6">
      <h3 className="text-lg font-semibold text-[#EDEFF5] mb-6">Application Tracking</h3>
      <div className="space-y-6">
        {applications.map((app) => (
          <div key={app.id} className="border border-white/10 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-xl font-semibold text-[#EDEFF5]">{app.program}</h4>
                <p className="text-[#AAB0C5]">{app.university}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs bg-[#00E5FF]/10 text-[#00E5FF]">{app.status}</span>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#AAB0C5]">Progress</span>
                <span className="text-[#EDEFF5] font-semibold">{app.progress}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[#C9A84C] to-[#00E5FF]" style={{ width: `${app.progress}%` }} />
              </div>
            </div>
            <div className="flex gap-3">
              {['Application Submitted', 'Documents Verified', 'University Review', 'Offer Letter', 'Enrollment'].map((step, i) => (
                <div key={step} className="flex-1 text-center">
                  <div className={`w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center ${i < Math.floor(app.progress / 20) ? 'bg-[#C9A84C] text-[#0A0F2C]' : 'bg-white/10 text-[#AAB0C5]'}`}>
                    {i < Math.floor(app.progress / 20) ? <CheckCircle size={14} /> : <span className="text-xs">{i + 1}</span>}
                  </div>
                  <span className="text-[10px] text-[#AAB0C5]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="glass p-6">
      <h3 className="text-lg font-semibold text-[#EDEFF5] mb-6">Document Upload</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {documents.map((doc) => (
          <div key={doc.name} className="p-4 rounded-xl bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText size={20} className={doc.status === 'verified' ? 'text-[#C9A84C]' : doc.status === 'pending' ? 'text-[#00E5FF]' : 'text-[#AAB0C5]'} />
              <div>
                <p className="text-sm font-medium text-[#EDEFF5]">{doc.name}</p>
                <p className="text-xs text-[#AAB0C5]">{doc.type}</p>
              </div>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${
              doc.status === 'verified' ? 'bg-[#C9A84C]/10 text-[#C9A84C]' :
              doc.status === 'pending' ? 'bg-[#00E5FF]/10 text-[#00E5FF]' :
              'bg-white/10 text-[#AAB0C5]'
            }`}>
              {doc.status === 'verified' ? 'Verified' : doc.status === 'pending' ? 'Pending' : 'Missing'}
            </span>
          </div>
        ))}
      </div>
      <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-[#00E5FF]/30 transition-colors cursor-pointer">
        <Upload size={32} className="text-[#00E5FF] mx-auto mb-3" />
        <p className="text-sm text-[#EDEFF5] mb-1">Drop files here or click to upload</p>
        <p className="text-xs text-[#AAB0C5]">PDF, JPG, PNG up to 10MB</p>
      </div>
    </div>
  );

  const renderCertificates = () => (
    <div className="glass p-6">
      <h3 className="text-lg font-semibold text-[#EDEFF5] mb-6">Certificate Downloads</h3>
      <div className="space-y-4">
        {certificates.map((cert) => (
          <div key={cert.name} className="flex items-center justify-between p-4 rounded-xl bg-white/5">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-[#C9A84C]/10">
                <Download size={18} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="font-medium text-[#EDEFF5]">{cert.name}</p>
                <p className="text-xs text-[#AAB0C5]">{cert.university} • {cert.date}</p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-lg bg-[#C9A84C]/10 text-[#C9A84C] text-sm hover:bg-[#C9A84C]/20 transition-colors">
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="glass p-6">
      <h3 className="text-lg font-semibold text-[#EDEFF5] mb-6">Profile Management</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-xs text-[#AAB0C5] uppercase tracking-wider mb-2 block">Full Name</label>
          <input type="text" defaultValue="Mohammed Ibrahim" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] focus:border-[#C9A84C] outline-none" />
        </div>
        <div>
          <label className="text-xs text-[#AAB0C5] uppercase tracking-wider mb-2 block">Email</label>
          <input type="email" defaultValue="m.ibrahim@email.com" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] focus:border-[#C9A84C] outline-none" />
        </div>
        <div>
          <label className="text-xs text-[#AAB0C5] uppercase tracking-wider mb-2 block">Phone (UAE)</label>
          <input type="tel" defaultValue="+971 50 123 4567" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] focus:border-[#C9A84C] outline-none" />
        </div>
        <div>
          <label className="text-xs text-[#AAB0C5] uppercase tracking-wider mb-2 block">Phone (India)</label>
          <input type="tel" defaultValue="+91 98765 43210" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] focus:border-[#C9A84C] outline-none" />
        </div>
        <div className="md:col-span-2">
          <label className="text-xs text-[#AAB0C5] uppercase tracking-wider mb-2 block">Address</label>
          <textarea rows={3} defaultValue="Abu Dhabi, UAE" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-[#EDEFF5] focus:border-[#C9A84C] outline-none resize-none" />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="btn-gold text-xs">Save Changes</button>
      </div>
    </div>
  );

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'documents', label: 'Documents', icon: Upload },
    { id: 'certificates', label: 'Certificates', icon: Download },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-[#0A0F2C]">
      <div className="grain-overlay" />
      {/* Header */}
      <header className="glass sticky top-0 z-40 py-4">
        <div className="section-padding flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-[#AAB0C5] hover:text-[#EDEFF5] transition-colors">
              <ArrowLeft size={18} />
              <span className="text-sm">Back</span>
            </Link>
            <img src="/images/ilmora-logo-white.png" alt="ILMORA" className="h-7 w-auto" />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg bg-white/5 text-[#AAB0C5] hover:text-[#EDEFF5]">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#C9A84C] rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#00E5FF] flex items-center justify-center text-xs font-bold text-[#0A0F2C]">
              MI
            </div>
          </div>
        </div>
      </header>

      <div className="section-padding py-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <nav className="glass p-4 space-y-1 sticky top-24">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#C9A84C]/10 text-[#C9A84C]'
                      : 'text-[#AAB0C5] hover:bg-white/5 hover:text-[#EDEFF5]'
                  }`}
                >
                  <tab.icon size={18} />
                  <span>{tab.label}</span>
                  <ChevronRight size={14} className="ml-auto opacity-50" />
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-1">
            <h1 className="headline-lg text-[#EDEFF5] mb-8">Student Portal</h1>
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'applications' && renderApplications()}
            {activeTab === 'documents' && renderDocuments()}
            {activeTab === 'certificates' && renderCertificates()}
            {activeTab === 'profile' && renderProfile()}
          </main>
        </div>
      </div>
    </div>
  );
}
