/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
    url: 'postgresql://mockai_owner:fu1rjRTC9OwM@ep-nameless-base-a5x02pyb.us-east-2.aws.neon.tech/mockai?sslmode=require',
    }
  };