export const personalDetails = {
  name: "Katta Sai Reshmi",
  role: "Data Analyst",
  email: "kattareshmi617@gmail.com",
  phone: "+91 7989234927",
  location: "Dharmavaram, Andhra Pradesh, India",
  tagline: "Bridging the gap between raw data and actionable business decisions.",
  summary: "Detail-oriented Data Analyst skilled in Python, SQL, Excel, and Power BI, with hands-on experience in data cleaning, analysis, and dashboard development. Experienced in analyzing sales, marketing, and banking datasets to identify trends and generate actionable insights, supporting data-driven business decisions.",
  resumePath: "/resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/katta-sai-reshmi/",
    github: "https://github.com/KattaSaiReshmi",
    email: "mailto:kattareshmi617@gmail.com",
    phone: "tel:+917989234927"
  },
  highlights: [
    { label: "Academic Standing", value: "8.5 CGPA", sub: "B.Tech ECE (IIIT RK Valley)" },
    { label: "Pre-University Score", value: "9.9 CGPA", sub: "PUC-MPC (RGUKT)" },
    { label: "Secondary Merit", value: "10.0 CGPA", sub: "SSC Municipal High School" },
    { label: "Corporate Training", value: "Summer Intern", sub: "Sense Semiconductor" }
  ]
};

// Core 7 Required Skills prominently spotlighted
export const coreSkills = [
  {
    name: "Python",
    category: "Programming & Automation",
    level: "Proficient",
    highlight: "Core language for data pipelines, scripting, and EDA",
    tags: ["Pandas", "NumPy", "Data Wrangling", "Scripting"],
    color: "from-blue-600 to-indigo-600"
  },
  {
    name: "SQL",
    category: "Databases & Querying",
    level: "Proficient",
    highlight: "Complex queries, window functions, and multi-table joins",
    tags: ["Window Functions", "Joins", "Subqueries", "Aggregations"],
    color: "from-navy-800 to-blue-700"
  },
  {
    name: "Excel",
    category: "Spreadsheet Analytics",
    level: "Advanced",
    highlight: "Pivot tables, advanced modeling, and XLOOKUP logic",
    tags: ["Pivot Tables", "VLOOKUP / XLOOKUP", "Conditional Logic", "Formulas"],
    color: "from-emerald-600 to-teal-700"
  },
  {
    name: "Power BI",
    category: "Business Intelligence",
    level: "Advanced",
    highlight: "Interactive executive dashboards, drill-downs & reports",
    tags: ["Executive Dashboards", "Data Modeling", "Drill-downs", "KPI Cards"],
    color: "from-amber-500 to-orange-600"
  },
  {
    name: "Pandas",
    category: "Data Manipulation",
    level: "Proficient",
    highlight: "Vectorized operations, missing value handling & aggregation",
    tags: ["DataFrames", "Cleaning", "Transformations", "EDA"],
    color: "from-indigo-600 to-purple-600"
  },
  {
    name: "DAX",
    category: "Power BI Formulas",
    level: "Proficient",
    highlight: "Calculated columns, custom measures & time intelligence",
    tags: ["Calculated Measures", "CALCULATE", "Time Intelligence", "KPIs"],
    color: "from-purple-600 to-violet-700"
  },
  {
    name: "MySQL",
    category: "Relational Database",
    level: "Proficient",
    highlight: "Relational database schema modeling, queries & indexing",
    tags: ["Relational Schemas", "Foreign Keys", "Data Integrity", "Views"],
    color: "from-sky-700 to-blue-800"
  }
];

