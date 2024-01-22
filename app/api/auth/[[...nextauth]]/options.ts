import type { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { GithubProfile } from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
	// secret: process.env.NEXTAUTH_SECRET,

	// Configure one or more authentication providers
	providers: [
	GithubProvider({
			profile(profile: GithubProfile){
				// console.log(profile)
				return{
					...profile,
					role: profile.role ?? 'user',
					id: profile.id.toString(),
					image: profile.avatar_url
				}
			},
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
	],
}