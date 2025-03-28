'use client';

import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { CONSTANT_SIZES } from '@/app/constants';
import { Box, Flex, Textarea, Button } from '@chakra-ui/react';
import { BsFillSendFill } from 'react-icons/bs';

export const InputMessage = () => {
  const [userPrompt, setUserPrompt] = useState<string>('');
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserPrompt(e.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      if (
        +textareaRef.current.scrollHeight >=
          CONSTANT_SIZES.MAX_INPUT_HEIGHT_PROMPT &&
        !showScroll
      ) {
        setShowScroll(true);
      }
      if (
        +textareaRef.current.scrollHeight <
          CONSTANT_SIZES.MAX_INPUT_HEIGHT_PROMPT &&
        showScroll
      ) {
        setShowScroll(false);
      }

      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        200
      )}px`;
    }
  }, [userPrompt, showScroll]);

  return (
    <Flex justifyContent="center" width="100%">
      <form
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          width: '800px',
        }}
      >
        <Box
          backgroundColor="#1F2937"
          rounded="full"
          border="1px solid rgba(255, 255, 255, 0.1)"
          width="100%"
        >
          <Textarea
            ref={textareaRef}
            placeholder="Type a message..."
            width="100%"
            maxHeight={`${CONSTANT_SIZES.MAX_INPUT_HEIGHT_PROMPT}px`}
            overflow={showScroll ? 'auto' : 'hidden'}
            _focus={{
              outline: 'none',
              borderColor: 'transparent',
            }}
            caretColor="#FFFFFF"
            outlineOffset="2px"
            color="#FFFFFF"
            rounded="full"
            resize="none"
            rows={1}
            onChange={handleInputChange}
          />
        </Box>

        <Button
          type="submit"
          backgroundColor="#494ACA"
          justifyContent="center"
          rounded="full"
          width="43px"
          height="43px"
          _hover={{
            base: {},
            md: { backgroundColor: '#444588' },
          }}
          cursor={['default', 'default', 'pointer']}
        >
          <BsFillSendFill />
        </Button>
      </form>
    </Flex>
  );
};