// Complete Categorized Skills from Resume
export const skillsData = [
  {
    category: "Visualization & BI",
    description: "Designing executive-ready dashboards and high-impact visual storytelling.",
    icon: "PieChart",
    skills: [
      { name: "Power BI", level: "Advanced", note: "Interactive visual reports, custom drill-downs, relationships" },
      { name: "DAX (Data Analysis Expressions)", level: "Proficient", note: "Calculated measures, columns, time intelligence functions" },
      { name: "Advanced Excel", level: "Advanced", note: "Pivot tables, VLOOKUP/XLOOKUP, conditional modeling, formulas" }
    ]
  },
  {
    category: "Databases & Querying",
    description: "Writing performant relational queries, aggregations, and data manipulation scripts.",
    icon: "Database",
    skills: [
      { name: "SQL", level: "Proficient", note: "Window functions, multi-table joins, subqueries, group by" },
      { name: "MySQL", level: "Proficient", note: "Schema modeling, indexes, relational constraints" }
    ]
  },
  {
    category: "Programming Languages",
    description: "Algorithmic thinking and data manipulation scripting in high-level languages.",
    icon: "Code",
    skills: [
      { name: "Python", level: "Proficient", note: "Automation scripting, data wrangling, analytics workflows" },
      { name: "C Programming", level: "Hands-on", note: "Procedural logic, memory models, low-level structures" }
    ]
  },
  {
    category: "Data Wrangling & Foundations",
    description: "Cleaning, profiling, and deriving statistical patterns from messy real-world datasets.",
    icon: "BarChart3",
    skills: [
      { name: "Pandas", level: "Proficient", note: "DataFrames, grouping, merging, pivot tables, vectorized operations" },
      { name: "Data Structures & Algorithms (DSA)", level: "Proficient", note: "Problem decomposition, optimization, algorithmic complexity" },
      { name: "Object-Oriented Programming (OOP)", level: "Proficient", note: "Modular design, classes, encapsulation" }
    ]
  },
  {
    category: "Web & Developer Tools",
    description: "Modern developer tooling for version control, collaboration, and markup.",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Proficient", note: "Version control, branching, repository management" },
      { name: "VS Code", level: "Proficient", note: "Primary development environment and extensions" },
      { name: "Web Fundamentals (HTML5 / CSS3 / JavaScript)", level: "Hands-on", note: "Responsive markup, interactive web scripting" }
    ]
  }
];

