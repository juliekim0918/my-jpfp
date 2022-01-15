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
  {
    first_name: "Ryun",
    last_name: "Cannop",
    email: "rcannop0@networksolutions.com",
    avatarUrl: "",
  },
  {
    first_name: "Madelene",
    last_name: "Glacken",
    email: "mglacken1@ask.com",
    avatarUrl: "",
  },
  {
    first_name: "Bert",
    last_name: "Reffe",
    email: "breffe2@un.org",
    avatarUrl: "",
  },
  {
    first_name: "Rosamund",
    last_name: "Sirette",
    email: "rsirette3@google.com.hk",
    avatarUrl: "",
  },
  {
    first_name: "Holli",
    last_name: "Sherrocks",
    email: "hsherrocks4@epa.gov",
    avatarUrl: "",
  },
  {
    first_name: "Rad",
    last_name: "Robatham",
    email: "rrobatham5@blogtalkradio.com",
    avatarUrl: "",
  },
  {
    first_name: "Mallory",
    last_name: "Croshaw",
    email: "mcroshaw6@cdc.gov",
    avatarUrl: "",
  },
  {
    first_name: "Marja",
    last_name: "Jantot",
    email: "mjantot7@unc.edu",
    avatarUrl: "",
  },
  {
    first_name: "Hobard",
    last_name: "Very",
    email: "hvery8@ustream.tv",
    avatarUrl: "",
  },
  {
    first_name: "Arie",
    last_name: "Horbath",
    email: "ahorbath9@ed.gov",
    avatarUrl: "",
  },
  {
    first_name: "Jessalyn",
    last_name: "Tolson",
    email: "jtolsona@stumbleupon.com",
    avatarUrl: "",
  },
  {
    first_name: "Skye",
    last_name: "Whapples",
    email: "swhapplesb@umich.edu",
    avatarUrl: "",
  },
  {
    first_name: "Cheston",
    last_name: "Greggor",
    email: "cgreggorc@china.com.cn",
    avatarUrl: "",
  },
  {
    first_name: "Keane",
    last_name: "Staning",
    email: "kstaningd@tiny.cc",
    avatarUrl: "",
  },
  {
    first_name: "Homerus",
    last_name: "Timberlake",
    email: "htimberlakee@dyndns.org",
    avatarUrl: "",
  },
  {
    first_name: "Magdalen",
    last_name: "Rosenstein",
    email: "mrosensteinf@typepad.com",
    avatarUrl: "",
  },
  {
    first_name: "Kessia",
    last_name: "Burbridge",
    email: "kburbridgeg@apple.com",
    avatarUrl: "",
  },
  {
    first_name: "Johnna",
    last_name: "Willmer",
    email: "jwillmerh@digg.com",
    avatarUrl: "",
  },
  {
    first_name: "Ruddie",
    last_name: "Godbold",
    email: "rgodboldi@baidu.com",
    avatarUrl: "",
  },
  {
    first_name: "Sauncho",
    last_name: "McNair",
    email: "smcnairj@meetup.com",
    avatarUrl: "",
  },
  {
    first_name: "Phyllys",
    last_name: "Perrins",
    email: "pperrinsk@istockphoto.com",
    avatarUrl: "",
  },
  {
    first_name: "Roseanna",
    last_name: "Hadaway",
    email: "rhadawayl@technorati.com",
    avatarUrl: "",
  },
  {
    first_name: "Igor",
    last_name: "Pinnegar",
    email: "ipinnegarm@thetimes.co.uk",
    avatarUrl: "",
  },
  {
    first_name: "Ebeneser",
    last_name: "Greenfield",
    email: "egreenfieldn@dailymotion.com",
    avatarUrl: "",
  },
  {
    first_name: "Nicola",
    last_name: "Edowes",
    email: "nedoweso@themeforest.net",
    avatarUrl: "",
  },
  {
    first_name: "Vilhelmina",
    last_name: "Selwood",
    email: "vselwoodp@nih.gov",
    avatarUrl: "",
  },
  {
    first_name: "Delora",
    last_name: "Summerbell",
    email: "dsummerbellq@cpanel.net",
    avatarUrl: "",
  },
  {
    first_name: "Faustine",
    last_name: "Edgson",
    email: "fedgsonr@timesonline.co.uk",
    avatarUrl: "",
  },
  {
    first_name: "Tallia",
    last_name: "Chritchlow",
    email: "tchritchlows@reference.com",
    avatarUrl: "",
  },
  {
    first_name: "Ina",
    last_name: "Despenser",
    email: "idespensert@narod.ru",
    avatarUrl: "",
  },
  {
    first_name: "Burty",
    last_name: "Ray",
    email: "brayu@yellowpages.com",
    avatarUrl: "",
  },
  {
    first_name: "Patricia",
    last_name: "Pearle",
    email: "ppearlev@joomla.org",
    avatarUrl: "",
  },
  {
    first_name: "Phoebe",
    last_name: "O' Kelleher",
    email: "pokelleherw@illinois.edu",
    avatarUrl: "",
  },
  {
    first_name: "Valene",
    last_name: "Skurm",
    email: "vskurmx@unicef.org",
    avatarUrl: "Bigender",
  },
  {
    first_name: "Zack",
    last_name: "Shearmer",
    email: "zshearmery@so-net.ne.jp",
    avatarUrl: "",
  },
  {
    first_name: "Lon",
    last_name: "Titterell",
    email: "ltitterellz@dion.ne.jp",
    avatarUrl: "",
  },
  {
    first_name: "Koressa",
    last_name: "Succamore",
    email: "ksuccamore10@theglobeandmail.com",
    avatarUrl: "",
  },
  {
    first_name: "Fannie",
    last_name: "Radke",
    email: "fradke11@tmall.com",
    avatarUrl: "",
  },
  {
    first_name: "Elfreda",
    last_name: "Sottell",
    email: "esottell12@dedecms.com",
    avatarUrl: "",
  },
  {
    first_name: "Samuel",
    last_name: "Wansbury",
    email: "swansbury13@seesaa.net",
    avatarUrl: "",
  },
  {
    first_name: "Holly",
    last_name: "Shilstone",
    email: "hshilstone14@epa.gov",
    avatarUrl: "",
  },
  {
    first_name: "Chad",
    last_name: "Leving",
    email: "cleving15@sciencedirect.com",
    avatarUrl: "",
  },
  {
    first_name: "Shantee",
    last_name: "Traill",
    email: "straill16@comsenz.com",
    avatarUrl: "",
  },
  {
    first_name: "Dietrich",
    last_name: "Older",
    email: "dolder17@ted.com",
    avatarUrl: "",
  },
  {
    first_name: "Dorey",
    last_name: "Willavize",
    email: "dwillavize18@freewebs.com",
    avatarUrl: "",
  },
  {
    first_name: "Tessie",
    last_name: "Rosewall",
    email: "trosewall19@slideshare.net",
    avatarUrl: "",
  },
  {
    first_name: "Jodee",
    last_name: "Yuryichev",
    email: "jyuryichev1a@jugem.jp",
    avatarUrl: "",
  },
  {
    first_name: "Harley",
    last_name: "Medford",
    email: "hmedford1b@google.ru",
    avatarUrl: "",
  },
  {
    first_name: "Helaine",
    last_name: "Prosh",
    email: "hprosh1c@mail.ru",
    avatarUrl: "",
  },
  {
    first_name: "Teodoor",
    last_name: "Stede",
    email: "tstede1d@census.gov",
    avatarUrl: "",
  },
  {
    first_name: "Cheslie",
    last_name: "Ricket",
    email: "cricket0@ifeng.com",
    avatarUrl: "",
  },
  {
    first_name: "Yoshiko",
    last_name: "Churchyard",
    email: "ychurchyard1@surveymonkey.com",
    avatarUrl: "",
  },
  {
    first_name: "Jerrome",
    last_name: "Altimas",
    email: "jaltimas2@wsj.com",
    avatarUrl: "",
  },
  {
    first_name: "Kennith",
    last_name: "Oluwatoyin",
    email: "koluwatoyin3@nps.gov",
    avatarUrl: "",
  },
  {
    first_name: "Livvy",
    last_name: "Tokell",
    email: "ltokell4@multiply.com",
    avatarUrl: "",
  },
  {
    first_name: "Joshia",
    last_name: "Braams",
    email: "jbraams5@bbc.co.uk",
    avatarUrl: "",
  },
  {
    first_name: "Valene",
    last_name: "Gantz",
    email: "vgantz6@samsung.com",
    avatarUrl: "",
  },
  {
    first_name: "Domenic",
    last_name: "Humble",
    email: "dhumble7@ucoz.ru",
    avatarUrl: "",
  },
  {
    first_name: "Wakefield",
    last_name: "Laguerre",
    email: "wlaguerre8@rakuten.co.jp",
    avatarUrl: "",
  },
  {
    first_name: "Teodoro",
    last_name: "Yaxley",
    email: "tyaxley9@blinklist.com",
    avatarUrl: "",
  },
  {
    first_name: "Rania",
    last_name: "Iorns",
    email: "riornsa@about.me",
    avatarUrl: "",
  },
  {
    first_name: "Ania",
    last_name: "Batiste",
    email: "abatisteb@macromedia.com",
    avatarUrl: "",
  },
  {
    first_name: "Jena",
    last_name: "Gambie",
    email: "jgambiec@newyorker.com",
    avatarUrl: "",
  },
  {
    first_name: "Oralee",
    last_name: "Crus",
    email: "ocrusd@networkadvertising.org",
    avatarUrl: "",
  },
  {
    first_name: "Juline",
    last_name: "Britto",
    email: "jbrittoe@lulu.com",
    avatarUrl: "",
  },
  {
    first_name: "Simon",
    last_name: "Eyckelberg",
    email: "seyckelbergf@merriam-webster.com",
    avatarUrl: "",
  },
  {
    first_name: "Alexei",
    last_name: "Hutcheons",
    email: "ahutcheonsg@ameblo.jp",
    avatarUrl: "",
  },
  {
    first_name: "Dianna",
    last_name: "Mankor",
    email: "dmankorh@altervista.org",
    avatarUrl: "",
  },
  {
    first_name: "Dalis",
    last_name: "Trevor",
    email: "dtrevori@businessweek.com",
    avatarUrl: "",
  },
  {
    first_name: "Nicki",
    last_name: "Manners",
    email: "nmannersj@fc2.com",
    avatarUrl: "",
  },
  {
    first_name: "Horst",
    last_name: "Pollicote",
    email: "hpollicotek@ca.gov",
    avatarUrl: "",
  },
  {
    first_name: "Kennie",
    last_name: "Bracknall",
    email: "kbracknalll@tinypic.com",
    avatarUrl: "",
  },
  {
    first_name: "Liv",
    last_name: "Harby",
    email: "lharbym@privacy.gov.au",
    avatarUrl: "",
  },
  {
    first_name: "Valaree",
    last_name: "Duncombe",
    email: "vduncomben@discuz.net",
    avatarUrl: "",
  },
  {
    first_name: "Gradey",
    last_name: "Lessmare",
    email: "glessmareo@ed.gov",
    avatarUrl: "",
  },
  {
    first_name: "Port",
    last_name: "Hugnin",
    email: "phugninp@washingtonpost.com",
    avatarUrl: "",
  },
  {
    first_name: "Mandie",
    last_name: "Fierro",
    email: "mfierroq@cbsnews.com",
    avatarUrl: "",
  },
  {
    first_name: "Yettie",
    last_name: "Lead",
    email: "yleadr@instagram.com",
    avatarUrl: "",
  },
  {
    first_name: "Loutitia",
    last_name: "Wilks",
    email: "lwilkss@umn.edu",
    avatarUrl: "",
  },
  {
    first_name: "Symon",
    last_name: "Shippey",
    email: "sshippeyt@phoca.cz",
    avatarUrl: "",
  },
  {
    first_name: "Aleksandr",
    last_name: "Bostock",
    email: "abostocku@sciencedirect.com",
    avatarUrl: "",
  },
  {
    first_name: "Philipa",
    last_name: "Peiser",
    email: "ppeiserv@themeforest.net",
    avatarUrl: "",
  },
];

