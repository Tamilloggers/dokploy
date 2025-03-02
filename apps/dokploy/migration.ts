import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const connectionString = "postgres://koyeb-adm:npg_3vJmupFM0Ugf@ep-super-term-a2neerqg.eu-central-1.pg.koyeb.app/koyebdb?sslmode=require";
const sql = postgres(connectionString, { ssl: 'require', max: 1 });
const db = drizzle(sql);

await migrate(db, { migrationsFolder: "drizzle" })
	.then(() => {
		console.log("Migration complete");
		sql.end();
	})
	.catch((error) => {
		console.log("Migration failed", error);
	})
	.finally(() => {
		sql.end();
	});