export const projectsData = [
  {
    id: "ecommerce-sales",
    title: "E-Commerce Sales Analysis",
    subtitle: "Enterprise Retail Sales & Revenue Performance Analytics",
    period: "2024",
    techStack: ["Python", "Pandas", "SQL", "Power BI", "DAX", "Excel"],
    featured: true,
    hasLiveDataset: true,
    summary: "Analyzed 100K+ sales records using Python, SQL, and Excel to identify sales, revenue, and profitability trends. Performed data cleaning and transformation using Pandas and SQL to prepare datasets for analysis, and developed an interactive Power BI dashboard with KPIs for sales, profit, products, customers, and regional performance.",
    bullets: [
      "Analyzed 100K+ sales records using Python, SQL, and Excel to identify sales, revenue, and profitability trends.",
      "Performed data cleaning and transformation using Pandas and SQL to prepare datasets for analysis.",
      "Developed an interactive Power BI dashboard with KPIs for sales, profit, products, customers, and regional performance.",
      "Generated insights on top-performing products, customer segments, and monthly sales trends to support business decisions."
    ],
    kpis: [
      { label: "Transactions Processed", value: "100K+ Records" },
      { label: "Sample Month Revenue", value: "$189,716.66" },
      { label: "Units Sold (Sample)", value: "1,115 Items" },
      { label: "Top Market Share", value: "San Francisco (28.4%)" }
    ],
    dashboardType: "Power BI Executive Retail Dashboard",
    sampleDax: `Total Revenue = SUM(Sales[Quantity_Ordered] * Sales[Price_Each])

Top City Sales % = 
VAR CityRevenue = [Total Revenue]
VAR GlobalRevenue = CALCULATE([Total Revenue], ALL(Sales))
RETURN DIVIDE(CityRevenue, GlobalRevenue, 0)`,
    sampleSql: `-- Top Performing Products by Total Revenue
SELECT 
    Product,
    SUM(Quantity_Ordered) AS Total_Units_Sold,
    ROUND(SUM(Quantity_Ordered * Price_Each), 2) AS Total_Revenue
FROM sales_transactions
GROUP BY Product
ORDER BY Total_Revenue DESC
LIMIT 5;`
  },
  {
    id: "marketing-campaign",
    title: "Marketing Campaign Performance Analysis",
    subtitle: "End-to-End Campaign ROI, Conversion & Customer Acquisition Modeling",
    period: "2024",
    techStack: ["Python", "Pandas", "SQL", "Power BI", "Exploratory Data Analysis"],
    featured: true,
    hasLiveDataset: false,
    summary: "Analyzed customer and campaign data using Python and SQL to evaluate marketing performance. Performed data cleaning and exploratory analysis using Pandas, and developed an interactive Power BI dashboard tracking conversions, ROI, and campaign KPIs to identify high-performing campaigns and optimize marketing strategies.",
    bullets: [
      "Analyzed customer and campaign data using Python and SQL to evaluate marketing performance.",
      "Performed data cleaning and exploratory analysis using Pandas.",
      "Developed an interactive Power BI dashboard tracking conversions, ROI, and campaign KPIs.",
      "Identified high-performing campaigns and customer segments to optimize marketing strategies."
    ],
    kpis: [
      { label: "Campaigns Analyzed", value: "Multi-Channel" },
      { label: "Primary Metric", value: "ROAS & CAC" },
      { label: "Dashboard Tool", value: "Power BI & DAX" },
      { label: "Strategic Focus", value: "Audience Segmentation" }
    ],
    dashboardType: "Power BI Campaign Attribution Dashboard",
    sampleDax: `ROAS = DIVIDE([Attributed Revenue], [Total Ad Spend], 0)

Conversion Rate = 
DIVIDE(
    COUNTROWS(FILTER(Campaigns, Campaigns[Converted] = TRUE)),
    COUNTROWS(Campaigns),
    0
)`,
    sampleSql: `-- Multi-Channel Conversion Funnel & ROI Evaluation
SELECT 
    channel,
    COUNT(customer_id) AS total_leads,
    SUM(CASE WHEN converted = 1 THEN 1 ELSE 0 END) AS conversions,
    ROUND(SUM(converted_revenue) / NULLIF(SUM(ad_spend), 0), 2) AS roas_ratio
FROM campaign_performance
GROUP BY channel
ORDER BY roas_ratio DESC;`
  },
  {
    id: "bank-loan",
    title: "Bank Loan Risk & Financial Analysis",
    subtitle: "Credit Risk Segmentation & Loan Portfolio KPI Monitoring",
    period: "2024",
    techStack: ["SQL", "MySQL", "Power BI", "DAX", "Financial Modeling"],
    featured: true,
    hasLiveDataset: false,
    summary: "Analyzed 38K+ loan records using SQL and Power BI to evaluate loan performance. Implemented SQL queries and aggregations for loan and customer-level analysis, and developed an interactive Power BI dashboard with financial and loan performance KPIs to identify loan trends and high-risk customer segments to support lending decisions.",
    bullets: [
      "Analyzed 38K+ loan records using SQL and Power BI to evaluate loan performance.",
      "Implemented SQL queries and aggregations for loan and customer-level analysis.",
      "Developed an interactive Power BI dashboard with financial and loan performance KPIs.",
      "Identified loan trends and high-risk customer segments to support lending decisions."
    ],
    kpis: [
      { label: "Records Evaluated", value: "38K+ Records" },
      { label: "Risk Metrics", value: "DTI & Default Rate" },
      { label: "Database Engine", value: "MySQL / SQL" },
      { label: "Outcome", value: "Risk Tier Classification" }
    ],
    dashboardType: "Power BI Credit Risk & Lending Dashboard",
    sampleDax: `Default Rate % = 
DIVIDE(
    CALCULATE(COUNT(Loans[Loan_ID]), Loans[Loan_Status] = "Charged Off"),
    COUNT(Loans[Loan_ID]),
    0
)

Funded Capital = SUM(Loans[Loan_Amount])`,
    sampleSql: `-- High-Risk Borrower Segmentation based on DTI and Delinquency
SELECT 
    grade,
    sub_grade,
    COUNT(id) AS total_borrowers,
    ROUND(AVG(dti), 2) AS avg_debt_to_income,
    ROUND(SUM(CASE WHEN loan_status = 'Charged Off' THEN 1 ELSE 0 END) * 100.0 / COUNT(id), 2) AS default_rate_pct
FROM bank_loans
GROUP BY grade, sub_grade
ORDER BY default_rate_pct DESC;`
  }
];

