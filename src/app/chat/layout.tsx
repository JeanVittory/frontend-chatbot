import { Header } from '../components/Header';
import { WebsocketProvider } from '../providers/WebsocketProvider';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WebsocketProvider>
      <Header />
      {children}
    </WebsocketProvider>
  );
}
