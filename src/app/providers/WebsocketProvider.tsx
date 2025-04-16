'use client';

import { useSession } from 'next-auth/react';
import { ENDPOINTS } from '../constants';
import { useWebSocketStore } from '../store/websocketStore';
import { useEffect, useState } from 'react';

export const WebsocketProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { connect } = useWebSocketStore();
  const { data } = useSession();
  const [userId, setUserId] = useState<string>('');
  useEffect(() => {
    if (data?.user.id) setUserId(data?.user.id);
  }, [data?.user.id]);

  useEffect(() => {
    if (userId) connect(ENDPOINTS.CHAT_SOCKET, userId);
  }, [userId, connect]);

  return <>{children}</>;
};
