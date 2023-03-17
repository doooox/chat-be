const MongoClient = require('mongodb').MongoClient;
const bcryptjs = require('bcryptjs');

(async () => {
  const url = 'mongodb://localhost/imdb';
  const client = new MongoClient(url, {});
  try {
    await client.connect();
    const collection = client.db().collection('users');
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash('admin123', salt);
    const users = [];
    const data = {
      email: 'admin@admin.com',
      name: 'Admin',
      password: hashedPassword,
      isAdmin: true,
    };

    users.push(data);

    await collection.deleteMany();
    await collection.insertMany(users);
    console.log(`${users.length} users seeded`);
    process.exit(0);
  } catch (error) {
    console.log(error.stack);
    process.exit(1);
  }
})();
