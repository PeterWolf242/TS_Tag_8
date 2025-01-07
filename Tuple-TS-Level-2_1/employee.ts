type Employees = [number, string, string, number][];

const employe: Employees = [[1, "Max Mustermann", "Design", 35000],
[2, "Josef Baumgartner", "Frontend-Development", 50000],
[3, "Klaus Holzmichel", "Backend-Development", 52000],
[4, "Sabine Müller", "Buchhaltung", 37000],
[5, "Gabi Tischler", "Support", 42000]];

console.log("Mitarbeiter:");

console.table(employe);
