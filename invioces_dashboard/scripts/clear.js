const { db } = require('@vercel/postgres');

async function clearUsers(client) {
  try {
    const deleteTable = await client.sql`DROP TABLE users`;

    console.log(`Deleted "users" table`);
  } catch (error) {
    console.error('Error deleting users:', error);
    throw error;
  }
}

async function clearCustomers(client) {
  try {
    const deleteTable = await client.sql`DROP TABLE customers`;

    console.log(`Deleted "customers" table`);
  } catch (error) {
    console.error('Error deleting customers:', error);
    throw error;
  }
}

async function clearInvoices(client) {
  try {
    const deleteTable = await client.sql`DROP TABLE invoices`;

    console.log(`Deleted "invoices" table`);
  } catch (error) {
    console.error('Error deleting invoices:', error);
    throw error;
  }
}

async function clearRevenue(client) {
  try {
    const deleteTable = await client.sql`DROP TABLE revenue`;

    console.log(`Deleted "revenue" table`);
  } catch (error) {
    console.error('Error deleting revenue:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await clearUsers(client);
  await clearCustomers(client);
  await clearInvoices(client);
  await clearRevenue(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to clear the database:',
    err,
  );
});
