const greenLine={
  bus: 'Greenline bus poribohon',
  bCode:'GL',
  tickets: [],
  book(name, setNumber){
    console.log(`${name} booked on ${this.bus} ticket- ${this.bCode} seat--${setNumber}`
    );
    this.tickets.push({ticketsinfo: `${setNumber}--${name}`});
  }
}

greenLine.book('Rongkoni','d3')
greenLine.book('Roza','c2')

console.log(greenLine);


const shohag={
  bus: 'Shohag bus poribohon',
  bCode:'sh',
  tickets: [],
};

const book= greenLine.book;

// book('tuli','b4');

book.call(shohag,'tuli','b4');
book.call(shohag,'reshma','e5');
book.call(greenLine,'Roni','e5');


console.log(shohag);


// apply:

const ticketData=['Ronng','e5'];
book.apply(greenLine,ticketData);
book.apply(shohag,['Lima','e2']);
