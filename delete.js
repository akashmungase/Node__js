const dbConection = require('./mongodb');

const deleteRecord = async () => {
    const db = await dbConection()

    // delete record 
    const result1 = await db.deleteMany(
        { name: 'Oppo 60' }
    )
}

deleteRecord();