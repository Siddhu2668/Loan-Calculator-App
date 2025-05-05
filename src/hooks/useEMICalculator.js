export const useEMICalculator = (principal, rate, years) => {
    const n = years * 12;
    const r = rate / 12 / 100;
  
    if (principal <= 0 || rate <= 0 || years <= 0) return { emi: 0, schedule: [] };
  
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  
    let schedule = [];
    let balance = principal;
  
    for (let i = 1; i <= n; i++) {
      const interest = balance * r;
      const principalPaid = emi - interest;
      balance -= principalPaid;
      schedule.push({
        month: i,
        principal: principalPaid,
        interest: interest,
        balance: balance > 0 ? balance : 0,
      });
    }
  
    return { emi, schedule };
  };
  