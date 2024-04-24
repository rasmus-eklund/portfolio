'use client';
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useDebounceCallback } from 'usehooks-ts';

const useScrollPosition = (
  ref: RefObject<HTMLElement>
): [number, Dispatch<SetStateAction<number>>] => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    if (ref.current) {
      const position = ref.current.scrollTop;
      setScrollPosition(position);
    }
  };
  const debounced = useDebounceCallback(handleScroll, 500);

  useEffect(() => {
    const theRef = ref.current;
    if (theRef) {
      ref.current.addEventListener('scroll', debounced);
      return () => theRef.removeEventListener('scroll', debounced);
    }
  }, [ref, debounced]);

  return [scrollPosition, setScrollPosition];
};

export default useScrollPosition;
