const dbConection = require('./mongodb');

const update = async () => {
    const db = await dbConection()

    // Single record update
    const result = await db.updateOne(
        { name: 'Oppo Reno 10' }, {
            $set: { name: 'Oppo Reno 12', price: 37999 }
        }
    )


    // Multiple update record
    const result1 = await db.updateMany(
        { name: 'Oppo Reno 10' }, {
            $set: { name: 'Oppo Reno 12', price: 37999 }
        }
    )
}

update();