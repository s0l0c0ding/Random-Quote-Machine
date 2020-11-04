import {NEW_QUOTE} from './actions'

const QUOTES = [
    {quote: 'You can’t turn back the clock. But you can wind it up again.', author:'Bonnie Prudden'},
    {quote: 'The bad news is time flies. The good news is you’re the pilot.', author: 'Michael Altshuler'},
    {quote: 'I will always choose a lazy person to do a difficult job because he will find an easy way to do it.', author: 'Ziad K. Abdelnour'},
    {quote: 'The best way to appreciate your job is to imagine yourself without one.', author: 'Oscar Wilde'},
    {quote: 'Expecting the world to treat you fairly because you are a good person is a little like expecting the bull not to attack you because you are a vegetarian.', author: 'Dennis Wholey'},
    {quote: 'Light travels faster than sound. This is why some people appear bright until you hear them speak.', author: 'Alan Dundes'},
    {quote: 'The difference between stupidity and genius is that genius has its limits.', author: 'Albert Einstein'},
    {quote: 'I am not in competition with anyone but myself. My goal is to improve myself continuously.', author: 'Bill Gates'},
    {quote: 'If you\'re not careful, the newspapers will have you hating the people who are being oppressed, and loving the people who are doing the oppressing.', author: 'Malcolm X'},
    {quote: 'You dont lose if you get knocked down; you lose if you stay down.', author: 'Muhammad Ali'}
]
export const quoteReducer =  (state =  {id: 0, quotes: QUOTES}, action) => {
    const rand = Math.floor( Math.random()*QUOTES.length);
    switch (action.type) {
        case NEW_QUOTE:
            return {
                id: rand, 
                quotes: QUOTES
            };
    
        default:
            return state;
    }
}