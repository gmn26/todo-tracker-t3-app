import { handlers } from "~/server/auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            authorization: {
                url: 'https://discord.com/oauth2/authorize?client_id=1311697701498392668&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&scope=identify+connections+email+guilds+rpc',
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
}

export const { GET, POST } = handlers;
