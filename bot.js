require('dotenv').config();
const { Telegraf } = require('telegraf');

const Gandalf = {
  Name: 'Gandalf',
  Race: 'Human',
  Photo:
    'https://static.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg/revision/latest/top-crop/width/360/height/450?cb=20121110131754',
  URL: 'https://ru.wikipedia.org/wiki/Gandalf',
};

const Aragorn = {
  Name: 'Aragorn II Elessar Telcontar',
  Race: 'Human',
  Photo:
    'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Aragorn300ppx.png/170px-Aragorn300ppx.png',
  URL: 'https://en.wikipedia.org/wiki/Aragorn',
};

const Frodo = {
  Name: 'Frodo Baggins',
  Race: 'Hobbit',
  Photo:
    'https://static2.srcdn.com/wordpress/wp-content/uploads/2019/10/Lord-of-the-Rings-Frodo-Undying-Lands.jpg',
  URL: 'https://en.wikipedia.org/wiki/Frodo_Baggins',
};

const Legolas = {
  Name: 'Legolas',
  Race: 'Sindar Elf',
  Photo:
    'https://static.wikia.nocookie.net/lotr/images/5/5e/Legolas_The_Hobbit.jpg/revision/latest/scale-to-width-down/340?cb=20121117114948',
  URL: 'https://en.wikipedia.org/wiki/Legolas',
};
const Gimli = {
  Name: 'Gimli (Middle-earth)',
  Race: 'Dwarf',
  Photo: 'https://i.pinimg.com/originals/c3/cf/a7/c3cfa76de2c63ae8acf983bf338b51e6.jpg',
  URL: 'https://en.wikipedia.org/wiki/Gimli_(Middle-earth)',
};

const bot = new Telegraf(process.env.ness);
const Markup = require('telegraf/markup');
bot.start((ctx) =>
  ctx.reply(
    `Hello, ${ctx.message.from.first_name}`,
    Markup.keyboard([['/gandalf', '/aragorn', '/frodo', '/legolas', '/gimli']])
      .resize()
      .extra()
  )
);
bot.help((ctx) =>
  ctx.reply(
    `${
      ctx.message.from.first_name
    }, you can find inforamtion about LoR universe here : ${'https://en.wikipedia.org/wiki/Category:The_Lord_of_the_Rings_characters'}`
  )
);
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.command('info', (ctx) =>
  ctx.reply(
    `All information about LoR characters is here: ${'https://en.wikipedia.org/wiki/Category:The_Lord_of_the_Rings_characters'}`
  )
);
bot.command('gandalf', (ctx) =>
  ctx.reply(`
Name: ${Gandalf.Name} 
Race: ${Gandalf.Race}
Photo: ${Gandalf.Photo}
Information: ${Gandalf.URL}
`)
);
bot.command('aragorn', (ctx) =>
  ctx.reply(`
Name: ${Aragorn.Name} 
Race: ${Aragorn.Race}
Photo: ${Aragorn.Photo}
Information: ${Aragorn.URL}
`)
);
bot.command('frodo', (ctx) =>
  ctx.reply(`
Name: ${Frodo.Name} 
Race: ${Frodo.Race}
Photo: ${Frodo.Photo}
Information: ${Frodo.URL}
`)
);
bot.command('legolas', (ctx) =>
  ctx.reply(`
Name: ${Legolas.Name} 
Race: ${Legolas.Race}
Photo: ${Legolas.Photo}
Information: ${Legolas.URL}
`)
);
bot.command('gimli', (ctx) =>
  ctx.reply(`
Name: ${Gimli.Name} 
Race: ${Gimli.Race}
Photo: ${Gimli.Photo}
Information: ${Gimli.URL}
`)
);

bot.launch();
