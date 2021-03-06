import * as companiesAPI from "./CompanyService";
import * as categoriesAPI from "./CategoryService";



const products = [{
    "_id": "5cc9d5515d4864e258cd08b7",
    "index": 0,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Samsung Galaxy S10 Plus",
    "price": 82770,
    "company": {
      "_id": "5cc98af465323d13f25f622c",
      "company_name": "Samsung"
    },
    "category": {
      "_id": "5cc986dd66f621f1536d1496",
      "category": "Phone"
    },
    "quantity": 40,
    "ratings": 2.7,
    "description": "Magna pariatur sunt mollit cillum velit adipisicing nisi voluptate non. Adipisicing qui dolor ex occaecat aliqua in aliquip irure Lorem velit amet ex. Voluptate aliqua cupidatat sit adipisicing amet amet consectetur minim incididunt non cupidatat pariatur est. Dolor culpa cupidatat occaecat pariatur fugiat in.\r\n",
    "registered": "2019-02-02T01:18:25 -03:00"
  },
  {
    "_id": "5cc9d551cdcc246c6634170e",
    "index": 1,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "iPhone XS Max",
    "price": 107995,
    "company": {
      "_id": "5cc98af47feab7457c8f17cb",
      "company_name": "Apple"
    },
    "category": {
      "_id": "5cc986dd66f621f1536d1496",
      "category": "Phone"
    },
    "quantity": 5,
    "ratings": 2.4,
    "description": "Eu officia amet velit occaecat ipsum deserunt aute nostrud ipsum veniam laboris nulla. Minim id cillum fugiat proident irure aliqua qui adipisicing anim quis cupidatat ea minim reprehenderit. Dolor voluptate aliquip amet et. Duis ipsum culpa Lorem est reprehenderit mollit ad magna tempor amet. Deserunt anim eiusmod ad cillum sunt magna.\r\n",
    "registered": "2018-04-06T04:50:20 -03:00"
  },
  {
    "_id": "5cc9d55117a23b79d5cae9ac",
    "index": 2,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Sony Xperia 10 Plus",
    "price": 49990,
    "company": {
      "_id": "5cc98af465323d13f25f622c",
      "company_name": "Samsung"
    },
    "category": {
      "_id": "5cc986dd66f621f1536d1496",
      "category": "Phone"
    },
    "quantity": 22,
    "ratings": 2.7,
    "description": "Reprehenderit officia pariatur ad id qui cupidatat. Sint consequat pariatur aute esse. Lorem ad et labore culpa occaecat exercitation nulla nostrud sunt cillum in. Ea ex eiusmod est quis elit fugiat sunt proident laboris duis sunt. Do consectetur sit dolor cillum mollit laborum mollit.\r\n",
    "registered": "2019-01-19T05:41:37 -03:00"
  },
  {
    "_id": "5cc9d5511575f7b13eed5301",
    "index": 3,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Sony Xperia 10 Plus",
    "price": 43000,
    "company": {
      "_id": "5cc98af4cc9e362b91638ffa",
      "company_name": "Sony"
    },
    "category": {
      "_id": "5cc986dd66f621f1536d1496",
      "category": "Phone"
    },
    "quantity": 29,
    "ratings": 4.1,
    "description": "Esse deserunt fugiat amet labore fugiat commodo adipisicing dolor sunt nisi. Dolor eu laboris reprehenderit laborum ipsum elit occaecat. Et laboris eiusmod eu quis consequat cillum eiusmod ut esse sit dolore.\r\n",
    "registered": "2018-12-12T06:00:45 -03:00"
  },
  {
    "_id": "5cc9d5513662771608859bbe",
    "index": 4,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Huawei P30 Pro",
    "price": 99999,
    "company": {
      "_id": "5cc98af4808gf521ddeeec4c",
      "company_name": "Huawei"
    },
    "category": {
      "_id": "5cc986dd66f621f1536d1496",
      "category": "Phone"
    },
    "quantity": 24,
    "ratings": 2.6,
    "description": "Excepteur id ipsum minim Lorem aute cillum sunt minim. Tempor magna reprehenderit deserunt laborum minim ad non enim do qui amet consequat excepteur. Sint non aliquip officia ut duis id. Duis officia id anim ullamco non sit excepteur. Nisi anim et anim eu culpa mollit officia cupidatat ea. Velit magna excepteur esse quis amet.\r\n",
    "registered": "2019-01-15T10:28:24 -03:00"
  },
  {
    "_id": "5cc9d551ce9d9d74f06687dc",
    "index": 5,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "OnePlus 6T",
    "price": 57499,
    "company": {
      "_id": "5cc98af9008gf521ddyuec9c",
      "company_name": "OnePlus"
    },
    "category": {
      "_id": "5cc986dd66f621f1536d1496",
      "category": "Phone"
    },
    "quantity": 34,
    "ratings": 4.2,
    "description": "Nulla amet eu consectetur sit adipisicing ut ea dolor laborum consequat tempor velit. Excepteur eu nostrud dolore aute sint et cupidatat velit reprehenderit nisi tempor ullamco. Nulla dolor commodo deserunt ea fugiat labore Lorem pariatur qui velit. Ut incididunt aliquip exercitation irure occaecat nulla nulla amet laborum adipisicing cillum.\r\n",
    "registered": "2019-01-15T09:32:04 -03:00"
  },
  {
    "_id": "5cc9d551c7c1c384eada3c5f",
    "index": 6,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Huawei Y7 Prime",
    "price": 16599,
    "company": {
      "_id": "5cc98af4808gf521ddeeec4c",
      "company_name": "Huawei"
    },
    "category": {
      "_id": "5cc986dd66f621f1536d1496",
      "category": "Phone"
    },
    "quantity": 8,
    "ratings": 3.9,
    "description": "Qui adipisicing exercitation commodo tempor eiusmod est aute duis ut consectetur Lorem exercitation. Incididunt occaecat voluptate velit ullamco incididunt est velit dolore aliquip aliquip sint minim. Tempor quis cupidatat ex fugiat ad sit dolore non irure quis. Qui proident dolore magna aute mollit. Voluptate voluptate sunt ullamco ex amet aute proident minim laboris.\r\n",
    "registered": "2018-06-14T04:08:18 -03:00"
  },
  {
    "_id": "5cc9d551304ace345c54c4b4",
    "index": 7,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Asus ROG Phone",
    "price": 89999,
    "company": {
      "_id": "5cc98af46ecd0459d0a6cca4",
      "company_name": "Asus"
    },
    "category": {
      "_id": "5cc986dd66f621f1536d1496",
      "category": "Phone"
    },
    "quantity": 21,
    "ratings": 3.8,
    "description": "Duis est Lorem eiusmod nisi ipsum minim culpa cupidatat commodo nostrud est exercitation aliquip aliquip. Aute ipsum magna cillum labore laborum laborum officia eu sunt occaecat nulla ipsum. Amet anim excepteur labore culpa et id sunt. Officia aliquip ut sit velit sint incididunt in adipisicing aliquip ut ad veniam. Esse aute voluptate velit commodo veniam laboris nostrud amet quis excepteur officia consectetur id.\r\n",
    "registered": "2018-10-20T08:13:09 -03:00"
  },
  {
    "_id": "5cc9d551fc757838c790009c",
    "index": 8,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "LG V40 ThinQ",
    "price": 92000,
    "company": {
      "_id": "5cc98af474d4e9881232b6e9",
      "company_name": "LG"
    },
    "category": {
      "_id": "5cc986dd66f621f1536d1496",
      "category": "Phone"
    },
    "quantity": 30,
    "ratings": 2.3,
    "description": "Cillum nostrud enim aute amet ad. Minim qui adipisicing qui ullamco ipsum. Laboris veniam irure aute minim aute elit tempor aliquip aliquip ea eiusmod ad elit.\r\n",
    "registered": "2018-01-18T10:41:20 -03:00"
  },
  {
    "_id": "5cc9d55191a4fd817bb5d704",
    "index": 9,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Dell XPS 13",
    "price": 92900,
    "company": {
      "_id": "5cc98af4434983902fe62651",
      "company_name": "Dell"
    },
    "category": {
      "_id": "5cc986ddc2f55e8e4c6e6ba5",
      "category": "Laptop"
    },
    "quantity": 7,
    "ratings": 2.7,
    "description": "Anim elit qui magna magna eiusmod laboris. Ea elit elit excepteur enim. Id esse est quis consectetur sit in commodo voluptate occaecat incididunt ullamco non.\r\n",
    "registered": "2019-01-18T09:00:25 -03:00"
  },
  {
    "_id": "5cc9d5516b9c293edc5689dc",
    "index": 10,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "HP Spectre x360",
    "price": 151500,
    "company": {
      "_id": "5cc98af07frtb7459b8f17vb",
      "company_name": "HP"
    },
    "category": {
      "_id": "5cc986ddc2f55e8e4c6e6ba5",
      "category": "Laptop"
    },
    "quantity": 11,
    "ratings": 2.9,
    "description": "Cupidatat qui minim sunt in elit eiusmod labore sunt quis culpa deserunt cillum nisi. Enim deserunt laboris dolor in. Duis ad sunt nostrud sunt Lorem consectetur.\r\n",
    "registered": "2018-07-24T07:18:38 -03:00"
  },
  {
    "_id": "5cc9d55161ce6db05a2cc9a7",
    "index": 11,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Apple MacBook Pro 15-Inch ",
    "price": 240000,
    "company": {
      "_id": "5cc98af47feab7457c8f17cb",
      "company_name": "Apple"
    },
    "category": {
      "_id": "5cc986ddc2f55e8e4c6e6ba5",
      "category": "Laptop"
    },
    "quantity": 34,
    "ratings": 2,
    "description": "Nisi laboris amet commodo consectetur minim commodo. Ut tempor pariatur labore in proident sit commodo enim. Qui fugiat qui occaecat laborum irure enim.\r\n",
    "registered": "2019-04-11T06:51:57 -03:00"
  },
  {
    "_id": "5cc9d551e4f6f1ee9660cf64",
    "index": 12,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Lenovo Yoga",
    "price": 100000,
    "company": {
      "_id": "5cc98af4b9bfed9fe6e633cd",
      "company_name": "Lenovo"
    },
    "category": {
      "_id": "5cc986ddc2f55e8e4c6e6ba5",
      "category": "Laptop"
    },
    "quantity": 26,
    "ratings": 4.4,
    "description": "Irure reprehenderit occaecat duis consectetur deserunt dolore ut consectetur dolor reprehenderit magna elit ullamco velit. Id id do ut eiusmod excepteur magna. Ipsum cupidatat irure labore do deserunt esse voluptate elit irure cupidatat. Voluptate sit adipisicing laborum cillum qui id qui amet adipisicing sit eu. Non consectetur consectetur dolore duis deserunt occaecat laboris aliquip nisi aliqua ipsum adipisicing reprehenderit magna.\r\n",
    "registered": "2018-02-02T08:40:15 -03:00"
  },
  {
    "_id": "5cc9d55112f830725854c494",
    "index": 13,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Asus Chromebook C523",
    "price": 40000,
    "company": {
      "_id": "5cc98af46ecd0459d0a6cca4",
      "company_name": "Asus"
    },
    "category": {
      "_id": "5cc986ddc2f55e8e4c6e6ba5",
      "category": "Laptop"
    },
    "quantity": 33,
    "ratings": 3.3,
    "description": "Reprehenderit laborum culpa quis ipsum. Deserunt magna ut est commodo cillum cupidatat aliquip ea nostrud magna sit irure qui. Dolor velit culpa proident est voluptate labore exercitation nostrud sunt nisi id sint sunt. Dolor velit id Lorem reprehenderit ea irure adipisicing consequat est dolore occaecat. Ad mollit ipsum mollit adipisicing fugiat excepteur enim mollit commodo magna id incididunt.\r\n",
    "registered": "2018-06-02T06:58:46 -03:00"
  },
  {
    "_id": "5cc9d55105209794508d18f3",
    "index": 14,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Huawei MateBook",
    "price": 251,
    "company": {
      "_id": "5cc98af4808gf521ddeeec4c",
      "company_name": "Huawei"
    },
    "category": {
      "_id": "5cc986ddc2f55e8e4c6e6ba5",
      "category": "Laptop"
    },
    "quantity": 32,
    "ratings": 4.8,
    "description": "Cillum ex velit fugiat esse ea anim deserunt velit sunt anim voluptate aliquip deserunt nisi. Consectetur esse in irure et ad adipisicing sint eiusmod sit et aliquip velit. Ex ad cupidatat sit enim officia fugiat occaecat sint commodo magna enim amet culpa. Fugiat aliquip non consectetur sunt excepteur dolore tempor dolore excepteur aliquip nostrud. Dolor ipsum ea amet deserunt ullamco adipisicing anim. Sint id cillum dolor esse.\r\n",
    "registered": "2018-06-07T11:57:09 -03:00"
  },
  {
    "_id": "5cc9d551868830fbef2ce93a",
    "index": 15,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Lenovo Lenovo ThinkPad X1",
    "price": 75000,
    "company": {
      "_id": "5cc98af4b9bfed9fe6e633cd",
      "company_name": "Lenovo"
    },
    "category": {
      "_id": "5cc986ddc2f55e8e4c6e6ba5",
      "category": "Laptop"
    },
    "quantity": 12,
    "ratings": 4.4,
    "description": "Sint aliqua irure voluptate cillum. Cupidatat eu ea mollit quis elit magna quis ea. Dolore exercitation elit duis ut reprehenderit aute.\r\n",
    "registered": "2019-03-28T03:44:13 -03:00"
  },
  {
    "_id": "5cc9d5512d7ea59172622954",
    "index": 16,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "LG OLED55E8PUA",
    "price": 249600,
    "company": {
      "_id": "5cc98af474d4e9881232b6e9",
      "company_name": "LG"
    },
    "category": {
      "_id": "5cc986ddc4ecba20dd07e529",
      "category": "Television"
    },
    "quantity": 30,
    "ratings": 2.1,
    "description": "Culpa anim ipsum in ex enim Lorem ad veniam ad pariatur ipsum. Dolore officia deserunt dolore laboris laboris exercitation aliqua ipsum consectetur fugiat. Quis anim laboris qui deserunt minim proident minim exercitation.\r\n",
    "registered": "2018-06-12T11:36:52 -03:00"
  },
  {
    "_id": "5cc9d551a53517bcb94ff525",
    "index": 17,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Sony Bravia A9F",
    "price": 230000,
    "company": {
      "_id": "5cc98af4cc9e362b91638ffa",
      "company_name": "Sony"
    },
    "category": {
      "_id": "5cc986ddc4ecba20dd07e529",
      "category": "Television"
    },
    "quantity": 34,
    "ratings": 3.3,
    "description": "Sit consectetur ut anim ex do cupidatat ex laboris. Officia excepteur laboris incididunt aliqua mollit voluptate dolor sit consectetur sunt irure quis deserunt. Laboris Lorem ut exercitation ullamco laborum dolor exercitation dolor commodo reprehenderit in occaecat eiusmod.\r\n",
    "registered": "2018-05-23T03:32:39 -03:00"
  },
  {
    "_id": "5cc9d55182dbc3abbefab1b1",
    "index": 18,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Samsung Q9FN QLED",
    "price": 287000,
    "company": {
      "_id": "5cc98af465323d13f25f622c",
      "company_name": "Samsung"
    },
    "category": {
      "_id": "5cc986ddc4ecba20dd07e529",
      "category": "Television"
    },
    "quantity": 31,
    "ratings": 5,
    "description": "Ullamco non veniam Lorem esse ullamco aute officia amet in magna elit et et ea. Excepteur et id cupidatat incididunt incididunt non cupidatat ipsum sit enim adipisicing dolore proident. Excepteur eiusmod irure veniam duis laborum aliqua labore. Non excepteur magna labore enim nisi sit velit ipsum ad incididunt laboris duis.\r\n",
    "registered": "2018-07-17T05:23:57 -03:00"
  },
  {
    "_id": "5cc9d551c3aada821b963720",
    "index": 19,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Sony Master Series",
    "price": 299800,
    "company": {
      "_id": "5cc98af4cc9e362b91638ffa",
      "company_name": "Sony"
    },
    "category": {
      "_id": "5cc986ddc4ecba20dd07e529",
      "category": "Television"
    },
    "quantity": 6,
    "ratings": 4.4,
    "description": "Adipisicing proident officia sint ut eu enim duis cillum. Cupidatat fugiat Lorem ex anim aliquip ex irure irure culpa occaecat sunt ea incididunt. Nostrud cillum velit dolore Lorem id fugiat amet commodo veniam dolor ipsum anim. Minim tempor culpa eiusmod pariatur ea velit nostrud mollit. Eu occaecat incididunt dolore dolore sunt veniam consectetur nisi exercitation nisi dolor. Ullamco do ea ea et est elit aliquip incididunt reprehenderit cillum culpa consequat. Anim qui nisi esse reprehenderit consequat eu id in laborum consectetur minim.\r\n",
    "registered": "2018-07-28T06:10:59 -03:00"
  },
  {
    "_id": "5cc9d551b3ac5eaf530d6ed2",
    "index": 20,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "LG E8",
    "price": 224900,
    "company": {
      "_id": "5cc98af474d4e9881232b6e9",
      "company_name": "LG"
    },
    "category": {
      "_id": "5cc986ddc4ecba20dd07e529",
      "category": "Television"
    },
    "quantity": 24,
    "ratings": 3.9,
    "description": "Dolore tempor qui ea veniam do officia aliquip. Fugiat proident adipisicing velit cillum esse mollit ad est in enim. Labore reprehenderit magna incididunt quis ad aliqua excepteur nostrud. In fugiat labore proident elit et consequat. Velit proident sit irure sunt veniam dolore culpa. Quis minim commodo velit do sint qui amet proident. Adipisicing aliqua non sunt commodo dolor tempor voluptate aute ullamco ad commodo duis cillum.\r\n",
    "registered": "2018-02-04T08:41:48 -03:00"
  },
  {
    "_id": "5cc9d5510e04e12895c8e930",
    "index": 21,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Panasonic TX-55FZ802",
    "price": 140000,
    "company": {
      "_id": "5cc98af0b9tfed9fe9e644cd",
      "company_name": "Panasonic"
    },
    "category": {
      "_id": "5cc986ddc4ecba20dd07e529",
      "category": "Television"
    },
    "quantity": 31,
    "ratings": 2.7,
    "description": "Exercitation exercitation velit est eu. Et esse occaecat anim occaecat consectetur esse. Do proident sit eu amet veniam sint do qui veniam exercitation dolor ipsum cupidatat ut. Incididunt veniam adipisicing eiusmod quis nostrud dolor officia ea. Do est mollit ex ullamco fugiat aliqua incididunt tempor amet.\r\n",
    "registered": "2018-10-10T07:22:26 -03:00"
  },
  {
    "_id": "5cc9d55104f140aed1b64425",
    "index": 22,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Nikon D3500",
    "price": 299695,
    "company": {
      "_id": "5cc98af490323d13f25f699c",
      "company_name": "Nikon"
    },
    "category": {
      "_id": "5cc986dd5b6812fc83ca5b37",
      "category": "Camera"
    },
    "quantity": 17,
    "ratings": 4.7,
    "description": "Lorem ex ut do sunt aute in ipsum est do Lorem tempor nulla sint. Mollit officia Lorem consectetur ad do duis non ullamco consectetur veniam ea cillum veniam quis. Ea proident sit magna duis ad reprehenderit cupidatat non voluptate ullamco laborum. Commodo nulla deserunt tempor ex ut do labore sit ex consectetur magna tempor ea Lorem. Culpa proident laborum consectetur enim nulla laborum.\r\n",
    "registered": "2018-11-21T07:19:52 -03:00"
  },
  {
    "_id": "5cc9d551400ef6ee28e84f89",
    "index": 23,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Sony Alpha 6000",
    "price": 39800,
    "company": {
      "_id": "5cc98af4cc9e362b91638ffa",
      "company_name": "Sony"
    },
    "category": {
      "_id": "5cc986dd5b6812fc83ca5b37",
      "category": "Camera"
    },
    "quantity": 36,
    "ratings": 2.2,
    "description": "Consequat nisi pariatur occaecat irure et sit irure dolor sit. Non tempor elit deserunt ex fugiat. Exercitation aliqua sunt nisi in ut occaecat culpa culpa sit eiusmod pariatur qui esse. Occaecat proident mollit velit velit tempor occaecat elit voluptate pariatur duis Lorem mollit et ut.\r\n",
    "registered": "2018-04-07T08:00:43 -03:00"
  },
  {
    "_id": "5cc9d5519bf0f80b375feb68",
    "index": 24,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Panasonic TZ200/ZS200",
    "price": 69799,
    "company": {
      "_id": "5cc98af0b9tfed9fe9e644cd",
      "company_name": "Panasonic"
    },
    "category": {
      "_id": "5cc986dd5b6812fc83ca5b37",
      "category": "Camera"
    },
    "quantity": 25,
    "ratings": 3.6,
    "description": "Commodo voluptate nostrud labore Lorem aliquip ut sunt elit minim elit mollit ea do est. Consequat nulla cupidatat cillum reprehenderit voluptate consectetur non. Veniam commodo eu deserunt tempor laborum incididunt amet. Commodo velit officia ullamco sit. Irure esse irure exercitation minim culpa ea tempor sunt occaecat id anim dolore amet proident.\r\n",
    "registered": "2018-05-07T10:30:52 -03:00"
  },
  {
    "_id": "5cc9d551385c40b76962dca8",
    "index": 25,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Nikon D850",
    "price": 299695,
    "company": {
      "_id": "5cc98af490323d13f25f699c",
      "company_name": "Nikon"
    },
    "category": {
      "_id": "5cc986dd5b6812fc83ca5b37",
      "category": "Camera"
    },
    "quantity": 33,
    "ratings": 4.7,
    "description": "Qui aute aliquip eiusmod qui sunt cillum officia amet occaecat fugiat eu ullamco irure aliquip. Eu qui proident commodo sint cupidatat officia ad magna pariatur in id fugiat irure. Reprehenderit ut duis laborum ipsum in officia laborum anim minim sit voluptate magna sint. Ullamco laborum qui irure amet amet.\r\n",
    "registered": "2018-02-15T11:41:14 -03:00"
  },
  {
    "_id": "5cc9d5513acf67fc0a89597c",
    "index": 26,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Sony A7R III",
    "price": 252959,
    "company": {
      "_id": "5cc98af4cc9e362b91638ffa",
      "company_name": "Sony"
    },
    "category": {
      "_id": "5cc986dd5b6812fc83ca5b37",
      "category": "Camera"
    },
    "quantity": 17,
    "ratings": 4.5,
    "description": "Est nulla tempor voluptate velit quis culpa. Qui in irure reprehenderit elit et velit eiusmod incididunt. Quis aute non ea minim fugiat irure ex adipisicing sint labore amet. Tempor exercitation in eu nulla aliquip.\r\n",
    "registered": "2018-05-31T05:26:28 -03:00"
  },
  {
    "_id": "5cc9d551f5a0ebdf21ce330e",
    "index": 27,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Canon EOS 6D II",
    "price": 129900,
    "company": {
      "_id": "5cc98af07frtb7457c8f17vb",
      "company_name": "Canon"
    },
    "category": {
      "_id": "5cc986dd5b6812fc83ca5b37",
      "category": "Camera"
    },
    "quantity": 19,
    "ratings": 2.1,
    "description": "Ex nisi eu aliqua et culpa culpa id occaecat ullamco aute ea. Ad excepteur incididunt aliqua nulla voluptate officia. Fugiat aliqua tempor nulla consequat pariatur. Minim non amet ipsum veniam aliquip nulla Lorem. Veniam minim consectetur proident labore cupidatat adipisicing sunt culpa tempor eu sit ea. Labore velit esse occaecat anim.\r\n",
    "registered": "2018-11-22T05:32:06 -03:00"
  },
  {
    "_id": "5cc9d5514f79c87d9fd4fd0e",
    "index": 28,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Panasonic Lumix GH5",
    "price": 129259,
    "company": {
      "_id": "5cc98af0b9tfed9fe9e644cd",
      "company_name": "Panasonic"
    },
    "category": {
      "_id": "5cc986dd5b6812fc83ca5b37",
      "category": "Camera"
    },
    "quantity": 21,
    "ratings": 4.7,
    "description": "Consequat velit aliquip Lorem tempor commodo veniam dolore tempor reprehenderit do tempor. Ipsum qui nisi occaecat magna amet do ea. Velit elit exercitation excepteur laborum ipsum ea pariatur eiusmod Lorem id voluptate officia.\r\n",
    "registered": "2018-09-08T10:52:27 -03:00"
  },
  {
    "_id": "5cc9d551fa894434b0d42968",
    "index": 29,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "OnePlus Bullets Wireless",
    "price": 7000,
    "company": {
      "_id": "5cc98af9008gf521ddyuec9c",
      "company_name": "OnePlus"
    },
    "category": {
      "_id": "5cc986ff66f621f1586d1446",
      "category": "Audio"
    },
    "quantity": 12,
    "ratings": 2.1,
    "description": "Quis qui do nisi sunt laborum tempor non consequat sint nulla. Excepteur amet anim duis sit et proident do et. Aute eiusmod ea culpa sit incididunt occaecat incididunt anim tempor.\r\n",
    "registered": "2018-10-25T09:15:06 -03:00"
  },
  {
    "_id": "5cc9d551a198ba1c7628bf91",
    "index": 30,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Apple AirPods",
    "price": 16000,
    "company": {
      "_id": "5cc98af47feab7457c8f17cb",
      "company_name": "Apple"
    },
    "category": {
      "_id": "5cc986ff66f621f1586d1446",
      "category": "Audio"
    },
    "quantity": 33,
    "ratings": 2.5,
    "description": "Commodo velit occaecat consequat cillum do culpa nulla exercitation non Lorem officia velit. Irure tempor duis reprehenderit mollit elit Lorem id exercitation cupidatat mollit est. Culpa consectetur nostrud consectetur esse ut laborum sit aliqua nulla.\r\n",
    "registered": "2019-04-27T06:00:20 -03:00"
  },
  {
    "_id": "5cc9d551c74f046959c1ba37",
    "index": 31,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Sony WH-1000XM3",
    "price": 35000,
    "company": {
      "_id": "5cc98af4cc9e362b91638ffa",
      "company_name": "Sony"
    },
    "category": {
      "_id": "5cc986ff66f621f1586d1446",
      "category": "Audio"
    },
    "quantity": 5,
    "ratings": 4.8,
    "description": "Voluptate dolore enim sit in fugiat esse cupidatat cupidatat cupidatat dolore aute. Labore ipsum exercitation veniam est deserunt sit sint. Sint irure ullamco non consequat pariatur occaecat minim officia ad sit. Ipsum esse dolor cillum excepteur eu ut excepteur nisi ullamco culpa amet esse. Irure deserunt ad minim nulla ipsum consectetur proident pariatur dolore incididunt aute ullamco pariatur adipisicing. Nulla anim proident mollit ullamco consectetur ipsum ullamco enim anim dolor esse esse.\r\n",
    "registered": "2018-01-26T04:09:39 -03:00"
  },
  {
    "_id": "5cc9d5519a4d4f1fe52a240f",
    "index": 32,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Sony WF-1000X",
    "price": "3,361",
    "company": {
      "_id": "5cc98af4cc9e362b91638ffa",
      "company_name": "Sony"
    },
    "category": {
      "_id": "5cc986ff66f621f1586d1446",
      "category": "Audio"
    },
    "quantity": 13,
    "ratings": 3.1,
    "description": "Occaecat irure aute commodo minim qui cupidatat irure id magna do veniam. Deserunt veniam aute in deserunt voluptate. Duis pariatur et reprehenderit excepteur laborum consequat ex veniam voluptate amet occaecat. Qui sit officia amet id tempor velit ex dolor incididunt minim.\r\n",
    "registered": "2018-06-19T02:24:59 -03:00"
  },
  {
    "_id": "5cc9d55106be088fc7b74994",
    "index": 33,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Nvidia's GeForce RTX 2080 Ti",
    "price": 128000,
    "company": {
      "_id": "5cc98af4808bf421ddeecc4c",
      "company_name": "Nvidia"
    },
    "category": {
      "_id": "5cc986dd66366ef9d3ce1620",
      "category": "VGA"
    },
    "quantity": 26,
    "ratings": 4.7,
    "description": "Velit deserunt nisi excepteur exercitation irure nostrud magna non pariatur mollit elit. Occaecat non quis enim quis ullamco et sint anim quis laborum minim ut non. Sint excepteur proident est aliquip consectetur quis consectetur cillum ipsum laborum adipisicing cupidatat dolor. Adipisicing dolore ex pariatur ex esse in culpa consequat.\r\n",
    "registered": "2018-08-04T09:55:55 -03:00"
  },
  {
    "_id": "5cc9d551205822bec0fcb977",
    "index": 34,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "VEGA 570",
    "price": 30000,
    "company": {
      "_id": "5cc98af408a5b915e3881359",
      "company_name": "AMD"
    },
    "category": {
      "_id": "5cc986dd66366ef9d3ce1620",
      "category": "VGA"
    },
    "quantity": 18,
    "ratings": 3.2,
    "description": "Consequat nulla laboris aliqua sunt incididunt ad cupidatat cupidatat occaecat minim. Labore aliqua officia ullamco irure exercitation dolore ut non. Nisi nostrud voluptate ad pariatur nostrud.\r\n",
    "registered": "2018-10-23T09:25:14 -03:00"
  },
  {
    "_id": "5cc9d5512419fe6aa5cebbc3",
    "index": 35,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Dell UltraSharp UP3218K",
    "price": 56000,
    "company": {
      "_id": "5cc98af4434983902fe62651",
      "company_name": "Dell"
    },
    "category": {
      "_id": "5cc986dd3d3746495f5278d4",
      "category": "Monitor"
    },
    "quantity": 13,
    "ratings": 4.9,
    "description": "Velit proident aute irure ad laborum laboris dolor occaecat enim aliquip elit fugiat. Pariatur labore occaecat cupidatat do sit id enim. Ad ex anim minim dolore dolore. Irure sunt id consectetur aliqua laboris cillum. Ipsum est enim incididunt cillum minim reprehenderit adipisicing magna sunt. Velit minim fugiat ut velit aliqua veniam ea aute labore consequat sint mollit velit ullamco.\r\n",
    "registered": "2018-12-02T12:01:07 -03:00"
  },
  {
    "_id": "5cc9d551685100894312c7d6",
    "index": 36,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "AMD Radeon RX Vega 56",
    "price": 30000,
    "company": {
      "_id": "5cc98af408a5b915e3881359",
      "company_name": "AMD"
    },
    "category": {
      "_id": "5cc986dd3d3746495f5278d4",
      "category": "Monitor"
    },
    "quantity": 25,
    "ratings": 3.7,
    "description": "Est deserunt ullamco excepteur irure in aliqua esse dolor aute labore tempor enim id sit. Nisi ea veniam consequat veniam. Amet amet officia adipisicing enim ea esse anim adipisicing laboris quis eu voluptate elit veniam. Deserunt ex do quis proident laboris labore anim ut.\r\n",
    "registered": "2018-03-04T10:33:01 -03:00"
  },
  {
    "_id": "5cc9d55185d6832f39b29217",
    "index": 37,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Dell UltraSharp UP3218K",
    "price": 56000,
    "company": {
      "_id": "5cc98af4434983902fe62651",
      "company_name": "Dell"
    },
    "category": {
      "_id": "5cc986dd3d3746495f5278d4",
      "category": "Monitor"
    },
    "quantity": 4,
    "ratings": 3.5,
    "description": "Fugiat cillum duis ea exercitation reprehenderit in enim occaecat occaecat in reprehenderit incididunt exercitation. Anim ut laborum eiusmod adipisicing dolor elit nisi deserunt consequat duis magna fugiat ad. Incididunt esse commodo nulla id et dolor est aute eiusmod mollit incididunt. Laboris ex culpa mollit adipisicing occaecat Lorem culpa.\r\n",
    "registered": "2018-12-02T04:10:52 -03:00"
  },
  {
    "_id": "5cc9d551c07c98c24aa88af2",
    "index": 38,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "ASUS VG279Q",
    "price": 26700,
    "company": {
      "_id": "5cc98af46ecd0459d0a6cca4",
      "company_name": "Asus"
    },
    "category": {
      "_id": "5cc986dd3d3746495f5278d4",
      "category": "Monitor"
    },
    "quantity": 26,
    "ratings": 2.9,
    "description": "Dolore deserunt consectetur anim sunt qui cupidatat magna. Exercitation deserunt sit tempor eiusmod pariatur qui dolor in ex consectetur ullamco dolore Lorem. Ad commodo eiusmod dolore ipsum nisi. Occaecat nisi amet aute elit. Commodo sit esse occaecat incididunt commodo. Duis pariatur nostrud dolore do duis veniam nulla nostrud reprehenderit magna nostrud ex.\r\n",
    "registered": "2018-03-06T12:45:37 -03:00"
  },
  {
    "_id": "5cc9d551afb5152f52ba1df0",
    "index": 39,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "LG 34UC79G-B",
    "price": 57700,
    "company": {
      "_id": "5cc98af474d4e9881232b6e9",
      "company_name": "LG"
    },
    "category": {
      "_id": "5cc986dd3d3746495f5278d4",
      "category": "Monitor"
    },
    "quantity": 22,
    "ratings": 4.2,
    "description": "Voluptate ullamco ex nostrud quis quis incididunt incididunt. Sit proident non incididunt id excepteur do commodo occaecat commodo tempor veniam id. Amet minim id et ut mollit velit aliqua qui elit. Aliqua fugiat cillum cillum sunt magna eiusmod nostrud fugiat ipsum esse labore eiusmod magna. Reprehenderit aute non qui Lorem culpa ea minim consequat exercitation in ea do ut pariatur. Laborum enim sunt ullamco velit exercitation laborum. Occaecat eiusmod nulla amet nisi deserunt.\r\n",
    "registered": "2019-02-14T02:43:55 -03:00"
  },
  {
    "_id": "5cc9d551aceb451d2a898a19",
    "index": 40,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Asus ROG Strix XG32VQ",
    "price": 87900,
    "company": {
      "_id": "5cc98af46ecd0459d0a6cca4",
      "company_name": "Asus"
    },
    "category": {
      "_id": "5cc986dd3d3746495f5278d4",
      "category": "Monitor"
    },
    "quantity": 13,
    "ratings": 4.8,
    "description": "Consectetur cupidatat sint ea tempor qui eu ut consequat exercitation. Proident eiusmod sunt eiusmod cupidatat aliquip reprehenderit. Est irure elit dolor consequat. Ex ipsum aliquip non veniam anim ad nostrud officia deserunt officia. Aute tempor duis ad laborum id et anim sit deserunt elit quis. Sunt ipsum qui aute veniam duis minim enim eiusmod officia enim.\r\n",
    "registered": "2019-04-18T01:30:11 -03:00"
  },
  {
    "_id": "5cc9d551a21ee7be69e56e08",
    "index": 41,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "LG 27UK650-W",
    "price": 35000,
    "company": {
      "_id": "5cc98af474d4e9881232b6e9",
      "company_name": "LG"
    },
    "category": {
      "_id": "5cc986dd3d3746495f5278d4",
      "category": "Monitor"
    },
    "quantity": 4,
    "ratings": 2,
    "description": "Esse fugiat eiusmod qui ad fugiat aliquip nostrud excepteur cupidatat nulla elit proident aliquip commodo. Aliquip sint aliquip Lorem fugiat aute in duis. Culpa laborum magna reprehenderit esse ipsum. In commodo ut sit pariatur laboris laboris. Culpa et anim eu occaecat duis ipsum est aute labore laborum proident amet aliquip eiusmod.\r\n",
    "registered": "2018-09-23T02:22:55 -03:00"
  },
  {
    "_id": "5cc9d55196bdfbb2c5bb7b0c",
    "index": 42,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Samsung CF791",
    "price": 80000,
    "company": {
      "_id": "5cc98af465323d13f25f622c",
      "company_name": "Samsung"
    },
    "category": {
      "_id": "5cc986dd3d3746495f5278d4",
      "category": "Monitor"
    },
    "quantity": 30,
    "ratings": 2.9,
    "description": "Ut quis exercitation id reprehenderit. Elit ex ut id tempor nulla eiusmod id laborum nulla laboris ipsum occaecat. Aliqua adipisicing nisi ex laborum aliqua proident consectetur sit voluptate. Est velit duis aliquip dolor do est. Magna cupidatat minim cillum non sunt nisi ut.\r\n",
    "registered": "2018-01-31T12:42:18 -03:00"
  },
  {
    "_id": "5cc9d551e82d2639a4c0b790",
    "index": 43,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "DELL XPS TOWER SE",
    "price": 119900,
    "company": {
      "_id": "5cc98af4434983902fe62651",
      "company_name": "Dell"
    },
    "category": {
      "_id": "5cc986dt1d8c252cb9b5es77",
      "category": "Desktop"
    },
    "quantity": 0,
    "ratings": 4.4,
    "description": "Eiusmod culpa qui sint non cupidatat. Est adipisicing est est consequat est. Mollit laboris nostrud cupidatat amet sit. Eiusmod ex occaecat exercitation laborum culpa amet qui enim esse irure excepteur. Ipsum enim occaecat veniam nulla. Velit magna elit cupidatat magna exercitation officia eu enim ad.\r\n",
    "registered": "2018-01-09T11:05:13 -03:00"
  },
  {
    "_id": "5cc9d551aa56fa61b8620371",
    "index": 44,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "HP Pavilion Gaming 790",
    "price": 65000,
    "company": {
      "_id": "5cc98af07frtb7459b8f17vb",
      "company_name": "HP"
    },
    "category": {
      "_id": "5cc986dt1d8c252cb9b5es77",
      "category": "Desktop"
    },
    "quantity": 30,
    "ratings": 4.4,
    "description": "Aute duis commodo ea ipsum esse ex anim sint tempor reprehenderit. Minim et dolor aliqua sit elit incididunt eu culpa proident minim cupidatat sunt incididunt ex. Consectetur non consectetur eiusmod eu proident qui ipsum. Pariatur officia esse sunt in esse veniam est laboris. In do voluptate aliquip qui non esse esse laboris occaecat minim et deserunt voluptate consectetur. Voluptate consequat dolore adipisicing culpa.\r\n",
    "registered": "2018-10-09T08:38:27 -03:00"
  },
  {
    "_id": "5cc9d5516c665766ab69ff03",
    "index": 45,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Dell Alienware Aurora R8",
    "price": 80000,
    "company": {
      "_id": "5cc98af4434983902fe62651",
      "company_name": "Dell"
    },
    "category": {
      "_id": "5cc986dt1d8c252cb9b5es77",
      "category": "Desktop"
    },
    "quantity": 33,
    "ratings": 2.6,
    "description": "Ipsum proident nisi fugiat Lorem ut id aliquip mollit occaecat laborum laborum. Nulla labore tempor laborum labore minim voluptate est sunt. Labore reprehenderit et ullamco excepteur excepteur. Labore in ullamco dolor enim minim esse. Cillum culpa duis nisi occaecat laborum sint culpa quis. Quis et incididunt nulla excepteur. Culpa magna proident magna commodo.\r\n",
    "registered": "2018-05-03T01:19:22 -03:00"
  },
  {
    "_id": "5cc9d55161dcc8ff7127df5e",
    "index": 46,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Asus ROG Strix GL12CX",
    "price": "8,025",
    "company": {
      "_id": "5cc98af46ecd0459d0a6cca4",
      "company_name": "Asus"
    },
    "category": {
      "_id": "5cc986dt1d8c252cb9b5es77",
      "category": "Desktop"
    },
    "quantity": 23,
    "ratings": 4.3,
    "description": "Officia ad quis pariatur mollit do consequat ex et est. Laborum aliqua adipisicing officia elit excepteur in aute proident ut. Lorem minim exercitation nisi ea exercitation esse ut mollit duis officia sint velit mollit cupidatat. Eiusmod mollit Lorem duis laborum. In cupidatat sit sint labore quis ipsum in. Eiusmod tempor reprehenderit est in sint voluptate deserunt aliquip irure duis duis consectetur esse voluptate.\r\n",
    "registered": "2019-03-12T06:59:39 -03:00"
  },
  {
    "_id": "5cc9d551830a43b656703ee2",
    "index": 47,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Lenovo Ideacentre Y900",
    "price": 150000,
    "company": {
      "_id": "5cc98af4b9bfed9fe6e633cd",
      "company_name": "Lenovo"
    },
    "category": {
      "_id": "5cc986dt1d8c252cb9b5es77",
      "category": "Desktop"
    },
    "quantity": 35,
    "ratings": 2.6,
    "description": "Duis exercitation velit nisi nulla id consectetur amet adipisicing anim fugiat minim deserunt. Adipisicing culpa voluptate culpa reprehenderit. Id id sunt Lorem est magna laborum ex commodo voluptate aliqua irure.\r\n",
    "registered": "2019-03-02T04:04:43 -03:00"
  },
  {
    "_id": "5cc9d551e505a12029b05526",
    "index": 48,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "LG LHD657",
    "price": 50000,
    "company": {
      "_id": "5cc98af474d4e9881232b6e9",
      "company_name": "LG"
    },
    "category": {
      "_id": "5cc986dt1d8c252cb8b5ec77",
      "category": "Home-Theatre"
    },
    "quantity": 22,
    "ratings": 4.7,
    "description": "Quis exercitation exercitation ex excepteur sunt consequat magna. Cupidatat nisi consectetur veniam laborum incididunt magna voluptate ipsum aute eiusmod esse cupidatat nulla. Laborum proident consectetur eu veniam amet ipsum nisi nostrud magna ipsum. Non cupidatat pariatur commodo in deserunt sint voluptate veniam ex pariatur occaecat aliqua esse do.\r\n",
    "registered": "2018-06-08T12:52:35 -03:00"
  },
  {
    "_id": "5cc9d55102fa3f77357573e4",
    "index": 49,
    "isAvailable": true,
    "image": "http://placehold.it/250x250",
    "imageLg": "http://placehold.it/1080x1080",
    "productName": "Samsung HT-J5500W",
    "price": 40000,
    "company": {
      "_id": "5cc98af465323d13f25f622c",
      "company_name": "Samsung"
    },
    "category": {
      "_id": "5cc986dt1d8c252cb8b5ec77",
      "category": "Home-Theatre"
    },
    "quantity": 12,
    "ratings": 3.5,
    "description": "Nulla ad incididunt elit duis minim non excepteur ullamco pariatur occaecat. Voluptate quis adipisicing cillum duis nisi proident duis ipsum velit nisi Lorem ipsum amet. Aliquip mollit qui est minim aliquip exercitation ea veniam esse est ad incididunt. Fugiat enim magna aute enim dolore magna labore ullamco Lorem nulla veniam commodo.\r\n",
    "registered": "2018-12-20T07:33:49 -03:00"
  }
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find(m => m._id === id);
}

export function saveProduct(product) {
  let productInDb = products.find(m => m._id === product._id) || {};
  productInDb.productName = product.productName;
  productInDb.category = categoriesAPI.categories.find(g => g._id === product.category);
  productInDb.quantity = product.quantity;

  if (!productInDb._id) {
    productInDb._id = Date.now();
    products.push(productInDb);
  }

  return productInDb;
}

export function deleteProduct(id) {
  let productInDb = products.find(m => m._id === id);
  products.splice(products.indexOf(productInDb), 1);
  return productInDb;
}