const universities = [
  {
    name: "Asia Europe University",
    address: "56200 Eastwood Place",
    description: `Faucibus interdum posuere lorem ipsum dolor sit. Enim neque volutpat ac tincidunt. Rhoncus dolor purus non enim. Elementum nibh tellus molestie nunc non blandit. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Fames ac turpis egestas integer eget aliquet. Lacus vel facilisis volutpat est velit egestas dui. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Tincidunt arcu non sodales neque sodales ut etiam sit amet.

Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Sed elementum tempus egestas sed sed risus pretium.`,
    image:
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    website: "https://loc.gov/sed.jsp",
  },
  {
    name: "Centre Universitaire de Tebessa",
    address: "8 Anniversary Parkway",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem. Varius quam quisque id diam. Arcu vitae elementum curabitur vitae nunc. Ultrices sagittis orci a scelerisque purus semper eget duis. Non consectetur a erat nam at lectus. Condimentum mattis pellentesque id nibh tortor id aliquet. Nunc sed augue lacus viverra vitae congue eu consequat ac. Consectetur a erat nam at lectus urna. Sit amet cursus sit amet dictum sit amet justo.

Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Amet consectetur adipiscing elit ut aliquam purus sit amet. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Malesuada nunc vel risus commodo viverra. Congue eu consequat ac felis donec et odio. Velit ut tortor pretium viverra. Consequat interdum varius sit amet. Ac turpis egestas maecenas pharetra convallis. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc.`,
    image:
      "https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    website:
      "https://clickbank.net/vel/augue/vestibulum/ante/ipsum/primis/in.jsp",
  },
  {
    name: "East China Normal University",
    address: "9 Talisman Plaza",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    image:
      "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3600&q=80",
    website: "http://ameblo.jp/curabitur/convallis/duis/consequat/dui.html",
  },
  {
    name: 'Universidad Nacional Experimental Politécnica "Antonio José de Sucre"',
    address: "52 Vernon Terrace",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    image:
      "https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    website: "https://wix.com/feugiat/non/pretium.html",
  },
  {
    name: "Academy of Humanities and Economics in Lodz",
    address: "670 Spohn Place",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    image:
      "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    website: "https://cpanel.net/lorem/ipsum/dolor/sit/amet/consectetuer.html",
  },
  {
    name: "Kookmin University",
    address: "655 Golf Park",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    image:
      "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    website: "http://alexa.com/rutrum/nulla/tellus.aspx",
  },
  {
    name: "Universidad de Guanajuato, Campus León",
    address: "55324 Gina Road",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    image:
      "https://images.unsplash.com/photo-1559135197-8a45ea74d367?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    website: "https://tripadvisor.com/mi/nulla/ac/enim/in/tempor.aspx",
  },
  {
    name: "Knowledge International University",
    address: "1014 Starling Point",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis",
    image:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    website: "https://gnu.org/duis.json",
  },
  {
    name: "Heidelberg College",
    address: "61340 Eliot Avenue",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    image:
      "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    website: "",
  },
  {
    name: "Roskilde University",
    address: "83 Warrior Avenue",
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    image:
      "https://images.unsplash.com/photo-1602780374996-8c6499ce7420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    website: "http://senate.gov/etiam/justo/etiam/pretium.json",
  },
  {
    name: "Universidade Federal de Campina Grande",
    address: "10747 Melby Point",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    image:
      "https://images.unsplash.com/photo-1569447891824-7a1758aa73a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    website: "http://php.net/erat.html",
  },
  {
    name: "University of Nizwa",
    address: "6 Burning Wood Alley",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    image:
      "https://images.unsplash.com/photo-1619512673224-91cfb2688284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    website: "http://latimes.com/proin.xml",
  },
  {
    name: "Modern Acadmy",
    address: "92 Sachs Drive",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    image:
      "https://images.unsplash.com/photo-1527891751199-7225231a68dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    website: "https://usgs.gov/etiam/pretium/iaculis/justo.xml",
  },
  {
    name: "Moscow State University of Economics, Statistics and Informatics",
    address: "0 Little Fleur Trail",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    website: "https://irs.gov/condimentum/id/luctus/nec/molestie/sed.jsp",
  },
  {
    name: "Fachhochschule Nordhausen",
    address: "224 Shasta Pass",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    image:
      "https://images.unsplash.com/photo-1594027386703-9543cc30dae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    website: "http://microsoft.com/nullam.html",
  },
  {
    name: "Kuvempu University",
    address: "06093 Fuller Lane",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    website:
      "http://skype.com/curabitur/at/ipsum/ac/tellus/semper/interdum.jpg",
  },
  {
    name: "Chung Yuan Christian University",
    address: "293 Grasskamp Way",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    website: "https://myspace.com/ultrices/posuere/cubilia.js",
  },
  {
    name: "Kazak National Technical University",
    address: "058 Westport Alley",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    website: "https://i2i.jp/nullam.aspx",
    image: "",
  },
  {
    name: "Posts & Telecommunications Institute of Technology",
    address: "21 Sunfield Road",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    website: "http://google.it/at.json",
    image: "",
  },
  {
    name: "Gulf University for Science and Technology",
    address: "45601 Gina Terrace",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    website: "http://geocities.jp/vel.js",
    image: "",
  },
  {
    name: "The College of New Jersey",
    address: "410 Waywood Junction",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    website: "http://reddit.com/elit/ac/nulla.xml",
    image: "",
  },
  {
    name: "Kilimanjaro Christian Medical College",
    address: "7559 Kedzie Street",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    website: "http://state.tx.us/tincidunt/eu/felis/fusce/posuere/felis.json",
    image: "",
  },
  {
    name: "Université de Ngaoundéré",
    address: "441 Ruskin Pass",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    website: "https://wired.com/vestibulum/proin/eu/mi/nulla.aspx",
    image: "",
  },
  {
    name: "University of Mohaghegh",
    address: "8 Meadow Valley Park",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    website: "https://latimes.com/in/lectus/pellentesque.js",
    image: "",
  },
  {
    name: "Universidad de San Pablo CEU",
    address: "39070 Warrior Point",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    website:
      "http://clickbank.net/malesuada/in/imperdiet/et/commodo/vulputate/justo.json",
    image: "",
  },
  {
    name: "Houdegbe North American University Benin",
    address: "833 Barby Crossing",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    website: "http://amazon.co.jp/diam/neque/vestibulum/eget/vulputate/ut.aspx",
    image: "",
  },
  {
    name: "Universidad Católica Anselmo Llorente",
    address: "990 Troy Center",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    website: "http://businesswire.com/cursus/id/turpis.json",
    image: "",
  },
  {
    name: "Perm State Medical Academy",
    address: "49603 Nevada Court",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    website: "http://github.io/non/lectus/aliquam/sit/amet/diam.json",
    image: "",
  },
  {
    name: "Hanoi National Economics University",
    address: "3 Susan Hill",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    website:
      "https://acquirethisname.com/nibh/fusce/lacus/purus/aliquet/at.xml",
    image: "",
  },
  {
    name: "Shenyang Institute of Chemical Technology",
    address: "7571 Mitchell Junction",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    website: "https://t.co/pretium/iaculis/justo.jpg",
    image: "",
  },
  {
    name: "University of Opole",
    address: "34330 Vahlen Alley",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    website: "http://gizmodo.com/non.json",
    image: "",
  },
  {
    name: "MCI-Management Center Innsbruck",
    address: "329 Burrows Crossing",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    website: "http://unblog.fr/sagittis/nam/congue/risus.html",
    image: "",
  },
  {
    name: "Port Said University",
    address: "915 Larry Street",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    website: "http://census.gov/ut/dolor.xml",
    image: "",
  },
  {
    name: "Universidad Nacional Experimental Romulo Gallegos",
    address: "52 Forest Dale Terrace",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    website: "https://cloudflare.com/mauris/laoreet/ut.js",
    image: "",
  },
  {
    name: "University of the Sunshine Coast",
    address: "03461 Susan Parkway",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    website:
      "https://usatoday.com/morbi/odio/odio/elementum/eu/interdum/eu.json",
    image: "",
  },
  {
    name: "Technological Education Institute of Larissa",
    address: "57308 Fremont Court",
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    website: "http://ucoz.com/blandit/non/interdum/in/ante/vestibulum/ante.js",
    image: "",
  },
  {
    name: "Popakademie Baden-Württemberg",
    address: "75 Thackeray Parkway",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    website: "http://wufoo.com/vivamus/vel.jpg",
    image: "",
  },
  {
    name: "University of Ilorin",
    address: "5 Bluejay Court",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    website: "https://acquirethisname.com/luctus/ultricies/eu/nibh.jsp",
    image: "",
  },
  {
    name: "Pomor State University",
    address: "2 Commercial Pass",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    website: "https://miibeian.gov.cn/eu.png",
    image: "",
  },
  {
    name: "Wheeling Jesuit University",
    address: "2944 Hayes Road",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    website: "https://multiply.com/amet.js",
    image: "",
  },
  {
    name: "Damietta University",
    address: "7 Portage Pass",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    website: "https://ucoz.ru/odio/odio/elementum/eu/interdum.png",
    image: "",
  },
  {
    name: "Brandenburgische Technische Universität Cottbus",
    address: "38906 Ridge Oak Avenue",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    website:
      "http://senate.gov/ipsum/dolor/sit/amet/consectetuer/adipiscing/elit.json",
    image: "",
  },
  {
    name: "Academy of Economics in Wroclaw",
    address: "26 Lighthouse Bay Hill",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    website: "https://qq.com/in/quam.js",
    image: "",
  },
  {
    name: "Universidad del Norte",
    address: "9 Crescent Oaks Junction",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    website: "http://cnet.com/habitasse.jsp",
    image: "",
  },
  {
    name: "California State University, Fresno",
    address: "4 American Street",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    website: "https://tuttocitta.it/non.jsp",
    image: "",
  },
  {
    name: "University of Louisville",
    address: "810 Briar Crest Lane",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    website: "http://bing.com/proin/at/turpis.jsp",
    image: "",
  },
  {
    name: "Fountain University",
    address: "5 Manley Court",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    website: "http://webeden.co.uk/justo.png",
    image: "",
  },
  {
    name: "California State University, Los Angeles",
    address: "338 Bashford Point",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    website: "https://163.com/ut/tellus/nulla/ut/erat/id/mauris.js",
    image: "",
  },
  {
    name: "Georg-Simon-Ohm-Fachhochschule Nürnberg",
    address: "47876 Anthes Alley",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    website: "https://last.fm/morbi/quis/tortor/id/nulla/ultrices.aspx",
    image: "",
  },
  {
    name: "American InterContinental University - Georgia",
    address: "2 5th Circle",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    website: "http://engadget.com/id/pretium.js",
    image: "",
  },
  {
    name: "Institut des hautes études économiques et commerciales",
    address: "39965 Forest Run Avenue",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    website:
      "https://hud.gov/id/mauris/vulputate/elementum/nullam/varius/nulla.png",
    image: "",
  },
  {
    name: "Ohio College of Podiatric Medicine",
    address: "75322 Sunbrook Crossing",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    website: "http://nationalgeographic.com/tristique.jpg",
    image: "",
  },
  {
    name: "Port Dickson Polytechnic",
    address: "0 Ronald Regan Place",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    website:
      "https://prnewswire.com/libero/convallis/eget/eleifend/luctus.json",
    image: "",
  },
  {
    name: "Hachinohe Institute of Technology",
    address: "751 Daystar Parkway",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    website: "http://ameblo.jp/praesent/blandit/nam/nulla/integer.js",
    image: "",
  },
  {
    name: "Aquinas College",
    address: "5 Evergreen Place",
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    website: "https://dot.gov/pellentesque/eget/nunc.png",
    image: "",
  },
  {
    name: "Troy University, Phenix City",
    address: "4 Monterey Plaza",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    website: "http://eventbrite.com/potenti/in/eleifend/quam/a/odio.xml",
    image: "",
  },
  {
    name: "Toyama Prefectural University",
    address: "1 Carey Center",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    website: "https://marriott.com/habitasse.jsp",
    image: "",
  },
  {
    name: "Wartburg College",
    address: "49 Packers Park",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    website: "https://meetup.com/eu/interdum.jpg",
    image: "",
  },
  {
    name: "Universidad de Jaén",
    address: "09 Sunfield Drive",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    website: "https://over-blog.com/dolor/morbi/vel/lectus/in.png",
    image: "",
  },
  {
    name: "Kansai Gaidai University",
    address: "4 Iowa Place",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    website: "https://guardian.co.uk/eleifend/donec.aspx",
    image: "",
  },
  {
    name: "University of Agriculture Makurdi",
    address: "3 Fisk Hill",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    website: "http://moonfruit.com/libero/convallis/eget/eleifend/luctus.jsp",
    image: "",
  },
  {
    name: "Universidad de Magallanes",
    address: "18844 Jackson Park",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    website: "http://list-manage.com/blandit/nam/nulla/integer/pede/justo.json",
    image: "",
  },
  {
    name: "Riyadh College of Dentistry and Pharmacy",
    address: "07 Mosinee Pass",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    website: "http://nymag.com/ultrices/vel/augue/vestibulum/ante/ipsum.xml",
    image: "",
  },
  {
    name: "University of St. Cyril and Methodius in Trnava",
    address: "746 Miller Parkway",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    website: "https://e-recht24.de/ligula/in/lacus/curabitur/at.png",
    image: "",
  },
  {
    name: "Oakton Community College",
    address: "594 Esker Terrace",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    website: "https://cnn.com/sociis.js",
    image: "",
  },
  {
    name: "Queen Arwa University",
    address: "01947 Walton Junction",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    website: "https://youtube.com/sed/nisl/nunc.jpg",
    image: "",
  },
  {
    name: "Payame Noor University, Tafresh",
    address: "9 Dwight Pass",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    website:
      "https://blogtalkradio.com/in/hac/habitasse/platea/dictumst/morbi.html",
    image: "",
  },
  {
    name: "Bishop's University",
    address: "009 Mitchell Lane",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    website: "https://utexas.edu/quis/odio/consequat.json",
    image: "",
  },
  {
    name: "Barber-Scotia College",
    address: "10697 Utah Plaza",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    website: "http://blinklist.com/sem/duis/aliquam.aspx",
    image: "",
  },
  {
    name: "Business and Hotel Management School",
    address: "1 Westend Junction",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    website: "http://reference.com/vestibulum/ac/est/lacinia/nisi/venenatis.js",
    image: "",
  },
  {
    name: "Institut National des Sciences Appliquées de Lyon",
    address: "6 Texas Terrace",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    website: "https://cnet.com/donec/ut/dolor/morbi/vel/lectus.xml",
    image: "",
  },
  {
    name: "University College of Gävle",
    address: "2 Sunbrook Point",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    website:
      "https://go.com/vestibulum/aliquet/ultrices/erat/tortor/sollicitudin/mi.jsp",
    image: "",
  },
  {
    name: "Fachhochschule Wilhelmshaven",
    address: "72161 Burning Wood Court",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    website: "https://wp.com/elit/sodales/scelerisque/mauris/sit/amet.html",
    image: "",
  },
  {
    name: "Minamikyushu University",
    address: "444 Delladonna Junction",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    website: "http://biblegateway.com/felis/fusce/posuere/felis/sed/lacus.html",
    image: "",
  },
  {
    name: "Nanzan University",
    address: "61894 Algoma Way",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    website: "http://diigo.com/libero/convallis.js",
    image: "",
  },
  {
    name: "Merlimau Polytechnic",
    address: "8713 Stone Corner Plaza",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    website: "https://de.vu/nunc/vestibulum/ante.aspx",
    image: "",
  },
  {
    name: "Texas Woman's University",
    address: "755 Transport Plaza",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    website: "https://fda.gov/ac/est/lacinia/nisi.json",
    image: "",
  },
  {
    name: "Vancouver Community College",
    address: "9 Petterle Trail",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    website:
      "https://skyrock.com/consectetuer/eget/rutrum/at/lorem/integer.aspx",
    image: "",
  },
  {
    name: "Silver Lake College",
    address: "94 Butterfield Plaza",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    website: "https://bbc.co.uk/imperdiet/nullam/orci/pede/venenatis/non.js",
    image: "",
  },
  {
    name: "University of LaVerne in Athens",
    address: "84215 Lillian Junction",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    website: "https://symantec.com/sapien/ut/nunc/vestibulum.png",
    image: "",
  },
  {
    name: "Universidad de Managua (U de M)",
    address: "4 Talmadge Way",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    website: "http://example.com/velit.jsp",
    image: "",
  },
  {
    name: "International Islamic College of Penang",
    address: "70817 Oxford Junction",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    website: "https://eventbrite.com/curabitur/in/libero/ut/massa.json",
    image: "",
  },
  {
    name: "Manhattan Christian College",
    address: "56 Granby Place",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    website: "http://usgs.gov/etiam/faucibus/cursus/urna.aspx",
    image: "",
  },
  {
    name: "International Budo University",
    address: "1 Hoepker Trail",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    website:
      "https://usgs.gov/montes/nascetur/ridiculus/mus/vivamus/vestibulum/sagittis.aspx",
    image: "",
  },
  {
    name: "Sardarkrushinagar Dantiwada Agricultural University",
    address: "8041 Kedzie Pass",
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    website: "https://hatena.ne.jp/a/libero/nam/dui/proin/leo.png",
    image: "",
  },
  {
    name: "Anadolu University",
    address: "857 Eagan Point",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    website:
      "https://blogspot.com/natoque/penatibus/et/magnis/dis/parturient.aspx",
    image: "",
  },
  {
    name: "Universidad de las Américas - Puebla",
    address: "19 Ramsey Avenue",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    website: "http://independent.co.uk/pulvinar/lobortis/est/phasellus.png",
    image: "",
  },
  {
    name: "Ghana Institute of Management and Public Administration (GIMPA)",
    address: "1093 Cherokee Avenue",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    website: "https://theglobeandmail.com/lorem/quisque/ut.jpg",
    image: "",
  },
  {
    name: "University of Mashhad Pnu",
    address: "63 Twin Pines Crossing",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    website: "http://blogs.com/dictumst/maecenas/ut/massa/quis.js",
    image: "",
  },
  {
    name: "Agricultural University of Lublin",
    address: "9 Packers Junction",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    website: "https://hao123.com/nec/molestie/sed/justo/pellentesque.png",
    image: "",
  },
  {
    name: "Universidade Federal do Amapá",
    address: "9493 Packers Street",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    website: "https://intel.com/cum/sociis/natoque/penatibus/et/magnis.png",
    image: "",
  },
  {
    name: "NGO Vladikavkaz Institute of Economics, Management, and Law",
    address: "86 Fieldstone Trail",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    website: "http://vkontakte.ru/lobortis/sapien/sapien/non/mi/integer.js",
    image: "",
  },
  {
    name: "Ajman University of Science & Technology",
    address: "37995 Fremont Hill",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    website: "http://angelfire.com/turpis.png",
    image: "",
  },
  {
    name: "Taegu University",
    address: "033 Barby Center",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    website: "http://indiegogo.com/est.html",
    image: "",
  },
  {
    name: "Slovak University of Agriculture in Nitra",
    address: "5 Gateway Road",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    website: "https://nationalgeographic.com/odio/donec/vitae/nisi/nam.png",
    image: "",
  },
  {
    name: "Georgia Southern University",
    address: "59 Sunbrook Park",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    website: "http://google.cn/lectus/pellentesque/eget.aspx",
    image: "",
  },
  {
    name: "University of Wisconsin - Eau Claire",
    address: "6 Hallows Center",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    website: "https://slashdot.org/id/consequat.xml",
    image: "",
  },
  {
    name: "Pusan Women's University",
    address: "430 Paget Lane",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    website: "http://issuu.com/volutpat/sapien/arcu.png",
    image: "",
  },
  {
    name: "Lviv National University Ivan Franko",
    address: "296 Bowman Parkway",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    website: "https://examiner.com/amet.jpg",
    image: "",
  },
  {
    name: "Universidade Independente",
    address: "0164 Texas Court",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    website: "https://about.com/sapien.jpg",
  },
];

module.exports = { students, universities };