export const internshipData = {
  company: "Sense Semiconductor & IT Solutions Pvt. Ltd.",
  role: "Summer Intern",
  duration: "06/2025 – 06/2025",
  location: "Guntur, Andhra Pradesh, India",
  badge: "Corporate & Technical Training",
  description: "Completed an intensive industry-oriented internship focused on FPGA-based system design, digital logic modeling, and professional engineering workflows.",
  highlights: [
    "Gained corporate exposure through industry-oriented training and hands-on experience in FPGA-based system design.",
    "Worked on industry projects and practical assignments, applying technical concepts to real-world engineering problems.",
    "Participated in hands-on activities and project demonstrations, strengthening problem-solving and implementation skills.",
    "Developed an understanding of professional work environments and industry practices.",
    "Strengthened skills in FPGA-based design and digital systems through practical training.",
    "Demonstrated technical learning, teamwork, and project ownership while completing assigned tasks during the internship."
  ],
  skillsApplied: [
    "FPGA-Based System Design",
    "Digital Logic & Systems",
    "Technical Problem-Solving",
    "Project Ownership",
    "Corporate Engineering Practices"
  ]
};

export const educationData = [
  {
    degree: "B.Tech – Electronics & Communication Engineering",
    institution: "Rajiv Gandhi University of Knowledge Technologies, IIIT RK Valley",
    period: "2023 – Present",
    score: "CGPA: 8.5",
    badge: "Current Degree",
    description: "Specializing in electronic systems, digital logic, data computation, and analytical problem-solving. Strong academic performance maintaining an 8.5 CGPA."
  },
  {
    degree: "PUC-MPC (Pre-University Course)",
    institution: "Rajiv Gandhi University of Knowledge Technologies, IIIT RK Valley",
    period: "2021 – 2023",
    score: "CGPA: 9.9",
    badge: "Scholastic Distinction",
    description: "Pre-engineering coursework in Higher Mathematics, Physics, and Chemistry, graduating with a near-perfect 9.9 CGPA."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "BSR MUNICIPAL SCHOOL-DHARMAVARAM",
    period: "2020 – 2021",
    score: "CGPA: 10",
    badge: "Perfect Score (10.0)",
    description: "Completed secondary education with a perfect 10 CGPA across all subjects, establishing strong foundations in quantitative mathematics."
  }
];

export const publicationData = {
  title: "Smart Traffic Light Control System using Ultrasonic Sensors & FPGA",
  journal: "International Journal of Engineering Research & Technology (IJERT)",
  date: "07/07/2025",
  type: "Peer-Reviewed Research Paper",
  abstract: "Designed and developed an intelligent traffic light control system using ultrasonic sensors and FPGA-based automation to dynamically manage traffic flow, reduce congestion, and improve the efficiency of urban traffic management systems.",
  keywords: ["FPGA Automation", "Ultrasonic Sensors", "Smart Traffic Management", "Real-Time Embedded Logic", "Sensor Interfacing"],
  highlights: [
    "Designed an intelligent traffic light control system leveraging ultrasonic sensors to estimate real-time vehicular queue lengths.",
    "Implemented automated state control logic on FPGA hardware to adapt signal durations dynamically to traffic density.",
    "Validated measurable congestion reduction and lower vehicular idle waiting times compared to traditional fixed-cycle traffic timers."
  ]
};

export const coCurricularData = [
  {
    title: "Event Anchor",
    context: "College Events & Functions",
    description: "Hosted college events, developing confidence, public-speaking, and clear communication skills.",
    icon: "Mic"
  },
  {
    title: "Hackathon Participant",
    context: "Collaborative Hackathons",
    description: "Collaborated with team members to develop and present a solution within a limited timeframe.",
    icon: "Trophy"
  }
];
