import logo1 from '../assets/OIP.jpeg';
import logo2 from '../assets/oci_ai_1.png';
import logo3 from '../assets/ibm_cert.png';
import logo4 from '../assets/intro_CISCO.png';

const Study = () => {
  return (
    <section className="py-12 bg-[#0b0c1a] text-white text-center">
      <h2 className="mb-6 text-4xl font-bold">Education</h2>
      <p className="mb-12 text-lg">
        My education has been a journey of self-discovery and growth. My educational details are as follows.
      </p>
      <div className="flex flex-wrap items-stretch justify-center gap-6 p-2.5">
        {/* Card 1: UTP */}
        <a href="https://www.utp.edu.pe/web/" className="w-full max-w-lg p-6 rounded-lg border border-purple-500 bg-[#0f111c] shadow-lg flex-grow block">
          <div className="flex items-start space-x-4">
            <img src={logo1} alt="College Logo" className="w-16 h-[30px] rounded-md" style={{ width: '100px' }} />
            <div className="text-left">
              <h3 className="text-xl font-bold">Universidad Tecnológica del Perú, Lima</h3>
              <p className="mb-5 text-sm text-gray-400">Student of Systems and Computer Engineering</p>
              <p className="mb-5 text-sm text-gray-400">March 2020 – 2024 (Present)</p>
              <p className="mt-2 mb-5 text-sm">Grade: 80%</p>
              <p className="mb-5 text-sm text-gray-400">
                I am currently in the 10th semester of my professional career, and I am also obtaining a certification in Data Science from IBM through Coursera, reinforcing my skills as a developer.
              </p>
            </div>
          </div>
        </a>
        
        {/* Card 2: Oracle */}
        <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=8863ADAE540F09DCABC0A61AA55654831F4DD0AFAE1C21F5F888268DDD2EE879" className="w-full max-w-lg p-6 rounded-lg border border-purple-500 bg-[#0f111c] shadow-lg flex-grow block">
          <div className="flex items-start space-x-4">
            <img src={logo2} alt="School Logo" className="w-16 rounded-md" style={{ width: '100px' }} />
            <div className="text-left">
              <h3 className="text-xl font-bold">Oracle University, Los Angeles (Certification)</h3>
              <p className="mb-5 text-sm text-gray-400">Associate Oracle Cloud Infrastructure Foundations</p>
              <p className="mb-5 text-sm text-gray-400">October 2023 – October 2025</p>
              <p className="mt-2 mb-5 text-sm">Grade: 90%</p>
              <p className="mb-5 text-sm text-gray-400">
                I obtained the Oracle Cloud Infrastructure Associate certification to enhance my skills in database management and networking. This certification equips me to design and manage cloud infrastructure solutions, ensuring optimal performance and security.
              </p>
            </div>
          </div>
        </a>

        {/* Card 3: IBM */}
        <a href="https://coursera.org/share/cfcc034c2208e294640bbb82ede99f6d" className="w-full max-w-lg p-6 rounded-lg border border-purple-500 bg-[#0f111c] shadow-lg flex-grow block">
          <div className="flex items-start h-full space-x-4">
            <img src={logo3} alt="School Logo" className="w-16 rounded-md" style={{ width: '100px' }} />
            <div className="text-left">
              <h3 className="text-xl font-bold">IBM Certification (Coursera)</h3>
              <p className="mb-5 text-sm text-gray-400">Python for Data Science and AI</p>
              <p className="mb-5 text-sm text-gray-400">August 2024 – Present</p>
              <p className="mt-2 mb-5 text-sm">Grade: 90%</p>
              <p className="mb-5 text-sm text-gray-400 overflow-hidden max-h-[150px] hover:max-h-full transition-all duration-300 ease-in-out">
                I obtained the IBM certification in Python for Data Science and AI to enhance my skills in data analysis and AI. This certification equipped me with essential skills like data structures, programming fundamentals, and core libraries for data science: Python, Data Analysis, Data Visualization, AI, Machine Learning, Jupyter Notebooks, Pandas, NumPy, Matplotlib, DocumentAI.
              </p>
            </div>
          </div>
        </a>

        {/* Card 4: Cisco */}
        <a href="https://www.credly.com/earner/dashboard" className="w-full max-w-lg p-6 rounded-lg border border-purple-500 bg-[#0f111c] shadow-lg flex-grow block">
          <div className="flex items-start space-x-4">
            <img src={logo4} alt="School Logo" className="w-16 rounded-md" style={{ width: '100px' }} />
            <div className="text-left">
              <h3 className="text-xl font-bold">Cisco Network Academy (Certification)</h3>
              <p className="mb-5 text-sm text-gray-400">Data Science</p>
              <p className="mb-5 text-sm text-gray-400">August 2024 – September 2024</p>
              <p className="mt-2 mb-5 text-sm">Grade: 90%</p>
              <p className="mb-5 text-sm text-gray-400">
                I obtained the Cisco certification in Introduction to Data Science to enhance my skills in data analysis and engineering. This certification provided foundational knowledge in data collection, AI, and machine learning, with practical experience through hands-on labs.
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Study;
