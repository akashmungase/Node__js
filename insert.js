const dbConection = require('./mongodb');

const insert = async () => {
    const db = await dbConection()

    // Single record insert
    const result = await db.insertOne(
        {name: 'Oppo F27', price: 28999, category: 'mobile'}
    )

    // Multiple record insert
    const result1 = await db.insertMany(
        [
            {name: 'Oppo 14', price: 28999, category: 'mobile'},
            {name: 'Oppo 60', price: 22999, category: 'mobile'},
            {name: 'Oppo 65', price: 33999, category: 'mobile'}
        ]
    )
}

insert();