import bcrypt from 'bcryptjs';

const data = {
  
    users: [
        {
            name: 'Jimmy',
            email: 'admin@example.com',
            password: bcrypt.hashSync('test1234', 8),
            isAdmin: true
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('test1234', 8),
            isAdmin: true
        },

    ],
 
    products: [
        {
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock:33,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description:'high quality product'

        },
          {
         
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
              price: 220,
             countInStock:40,
            brand: 'Adidas',
            rating: 3.5,
            numReviews: 10,
            description:'high quality product'

        },
            {
         
            name: 'Lacost Free Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
                price: 120,
             countInStock:0,
            brand: 'Lacoste',
            rating: 4.8,
             numReviews: 17,
            description:'high quality product'

        },
          {
           
            name: 'Nike Slim Pants',
            category: 'Pants',
            image: '/images/p4.jpg',
              price: 137,
             countInStock:20,
            brand: 'Nike',
            rating: 4.0,
             numReviews: 10,
            description:'high quality product'

        },
            {
           
            name: 'Puma Slim Pant',
            category: 'Pant',
            image: '/images/p5.jpg',
                price: 300,
             countInStock:24,
            brand: 'Puma',
            rating: 3.2,
             numReviews: 17,
            description:'high quality product'

        },
            {
          
            name: 'Adidas Fit Pant',
            category: 'Pant',
            image: '/images/p6.jpg',
                price: 139,
             countInStock:17,
            brand: 'Adidas',
            rating: 4.7,
             numReviews: 15,
            description:'high quality product'

        }
    ]
};

export default data;