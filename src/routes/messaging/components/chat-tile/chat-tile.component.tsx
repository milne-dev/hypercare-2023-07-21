import { ReactElement } from "react";
import classes from "./chat-tile.module.scss";
import { BasicChatFields } from "../../../../models/models.ts";
import { RecursivePartial } from "../../../../type-helpers.ts";
import UserAvatar from "../../../../components/user-avatar/user-avatar.component.tsx";

export default function ChatTile(props: {
  chat: RecursivePartial<BasicChatFields>;
}): ReactElement {
  const { chat } = props;

  function getChatTitle(): string {
    return chat.title ?? "";
  }

  return (
    <div className={classes.chatTile}>
      <UserAvatar></UserAvatar>

      <div>
        <h2>{getChatTitle()}</h2>
        <p></p>
      </div>

      <div>
        <time>{chat.dateCreated}</time>
      </div>
    </div>
  );
}
