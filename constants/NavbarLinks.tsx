import { PiFoldersLight } from "react-icons/pi"
import { HiOutlineClipboardDocumentList } from "react-icons/hi2"
import { HiOutlineDocumentPlus } from "react-icons/hi2"
import { PiPersonSimpleThrowThin } from "react-icons/pi"
import { TbMessageCircle2 } from "react-icons/tb"

const NavbarLinks = [
	{
		"title":"Zbiórki",
		"href":"/zbiorki",
		icon:<PiFoldersLight/>,
	},
	{
		"title":"Nowa zbiorka",
		"href":"/nowazbiorka",
		icon: <HiOutlineDocumentPlus/>
	},
	{
		"title":"Wolontariat",
		"href":"/wolontariat",
		icon:<PiPersonSimpleThrowThin/>
	},
	{
		"title":"Dokumenty",
		"href":"/dokumenty",
		icon:<HiOutlineClipboardDocumentList/>
	},
	{
		"title":"Skontakuj się",
		"href":"/contact",
		icon:<TbMessageCircle2/>
	}
]

export default NavbarLinks