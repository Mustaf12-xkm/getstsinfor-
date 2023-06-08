let stdinfo = [
  {
    name: "osman farah fatate",
    phone: 252718445566,
    Gmail: "osman@gmail.com",
    subject: ["math ", "phyisics", "somali", "caabi", "tarabiyo", "chemistry"],
    gardes: [60, 79, 100, 79, 87, 80],
  },
  {
    name: "iqra cabdullahi wehliye",
    phone: 252615345676,
    Gmail: "iqra@gmail.com",
    subject: ["math ", "phyisics", "somali", "caabi", "tarabiyo", "chemistry"],
    gardes: [90, 69, 70, 79, 97, 80],
  },
  {
    name: "yasmiin axmed dhoore",
    phone: 2526153456999,
    Gmail: "yasmiin@gmail.com",
    subject: ["math ", "phyisics", "somali", "caabi", "tarabiyo", "chemistry"],
    gardes: [90, 69, 90, 79, 97, 100],
  },
  {
    name: "mustapha hersi farah",
    phone: 2526153456999,
    Gmail: "mustaph@gmail.com",
    subject: ["math ", "phyisics", "somali", "caabi", "tarabiyo", "chemistry"],
    gardes: [90, 99, 90, 89, 97, 70],
  },
  {
    name: "farah dagaal hersi",
    phone: 2526153457766,
    Gmail: "farahh@gmail.com",
    subject: ["math ", "phyisics", "somali", "caabi", "tarabiyo", "chemistry"],
    gardes: [90, 79, 90, 85, 67, 70],
  },
  {
    name: "maxamed adan",
    phone: 2526153457766,
    Gmail: "maxamed@gmail.com",
    subject: ["math ", "phyisics", "somali", "caabi", "tarabiyo", "chemistry"],
    gardes: [90, 49, 70, 85, 67, 100],
  },
];

const option = document.getElementById("student-info");
const display = document.querySelector(".display-student-info");
option.addEventListener("change", (e) => {
  let std = e.target.value;
  console.log(std);
  displaystudentinfo(stdinfo, std)
});

const displaystudentinfo = (allstd, passedstd) => {
  let totalgrade = 0;

  const wantedstd = allstd.find((student) => student.name == passedstd);
  const gardes = wantedstd.gardes.map((gr) => (totalgrade += gr));
  let subject = wantedstd.subject.length;

  let averagegrade =(totalgrade / subject).toFixed(2);
display.innerHTML =` <table>
<tr>
  <th>stdName</th>
  <th>Phone</th>
  <th>Gmail</th>
  <th>Average</th>
</tr>
<tr>
  <td>${wantedstd.name}</td>
  <td>${wantedstd.phone}</td>
  <td>${wantedstd.Gmail}</td>
  <td>${averagegrade}%</td>
</tr>
</table>`
  return display;
};
