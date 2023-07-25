import React, {FC} from 'react';

import {MessageStyled} from './Message.styled';

interface MessageProps {
  text: string;
}

const Message: FC<MessageProps> = ({text}) => (
  <MessageStyled>{text}</MessageStyled>
);

export default Message;
