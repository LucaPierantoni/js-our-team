// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

const teamMembers = [
    {
      nome: "Wayne Barnett",
      ruolo: "Founder & CEO",
      foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
      nome: "Angela Caroll",
      ruolo: "Chief Editor",
      foto: "angela-caroll-chief-editor.jpg",
    },
    {
      nome: "Walter Gordon",
      ruolo: "Office Manager",
      foto: "walter-gordon-office-manager.jpg",
    },
    {
      nome: "Angela Lopez",
      ruolo: "Social Media Manager",
      foto: "angela-lopez-social-media-manager.jpg",
    },
    {
      nome: "Scott Estrada",
      ruolo: "Developer",
      foto: "scott-estrada-developer.jpg",
    },
    {
      nome: "Barbara Ramos",
      ruolo: "Graphic Designer",
      foto: "barbara-ramos-graphic-designer.jpg",
    },
];
  
// Stampo su console le informazioni di ogni membro del team
// for (const member of teamMembers) {
//     console.log(`Nome: ${member.nome}`);
//     console.log(`Ruolo: ${member.ruolo}`);
//     console.log(`Foto: ${member.foto}`);
//     console.log("---");
// }

// Seleziono il container nel DOM dove inserire le informazioni
const teamContainer = document.querySelector(".team-container");

// ciclo for che itera per ogni membro del team
for (const member of teamMembers) {

    const memberElement = document.createElement("div");
    memberElement.classList.add("member");

    const memberName = document.createElement("h3");
    memberName.innerText = member.nome;

    const memberRole = document.createElement("p");
    memberRole.innerText = member.ruolo;

    const memberPhoto = document.createElement("img");
    memberPhoto.src = `img/${member.foto}`;

    memberElement.append(memberName);
    memberElement.append(memberRole);
    memberElement.append(memberPhoto);

    teamContainer.append(memberElement);
}
