// useAuth.js
'use client'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useAuth = () => {
  const {user} = useSelector(state => state.customer);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);
};

export default useAuth;
