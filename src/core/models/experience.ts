type Experience = {
  role: string;
  company: string;
  location: string;
  start_date: string;
  end_date?: string;
  company_url?: string;
  responsibilities: string[];
  tech_stack?: string[];
};

export default Experience;