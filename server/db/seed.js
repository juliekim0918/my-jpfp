const Student = require("./Student.js");
const Campus = require("./Campus.js");
const db = require("./db.js");
const random = require("lodash/random");

const students = [
  {
    first_name: "Humfried",
    last_name: "Livock",
    email: "hlivock0@geocities.jp",
    avatarUrl: "/avatar_blue.png",
  },
  {
    first_name: "Bary",
    last_name: "Golledge",
    email: "bgolledge1@bloglovin.com",
    avatarUrl: "/avatar_green.png",
  },
  {
    first_name: "Jaynell",
    last_name: "O'Shields",
    email: "joshields2@virginia.edu",
    avatarUrl: "/avatar_orange.png",
  },
  {
    first_name: "Ginelle",
    last_name: "Slimme",
    email: "gslimme3@bbb.org",
    avatarUrl: "/avatar_red.png",
  },
  {
    first_name: "Roseline",
    last_name: "Colqueran",
    email: "rcolqueran4@ovh.net",
    avatarUrl: "/avatar_blue.png",
  },
  {
    first_name: "Camilla",
    last_name: "Itscowics",
    email: "citscowics5@vimeo.com",
    avatarUrl: "/avatar_green.png",
  },
  {
    first_name: "Kaylyn",
    last_name: "Fairburn",
    email: "kfairburn6@feedburner.com",
    avatarUrl: "/avatar_violet.png",
  },
  {
    first_name: "Taffy",
    last_name: "Ickovits",
    email: "tickovits7@yahoo.com",
    avatarUrl: "/avatar_red.png",
  },
  {
    first_name: "Jeanette",
    last_name: "Winborn",
    email: "jwinborn8@ycombinator.com",
    avatarUrl: "/avatar_yellow.png",
  },
  {
    first_name: "Patty",
    last_name: "Debill",
    email: "pdebill9@cdbaby.com",
    avatarUrl: "/avatar_orange.png",
  },
  {
    first_name: "Marylee",
    last_name: "Kubacki",
    email: "mkubackia@prnewswire.com",
    avatarUrl: "/avatar_green.png",
  },
  {
    first_name: "Prentice",
    last_name: "Hustler",
    email: "phustlerb@quantcast.com",
    avatarUrl: "/avatar_red.png",
  },
  {
    first_name: "Thain",
    last_name: "MacMenamin",
    email: "tmacmenaminc@webnode.com",
    avatarUrl: "/avatar_violet.png",
  },
  {
    first_name: "Dorolisa",
    last_name: "Lett",
    email: "dlettd@ameblo.jp",
    avatarUrl: "/avatar_blue.png",
  },

  {
    first_name: "Wolfy",
    last_name: "Fairweather",
    email: "wfairweathere@google.de",
    avatarUrl: "/avatar_green.png",
  },
  {
    first_name: "Stinky",
    last_name: "MacGee",
    email: "smacgeef@spotify.com",
    avatarUrl: "/avatar_red.png",
  },
  {
    first_name: "Rhett",
    last_name: "Beevis",
    email: "rbeevisg@chron.com",
    avatarUrl: "/avatar_yellow.png",
  },
  {
    first_name: "Susana",
    last_name: "Brumfield",
    email: "sbrumfieldh@altervista.org",
    avatarUrl: "/avatar_green.png",
  },
  {
    first_name: "Leda",
    last_name: "Cubbinelli",
    email: "lcubbinellii@alexa.com",
    avatarUrl: "/avatar_violet.png",
  },
  {
    first_name: "Rora",
    last_name: "Castenda",
    email: "rcastendaj@tmall.com",
    avatarUrl: "/avatar_blue.png",
  },
];

const universities = [
  {
    name: "Asia Europe University",
    address: "56200 Eastwood Place",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    image:
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Centre Universitaire de Tebessa",
    address: "8 Anniversary Parkway",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    image:
      "https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "East China Normal University",
    address: "9 Talisman Plaza",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    image:
      "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3600&q=80",
  },
  {
    name: 'Universidad Nacional Experimental Politécnica "Antonio José de Sucre"',
    address: "52 Vernon Terrace",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    image:
      "https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Academy of Humanities and Economics in Lodz",
    address: "670 Spohn Place",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    image:
      "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Kookmin University",
    address: "655 Golf Park",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    image:
      "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Universidad de Guanajuato, Campus León",
    address: "55324 Gina Road",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    image:
      "https://images.unsplash.com/photo-1559135197-8a45ea74d367?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Knowledge International University",
    address: "1014 Starling Point",
    description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Heidelberg College",
    address: "61340 Eliot Avenue",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    image:
      "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Roskilde University",
    address: "83 Warrior Avenue",
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    image:
      "https://images.unsplash.com/photo-1602780374996-8c6499ce7420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Universidade Federal de Campina Grande",
    address: "10747 Melby Point",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    image:
      "https://images.unsplash.com/photo-1569447891824-7a1758aa73a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "University of Nizwa",
    address: "6 Burning Wood Alley",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    image:
      "https://images.unsplash.com/photo-1619512673224-91cfb2688284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Modern Acadmy",
    address: "92 Sachs Drive",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    image:
      "https://images.unsplash.com/photo-1527891751199-7225231a68dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Moscow State University of Economics, Statistics and Informatics",
    address: "0 Little Fleur Trail",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Fachhochschule Nordhausen",
    address: "224 Shasta Pass",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    image:
      "https://images.unsplash.com/photo-1594027386703-9543cc30dae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const studentArr = await Promise.all(
      students.map((student) => Student.create(student))
    );

    universities.map(async (uni) => {
      await Campus.create(uni);
    });

    await Promise.all(
      studentArr.map((student, idx) =>
        idx % 5 !== 0
          ? student.update({ campusId: random(1, universities.length) })
          : ""
      )
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
