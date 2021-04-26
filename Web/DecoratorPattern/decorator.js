class Printer {
    print(text = '', style = '') {
        console.log(`%c${text}`, style);
    }
}
const printer = new Printer();
printer.print('log');

const yellowStyle = (printer) => ({
    // ...printer,
    print: (text = '', style = '') => {
        printer.print(text, `${style}color: yellow;`);
    }
});
const maxStyle = (printer) => ({
    // ...printer,
    print: (text = '', style = '') => {
        printer.print(text, `${style}font-size: 2em;`);
    }
});

maxStyle(yellowStyle(printer)).print('seting')
