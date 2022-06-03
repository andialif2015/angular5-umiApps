import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular5-umiapps';
  parentFunction(data){
      console.log(this.listPerson[data.index].countLikes = data.countLikes);
  }

  listPerson = [
    {
      "index": 0,
      "picture": "https://picsum.photos/200?random=0&quot;",
      "age": 37,
      "name": "Flora Nieves",
      "company": "STUCCO",
      "phone": "+62 (938) 581-2473",
      "address": "739 Dewey Place, Deputy, Ohio, 2479",
      "countLikes": 0
    },
    {
      "index": 1,
      "picture": "https://picsum.photos/200?random=1&quot;",
      "age": 24,
      "name": "Kirk Jimenez",
      "company": "ZEDALIS",
      "phone": "+62 (953) 534-3363",
      "address": "661 Logan Street, Freeburn, Virgin Islands, 9470",
      "countLikes": 0
    },
    {
      "index": 2,
      "picture": "https://picsum.photos/200?random=2&quot;",
      "age": 37,
      "name": "Faulkner Tanner",
      "company": "MANGLO",
      "phone": "+62 (949) 455-2209",
      "address": "369 Royce Place, Taft, Texas, 1432",
      "countLikes": 0
    },
    {
      "index": 3,
      "picture": "https://picsum.photos/200?random=3&quot;",
      "age": 33,
      "name": "Sargent Roth",
      "company": "CUJO",
      "phone": "+62 (821) 559-2605",
      "address": "424 Sedgwick Street, Keyport, Illinois, 7708",
      "countLikes": 0
    },
    {
      "index": 4,
      "picture": "https://picsum.photos/200?random=4&quot;",
      "age": 36,
      "name": "Staci Keith",
      "company": "ENERFORCE",
      "phone": "+62 (891) 542-3727",
      "address": "569 Ellery Street, Crawfordsville, Florida, 7162",
      "countLikes": 0
    },
    {
      "index": 5,
      "picture": "https://picsum.photos/200?random=5&quot;",
      "age": 36,
      "name": "Cline Zimmerman",
      "company": "BISBA",
      "phone": "+62 (967) 536-2793",
      "address": "224 Cove Lane, Canoochee, North Carolina, 782",
      "countLikes": 0
    },
    {
      "index": 6,
      "picture": "https://picsum.photos/200?random=6&quot;",
      "age": 26,
      "name": "Patrica Wade",
      "company": "ELITA",
      "phone": "+62 (914) 584-3490",
      "address": "796 Independence Avenue, Hachita, Palau, 6767",
      "countLikes": 0
    },
    {
      "index": 7,
      "picture": "https://picsum.photos/200?random=7&quot;",
      "age": 35,
      "name": "Sims Rodgers",
      "company": "IMKAN",
      "phone": "+62 (886) 523-2970",
      "address": "664 Imlay Street, Wheatfields, Connecticut, 9667",
      "countLikes": 0
    },
    {
      "index": 8,
      "picture": "https://picsum.photos/200?random=8&quot;",
      "age": 37,
      "name": "Wiley Haney",
      "company": "GENMEX",
      "phone": "+62 (914) 543-2310",
      "address": "748 Church Avenue, Stonybrook, Tennessee, 5698",
      "countLikes": 0
    },
    {
      "index": 9,
      "picture": "https://picsum.photos/200?random=9&quot;",
      "age": 30,
      "name": "Greta Villarreal",
      "company": "TASMANIA",
      "phone": "+62 (857) 510-3693",
      "address": "777 Mill Avenue, Kula, New Hampshire, 4831",
      "countLikes": 0
    },
    {
      "index": 10,
      "picture": "https://picsum.photos/200?random=10&quot;",
      "age": 30,
      "name": "Roxie Mcguire",
      "company": "ISBOL",
      "phone": "+62 (933) 519-3612",
      "address": "673 Howard Alley, Darlington, Georgia, 3509",
      "countLikes": 0
    },
    {
      "index": 11,
      "picture": "https://picsum.photos/200?random=11&quot;",
      "age": 36,
      "name": "Lancaster Buchanan",
      "company": "ISOSPHERE",
      "phone": "+62 (981) 570-2396",
      "address": "870 Oriental Boulevard, Hiwasse, Michigan, 2515",
      "countLikes": 0
    },
    {
      "index": 12,
      "picture": "https://picsum.photos/200?random=12&quot;",
      "age": 34,
      "name": "Maria Roy",
      "company": "UXMOX",
      "phone": "+62 (839) 535-2011",
      "address": "226 Quentin Street, Reinerton, California, 5509",
      "countLikes": 0
    },
    {
      "index": 13,
      "picture": "https://picsum.photos/200?random=13&quot;",
      "age": 22,
      "name": "Nellie Riggs",
      "company": "PROSURE",
      "phone": "+62 (955) 409-3870",
      "address": "734 Landis Court, Wakulla, Marshall Islands, 5890",
      "countLikes": 0
    },
    {
      "index": 14,
      "picture": "https://picsum.photos/200?random=14&quot;",
      "age": 40,
      "name": "Ferguson Diaz",
      "company": "INSURETY",
      "phone": "+62 (957) 464-3235",
      "address": "915 Sackman Street, Alamo, Arkansas, 945",
      "countLikes": 0
    },
    {
      "index": 15,
      "picture": "https://picsum.photos/200?random=15&quot;",
      "age": 21,
      "name": "Hollie Hudson",
      "company": "XANIDE",
      "phone": "+62 (953) 536-2667",
      "address": "872 Forest Place, Tonopah, Nevada, 8544",
      "countLikes": 0
    }
  ]
}
