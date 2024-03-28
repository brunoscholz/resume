import { AiFillGithub, AiFillHome, AiFillLinkedin, AiFillMail } from "react-icons/ai"
import { BiCake } from "react-icons/bi"
import { FaSquareXTwitter } from "react-icons/fa6"

export const themes = ['corporate', 'blockchain', 'gaming']

export const renderSocialIcon = (iconName, color, size) => {
  switch (iconName) {
    case 'AiFillMail':
      return <AiFillMail color={color} size={size} />
    case 'FaSquareXTwitter':
      return <FaSquareXTwitter color={color} size={size} />
    case 'AiFillGithub':
      return <AiFillGithub color={color} size={size} />
    case 'AiFillLinkedin':
      return <AiFillLinkedin color={color} size={size} />
    case 'AiFillHome':
      return <AiFillHome color={color} size={size} />
    case 'BiCake':
      return <BiCake color={color} size={size} />
    default:
      return <AiFillMail color={color} size={size} />
  }
}