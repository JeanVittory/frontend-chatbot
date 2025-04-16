import { WebsocketProvider } from '../providers/WebsocketProvider';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WebsocketProvider>{children}</WebsocketProvider>;
}
