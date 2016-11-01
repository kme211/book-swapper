import delay from './delay';
import slugifyText from '../utils/slugifyText';

const books = [
  {
    id: 'red-rising',
    title: 'Red Rising',
    author: 'Pierce Brown',
    link: '#',
    industryIdentifiers: [
       {
        type: "ISBN_10",
        identifier: "1594137749"
       },
       {
        type: "ISBN_13",
        identifier: "9781594137747"
       }
    ],
    categories: [
     "Fiction / Action & Adventure",
     "Fiction / Science Fiction / Action & Adventure",
     "Fiction / Dystopian"
    ],
    tags: ["mars"],
    availability: [{owner: "clatterbuck", status: "available"}],
    desc: 'Red Rising is a 2014 science fiction novel by American author Pierce Brown and the first of the eponymous trilogy. The novel, set on a future planet Mars, follows lowborn miner Darrow as he infiltrates the ranks of the elite Golds.'
  },{
    id: 'american-gods',
    title: 'American Gods',
    author: 'Neil Gaiman',
    industryIdentifiers: [
       {
        type: "ISBN_10",
        identifier: "0380973650"
       },
       {
        type: "ISBN_13",
        identifier: "0380973650"
       }
    ],
    categories: [
     "Fiction / General",
     "Fiction / Fantasy / General"
    ],
    tags: ["mythology"],
    link: '#',
    availability: [{owner: "estes", status: "not available"}],
    desc: 'American Gods is a Hugo and Nebula Award-winning[1] novel by Neil Gaiman. The novel is a blend of Americana, fantasy, and various strands of ancient and modern mythology, all centering on the mysterious and taciturn Shadow. Several of the themes touched upon in the book were previously glimpsed in The Sandman comic book series.'
  },{
    id: 'do-androids-dream',
    title: 'Do Androids Dream of Electric Sheep?',
    author: 'Philip K. Dick',
    industryIdentifiers: [
       {
        type: "ISBN_10",
        identifier: "0345404475"
       },
       {
        type: "ISBN_13",
        identifier: "9780345404473"
       }
    ],
    categories: [
      "Fiction / Science Fiction / General"
    ],
    tags: ["androids", "robots"],
    link: '#',
    availability: [{owner: "vazques", status: "available"}],
    desc: 'Do Androids Dream of Electric Sheep? (retitled Blade Runner: Do Androids Dream of Electric Sheep? in some later printings) is a science fiction novel by American writer Philip K. Dick. First published in 1968, the novel is set in a post-apocalyptic San Francisco, where Earth\'s life has been greatly damaged by nuclear global war. Most animal species are endangered or extinct from extreme radiation poisoning, so that owning an animal is now a sign of status and empathy, an attitude encouraged towards animals.'
  },{
    id: 'children-of-dune',
    title: 'Children of Dune',
    author: 'Frank Herbert',
    industryIdentifiers: [
       {
        type: "ISBN_10",
        identifier: "1440630518"
       },
       {
        type: "ISBN_13",
        identifier: "9781440630514"
       }
    ],
    categories: [
      "Fiction / Science Fiction / General"
    ],
    tags: ["desert"],
    link: '#',
    availability: [{owner: "vanderslice", status: "not available"}],
    desc: 'Nine years after Emperor Paul Muad\'Dib walked into the desert, blind, the ecological transformation of Dune has reached the point where some Fremen are living without stillsuits in the less arid climate and have started to move out of the sietches and into the villages and cities. As the old ways erode, more and more pilgrims arrive to experience the planet of Muad\'Dib. The Imperial high council has lost its political might and is powerless to control the Jihad.'
  },{
    id: 'we-need-to-talk',
    title: 'We Need to Talk About Kevin',
    author: 'Lionel Shriver',
    industryIdentifiers: [
       {
        type: "ISBN_10",
        identifier: "1582438870"
       },
       {
        type: "ISBN_13",
        identifier: "9781582438870"
       }
    ],
    categories: [
     "Fiction / Literary",
     "Fiction / Psychological",
     "Fiction / Crime"
    ],
    tags: ["motherhood"],
    link: '#',
    availability: [{owner: "lamey", status: "available"}],
    desc: 'Eva\'s narration takes the form of letters written after the massacre to her presumably estranged husband, Franklin Plaskett. In these letters she details her relationship with her husband well before and leading up to their son\'s conception, followed by the events of Kevin\'s life up to the school massacre, and her thoughts concerning their relationship. She also admits to a number of events that she tried to keep secret, such as when she lashed out and broke Kevin\'s arm in a sudden fit of rage. The novel also shows Eva visiting Kevin in prison. These scenes portray their cold, adversarial relationship.'
  },{
    id: 'me-talk-pretty-one-day',
    title: 'Me Talk Pretty One Day',
    author: 'David Sedaris',
    industryIdentifiers: [
      {
       "type": "ISBN_10",
       "identifier": "0316073652"
      },
      {
       "type": "ISBN_13",
       "identifier": "9780316073653"
      }
    ],
    categories: [
     "Humor / Form / Essays"
    ],
    tags: ["funny"],
    link: '#',
    availability: [{owner: "jamie", status: "available"}],
    desc: 'A new collection from David Sedaris is cause for jubilation. His recent move to Paris has inspired hilarious pieces, including Me Talk Pretty One Day, about his attempts to learn French. His family is another inspiration. You Cant Kill the Rooster is a portrait of his brother who talks incessant hip-hop slang to his bewildered father. And no one hones a finer fury in response to such modern annoyances as restaurant meals presented in ludicrous towers and cashiers with 6-inch fingernails. Compared by The New Yorker to Twain and Hawthorne, Sedaris has become one of our best-loved authors. Sedaris is an amazing reader whose appearances draw hundreds, and his performancesincluding a jaw-dropping impression of Billie Holiday singing I wish I were an Oscar Meyer weinerare unforgettable. Sedariss essays on living in Paris are some of the funniest hes ever written. At last, someone even meaner than the French! The sort of blithely sophisticated, loopy humour that might have resulted if Dorothy Parker and James Thurber had had a love child. Entertainment Weekly on Barrel Fever Sidesplitting Not one of the essays in this new collection failed to crack me up; frequently I was helpless. The New York Times Book Review on Naked'
  },{
    id: 'programming-javaScript-applications',
    title: 'Programming JavaScript Applications',
    author: 'Eric Elliott',
    industryIdentifiers: [
      {
        "type": "ISBN_13",
        "identifier": "9781491950258"
       },
       {
        "type": "ISBN_10",
        "identifier": "1491950250"
       }
    ],
    categories: [
      "Computers / Programming Languages / JavaScript",
      "Computers / Web / Web Programming"
    ],
    tags: ["nerd"],
    link: '#',
    availability: [{owner: "everett", status: "available"}],
    desc: 'Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows.'
  }
];

class bookApi {
  static getBook(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const book =  books.find(book => book.id === id);
        if(book) {
          resolve(Object.assign({},book));
        } else {
          reject('Book not found.');
        }
      }, delay);
    });
  }

  static saveBook(book) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingBook = books.find(b => b.title === book.title && b.author === book.author);
        if(existingBook) {
          resolve(Object.assign({}, existingBook))
        } else {
          console.log(book);
          if(book.title && book.author && book.industryIdentifiers &&
             book.categories && book.desc) {
            let newBook = {
              id: slugifyText(book.title),
              title: book.title,
              author: book.author,
              link: '#',
              industryIdentifiers: book.industryIdentifiers,
              categories: book.categories,
              tags: [],
              availability: [],
              desc: book.desc
            };
            books.push(newBook);
            resolve(Object.assign({}, newBook));
          } else {
            reject('Book is missing required parameters');
          }
        }
      }, delay);
    });
  }
}

export default bookApi;
