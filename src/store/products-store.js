import { initStore } from './store';

const configureStore = () => {
    const actions = {
    };

    initStore(actions, { 

        products: [
            {
                id: 'id1',
                name : 'Towel',
                description : 'Sunny days and warm weather - you clearly need it after a refreshing jump into a cool sea', 
                price: 10
            },
            {
                id: 'id2',
                name : 'Enlightening book',
                description : 'There\'s no rush out there. Take your time for a good read.', 
                price: 5.99
            },
    
            {
                id: 'id3',
                name : 'Waterproof camera',
                description : 'Below the sea\'s surface, a hidden world. Don\'t miss out those memories back home.', 
                price: 49.99
            },
            {
                id: 'id4',
                name : 'Pinwhell',
                description : 'Wondering what to do when there\'s only a light breeze. Back to your childhood.', 
                price: 2.50
            }
        ]
     });
};

export default configureStore;