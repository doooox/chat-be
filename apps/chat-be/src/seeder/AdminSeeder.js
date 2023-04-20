const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');

(async () => {
  const url = 'mongodb://localhost/chat';
  const client = new MongoClient(url, {});
  try {
    await client.connect();
    const collection = client.db().collection('users');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);
    const data = {
      email: 'admin@admin.com',
      name: 'Admin',
      password: hashedPassword,
      isAdmin: true,
    };
    const users = [];
    users.push(data);
    await collection.insertMany(users);
    console.log(`${users.length} users seeded`);
    process.exit(0);
  } catch (error) {
    console.log(error.stack);
    process.exit(1);
  }
})();
