import { FaGoogle, FaDiscord, FaGithub } from 'react-icons/fa';

export const LOGIN_PROVIDERS = {
  GITHUB: {
    name: 'github',
    icon: <FaGithub />,
  },
  GOOGLE: {
    name: 'google',
    icon: <FaGoogle />,
  },
  DISCORD: {
    name: 'discord',
    icon: <FaDiscord />,
  },
} as const;

export enum CONSTANT_SIZES {
  MAX_INPUT_HEIGHT_PROMPT = 200,
}
