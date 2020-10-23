 module.exports = function toReadable (number) {
    const digit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const digits = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    function fanc(number) {
      if (number <= 19) {
        return digit[number]}
      else if (number <= 99) {return (digits[Math.floor(number / 10)] + ' ' + digit[number % 10]) .split(' ').filter(f => f).join(' ')}
      };

    if(number == 0){
      return 'zero'}
    else if(number <= 99) { 
      return fanc(number)}
    else if(number <= 999) {
      return digit[Math.floor(number % 1000 / 100)] + ' ' + 'hundred' + ((number % 100) ? ' ' + fanc(number % 100) : '')};
    
}