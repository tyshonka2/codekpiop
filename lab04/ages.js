const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
  alexander: { born: 1777, died: 1825 },
  napoleon: { born: 1769, died: 1821 },
  cleopatra: { born: 69, died: 30 },
  julius: { born: -100, died: -44 },
  augustus: { born: -63, died: 14 },
  elizabeth: { born: 1533, died: 1603 },
  victoria: { born: 1819, died: 1901 },
};

function ages(age) {
    const ages = {};
    for (let persons in age) {
        ages[persons] = age[persons].died - age[persons].born;
    }   
    return ages;
}
console.table(ages(persons));
    