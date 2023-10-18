export const initializePendo = (user, company) => {
  pendo.initialize({
    visitor: {
      id: user ? user.email : "",
      name: user ? user.name : null,
      admin: user ? user.admin : null,
      role: user ? user.role : null,
      startDate: user ? user.startDate : null,
      entries: user ? user.entires : null,
    },

    account: {
      id: company ? company.name : "",
      employees: company ? company.employees : null,
      plan: company ? company.plan : null,
    },
  })
}