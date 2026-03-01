export const emptyData = {
  personal: {
    name: "",
    email: "",
    linkPortfolio: "",
    linkGithub: "",
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      dateGraduated: "",
      description: "",
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      description: "",
      dateFrom: "",
      dateTo: "",
    },
  ],
  skills: [
    {
      id: crypto.randomUUID(),
      groupName: "",
      items: [],
    },
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      title: "",
      link: "",
      description: "",
    },
  ],
  certificates: [
    {
      id: crypto.randomUUID(),
      name: "",
      organization: "",
      dateIssued: "",
    },
  ],
};
