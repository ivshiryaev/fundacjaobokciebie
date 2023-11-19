import { PiFoldersLight } from "react-icons/pi"
import { HiOutlineClipboardDocumentList } from "react-icons/hi2"
import { HiOutlineDocumentPlus } from "react-icons/hi2"
import { PiPersonSimpleThrowThin } from "react-icons/pi"
import { TbMessageCircle2 } from "react-icons/tb"

const NavbarLinks = [
	{
		"title":"Zbiórki",
		"href":"/Zbiorki",
		icon:<PiFoldersLight/>,
	},
	{
		"title":"Nowa zbiorka",
		"href":"/NowaZbiorka",
		icon: <HiOutlineDocumentPlus/>
	},
	{
		"title":"Wolontariat",
		"href":"/Wolontariat",
		icon:<PiPersonSimpleThrowThin/>
	},
	{
		"title":"Dokumenty",
		"href":"/Dokumenty",
		icon:<HiOutlineClipboardDocumentList/>
	},
	{
		"title":"Skontakuj się",
		"href":"/SkontaktujSie",
		icon:<TbMessageCircle2/>
	}
]

export default NavbarLinks